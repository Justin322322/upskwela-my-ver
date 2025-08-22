'use client';

import SiteNavbar from '@/components/layout/site-navbar';
import MobileNavbar from '@/components/layout/mobile-navbar';
import { GitHubButton } from '@/components/ui/github-button';

export function SiteHeader() {
  return (
    <header className="sticky top-2 md:top-3 z-40 w-full bg-transparent">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full md:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden md:flex items-center flex-1">
          <SiteNavbar />
        </div>
        <div className="hidden md:flex items-center">
          <GitHubButton />
        </div>
      </div>
    </header>
  );
}
