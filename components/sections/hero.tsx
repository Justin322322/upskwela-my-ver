'use client';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import VariableProximity from '@/components/animations/VariableProximity/VariableProximity';
import { Stats } from '@/components/sections/stats';
import { motion } from 'motion/react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          className="mb-6 flex items-center justify-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          <span className="ph-badge">
            <span className="ph-badge__inner text-sm">
              <span aria-hidden="true">🇵🇭</span>
              <span className="ml-2">Proudly Filipino-founded</span>
            </span>
          </span>
        </motion.div>
        <motion.div
          ref={containerRef}
          className="relative"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
        >
          <motion.h1 className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <VariableProximity
              label={'Learn, Connect, and Elevate!'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </motion.h1>
        </motion.div>
        <motion.p
          className="mt-5 text-balance text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
        >
          Build and monetize your community or join one. Share your expertise, earn from your
          courses, and grow with peers.
        </motion.p>
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.28 }}
        >
          <Badge variant="success">Beta Successfully Launched!</Badge>
          <span className="text-sm text-muted-foreground">
            We&apos;re live with core features. Check out our roadmap to see what&apos;s coming
            next.
          </span>
        </motion.div>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.36 }}
        >
          <Button variant="brand" asChild>
            <a href="#roadmap">View Roadmap</a>
          </Button>
          <Button variant="brandOutline" asChild>
            <a href="#features">Explore Features</a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.46 }}
        >
          <Stats className="mt-12" />
        </motion.div>
      </div>
    </div>
  );
}
