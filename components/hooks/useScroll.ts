import { useState, useEffect, useCallback, useRef } from 'react';

interface UseScrollOptions {
  threshold?: number;
  onScrollUp?: () => void;
  onScrollDown?: () => void;
  onScrollToTop?: () => void;
  onScrollToBottom?: () => void;
}

export function useScroll(options: UseScrollOptions = {}) {
  const { threshold = 100, onScrollUp, onScrollDown, onScrollToTop, onScrollToBottom } = options;

  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateScrollData = useCallback(() => {
    const currentScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Update scroll position
    setScrollY(currentScrollY);

    // Update scroll direction
    if (Math.abs(currentScrollY - lastScrollY.current) > threshold) {
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      setScrollDirection(direction);

      // Call direction callbacks
      if (direction === 'up' && onScrollUp) onScrollUp();
      if (direction === 'down' && onScrollDown) onScrollDown();

      lastScrollY.current = currentScrollY;
    }

    // Update top/bottom states
    setIsAtTop(currentScrollY < threshold);
    setIsAtBottom(currentScrollY >= documentHeight - threshold);

    // Update scroll progress (0 to 1)
    const progress = documentHeight > 0 ? currentScrollY / documentHeight : 0;
    setScrollProgress(Math.min(Math.max(progress, 0), 1));

    ticking.current = false;
  }, [threshold, onScrollUp, onScrollDown]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollData);
      ticking.current = true;
    }
  }, [updateScrollData]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call to set initial state
    updateScrollData();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, updateScrollData]);

  const scrollToTop = useCallback(
    (behavior: ScrollBehavior = 'smooth') => {
      window.scrollTo({ top: 0, behavior });
      if (onScrollToTop) onScrollToTop();
    },
    [onScrollToTop],
  );

  const scrollToBottom = useCallback(
    (behavior: ScrollBehavior = 'smooth') => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: documentHeight, behavior });
      if (onScrollToBottom) onScrollToBottom();
    },
    [onScrollToBottom],
  );

  const scrollToElement = useCallback(
    (element: HTMLElement | string, behavior: ScrollBehavior = 'smooth') => {
      const targetElement =
        typeof element === 'string' ? (document.querySelector(element) as HTMLElement) : element;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior, block: 'start' });
      }
    },
    [],
  );

  const scrollToPosition = useCallback((position: number, behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({ top: position, behavior });
  }, []);

  return {
    // State
    scrollY,
    scrollDirection,
    isAtTop,
    isAtBottom,
    scrollProgress,

    // Actions
    scrollToTop,
    scrollToBottom,
    scrollToElement,
    scrollToPosition,

    // Helpers
    hasScrolled: scrollY > threshold,
    isScrollingUp: scrollDirection === 'up',
    isScrollingDown: scrollDirection === 'down',
  };
}
