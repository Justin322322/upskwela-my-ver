'use client';

import { Card, CardContent } from '@/components/ui/card';

export function MissionVision() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight section-heading-gradient">
          Our Vision
        </h3>
        <p className="mt-3 text-lg text-muted-foreground">
          Become the world&apos;s most trusted community-powered learning platform—where{' '}
          <span className="section-heading-gradient font-semibold">any skill</span> can be
          discovered, mastered, and shared.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight section-heading-gradient">
          Our Mission
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="relative overflow-hidden border-0 bg-[#128EE8]/5 dark:bg-[#128EE8]/10">
            <div className="pointer-events-none absolute right-4 bottom-2 z-0 select-none text-[5.5rem] sm:text-[6.5rem] md:text-[7.5rem] font-extrabold text-[#128EE8]/10">
              1
            </div>
            <CardContent className="relative z-10 pt-6 pr-10 sm:pr-12">
              <h4 className="text-lg font-semibold section-heading-gradient">
                Gather every expertise
              </h4>
              <p className="mt-2 text-muted-foreground">
                Enable creators to build communities, teach, and earn sustainable income from their
                expertise.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 bg-[#128EE8]/5 dark:bg-[#128EE8]/10">
            <div className="pointer-events-none absolute right-4 bottom-2 z-0 select-none text-[5.5rem] sm:text-[6.5rem] md:text-[7.5rem] font-extrabold text-[#128EE8]/10">
              2
            </div>
            <CardContent className="relative z-10 pt-6 pr-10 sm:pr-12">
              <h4 className="text-lg font-semibold section-heading-gradient">
                Champion collaborative learning
              </h4>
              <p className="mt-2 text-muted-foreground">
                Replace isolated study with forums, cohorts, and events.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 bg-[#128EE8]/5 dark:bg-[#128EE8]/10">
            <div className="pointer-events-none absolute right-4 bottom-2 z-0 select-none text-[5.5rem] sm:text-[6.5rem] md:text-[7.5rem] font-extrabold text-[#128EE8]/10">
              3
            </div>
            <CardContent className="relative z-10 pt-6 pr-10 sm:pr-12">
              <h4 className="text-lg font-semibold section-heading-gradient">
                Unlock real outcomes
              </h4>
              <p className="mt-2 text-muted-foreground">
                Turn new skills into portfolios, certifications, and career opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
