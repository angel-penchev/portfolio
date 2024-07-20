import React from 'react';
import { ThemeSwitchButton } from '@/components/theme-switch-button/theme-switch-button';
import { PersonalTimeline } from '@/components/personal-timeline/personal-timeline';
import { BusinessCard } from '@/components/business-card/business-card';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[88rem] px-1">
      <ThemeSwitchButton />
      <BusinessCard />
      <PersonalTimeline />
    </main>
  );
}
