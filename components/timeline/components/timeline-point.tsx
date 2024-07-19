import { cn } from '@/lib/utils';
import React from 'react';
import { TimelineSide } from '@/components/timeline/timeline';

export interface TimelinePointItem {
  name: string;
  longName?: string;
  description: string;
  date: Date;
  icon?: React.ReactNode;
  isImportant: boolean;
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
              'absolute flex h-6 w-6 transform items-center justify-center rounded-full bg-primary text-background',
              side === TimelineSide.Top
                ? '-translate-x-3 -translate-y-3 xl:top-0'
                : 'right-0 -translate-y-3 translate-x-3 xl:bottom-0 xl:right-auto xl:-translate-x-3 xl:translate-y-3',
              item.isImportant ? 'scale-150' : '',
            )}
          >
            {item.icon}
          </div>

          <span
            className={cn(
              'absolute transform text-xs',
              side === TimelineSide.Top
                ? '-translate-x-1/2 -translate-y-8 xl:top-0'
                : 'right-0 -translate-y-8 translate-x-1/2 xl:bottom-0 xl:right-auto xl:-translate-x-1/2 xl:translate-y-8',
            )}
          >
            {item.name}
          </span>
        </div>
      </li>
    </>
  );
}
