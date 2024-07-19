import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TimelinePeriod, TimelinePeriodItem } from '@/components/timeline/components/timeline-period';
import { TimelinePoint, TimelinePointItem } from '@/components/timeline/components/timeline-point';

export enum TimelineSide {
  Top,
  Bottom,
}

export function Timeline({ points, periods }: { points: TimelinePointItem[]; periods: TimelinePeriodItem[] }) {
  const topPoints = points.filter((item) => item.side === TimelineSide.Top);
  const bottomPoints = points.filter((item) => item.side === TimelineSide.Bottom);

  const topPeriods = periods.filter((item) => item.side === TimelineSide.Top);
  const bottomPeriods = periods.filter((item) => item.side === TimelineSide.Bottom);

  const minYear = Math.min(...[...topPeriods, ...bottomPeriods].map((item) => item.dateStart.getFullYear()));
  const minDate = new Date(`${minYear}-01-01`);
  const maxDate = new Date(`${new Date().getFullYear()}-12-31`);
  const currentYear = new Date().getFullYear();
  const totalTime = maxDate.getTime() - minDate.getTime();

  return (
    <div className="mt-3 flex h-[max(150vh,_1500px)] w-full flex-row xl:h-auto xl:flex-col">
      <div className="relative w-1/2 p-0 xl:h-80 xl:w-auto">
        <ol className="absolute inset-0 ml-auto mt-auto flex h-full w-3/4 flex-col xl:h-3/4 xl:w-full xl:flex-row">
          {topPoints.map((item, index) => {
            const previousEndTimestamp = index > 0 ? topPoints[index - 1].date.getTime() : minDate.getTime();
            return TimelinePoint(item, previousEndTimestamp, totalTime, TimelineSide.Top);
          })}
        </ol>

        <ol className="absolute inset-0 ml-auto mt-auto flex h-full w-1/2 flex-col xl:h-1/2 xl:w-full xl:flex-row">
          {topPeriods.map((item, index) => {
            const previousItem = index > 0 ? topPeriods[index - 1] : null;
            return TimelinePeriod(item, previousItem, totalTime, minDate, TimelineSide.Top);
          })}
        </ol>
      </div>

      <ol className="z-10 flex h-auto w-0 -translate-y-3.5 flex-col items-center gap-1 xl:h-0 xl:w-auto xl:-translate-x-5 xl:translate-y-0 xl:flex-row">
        {Array.from({ length: currentYear - minYear + 1 }, (_, i) => minYear + i).map((year) => (
          <>
            <li key={`${year}-year`}>
              <Badge className="pointer-events-none h-6 text-sm"> &apos;{year.toString().slice(-2)}</Badge>
            </li>
            <div key={`${year}-line`} className="h-full w-1 grow bg-primary xl:h-1 xl:w-full"></div>
          </>
        ))}
      </ol>

      <div className="relative w-1/2 p-0 xl:h-80 xl:w-auto">
        <ol className="absolute inset-0 mb-auto mr-auto flex h-full w-3/4 flex-col xl:h-3/4 xl:w-full xl:flex-row">
          {bottomPoints.map((item, index) => {
            const previousEndTimestamp = index > 0 ? bottomPoints[index - 1].date.getTime() : minDate.getTime();
            return TimelinePoint(item, previousEndTimestamp, totalTime, TimelineSide.Bottom);
          })}
        </ol>

        <ol className="absolute inset-0 mb-auto mr-auto flex h-full w-1/2 flex-col xl:h-1/2 xl:w-full xl:flex-row">
          {bottomPeriods.map((item, index) => {
            const previousItem = index > 0 ? bottomPeriods[index - 1] : null;
            return TimelinePeriod(item, previousItem, totalTime, minDate, TimelineSide.Bottom);
          })}
        </ol>
      </div>
    </div>
  );
}
