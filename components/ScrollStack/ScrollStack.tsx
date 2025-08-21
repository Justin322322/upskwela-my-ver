'use client';

import React, { ReactNode, useLayoutEffect, useRef, useCallback } from 'react';

type ScrollTransformState = {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
};

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => (
  <div
    className={`scroll-stack-card relative w-full h-64 sm:h-80 my-6 sm:my-8 p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-[32px] md:rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef<Map<number, ScrollTransformState>>(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const container = scrollerRef.current;
    if (!container || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const containerTopDoc = container.getBoundingClientRect().top + window.scrollY;
    const stackPositionPx = parsePercentage(stackPosition, viewportHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, viewportHeight);
    const endElement = container.querySelector('.scroll-stack-end') as HTMLElement;
    const endElementTopDoc = endElement ? containerTopDoc + endElement.offsetTop : containerTopDoc;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTopDoc = containerTopDoc + card.offsetTop;
      const triggerStart = cardTopDoc - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTopDoc - scaleEndPositionPx;
      const pinStart = cardTopDoc - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTopDoc - viewportHeight / 2;

      const scaleProgress = calculateProgress(scrollY, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTopDoc = containerTopDoc + cardsRef.current[j].offsetTop;
          const jTriggerStart = jCardTopDoc - stackPositionPx - itemStackDistance * j;
          if (scrollY >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollY >= pinStart && scrollY <= pinEnd;
      if (isPinned) {
        translateY = scrollY - cardTopDoc + stackPositionPx + itemStackDistance * i;
      } else if (scrollY > pinEnd) {
        translateY = pinEnd - cardTopDoc + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';
        card.style.transform = transform;
        card.style.filter = filter;
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollY >= pinStart && scrollY <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      (card.style as unknown as { webkitTransform?: string }).webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      (card.style as unknown as { webkitPerspective?: string }).webkitPerspective = '1000px';
    });

    const onScroll = () => handleScroll();
    const onResize = () => updateCardTransforms();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    updateCardTransforms();

    return () => {
      window.removeEventListener('scroll', onScroll as EventListener);
      window.removeEventListener('resize', onResize as EventListener);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    handleScroll,
    updateCardTransforms,
  ]);

  return (
    <div
      className={`relative w-full overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={{
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
      }}
    >
      <div className="scroll-stack-inner pt-16 sm:pt-[20vh] px-4 sm:px-8 lg:px-20 min-h-screen">
        {children}
        {/* End marker; height will be extended by bottom spacer below */}
        <div className="scroll-stack-end w-full h-px" />
        {/* Dynamic bottom spacer based on viewport height */}
        <div aria-hidden="true" className="h-[30vh] sm:h-[40vh] lg:h-[50vh]" />
      </div>
    </div>
  );
};

export default ScrollStack;
