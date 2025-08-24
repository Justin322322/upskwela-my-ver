'use client';

import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Z_INDEX } from '@/lib/constants';
import { useScroll } from '@/components/hooks/useScroll';

export default function ScrollToTop() {
  const { hasScrolled, scrollToTop } = useScroll({
    threshold: 400,
  });

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[${Z_INDEX.SCROLL_TO_TOP}] transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      inert={!hasScrolled || undefined}
    >
      <Button
        aria-label="Scroll to top"
        variant="brand"
        size="icon"
        className="size-12 rounded-full shadow-lg hover:shadow-xl"
        onClick={() => scrollToTop()}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </div>
  );
}
