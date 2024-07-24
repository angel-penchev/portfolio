import React from 'react';
import Image from 'next/image';
import { BusinessCard } from '@/components/business-card/business-card';

export function HeroSection() {
  return (
    <>
      <div className="h-[90vh] w-full overflow-visible">
        <Image
          src="/images/bg.webp"
          className="absolute bottom-0 left-0 right-0 top-0 mx-auto h-[90vh] w-[5140px] object-cover"
          width={5140}
          height={1440}
          alt="Background"
        />
        <BusinessCard containerClassName="w-full h-full m-auto" />
      </div>
    </>
  );
}
