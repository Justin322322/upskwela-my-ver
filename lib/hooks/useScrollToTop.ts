'use client';

import { useRouter } from 'next/navigation';

export function useScrollToTop() {
  const router = useRouter();

  const navigateWithScrollToTop = (href: string) => {
    // Smooth scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Small delay to ensure smooth scroll completes before navigation
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  return { navigateWithScrollToTop };
}
