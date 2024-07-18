'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { LuMoonStar, LuPaintbrush, LuSun } from 'react-icons/lu';

export function ThemeSwitchButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme(theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : 'system');
      }}
      variant="ghost"
    >
      {theme === 'system' ? <LuPaintbrush /> : theme === 'dark' ? <LuMoonStar /> : <LuSun />}
    </Button>
  );
}
