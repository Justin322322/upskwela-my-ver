'use client';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Hero } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import ScrollStack, { ScrollStackItem } from '@/components/animations/ScrollStack/ScrollStack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faGraduationCap,
  faWallet,
  faChartBar,
  faTrophy,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { CTA } from '@/components/sections/cta';
import VariableProximity from '@/components/animations/VariableProximity/VariableProximity';
import { useRef } from 'react';
import { MissionVision } from '@/components/sections/mission-vision';
import Community from '@/components/sections/community';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const missionHeadingRef = useRef<HTMLDivElement | null>(null);

  return (
    <main>
      <SiteHeader />
      <Section>
        <Hero />
      </Section>
      <div className="my-6 sm:my-10 mx-auto w-[92%] max-w-5xl">
        <Separator className="h-[2px] bg-sky-300/80 dark:bg-slate-500/70 rounded-full" />
      </div>
      <Section id="features" className="scroll-mt-28 sm:scroll-mt-36">
        <div id="features-content" className="text-center mb-12">
          <div ref={headingRef} className="relative">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <VariableProximity
                label="Your path to success starts here"
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={headingRef}
                radius={100}
                falloff="linear"
              />
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Create your own learning community, monetize your expertise, and help others grow.
            Whether you&apos;re a mentor sharing knowledge or a learner seeking skills, Upskwela
            empowers you to succeed.
          </p>
        </div>
        <div className="relative">
          <ScrollStack
            className="w-full overflow-x-hidden"
            itemDistance={110}
            itemStackDistance={30}
            itemScale={0.03}
            baseScale={0.86}
            stackPosition="25%"
            scaleEndPosition="12%"
          >
            <ScrollStackItem itemClassName="relative overflow-hidden border border-border/60 bg-card/70 backdrop-blur ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute -bottom-10 -right-10 z-0">
                <div
                  className="absolute inset-0 translate-x-8 translate-y-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#128EE8]/25 to-[#00456E]/25 blur-2xl"
                  aria-hidden="true"
                />
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-[10rem] sm:text-[12rem] md:text-[14rem] text-[#128EE8]/30 dark:text-[#128EE8]/20"
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 pr-20 sm:pr-28 md:pr-40">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Community-Based Learning
                </h2>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Build your own community, set subscription tiers, and earn revenue while helping
                  others learn and grow together.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="relative overflow-hidden border border-border/60 bg-card/70 backdrop-blur ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute -bottom-10 -right-10 z-0">
                <div
                  className="absolute inset-0 translate-x-8 translate-y-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#128EE8]/25 to-[#00456E]/25 blur-2xl"
                  aria-hidden="true"
                />
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-[10rem] sm:text-[12rem] md:text-[14rem] text-[#128EE8]/30 dark:text-[#128EE8]/20"
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 pr-20 sm:pr-28 md:pr-40">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Structured Courses
                </h2>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Create and sell courses with premium content. Set your prices, track enrollments,
                  and manage your revenue streams.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="relative overflow-hidden border border-border/60 bg-card/70 backdrop-blur ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute -bottom-10 -right-10 z-0">
                <div
                  className="absolute inset-0 translate-x-8 translate-y-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#128EE8]/25 to-[#00456E]/25 blur-2xl"
                  aria-hidden="true"
                />
                <FontAwesomeIcon
                  icon={faWallet}
                  className="text-[10rem] sm:text-[12rem] md:text-[14rem] text-[#128EE8]/30 dark:text-[#128EE8]/20"
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 pr-20 sm:pr-28 md:pr-40">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Creator Monetization
                </h2>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Earn revenue through subscriptions, course sales, and exclusive content. Get paid
                  directly with transparent revenue sharing.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="relative overflow-hidden border border-border/60 bg-card/70 backdrop-blur ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute -bottom-10 -right-10 z-0">
                <div
                  className="absolute inset-0 translate-x-8 translate-y-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#128EE8]/25 to-[#00456E]/25 blur-2xl"
                  aria-hidden="true"
                />
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="text-[10rem] sm:text-[12rem] md:text-[14rem] text-[#128EE8]/30 dark:text-[#128EE8]/20"
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 pr-20 sm:pr-28 md:pr-40">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Analytics & Insights
                </h2>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Track your earnings, monitor engagement, and optimize your content strategy with
                  comprehensive analytics.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="relative overflow-hidden border border-border/60 bg-card/70 backdrop-blur ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute -bottom-10 -right-10 z-0">
                <div
                  className="absolute inset-0 translate-x-8 translate-y-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#128EE8]/25 to-[#00456E]/25 blur-2xl"
                  aria-hidden="true"
                />
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-[10rem] sm:text-[12rem] md:text-[14rem] text-[#128EE8]/30 dark:text-[#128EE8]/20"
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 pr-20 sm:pr-28 md:pr-40">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Gamified Learning</h2>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Earn XP, unlock achievements, and climb leaderboards. Make learning addictive with
                  badges, rewards, and recognition systems.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="relative overflow-hidden border border-border/60 bg-card/70 backdrop-blur ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute -bottom-10 -right-10 z-0">
                <div
                  className="absolute inset-0 translate-x-8 translate-y-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#128EE8]/25 to-[#00456E]/25 blur-2xl"
                  aria-hidden="true"
                />
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-[10rem] sm:text-[12rem] md:text-[14rem] text-[#128EE8]/30 dark:text-[#128EE8]/20"
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 pr-20 sm:pr-28 md:pr-40">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Events & Calendar</h2>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Schedule live sessions, workshops, and community events. Integrated calendar keeps
                  everyone synchronized and engaged.
                </p>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </Section>
      <div className="my-6 sm:my-10 mx-auto w-[92%] max-w-5xl">
        <Separator className="h-[2px] bg-sky-300/80 dark:bg-slate-500/70 rounded-full" />
      </div>
      <Section className="pb-8 sm:pb-12">
        <div className="text-center mb-12">
          <div ref={missionHeadingRef} className="relative">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <VariableProximity
                label="Our Vision & Mission"
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={missionHeadingRef}
                radius={100}
                falloff="linear"
              />
            </h2>
          </div>
        </div>
        <MissionVision />
      </Section>
      <div className="my-6 sm:my-10 mx-auto w-[92%] max-w-5xl">
        <Separator className="h-[2px] bg-sky-300/80 dark:bg-slate-500/70 rounded-full" />
      </div>
      <Section className="pt-2 sm:pt-6 pb-2 sm:pb-8">
        <Community />
      </Section>
      <div className="my-6 sm:my-10 mx-auto w-[92%] max-w-5xl">
        <Separator className="h-[2px] bg-sky-300/80 dark:bg-slate-500/70 rounded-full" />
      </div>
      <Section className="mt-2 sm:mt-6 mb-16 sm:mb-28">
        <CTA />
      </Section>
      <SiteFooter />
    </main>
  );
}
