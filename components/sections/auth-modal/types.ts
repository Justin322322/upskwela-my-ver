export type AuthMode = 'login' | 'signup' | 'forgot-password';

export interface AuthModalProps {
  trigger?: React.ReactNode;
  defaultMode?: AuthMode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onLogin?: (email: string, password: string) => void | Promise<void>;
  onSignup?: (email: string, password: string, name: string) => void | Promise<void>;
  onForgotPassword?: (email: string) => void | Promise<void>;
  className?: string;
}

export interface PasswordStrength {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  noCommonPatterns: boolean;
}

export interface AuthFormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export interface AuthErrors {
  email?: string;
  password?: string;
  name?: string;
  confirmPassword?: string;
  nda?: string;
  general?: string;
}
