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

  const handleClick = () => {
    // Only scroll to top if navigating to a different page
    if (pathname !== href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      {...rest}
      className={`group relative inline-flex items-center transition-all duration-300 px-3 py-2 rounded-lg font-medium text-base ${
        isActive
          ? 'text-sky-700 bg-sky-100/30 dark:text-sky-200 dark:bg-slate-700/40'
          : 'text-slate-700/80 hover:text-sky-700 dark:text-slate-300/80 dark:hover:text-sky-200'
      } hover:text-sky-700 dark:hover:text-sky-200`}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};
