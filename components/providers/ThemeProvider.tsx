'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProviderProps = React.PropsWithChildren<{
  attribute?: 'class' | 'data-theme';
  defaultTheme?: 'system' | 'light' | 'dark';
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
}>;

export default function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'light',
  enableSystem = true,
  disableTransitionOnChange = true,
  storageKey = 'upskwela-theme',
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey={storageKey}
      themes={['light', 'dark']}
    >
      {children}
    </NextThemesProvider>
  );
}
