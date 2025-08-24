'use client';

import { Toaster as Sonner, ToasterProps } from 'sonner';
import { useTheme } from '@/components/hooks/useTheme';

const Toaster = ({ ...props }: ToasterProps) => {
  const { currentTheme } = useTheme();

  return (
    <Sonner
      theme={currentTheme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
