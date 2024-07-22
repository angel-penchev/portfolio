'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { LuMoonStar, LuSun } from 'react-icons/lu';
import { FaBrush } from 'react-icons/fa6';

export function ThemeSwitchButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={() => {
        setTheme(theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : 'system');
      }}
      variant="ghost"
    >
      {theme === 'system' ? <FaBrush /> : theme === 'dark' ? <LuMoonStar /> : theme === 'light' ? <LuSun /> : null}
    </Button>
  );
}
