'use client';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

interface GitHubButtonProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg' | 'icon';
}

export function GitHubButton({ className, size = 'default' }: GitHubButtonProps) {
  return (
    <Button
      variant="outline"
      size={size}
      asChild
      className={className}
      aria-label="View source code on GitHub"
    >
      <a
        href="https://github.com/Justin322322/upskwela-my-ver"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-700/80 hover:text-sky-700 hover:bg-sky-100/30 dark:text-slate-300/80 dark:hover:text-sky-200 dark:hover:bg-slate-700/30 transition-all duration-200 border-slate-300/40 dark:border-slate-600/40 hover:border-sky-300 dark:hover:border-sky-600"
      >
        <Github className="h-4 w-4" />
        {size !== 'icon' && <span>GitHub</span>}
      </a>
    </Button>
  );
}
