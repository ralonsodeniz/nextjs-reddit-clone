'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import Button from '@/components/ui/Button';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  light: cn('h-[1.5rem] w-[1.3rem] dark:hidden'),
  dark: cn('hidden h-5 w-5 dark:block'),
  text: cn('sr-only'),
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Button size="icon" variant="ghostSecondary" onClick={handleTheme}>
      <Sun className={classname.light} />
      <Moon className={classname.dark} />
      <span className={classname.text}>{EN.themeToggle.text}</span>
    </Button>
  );
};
