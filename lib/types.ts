// Common TypeScript types and interfaces

// Component props with common HTML attributes
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button variants
export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'brand'
  | 'brandOutline';

// Button sizes
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Animation states
export type AnimationState = 'idle' | 'loading' | 'success' | 'error';

// Social media platform types
export type SocialPlatform = 'facebook' | 'twitter' | 'tiktok' | 'instagram' | 'youtube';

// Form validation types
export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
}

// Course types
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  price: number;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
