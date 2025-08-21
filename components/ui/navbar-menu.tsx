'use client';
import React from 'react';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

// Removed unused MenuItem/ProductItem components and animations

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-sky-200/40 bg-white/60 dark:bg-slate-800/40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-800/30 flex items-center justify-between gap-6 px-5 md:px-7 py-3 shadow-[0_12px_30px_-12px_rgba(0,69,110,0.15),0_2px_8px_-2px_rgba(0,69,110,0.08)] dark:shadow-[0_12px_30px_-12px_rgba(15,23,42,0.3),0_2px_8px_-2px_rgba(15,23,42,0.2)]"
    >
      {children}
    </nav>
  );
};

type HoveredLinkProps = React.PropsWithChildren<
  LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

export const HoveredLink: React.FC<HoveredLinkProps> = ({ children, href, ...rest }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isHome = href === '/';

  return (
    <Link
      href={href}
      {...rest}
      className={`group relative inline-flex items-center transition-all duration-300 px-3 py-2 rounded-lg font-medium ${
        isActive
          ? 'text-sky-700 bg-sky-100/30 dark:text-sky-200 dark:bg-slate-700/40'
          : 'text-slate-700/80 hover:text-sky-700 dark:text-slate-300/80 dark:hover:text-sky-200'
      } ${
        isHome
          ? 'text-lg font-semibold hover:text-sky-600 dark:hover:text-sky-300 hover:scale-105'
          : 'text-base hover:text-sky-700 dark:hover:text-sky-200'
      }`}
    >
      <span className="relative z-10">{children}</span>

      {/* Subtle background glow on hover for home */}
      {isHome && (
        <span className="pointer-events-none absolute inset-0 rounded-lg transition-all duration-300 bg-gradient-to-r from-sky-100/20 to-sky-100/30 opacity-0 group-hover:opacity-100 dark:from-slate-700/30 dark:to-slate-700/40" />
      )}
    </Link>
  );
};
