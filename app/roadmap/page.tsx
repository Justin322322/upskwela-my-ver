'use client';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Section } from '@/components/sections/section';
import VariableProximity from '@/components/animations/VariableProximity/VariableProximity';
import { Timeline } from '@/components/ui/timeline';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const roadmapData = [
  {
    title: 'Beta Launch',
    content: (
      <div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">User Registration and Authentication</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">Community Creation and Management</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">Course Creation and Enrollment</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">Basic Analytics Dashboard</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">Admin Panel for Platform Management</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Core Features Enhancements',
    content: (
      <div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">Rich media embedding in courses</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">
              Advanced text editor with markdown support
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">Calendar Events and Integration</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="line-through text-gray-500">Community membership management</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Asset upload system (images, videos, documents)</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>File storage and management</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Basic Real-time Notifications</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Monetization & Subscriptions',
    content: (
      <div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Mentor Badges & Verification</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Community Badges & Verification</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Creator Revenue</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Subscription Management</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Payment Gateway Integration</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Tiered Subscription Plans</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Financial Analytics and Reporting</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Engagement & Communication',
    content: (
      <div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Advanced Real-time Notifications</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>In-app Messaging and Chat</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Discussion Forums & Threads</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Community Announcements & Announcement Boards</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Email Notification Preferences</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Progress Tracking & Badges</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Advanced Learning Tools',
    content: (
      <div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Gamification Features</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Quiz & Assessment Tools</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Certification System</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Rewards & Recognition</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'AI & Personalization',
    content: (
      <div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>AI-powered Content Recommendations</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Personalized Learning Paths</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Automated Content Moderation</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Smart Search & Discovery</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Learning Analytics & Insights</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded-full flex-shrink-0" />
            <span>Chatbot Support Assistant</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function RoadmapPage() {
  const headingRef = useRef<HTMLDivElement | null>(null);

  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <Section className="pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <motion.div
            ref={headingRef}
            className="relative"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
                <Image
                  src="/logo.svg"
                  alt="Upskwela"
                  width={120}
                  height={120}
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60"
                />
                <VariableProximity
                  label="Roadmap"
                  className="variable-proximity-demo"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={headingRef}
                  radius={100}
                  falloff="linear"
                />
              </div>
            </h1>
          </motion.div>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed px-4 sm:px-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          >
            Our journey to revolutionize online learning. See what we&apos;ve built and what&apos;s
            coming next.
          </motion.p>
        </div>
      </Section>

      {/* Timeline Section */}
      <div className="relative w-full overflow-clip px-4 sm:px-6">
        <Timeline data={roadmapData} />
      </div>

      <SiteFooter />
    </main>
  );
}
