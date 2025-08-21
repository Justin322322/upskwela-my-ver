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
      className="relative rounded-full border border-sky-200/60 bg-white/60 dark:bg-slate-900/30 backdrop-blur supports-[backdrop-filter]:bg-white/50 flex items-center justify-between gap-6 px-5 md:px-7 py-3 shadow-[0_12px_30px_-12px_rgba(0,69,110,0.25),0_2px_8px_-2px_rgba(0,69,110,0.12)] dark:shadow-[0_12px_30px_-12px_rgba(10,93,168,0.3),0_2px_8px_-2px_rgba(10,93,168,0.18)]"
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
        isActive ? 'text-[#00456E] bg-[#0a5f8e]/8' : 'text-[#00456E]/70 hover:text-[#00456E]'
      } ${
        isHome
          ? 'text-lg font-semibold hover:text-[#0a5f8e] hover:scale-105'
          : 'text-base hover:text-[#00456E]'
      }`}
    >
      <span className="relative z-10">{children}</span>

      {/* Subtle background glow on hover for home */}
      {isHome && (
        <span className="pointer-events-none absolute inset-0 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#0a5f8e]/8 to-[#0a5f8e]/12 opacity-0 group-hover:opacity-100" />
      )}
    </Link>
  );
};
