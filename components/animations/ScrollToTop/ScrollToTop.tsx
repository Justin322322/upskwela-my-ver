'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { SCROLL, Z_INDEX } from '@/lib';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL.TOP_THRESHOLD);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: SCROLL.SMOOTH_BEHAVIOR });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[${Z_INDEX.SCROLL_TO_TOP}] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      inert={!visible || undefined}
    >
      <Button
        aria-label="Scroll to top"
        variant="brand"
        size="icon"
        className="size-12 rounded-full shadow-lg hover:shadow-xl"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </div>
  );
}
