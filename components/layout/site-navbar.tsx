'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HoveredLink, Menu } from '@/components/ui/navbar-menu';
import { default as ThemeToggle } from '@/components/ui/theme-toggle';
import { AuthModal } from '@/components/sections/auth-modal/auth-modal';

export default function SiteNavbar() {
  const [, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      <div className="flex items-center gap-3">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <Image
            src="/logo.svg"
            width={112}
            height={30}
            alt="Upskwela"
            priority
            className="transition-transform duration-200 ease-out group-hover:scale-[1.06] group-hover:drop-shadow-md"
          />
          <span className="sr-only">Upskwela</span>
        </Link>
        <span className="text-xs text-slate-700 dark:text-slate-300">Proudly Filipino-founded</span>
      </div>
      <div
        className="h-6 w-px bg-slate-300/40 dark:bg-slate-600/40 mx-2 md:mx-4"
        aria-hidden="true"
      />
      <div className="flex items-center gap-8">
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/roadmap">Roadmap</HoveredLink>
        <span className="h-5 w-px bg-slate-300/30 dark:bg-slate-600/30 mx-1" aria-hidden="true" />
        <AuthModal
          trigger={
            <button className="group relative inline-flex items-center transition-all duration-300 px-3 py-2 rounded-lg font-medium text-base text-slate-700/80 hover:text-sky-700 dark:text-slate-300/80 dark:hover:text-sky-200">
              <span className="relative z-10">Login</span>
            </button>
          }
          onLogin={(email, password) => {
            console.log('Login attempt:', { email, password });
            // TODO: Implement actual login logic
          }}
          onSignup={(email, password, name) => {
            console.log('Signup attempt:', { email, password, name });
            // TODO: Implement actual signup logic
          }}
          onForgotPassword={(email) => {
            console.log('Forgot password attempt:', { email });
            // TODO: Implement actual password reset logic
          }}
        />
        <AuthModal
          trigger={
            <button className="group relative inline-flex items-center transition-all duration-300 px-3 py-2 rounded-lg font-medium text-base text-slate-700/80 hover:text-sky-700 dark:text-slate-300/80 dark:hover:text-sky-200">
              <span className="relative z-10">Sign up</span>
            </button>
          }
          defaultMode="signup"
          onLogin={(email, password) => {
            console.log('Login attempt:', { email, password });
            // TODO: Implement actual login logic
          }}
          onSignup={(email, password, name) => {
            console.log('Signup attempt:', { email, password, name });
            // TODO: Implement actual signup logic
          }}
          onForgotPassword={(email) => {
            console.log('Forgot password attempt:', { email });
            // TODO: Implement actual password reset logic
          }}
        />
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </div>
    </Menu>
  );
}
