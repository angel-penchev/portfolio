'use client';

import React from 'react';
import { PinContainer } from '../ui/3d-pin';

export function FeaturedProjects() {
  return (
    <div className="grid h-[200vh] grid-flow-row grid-rows-4 gap-x-24 lg:h-[min(100vh,_60rem)] lg:grid-cols-2">
      <div>gosho</div>

      <PinContainer
        title="sugaming.club"
        href="https://sugaming.club"
        containerClassName="aspect-[3/4] h-full row-span-4"
      >
        sugaming.club will go here
      </PinContainer>

      <PinContainer
        title="fmicodes.com"
        href="https://fmicodes.com"
        containerClassName="aspect-[4/3] h-full row-span-3 place-self-end"
      >
        fmicodes.com will go here
      </PinContainer>
    </div>
  );
}
