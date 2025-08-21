'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden w-full">
      <nav className="relative rounded-full border border-sky-200/60 bg-gradient-to-r from-sky-300 via-white to-blue-300 dark:from-blue-800 dark:via-slate-900 dark:to-blue-800 backdrop-blur supports-[backdrop-filter]:from-sky-200/90 supports-[backdrop-filter]:via-white/90 supports-[backdrop-filter]:to-blue-200/90 flex items-center justify-between gap-4 px-4 py-2">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image src="/logo.svg" width={112} height={30} alt="Upskwela" priority />
          <span className="sr-only">Upskwela</span>
        </Link>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-sky-200/60 py-2 z-50 animate-in slide-in-from-top-2 fade-in-0 duration-200">
              <nav className="space-y-1">
                <Link
                  href="/"
                  className="block px-4 py-2 text-[#00456E] hover:bg-sky-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/roadmap"
                  className="block px-4 py-2 text-[#00456E] hover:bg-sky-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Roadmap
                </Link>
                <div className="h-px bg-sky-200/60 my-2" />
                <Link
                  href="/login"
                  className="block px-4 py-2 text-[#00456E] hover:bg-sky-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-[#00456E] hover:bg-sky-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </nav>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
