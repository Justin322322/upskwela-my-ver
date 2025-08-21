'use client';
import React from 'react';
import Link, { type LinkProps } from 'next/link';

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
  return (
    <Link
      href={href}
      {...rest}
      className="group relative inline-flex items-center text-[#00456E]/80 hover:text-[#00456E] transition-colors duration-200 px-1 py-1 rounded-md"
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-1 rounded-full bg-[#0a5f8e]/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
    </Link>
  );
};
