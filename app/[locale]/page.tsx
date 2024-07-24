import React from 'react';
import { ThemeSwitchButton } from '@/components/theme-switch-button/theme-switch-button';
import { PersonalTimeline } from '@/components/personal-timeline/personal-timeline';
import { FeaturedProjects } from '@/components/featured-projects/featured-projects';
import { HeroSection } from '@/components/hero-section/hero-section';

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-[88rem] flex-col gap-8 px-1">
      <HeroSection />
      <PersonalTimeline />
      <FeaturedProjects />
      <ThemeSwitchButton />
    </main>
  );
}
