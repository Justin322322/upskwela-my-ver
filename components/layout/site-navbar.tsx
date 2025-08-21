'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HoveredLink, Menu } from '@/components/ui/navbar-menu';

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
        <span className="text-xs text-[#00456E]">🇵🇭 Proudly Filipino-founded</span>
      </div>
      <div className="h-6 w-px bg-[#0a5f8e]/20 mx-2 md:mx-4" aria-hidden="true" />
      <div className="flex items-center gap-8">
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/roadmap">Roadmap</HoveredLink>
        <span className="h-5 w-px bg-[#0a5f8e]/15 mx-1" aria-hidden="true" />
        <HoveredLink href="/login">Login</HoveredLink>
        <HoveredLink href="/signup">Sign up</HoveredLink>
      </div>
    </Menu>
  );
}
