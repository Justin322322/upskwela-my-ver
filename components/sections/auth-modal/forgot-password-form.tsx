'use client';

import { Mail } from 'lucide-react';
import { Button, Input, Label } from '@/components';
import { AuthErrors } from './types';

interface ForgotPasswordFormProps {
  email: string;
  isLoading: boolean;
  errors: AuthErrors;
  onEmailChange: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onModeChange: (mode: 'login') => void;
}

export function ForgotPasswordForm({
  email,
  isLoading,
  errors,
  onEmailChange,
  onSubmit,
  onModeChange,
}: ForgotPasswordFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
      <div className="space-y-2">
        <Label htmlFor="forgot-email" className="text-sm sm:text-base">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="forgot-email"
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

      {errors.general && <p className="text-sm text-destructive text-center">{errors.general}</p>}

      <Button type="submit" variant="brand" className="w-full h-11 sm:h-10" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Reset Link'}
      </Button>

      <div className="text-center text-sm pt-2">
        Remember your password?{' '}
        <Button
          type="button"
          variant="link"
          className="p-0 h-auto text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          onClick={() => onModeChange('login')}
          disabled={isLoading}
        >
          Back to sign in
        </Button>
      </div>
    </form>
  );
}
