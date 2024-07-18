import { cn } from '@/lib/utils';
import { RevealCard } from '@/components/reveal-card/reveal-card';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import React from 'react';
import { TimelineSide } from '@/components/timeline/timeline';

export interface TimelinePeriodItem {
  name: string;
  description: string;
  imageUrl: string;
  colorClass: string;
  dateStart: Date;
  dateEnd: Date | null;
  side: TimelineSide;
}

export function TimelinePeriod(
  item: TimelinePeriodItem,
  previousItem: TimelinePeriodItem | null,
  totalTime: number,
  minDate: Date,
  side: TimelineSide,
) {
  const time = (item.dateEnd ? item.dateEnd.getTime() : Date.now()) - item.dateStart.getTime();
  const size = `${(time / totalTime) * 100}%`;

  const previousEndTimestamp = previousItem ? previousItem.dateEnd?.getTime() : minDate.getTime();
  const gapTime = previousEndTimestamp ? item.dateStart.getTime() - previousEndTimestamp : 0;
  const margin = `${(gapTime / totalTime) * 100}%`;

  return (
    <>
      {/* I need to this atrocity because percentage margins don't take the parent size vertically*/}
      <div className="block xl:hidden" style={{ height: margin }} />
      <div className="hidden xl:block" style={{ width: margin }} />

      <li
        key={`${item.name}-vertical`}
        className={cn('block xl:hidden', side === TimelineSide.Top ? 'mask-gradient-left' : 'mask-gradient-right')}
        style={{ height: size }}
      >
        <RevealCard className="block w-full bg-primary" title={item.name} imageUrl={item.imageUrl}>
          <CanvasRevealEffect
            animationSpeed={4.5}
            containerClassName={item.colorClass}
            colors={[[180, 180, 180]]}
            showGradient={false}
          />
        </RevealCard>
      </li>

      <li
        key={`${item.name}-horizontal`}
        className={cn('hidden xl:block', side === TimelineSide.Top ? 'mask-gradient-top' : 'mask-gradient-bottom')}
        style={{ width: size }}
      >
        <RevealCard className="block h-full border-primary bg-primary" title={item.name} imageUrl={item.imageUrl}>
          <CanvasRevealEffect
            animationSpeed={4.5}
            containerClassName={item.colorClass}
            colors={[[180, 180, 180]]}
            showGradient={false}
          />
        </RevealCard>
      </li>
    </>
  );
}
