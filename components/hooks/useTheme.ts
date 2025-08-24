import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useTheme() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the actual theme being displayed (resolved from system preference)
  const currentTheme = mounted ? resolvedTheme : 'light';

  // Check if theme is system preference
  const isSystemTheme = theme === 'system';

  // Get theme icon based on current theme
  const getThemeIcon = () => {
    if (isSystemTheme) return '🌐';
    return currentTheme === 'dark' ? '🌙' : '☀️';
  };

  // Get theme label
  const getThemeLabel = () => {
    if (isSystemTheme) return 'System';
    return currentTheme === 'dark' ? 'Dark' : 'Light';
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  // Set specific theme
  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');
  const setSystemTheme = () => setTheme('system');

  // Check if current theme is dark
  const isDark = currentTheme === 'dark';

  // Check if current theme is light
  const isLight = currentTheme === 'light';

  return {
    // Theme state
    theme,
    currentTheme,
    systemTheme,
    resolvedTheme,
    mounted,

    // Theme actions
    setTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,

    // Theme checks
    isDark,
    isLight,
    isSystemTheme,

    // Theme utilities
    getThemeIcon,
    getThemeLabel,
  };
}
