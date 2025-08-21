'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link, { type LinkProps } from 'next/link';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const;

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[#00456E] hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

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

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
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
