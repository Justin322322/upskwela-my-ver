'use client';

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordStrengthIndicator } from './password-strength-indicator';
import { checkPasswordComplexity } from './utils';
import { AuthErrors, PasswordStrength } from './types';

interface SignupFormProps {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  isLoading: boolean;
  errors: AuthErrors;
  ndaAccepted: boolean;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onNameChange: (name: string) => void;
  onConfirmPasswordChange: (confirmPassword: string) => void;
  onNdaAcceptedChange: (accepted: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onModeChange: (mode: 'login') => void;
  onNdaModalOpen: () => void;
}

export function SignupForm({
  email,
  password,
  name,
  confirmPassword,
  isLoading,
  errors,
  ndaAccepted,
  onEmailChange,
  onPasswordChange,
  onNameChange,
  onConfirmPasswordChange,
  onNdaAcceptedChange,
  onSubmit,
  onModeChange,
  onNdaModalOpen,
}: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    length: false,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    noCommonPatterns: false,
  });

  const handlePasswordChange = (newPassword: string) => {
    onPasswordChange(newPassword);
    if (newPassword) {
      setPasswordStrength(checkPasswordComplexity(newPassword));
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm sm:text-base">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="pl-10 h-11 sm:h-10"
            disabled={isLoading}
          />
        </div>
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-email" className="text-sm sm:text-base">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="pl-10 h-11 sm:h-10"
            disabled={isLoading}
          />
        </div>
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-password" className="text-sm sm:text-base">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="signup-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            className="pl-10 pr-10 h-11 sm:h-10"
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent min-h-[44px] sm:min-h-[40px]"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>

        <PasswordStrengthIndicator passwordStrength={passwordStrength} password={password} />

        {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password" className="text-sm sm:text-base">
          Confirm Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="confirm-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
            className="pl-10 h-11 sm:h-10"
            disabled={isLoading}
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-destructive">{errors.confirmPassword}</p>
        )}
      </div>

      {errors.general && <p className="text-sm text-destructive text-center">{errors.general}</p>}

      <Button type="submit" variant="brand" className="w-full h-11 sm:h-10" disabled={isLoading}>
        {isLoading ? 'Creating account...' : 'Create Account'}
      </Button>

      <div className="space-y-2 pt-2">
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="nda-checkbox"
            checked={ndaAccepted}
            onChange={(e) => onNdaAcceptedChange(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
            disabled={isLoading}
          />
          <div className="text-sm">
            <label htmlFor="nda-checkbox" className="text-gray-700 dark:text-gray-300">
              I have read and agree to the{' '}
              <button
                type="button"
                onClick={onNdaModalOpen}
                className="text-sky-600 hover:text-sky-700 underline focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                Non-Disclosure Agreement
              </button>
            </label>
            {errors.nda && <p className="text-sm text-destructive mt-1">{errors.nda}</p>}
          </div>
        </div>
      </div>

      <div className="text-center text-sm pt-2">
        Already have an account?{' '}
        <Button
          type="button"
          variant="link"
          className="p-0 h-auto text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          onClick={() => onModeChange('login')}
          disabled={isLoading}
        >
          Sign in
        </Button>
      </div>
    </form>
  );
}
