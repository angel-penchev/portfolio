import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Badge } from '@/components/ui/badge';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { RevealCard } from '@/components/reveal-card/reveal-card';
import { cn } from '@/lib/utils';

export async function TwoWayTimeline() {
  const t = await getTranslations('components.two-way-timeline');
  const top = [
    {
      name: t('tues'),
      description: '',
      imageUrl: '/logos/tues.svg',
      colorClass: 'bg-blue-900',
      dateStart: new Date('2016-09-15'),
      dateEnd: new Date('2021-06-15'),
    },
    {
      name: t('sofia-university'),
      description: '',
      imageUrl: '/logos/sofia-university.svg',
      colorClass: 'bg-purple-900',
      dateStart: new Date('2021-10-01'),
      dateEnd: null,
    },
  ];

  const bottom = [
    {
      name: t('telebidpro'),
      description: '',
      imageUrl: '/logos/tues.svg',
      colorClass: 'bg-orange-800',
      dateStart: new Date('2020-05-01'),
      dateEnd: new Date('2020-11-15'),
    },
    {
      name: t('haemimont'),
      description: '',
      imageUrl: '/logos/haemimont.svg',
      colorClass: 'bg-blue-600',
      dateStart: new Date('2021-09-01'),
      dateEnd: null,
    },
  ];

  const minYear = top.reduce((acc, item) => {
    return Math.min(acc.dateStart.getFullYear(), item.dateStart.getFullYear());
  });
  const minDate = new Date(`${minYear}-01-01`);
  const maxDate = new Date(`${new Date().getFullYear()}-12-31`);
  const currentYear = new Date().getFullYear();
  const totalTime = maxDate.getTime() - minDate.getTime();

  return (
    <div className="mt-3 flex h-[100vw] flex-row xl:h-auto xl:flex-col">
      <ol className="flex h-full w-auto flex-col xl:h-auto xl:w-full xl:flex-row">
        {top.map((item, index) => {
          const time = (item.dateEnd ? item.dateEnd.getTime() : Date.now()) - item.dateStart.getTime();
          const size = `${(time / totalTime) * 100}%`;

          const previousEndTimestamp = index > 0 ? top[index - 1].dateEnd?.getTime() : minDate.getTime();
          const gapTime = previousEndTimestamp ? item.dateStart.getTime() - previousEndTimestamp : 0;
          const margin = `${(gapTime / totalTime) * 100}%`;

          return (
            <>
              {/* I need to this atrocity because percentage margins don't take the parent size vertically*/}
              <div className="block xl:hidden" style={{ height: margin }} />
              <div className="hidden xl:block" style={{ width: margin }} />

              <li key={`${item.name}-vertical`} className="mask-gradient-left block xl:hidden" style={{ height: size }}>
                <RevealCard className="block w-64 bg-primary" title={item.name} imageUrl={item.imageUrl}>
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
                className={cn('mask-gradient-top hidden xl:block', item.dateEnd ? 'mask-gradient-right' : '')}
                style={{ width: size }}
              >
                <RevealCard className="block h-64 border-primary bg-primary" title={item.name} imageUrl={item.imageUrl}>
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
        })}
      </ol>

      <ol className="z-10 -mt-3 ml-0 flex h-auto w-0 flex-col items-center gap-1 xl:-ml-7 xl:mt-0 xl:h-0 xl:w-auto xl:flex-row">
        {Array.from({ length: currentYear - minYear + 1 }, (_, i) => minYear + i).map((year) => (
          <>
            <li key={`${year}-year`}>
              <Badge className="pointer-events-none h-6 text-sm">{year}</Badge>
            </li>
            <div key={`${year}-line`} className="h-full w-1 grow bg-primary xl:h-1 xl:w-full"></div>
          </>
        ))}
      </ol>

      <ol className="flex h-full w-auto flex-col xl:h-auto xl:w-full xl:flex-row">
        {bottom.map((item, index) => {
          const time = (item.dateEnd ? item.dateEnd.getTime() : Date.now()) - item.dateStart.getTime();
          const size = `${(time / totalTime) * 100}%`;

          const previousEndTimestamp = index > 0 ? bottom[index - 1].dateEnd?.getTime() : minDate.getTime();
          const gapTime = previousEndTimestamp ? item.dateStart.getTime() - previousEndTimestamp : 0;
          const margin = `${(gapTime / totalTime) * 100}%`;

          return (
            <>
              {/* I need to this atrocity because percentage margins don't take the parent size vertically*/}
              <div className="block xl:hidden" style={{ height: margin }} />
              <div className="hidden xl:block" style={{ width: margin }} />

              <li
                key={`${item.name}-vertical`}
                className="mask-gradient-right block xl:hidden"
                style={{ height: size }}
              >
                <RevealCard className="block w-64 bg-primary" title={item.name} imageUrl={item.imageUrl}>
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
                className="mask-gradient-bottom hidden xl:block"
                style={{ width: size }}
              >
                <RevealCard className="block h-64 border-primary bg-primary" title={item.name} imageUrl={item.imageUrl}>
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
        })}
      </ol>
    </div>
  );
}
