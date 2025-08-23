'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export function CTA() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -left-3 -top-4 sm:-left-4 sm:-top-5 z-20"
        aria-hidden="true"
      >
        <div className="relative rotate-[-8deg]">
          <div className="inline-flex items-center rounded-md bg-white px-3 py-1.5 shadow-sm ring-1 ring-sky-200/50">
            <Image
              src="/logo.svg"
              alt="Upskwela"
              width={112}
              height={30}
              className="h-8 w-auto sm:h-10"
            />
          </div>
        </div>
      </div>
      <Card className="relative overflow-hidden border-0 bg-gradient-to-b from-[#0B3A63] to-[#032A49] text-white py-10 sm:py-14">
        <div
          className="pointer-events-none absolute right-2 bottom-0 md:right-6 md:bottom-2 z-0 opacity-60"
          aria-hidden="true"
        >
          <FontAwesomeIcon
            icon={faRocket}
            className="text-[10rem] sm:text-[12rem] md:text-[14rem] text-white/10"
          />
        </div>
        <CardHeader className="relative z-10 text-center">
          <CardTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to monetize your expertise?
          </CardTitle>
          <CardDescription className="text-base text-white/80 max-w-3xl mx-auto">
            Turn your knowledge into income. Create courses, build communities, and start earning
            with our revenue-sharing platform.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="brand" asChild>
              <Link href="/roadmap">View Roadmap</Link>
            </Button>
            <Button
              variant="brandOutline"
              className="bg-white text-[#00456E] border-white/80 hover:bg-white/95"
              asChild
            >
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
