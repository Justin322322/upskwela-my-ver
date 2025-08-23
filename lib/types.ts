// Common TypeScript interfaces and types used across the application

// Note: Most component types are defined locally in their respective component files
// This file contains only types that are shared across multiple components

// Future types for when the application grows
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  price: number;
}
