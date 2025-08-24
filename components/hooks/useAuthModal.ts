import { useState, useEffect } from 'react';
import type { AuthMode, AuthFormData, AuthErrors } from '@/components/sections/auth-modal/types';
import {
  validateEmail,
  validatePassword,
  validateName,
  validateConfirmPassword,
} from '@/components/sections/auth-modal/utils';

interface UseAuthModalProps {
  defaultMode: AuthMode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onLogin?: (email: string, password: string) => void | Promise<void>;
  onSignup?: (email: string, password: string, name: string) => void | Promise<void>;
  onForgotPassword?: (email: string) => void | Promise<void>;
}

export function useAuthModal({
  defaultMode,
  open,
  onOpenChange,
  onLogin,
  onSignup,
  onForgotPassword,
}: UseAuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ndaAccepted, setNdaAccepted] = useState(false);
  const [ndaModalOpen, setNdaModalOpen] = useState(false);

  // Use external control if provided, otherwise use internal state
  const isControlled = open !== undefined;
  const modalOpen = isControlled ? open : isOpen;
  const setModalOpen = isControlled ? onOpenChange : setIsOpen;

  // Form states
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  // Error states
  const [errors, setErrors] = useState<AuthErrors>({});

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    });
    setErrors({});
    setNdaAccepted(false);
  };

  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    resetForm();
  };

  const handleOpenChange = (open: boolean) => {
    if (setModalOpen) {
      setModalOpen(open);
    }
    if (open) {
      // Always reset to the default mode when opening
      setMode(defaultMode);
      resetForm();
    }
  };

  // Reset mode when defaultMode changes (for external control)
  useEffect(() => {
    if (modalOpen) {
      setMode(defaultMode);
      resetForm();
    }
  }, [defaultMode, modalOpen]);

  const validateForm = () => {
    const newErrors: AuthErrors = {};

    // Validate email
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    // Validate password
    const passwordError = validatePassword(formData.password, mode);
    if (passwordError) newErrors.password = passwordError;

    // Validate name for signup
    if (mode === 'signup') {
      const nameError = validateName(formData.name);
      if (nameError) newErrors.name = nameError;

      const confirmPasswordError = validateConfirmPassword(
        formData.password,
        formData.confirmPassword,
      );
      if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

      if (!ndaAccepted) {
        newErrors.nda = 'You must accept the Non-Disclosure Agreement to continue';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (mode === 'login' && onLogin) {
        await onLogin(formData.email, formData.password);
      } else if (mode === 'signup' && onSignup) {
        await onSignup(formData.email, formData.password, formData.name);
      } else if (mode === 'forgot-password' && onForgotPassword) {
        await onForgotPassword(formData.email);
      }
    } catch (error) {
      console.error('Auth error:', error);
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: keyof AuthFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const acceptNDA = () => {
    setNdaAccepted(true);
    setErrors((prev) => ({ ...prev, nda: undefined }));
  };

  const openNDAModal = () => setNdaModalOpen(true);
  const closeNDAModal = () => setNdaModalOpen(false);

  return {
    // State
    mode,
    modalOpen,
    isLoading,
    ndaAccepted,
    ndaModalOpen,
    formData,
    errors,

    // Actions
    handleModeChange,
    handleOpenChange,
    handleSubmit,
    updateFormData,
    acceptNDA,
    openNDAModal,
    closeNDAModal,
    resetForm,
  };
}
