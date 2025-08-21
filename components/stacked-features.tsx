'use client';

import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack/ScrollStack';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faGraduationCap,
  faWallet,
  faChartBar,
  faTrophy,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: 'Community-Based Learning',
    description:
      'Build your own community, set subscription tiers, and earn revenue while helping others learn and grow together.',
  },
  {
    title: 'Structured Courses',
    description:
      'Create and sell courses with premium content. Set your prices, track enrollments, and manage your revenue streams.',
  },
  {
    title: 'Creator Monetization',
    description:
      'Earn revenue through subscriptions, course sales, and exclusive content. Get paid directly with transparent revenue sharing.',
  },
  {
    title: 'Analytics & Insights',
    description:
      'Track your earnings, monitor engagement, and optimize your content strategy with comprehensive analytics.',
  },
  {
    title: 'Gamified Learning',
    description:
      'Earn XP, unlock achievements, and climb leaderboards. Make learning addictive with badges, rewards, and recognition systems.',
  },
  {
    title: 'Events & Calendar',
    description:
      'Schedule live sessions, workshops, and community events. Integrated calendar keeps everyone synchronized and engaged.',
  },
];

const gradientClasses = [
  'bg-gradient-to-br from-purple-600/10 via-fuchsia-500/5 to-indigo-500/10',
  'bg-gradient-to-br from-emerald-600/10 via-teal-500/5 to-cyan-500/10',
  'bg-gradient-to-br from-amber-600/10 via-orange-500/5 to-pink-500/10',
  'bg-gradient-to-br from-sky-600/10 via-blue-500/5 to-indigo-500/10',
  'bg-gradient-to-br from-rose-600/10 via-pink-500/5 to-fuchsia-500/10',
  'bg-gradient-to-br from-lime-600/10 via-green-500/5 to-emerald-500/10',
];

const featureIcons = [
  faUsers, // Community-Based Learning
  faGraduationCap, // Structured Courses
  faWallet, // Creator Monetization
  faChartBar, // Analytics & Insights
  faTrophy, // Gamified Learning
  faCalendarDays, // Events & Calendar
];

export function StackedFeatures() {
  return (
    <div className="relative">
      {/* Keep usage aligned with docs: simple nested items, internal scroller handles wheel/touch */}
      <ScrollStack
        className="w-full overflow-x-hidden"
        itemDistance={110}
        itemStackDistance={30}
        itemScale={0.03}
        baseScale={0.86}
        stackPosition="25%"
        scaleEndPosition="12%"
      >
        {features.map((f, idx) => {
          const IconDef = featureIcons[idx % featureIcons.length];
          return (
            <ScrollStackItem
              key={f.title}
              itemClassName={[
                'border border-border/60 bg-card/70 backdrop-blur relative overflow-hidden',
                'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] ring-1 ring-black/5',
                'hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.35)] transition-shadow',
                gradientClasses[idx % gradientClasses.length],
              ].join(' ')}
            >
              {/* Watermark icon (solid light color, no opacity blending) */}
              <div className="pointer-events-none absolute -bottom-6 -right-6 z-0">
                <FontAwesomeIcon
                  icon={IconDef}
                  className="text-[12rem] sm:text-[14rem] md:text-[16rem] text-neutral-200 dark:text-neutral-800"
                  aria-hidden="true"
                />
              </div>
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{f.title}</h2>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </div>
  );
}

export default StackedFeatures;
