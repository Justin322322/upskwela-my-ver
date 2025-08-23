'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Github } from 'lucide-react';
import { Button, ThemeToggle, AuthModal } from '@/components';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRoute, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <div className="md:hidden w-full">
      <nav className="relative rounded-full border border-sky-200/40 bg-white/60 dark:bg-slate-800/40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-800/30 flex items-center justify-between gap-4 px-4 py-2 shadow-[0_12px_30px_-12px_rgba(0,69,110,0.15),0_2px_8px_-2px_rgba(0,69,110,0.08)] dark:shadow-[0_12px_30px_-12px_rgba(15,23,42,0.3),0_2px_8px_-2px_rgba(15,23,42,0.2)] focus:outline-none">
        <Link href="/" className="inline-flex items-center gap-2 focus:outline-none">
          <Image src="/logo.svg" width={112} height={30} alt="Upskwela" priority />
          <span className="sr-only">Upskwela</span>
        </Link>

        <div className="flex items-center gap-1 relative">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}
            className="relative overflow-hidden text-slate-700/80 hover:text-sky-700 hover:bg-sky-100/30 dark:text-slate-300/80 dark:hover:text-sky-200 dark:hover:bg-slate-700/30 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0"
          >
            <div className="relative w-5 h-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
              />
            </div>
          </Button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-44 rounded-xl border border-sky-200/40 bg-white backdrop-blur shadow-lg dark:bg-slate-800 dark:border-slate-600/40 p-1 z-40 animate-in slide-in-from-top-2 fade-in-0 duration-150">
              <nav className="space-y-1">
                <MenuItem
                  icon={<FontAwesomeIcon icon={faHome} className="w-4 h-4" />}
                  label="Home"
                  active={isActive('/')}
                  href="/"
                  onClick={() => setIsOpen(false)}
                />
                <MenuItem
                  icon={<FontAwesomeIcon icon={faRoute} className="w-4 h-4" />}
                  label="Roadmap"
                  active={isActive('/roadmap')}
                  href="/roadmap"
                  onClick={() => setIsOpen(false)}
                />
                <div className="h-px bg-slate-200/40 dark:bg-slate-600/40 my-2 mx-2" />
                <button
                  className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/30 dark:hover:text-sky-200 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0"
                  onClick={() => handleAuthClick('login')}
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="w-4 h-4" />
                  <span className="flex-1 text-left">Login</span>
                </button>
                <button
                  className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/30 dark:hover:text-sky-200 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0"
                  onClick={() => handleAuthClick('signup')}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="w-4 h-4" />
                  <span className="flex-1 text-left">Sign up</span>
                </button>
                <div className="h-px bg-slate-200/40 dark:bg-slate-600/40 my-2 mx-2" />
                <MenuItem
                  icon={<Github className="w-4 h-4" />}
                  label="GitHub"
                  active={false}
                  href="https://github.com/Justin322322/upskwela-my-ver"
                  onClick={() => setIsOpen(false)}
                />
              </nav>
            </div>
          )}
        </div>
      </nav>

      {/* Render AuthModal outside the dropdown to avoid z-index conflicts */}
      <AuthModal
        open={isAuthModalOpen}
        onOpenChange={setIsAuthModalOpen}
        defaultMode={authMode}
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
    </div>
  );
}

function MenuItem({
  icon,
  label,
  active,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
  onClick: () => void;
}) {
  const pathname = usePathname();

  const handleClick = () => {
    // Only scroll to top if navigating to a different page
    if (pathname !== href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0 ${
        active
          ? 'bg-slate-100 text-slate-900 dark:bg-slate-700/50 dark:text-sky-200'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/30 dark:hover:text-sky-200'
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {active && <span className="ml-auto h-2 w-2 rounded-full bg-slate-600 dark:bg-sky-300" />}
    </Link>
  );
}
