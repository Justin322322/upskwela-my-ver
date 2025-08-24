'use client';

import * as React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/hooks/useTheme';

function ThemeIcon({ theme }: { theme: string | undefined }) {
  if (theme === 'light') return <Sun className="h-4 w-4" />;
  if (theme === 'dark') return <Moon className="h-4 w-4" />;
  return <Laptop className="h-4 w-4" />;
}

export default function ThemeToggle() {
  const { theme, currentTheme, mounted, setLightTheme, setDarkTheme, setSystemTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (e.target instanceof Node && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="brandOutline"
        size="icon"
        aria-label="Toggle theme"
        className="!rounded-full"
        disabled
      >
        <Laptop className="h-4 w-4" />
      </Button>
    );
  }

  const current = theme ?? 'system';
  const visualTheme = currentTheme;

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="brandOutline"
        size="icon"
        aria-label="Toggle theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="!rounded-full"
      >
        <ThemeIcon theme={visualTheme} />
      </Button>
      {open && (
        <div
          role="menu"
          aria-label="Select theme"
          className="absolute right-0 mt-2 w-44 rounded-xl border border-sky-200/40 bg-white backdrop-blur shadow-lg dark:bg-slate-800 dark:border-slate-600/40 p-1 z-50 animate-in slide-in-from-top-2 fade-in-0 duration-150"
        >
          <MenuItem
            icon={<Sun className="h-4 w-4" />}
            label="Light"
            active={current === 'light'}
            onSelect={() => {
              setLightTheme();
              setOpen(false);
            }}
          />
          <MenuItem
            icon={<Moon className="h-4 w-4" />}
            label="Dark"
            active={current === 'dark'}
            onSelect={() => {
              setDarkTheme();
              setOpen(false);
            }}
          />
          <MenuItem
            icon={<Laptop className="h-4 w-4" />}
            label="System"
            active={current === 'system'}
            onSelect={() => {
              setSystemTheme();
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

function MenuItem({
  icon,
  label,
  active,
  onSelect,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      role="menuitemradio"
      aria-checked={active}
      onClick={onSelect}
      className={`w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
        active
          ? 'bg-slate-100 text-slate-900 dark:bg-slate-700/50 dark:text-sky-200'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/30 dark:hover:text-sky-200'
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {active && <span className="ml-auto h-2 w-2 rounded-full bg-slate-600 dark:bg-sky-300" />}
    </button>
  );
}
