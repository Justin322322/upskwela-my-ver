import { PasswordStrength } from './types';

export const checkPasswordComplexity = (password: string): PasswordStrength => {
  return {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    numbers: /\d/.test(password),
    symbols: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(password),
    noCommonPatterns: !/(123|abc|qwe|password|admin|user|test|demo)/i.test(password),
  };
};

export const validateEmail = (email: string): string | null => {
  if (!email) {
    return 'Email is required';
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Please enter a valid email';
  }
  return null;
};

export const validatePassword = (
  password: string,
  mode: 'login' | 'signup' | 'forgot-password',
): string | null => {
  if (!password) {
    return 'Password is required';
  }

  if (mode === 'signup') {
    const complexity = checkPasswordComplexity(password);
    if (!complexity.length) {
      return 'Password must be at least 12 characters';
    }
    if (!complexity.uppercase) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!complexity.lowercase) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!complexity.numbers) {
      return 'Password must contain at least one number';
    }
    if (!complexity.symbols) {
      return 'Password must contain at least one special character';
    }
    if (!complexity.noCommonPatterns) {
      return 'Password cannot contain common patterns or words';
    }
  } else if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return null;
};

export const validateName = (name: string): string | null => {
  if (!name) {
    return 'Name is required';
  }
  return null;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string | null => {
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return null;
};
