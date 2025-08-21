// Shared TypeScript interfaces and types for the Upskwela application

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface CommunityMember {
  name: string;
  role: string;
  avatar?: string;
}

// Add more shared types as needed
