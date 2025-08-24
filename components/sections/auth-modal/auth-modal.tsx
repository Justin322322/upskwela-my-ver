'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LoginForm } from './login-form';
import { SignupForm } from './signup-form';
import { ForgotPasswordForm } from './forgot-password-form';
import { NDAModal } from './nda-modal';
import { AuthModalProps } from './types';
import { useAuthModal } from '@/components/hooks/useAuthModal';

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
  const {
    mode,
    modalOpen,
    isLoading,
    ndaAccepted,
    ndaModalOpen,
    formData,
    errors,
    handleModeChange,
    handleOpenChange,
    handleSubmit,
    updateFormData,
    acceptNDA,
    openNDAModal,
    closeNDAModal,
  } = useAuthModal({
    defaultMode,
    open,
    onOpenChange,
    onLogin,
    onSignup,
    onForgotPassword,
  });

  const renderForm = () => {
    switch (mode) {
      case 'login':
        return (
          <LoginForm
            email={formData.email}
            password={formData.password}
            isLoading={isLoading}
            errors={errors}
            onEmailChange={(email) => updateFormData('email', email)}
            onPasswordChange={(password) => updateFormData('password', password)}
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
            onEmailChange={(email) => updateFormData('email', email)}
            onPasswordChange={(password) => updateFormData('password', password)}
            onNameChange={(name) => updateFormData('name', name)}
            onConfirmPasswordChange={(confirmPassword) =>
              updateFormData('confirmPassword', confirmPassword)
            }
            onNdaAcceptedChange={acceptNDA}
            onSubmit={handleSubmit}
            onModeChange={handleModeChange}
            onNdaModalOpen={openNDAModal}
          />
        );

      case 'forgot-password':
        return (
          <ForgotPasswordForm
            email={formData.email}
            isLoading={isLoading}
            errors={errors}
            onEmailChange={(email) => updateFormData('email', email)}
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
        {open === undefined && (
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

      <NDAModal isOpen={ndaModalOpen} onOpenChange={closeNDAModal} onAccept={acceptNDA} />
    </>
  );
}
