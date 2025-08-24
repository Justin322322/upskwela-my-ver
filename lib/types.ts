// Global type definitions for the Upskwela application
// Centralized types that are used across multiple components
// TODO: These types will be used as the application grows and more features are implemented

// User-related types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'creator' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Authentication types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Community types
export interface Community {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  memberCount: number;
  subscriptionTiers: SubscriptionTier[];
  createdAt: Date;
  updatedAt: Date;
}

// Subscription tier types
export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  currency: 'PHP' | 'USD';
  features: string[];
  isActive: boolean;
}

// Course types
export interface Course {
  id: string;
  title: string;
  description: string;
  communityId: string;
  price: number;
  currency: 'PHP' | 'USD';
  lessons: Lesson[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Lesson types
export interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: number; // in minutes
  order: number;
  isCompleted?: boolean;
}

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  communityId: string;
  startDate: Date;
  endDate: Date;
  isOnline: boolean;
  location?: string;
  maxParticipants?: number;
  currentParticipants: number;
}

// Achievement types
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  xpReward: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
}

// User progress types
export interface UserProgress {
  userId: string;
  communityId: string;
  xp: number;
  level: number;
  achievements: Achievement[];
  coursesCompleted: number;
  lessonsCompleted: number;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  acceptMarketing?: boolean;
}

export interface ForgotPasswordFormData {
  email: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Modal types
export interface ModalState {
  isOpen: boolean;
  type: 'login' | 'signup' | 'forgot-password' | 'nda' | null;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

// Animation types
export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}

// Scroll types
export interface ScrollConfig {
  threshold: number;
  behavior: ScrollBehavior;
}
