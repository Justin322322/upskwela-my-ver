'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, ListTodo, CreditCard, MessageCircle, Trophy, Brain } from 'lucide-react';
import { VariableProximity } from '@/components/animations';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  status?: 'completed' | 'in-progress';
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to height for the timeline line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);

  // Create scroll-triggered animation values for timeline items
  const item0Animation = {
    opacity: useTransform(scrollYProgress, [0, 0.15, 0.25, 0.4], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0, 0.15, 0.25, 0.4], [-100, 0, 0, -100]),
  };

  const item1Animation = {
    opacity: useTransform(scrollYProgress, [0.1, 0.25, 0.35, 0.5], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.1, 0.25, 0.35, 0.5], [100, 0, 0, 100]),
  };

  const item2Animation = {
    opacity: useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.6], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.6], [-100, 0, 0, -100]),
  };

  const item3Animation = {
    opacity: useTransform(scrollYProgress, [0.3, 0.45, 0.55, 0.7], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.3, 0.45, 0.55, 0.7], [100, 0, 0, 100]),
  };

  const item4Animation = {
    opacity: useTransform(scrollYProgress, [0.4, 0.55, 0.65, 0.8], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.4, 0.55, 0.65, 0.8], [-100, 0, 0, -100]),
  };

  const item5Animation = {
    opacity: useTransform(scrollYProgress, [0.5, 0.65, 0.75, 0.9], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.5, 0.65, 0.75, 0.9], [100, 0, 0, 100]),
  };

  // Create scroll-triggered animation for the final card
  const finalCardAnimation = {
    opacity: useTransform(scrollYProgress, [0.6, 0.75, 0.85, 0.4], [0, 1, 1, 0]),
    scale: useTransform(scrollYProgress, [0.6, 0.75, 0.85, 0.4], [0.5, 1, 1, 0.5]),
    y: useTransform(scrollYProgress, [0.6, 0.75, 0.85, 0.4], [80, 0, 0, 80]),
  };

  // Create dot animations for each timeline item
  const dot0Animation = {
    scale: useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.2], [0, 1, 1, 0]),
    opacity: useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.2], [0, 1, 1, 0]),
  };

  const dot1Animation = {
    scale: useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.3], [0, 1, 1, 0]),
    opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.3], [0, 1, 1, 0]),
  };

  const dot2Animation = {
    scale: useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.4], [0, 1, 1, 0]),
    opacity: useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.4], [0, 1, 1, 0]),
  };

  const dot3Animation = {
    scale: useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.5], [0, 1, 1, 0]),
    opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.5], [0, 1, 1, 0]),
  };

  const dot4Animation = {
    scale: useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.6], [0, 1, 1, 0]),
    opacity: useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.6], [0, 1, 1, 0]),
  };

  const dot5Animation = {
    scale: useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.7], [0, 1, 1, 0]),
    opacity: useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.7], [0, 1, 1, 0]),
  };

  return (
    <div className="w-full font-sans" ref={timelineRef}>
      <div className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20 pt-8 sm:pt-12 md:pt-16">
        {/* Central Timeline Line with Scroll Animation - Hidden on mobile, visible on md+ */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-sky-400 via-blue-500 to-sky-400 rounded-full origin-top hidden md:block"
          style={{ height: lineHeight }}
        />

        {data.map((item, index) => {
          // Determine status based on title or content
          const isCompleted =
            item.title === 'Beta Launch' ||
            (item.title === 'Core Features Enhancements' &&
              item.content &&
              item.content.toString().includes('bg-green-500'));

          // Get the appropriate animation based on index
          let itemAnimation;
          if (index === 0) itemAnimation = item0Animation;
          else if (index === 1) itemAnimation = item1Animation;
          else if (index === 2) itemAnimation = item2Animation;
          else if (index === 3) itemAnimation = item3Animation;
          else if (index === 4) itemAnimation = item4Animation;
          else if (index === 5) itemAnimation = item5Animation;

          return (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-start mb-12 sm:mb-16 md:mb-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={itemAnimation}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Content Section */}
              <motion.div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-6 lg:pr-8 xl:pr-12' : 'md:pl-6 lg:pl-8 xl:pl-12'
                }`}
              >
                {/* Date and Icon Marker */}
                <div
                  className={`flex items-center mb-3 ${
                    index % 2 === 0
                      ? 'justify-start md:justify-start'
                      : 'justify-start md:justify-end'
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      isCompleted
                        ? 'bg-green-100/80 dark:bg-green-900/80 text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-700/50'
                        : 'bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-3 h-3" />
                        <span className="text-xs sm:text-sm">July 19, 2025</span>
                      </>
                    ) : (
                      <>
                        {item.title === 'Core Features Enhancements' && (
                          <ListTodo className="w-3 h-3" />
                        )}
                        {item.title === 'Monetization & Subscriptions' && (
                          <CreditCard className="w-3 h-3" />
                        )}
                        {item.title === 'Engagement & Communication' && (
                          <MessageCircle className="w-3 h-3" />
                        )}
                        {item.title === 'Advanced Learning Tools' && <Trophy className="w-3 h-3" />}
                        {item.title === 'AI & Personalization' && <Brain className="w-3 h-3" />}
                        <span className="text-xs sm:text-sm">July 2025</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                  <VariableProximity
                    label={item.title}
                    className="variable-proximity-demo"
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={timelineRef}
                    radius={100}
                    falloff="linear"
                  />
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  {isCompleted
                    ? 'Initial release with core learning management features'
                    : 'Enhancements to core features and development of new features'}
                </p>

                {/* Content Card */}
                <div className="border border-gray-200 dark:border-gray-700/50 rounded-xl p-4 sm:p-5 md:p-6 shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 dark:shadow-2xl dark:shadow-black/20">
                  {item.content}
                </div>
              </motion.div>

              {/* Timeline Dot - Mobile: centered, Desktop: positioned on timeline */}
              <motion.div
                style={(() => {
                  if (index === 0) return dot0Animation;
                  if (index === 1) return dot1Animation;
                  if (index === 2) return dot2Animation;
                  if (index === 3) return dot3Animation;
                  if (index === 4) return dot4Animation;
                  if (index === 5) return dot5Animation;
                  return dot0Animation; // fallback
                })()}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0 z-10 mt-4 md:mt-8 md:left-1/2 md:transform md:-translate-x-1/2 hidden md:block"
              >
                {isCompleted ? (
                  <div className="relative">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white dark:bg-gray-900 rounded-full shadow-lg" />
                    <div className="absolute inset-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-600 rounded-full" />
                  </div>
                ) : (
                  <motion.div
                    className="relative"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white dark:bg-gray-900 rounded-full shadow-lg" />
                    <div className="absolute inset-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}

        {/* More exciting features coming soon! card */}
        <motion.div
          className="relative flex items-center justify-center mb-12 sm:mb-16 md:mb-20"
          style={{
            scale: finalCardAnimation.scale,
            y: finalCardAnimation.y,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Enhanced mobile-responsive card */}
          <div className="rounded-xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 flex items-center gap-3 sm:gap-4 md:gap-5 shadow-lg backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 border-2 border-blue-200/50 dark:border-blue-700/50 dark:shadow-2xl dark:shadow-black/20">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 border-2 border-blue-600 bg-white dark:bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-blue-600 rounded-full" />
            </div>
            <span className="text-blue-800 dark:text-blue-200 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
              More exciting features coming soon!
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
