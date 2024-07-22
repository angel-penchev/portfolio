import React from 'react';
import { ThemeSwitchButton } from '@/components/theme-switch-button/theme-switch-button';
import { PersonalTimeline } from '@/components/personal-timeline/personal-timeline';
import { BusinessCard } from '@/components/business-card/business-card';
import { FeaturedProjects } from '@/components/featured-projects/featured-projects';

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-[88rem] flex-col gap-8 overflow-visible px-1">
      <ThemeSwitchButton />
      <BusinessCard />
      <PersonalTimeline />
      <FeaturedProjects />
    </main>
  );
}
