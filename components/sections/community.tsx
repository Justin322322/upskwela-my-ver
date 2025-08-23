'use client';

import { Button } from '@/components';
import { useRef } from 'react';
import { VariableProximity } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faTiktok,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_LINKS } from '@/lib';

export function Community() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="mx-auto max-w-6xl text-center">
      <div ref={headingRef} className="relative">
        <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2">
          <VariableProximity
            label={'Join our Community'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={headingRef}
            radius={100}
            falloff="linear"
          />
        </h3>
      </div>
      <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
        Connect with us on social media for updates, tips, and community highlights
      </p>

      <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-3 sm:gap-4 md:gap-5 max-w-2xl sm:max-w-none mx-auto">
        <Button
          variant="brandOutline"
          className="group rounded-full h-11 sm:h-12 w-full sm:w-auto sm:min-w-[160px] px-3 sm:px-5 md:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-center text-sm sm:text-base"
          asChild
        >
          <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>Facebook</span>
          </a>
        </Button>
        <Button
          variant="brandOutline"
          className="group rounded-full h-11 sm:h-12 w-full sm:w-auto sm:min-w-[160px] px-3 sm:px-5 md:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-center text-sm sm:text-base"
          asChild
        >
          <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>X (Twitter)</span>
          </a>
        </Button>
        <Button
          variant="brandOutline"
          className="group rounded-full h-11 sm:h-12 w-full sm:w-auto sm:min-w-[160px] px-3 sm:px-5 md:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-center text-sm sm:text-base"
          asChild
        >
          <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>TikTok</span>
          </a>
        </Button>
        <Button
          variant="brandOutline"
          className="group rounded-full h-11 sm:h-12 w-full sm:w-auto sm:min-w-[160px] px-3 sm:px-5 md:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-center text-sm sm:text-base"
          asChild
        >
          <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>Instagram</span>
          </a>
        </Button>
        <Button
          variant="brandOutline"
          className="group rounded-full h-11 sm:h-12 w-full sm:w-auto sm:min-w-[160px] px-3 sm:px-5 md:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-center text-sm sm:text-base col-span-2 sm:col-span-1"
          asChild
        >
          <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>YouTube</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
