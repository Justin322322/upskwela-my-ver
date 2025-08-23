'use client';
import CountUp from '@/components/animations/CountUp/CountUp';
import { cn } from '@/lib/utils';

type Stat = {
  label: string;
  value: number | string;
  helper?: string;
  isNumeric?: boolean;
};

const defaultStats: Stat[] = [
  { label: 'Live', value: 'Live', helper: 'Beta Version' },
  { label: 'Active Users', value: 687, isNumeric: true },
  { label: 'Communities', value: 57, isNumeric: true },
  { label: 'Courses', value: 16, isNumeric: true },
];

export function Stats({ stats = defaultStats, className }: { stats?: Stat[]; className?: string }) {
  return (
    <section aria-labelledby="platform-status" className={cn('py-8 sm:py-10', className)}>
      <div className="text-center mb-6">
        <h2
          id="platform-status"
          className="text-xs font-semibold tracking-[0.2em] text-sky-700/80 dark:text-sky-300/80"
        >
          PLATFORM STATUS
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:gap-x-8 sm:grid-cols-4">
        {/* Live / Beta */}
        <div className="text-center">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-sky-700 dark:text-sky-300">
            Live
          </div>
          <div className="text-xs sm:text-sm text-sky-600/80 dark:text-sky-400/80 mt-1">
            Beta Version
          </div>
        </div>

        {/* Numeric stats with CountUp */}
        {stats
          .filter((s) => s.isNumeric)
          .map((s) => (
            <div key={s.label} className="text-center">
              <CountUp
                to={Number(s.value)}
                duration={1.8}
                separator=","
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-sky-700 dark:text-sky-300"
              />
              <div className="text-xs sm:text-sm text-sky-600/80 dark:text-sky-400/80 mt-1">
                {s.label}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
