'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function RevealCard({
  className,
  title,
  imageUrl,
  children,
}: {
  className?: string;
  title: string;
  imageUrl: string;
  children?: React.ReactNode;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn('group/canvas-card relative mx-auto flex h-full w-full items-center justify-center p-4', className)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 h-full w-full">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 h-full">
        <div className="mx-auto flex h-full w-full items-center justify-center text-center transition group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          <Image src={imageUrl} alt={title} width={200} height={200} className="h-2/3 w-2/3" />
        </div>
      </div>
    </div>
  );
}
