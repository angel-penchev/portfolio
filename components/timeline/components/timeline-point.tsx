import { cn } from '@/lib/utils';
import React from 'react';
import { TimelineSide } from '@/components/timeline/timeline';

export interface TimelinePointItem {
  date: Date;
  name: string;
  description: string;
  side: TimelineSide;
}

export function TimelinePoint(
  item: TimelinePointItem,
  previousEndTimestamp: number | null,
  totalTime: number,
  side: TimelineSide,
) {
  const gapTime = previousEndTimestamp ? item.date.getTime() - previousEndTimestamp : 0;
  const margin = `${(gapTime / totalTime) * 100}%`;

  return (
    <>
      {/* I need to this atrocity because percentage margins don't take the parent size vertically*/}
      <div className="block xl:hidden" style={{ height: margin }} />
      <div className="hidden xl:block" style={{ width: margin }} />

      <li className="h-0 w-full xl:h-full xl:w-0">
        <div
          key={`${item.name}-line`}
          className={cn(
            'h-px from-transparent to-primary xl:h-full xl:w-px',
            side === TimelineSide.Top ? 'bg-gradient-to-l xl:bg-gradient-to-t' : 'bg-gradient-to-r xl:bg-gradient-to-b',
          )}
        >
          <div
            key={`${item.name}-point`}
            className={cn(
              'absolute h-4 w-4 -translate-x-2 transform rounded-full bg-primary',
              side === TimelineSide.Top ? 'top-0 -translate-y-2' : 'bottom-0 translate-y-2',
            )}
          />

          <span
            className={cn(
              'absolute -translate-x-1/2 transform text-xs',
              side === TimelineSide.Top ? 'top-0 -translate-y-8' : 'bottom-0 translate-y-8',
            )}
          >
            {item.name[0]}
          </span>
        </div>
      </li>
    </>
  );
}
