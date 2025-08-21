'use client';

import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import VariableProximity from '@/components/animations/VariableProximity/VariableProximity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faXTwitter,
  faTiktok,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Community() {
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

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
        <Button
          variant="brandOutline"
          className="group rounded-full h-12 min-w-[160px] px-5 sm:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-start md:justify-center"
          asChild
        >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>Facebook</span>
          </a>
        </Button>
        <Button
          variant="brandOutline"
          className="group rounded-full h-12 min-w-[160px] px-5 sm:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-start md:justify-center"
          asChild
        >
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>X (Twitter)</span>
          </a>
        </Button>
        <Button
          variant="brandOutline"
          className="group rounded-full h-12 min-w-[160px] px-5 sm:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-start md:justify-center"
          asChild
        >
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>TikTok</span>
          </a>
        </Button>
        <Button
          variant="brandOutline"
          className="group rounded-full h-12 min-w-[160px] px-5 sm:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-start md:justify-center"
          asChild
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#00456E] transition-transform duration-200 group-hover:scale-110"
            />
            <span>Instagram</span>
          </a>
        </Button>
        <Button
          variant="brandOutline"
          className="group rounded-full h-12 min-w-[160px] px-5 sm:px-6 border-sky-200/70 bg-white/70 backdrop-blur text-[#00456E] hover:bg-white/95 hover:ring-1 hover:ring-sky-300/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 justify-start md:justify-center"
          asChild
        >
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
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

export default Community;
