'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components';
import { LoginForm } from './login-form';
import { SignupForm } from './signup-form';
import { ForgotPasswordForm } from './forgot-password-form';
import { NDAModal } from './nda-modal';
import { AuthModalProps, AuthMode, AuthFormData, AuthErrors } from './types';
import { validateEmail, validatePassword, validateName, validateConfirmPassword } from './utils';
import React from 'react'; // Added missing import

export function AuthModal({
  trigger,
  defaultMode = 'login',
  open,
  onOpenChange,
  onLogin,
  onSignup,
  onForgotPassword,
  className,
}: AuthModalProps) {
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
  React.useEffect(() => {
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
    setErrors({});

    try {
      switch (mode) {
        case 'login':
          if (onLogin) {
            await onLogin(formData.email, formData.password);
          }
          break;
        case 'signup':
          if (onSignup) {
            await onSignup(formData.email, formData.password, formData.name);
          }
          break;
        case 'forgot-password':
          if (onForgotPassword) {
            await onForgotPassword(formData.email);
          }
          break;
      }

      // Close modal on success
      if (setModalOpen) {
        setModalOpen(false);
      }
      resetForm();
    } catch (error) {
      console.error('Authentication error:', error);
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = () => {
    switch (mode) {
      case 'login':
        return (
          <LoginForm
            email={formData.email}
            password={formData.password}
            isLoading={isLoading}
            errors={errors}
            onEmailChange={(email) => setFormData((prev) => ({ ...prev, email }))}
            onPasswordChange={(password) => setFormData((prev) => ({ ...prev, password }))}
            onSubmit={handleSubmit}
            onModeChange={handleModeChange}
          />
        );

      case 'signup':
        return (
          <SignupForm
            email={formData.email}
            password={formData.password}
            name={formData.name}
            confirmPassword={formData.confirmPassword}
            isLoading={isLoading}
            errors={errors}
            ndaAccepted={ndaAccepted}
            onEmailChange={(email) => setFormData((prev) => ({ ...prev, email }))}
            onPasswordChange={(password) => setFormData((prev) => ({ ...prev, password }))}
            onNameChange={(name) => setFormData((prev) => ({ ...prev, name }))}
            onConfirmPasswordChange={(confirmPassword) =>
              setFormData((prev) => ({ ...prev, confirmPassword }))
            }
            onNdaAcceptedChange={setNdaAccepted}
            onSubmit={handleSubmit}
            onModeChange={handleModeChange}
            onNdaModalOpen={() => setNdaModalOpen(true)}
          />
        );

      case 'forgot-password':
        return (
          <ForgotPasswordForm
            email={formData.email}
            isLoading={isLoading}
            errors={errors}
            onEmailChange={(email) => setFormData((prev) => ({ ...prev, email }))}
            onSubmit={handleSubmit}
            onModeChange={handleModeChange}
          />
        );

      default:
        return null;
    }
  };

  const getModeTitle = () => {
    switch (mode) {
      case 'login':
        return 'Welcome Back';
      case 'signup':
        return 'Create Account';
      case 'forgot-password':
        return 'Reset Password';
      default:
        return 'Authentication';
    }
  };

  const getModeDescription = () => {
    switch (mode) {
      case 'login':
        return 'Sign in to your account to continue';
      case 'signup':
        return 'Create a new account to get started';
      case 'forgot-password':
        return 'Enter your email to receive a reset link';
      default:
        return '';
    }
  };

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={handleOpenChange}>
        {/* Only render DialogTrigger when not externally controlled */}
        {!isControlled && (
          <DialogTrigger asChild>
            {trigger || (
              <Button variant="brand" className={className}>
                Sign In
              </Button>
            )}
          </DialogTrigger>
        )}
        <DialogContent className="w-full max-w-md p-0 sm:p-0 max-h-[95vh] overflow-hidden">
          <div className="p-4 sm:p-6">
            <DialogHeader className="text-center space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/logo.svg"
                  alt="Upskwela Logo"
                  width={48}
                  height={48}
                  className="h-8 w-auto sm:h-10"
                />
              </div>
              <div className="space-y-2 text-center">
                <DialogTitle className="text-lg font-bold text-sky-600/90 dark:text-sky-400/90 text-center sm:text-xl">
                  {getModeTitle()}
                </DialogTitle>
                <p className="text-sky-500/80 dark:text-sky-300/80 text-xs leading-relaxed text-center sm:text-sm max-w-xs mx-auto">
                  {getModeDescription()}
                </p>
              </div>
            </DialogHeader>

            <div className="space-y-4 sm:space-y-5">{renderForm()}</div>
          </div>
        </DialogContent>
      </Dialog>

      <NDAModal
        isOpen={ndaModalOpen}
        onOpenChange={setNdaModalOpen}
        onAccept={() => {
          setNdaAccepted(true);
          setNdaModalOpen(false);
        }}
      />
    </>
  );
}
