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
      dateEnd: new Date('2021-06-12'),
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

  const topPoints = [
    {
      name: t('completed-fce-english-certification.name'),
      description: t('completed-fce-english-certification.description'),
      date: new Date('2017-06-15'),
    },
    {
      name: t('tues-fest-2019-schwarz-it-hub-sponsor-award.name'),
      description: t('tues-fest-2019-schwarz-it-hub-sponsor-award.description'), // https://elsys-bg.org/blog/18-uchenicheski-proekta-poluchiha-nagradi-vyv-vtoroto-izlojenie-na-uchenicheski-proekti-tues-fest-325
      date: new Date('2019-04-20'),
    },
    {
      name: t('completed-cae-english-certification.name'),
      description: t('completed-cae-english-certification.description'),
      date: new Date('2019-06-15'),
    },
    {
      name: t('tues-fest-2020-better-future-special-award.name'),
      description: t('tues-fest-2020-better-future-special-award.description'),
      date: new Date('2020-06-06'),
    },
    {
      name: t('hacktues-6-1st-place.name'),
      description: t('hacktues-6-1st-place.description'), // https://elsys-bg.org/blog/avtomatizirana-sistema-za-dostavka-na-pratki-s-dronove-specheli-goljamata-nagrada-na-shestija-uchenicheski-hakaton-hack-tues-6-447
      date: new Date('2020-10-11'),
    },
    {
      name: t('tues-fest-2021-ocado-sponsor-award.name'),
      description: t('tues-fest-2021-ocado-sponsor-award.description'),
      date: new Date('2021-04-25'), // https://elsys-bg.org/blog/tues-fest-2021-48-chasa-tues-484
    },
    {
      name: t('national-networking-olympiad-2021-4th-place.name'),
      description: 'national-networking-olympiad-2021-4th-place.description', // https://elsys-bg.org/blog/edinstveno-tuesari-v-top-15-na-nacionalnoto-systezanie-po-komputyrni-mreji-502
      date: new Date('2021-06-12'),
    },
    {
      name: t('completed-ccna-certification.name'),
      description: 'completed-ccna-certification.description', // https://elsys-bg.org/blog/edinstveno-tuesari-v-top-15-na-nacionalnoto-systezanie-po-komputyrni-mreji-502
      date: new Date('2021-07-01'),
    },
    {
      name: t('tues-science-fair-2021.name'),
      description: t('tues-science-fair-2021.description'), // https://elsys-bg.org/blog/pyrvo-izdanie-festival-na-naukata-v-tues-520; https://elsys-bg.org/blog/silen-start-za-tues-v-uchenicheskija-inovacionen-hyb-na-tu-sofija-489
      date: new Date('2021-11-15'),
    },
    {
      name: t('fmicodes-2022-3rd-place.name'),
      description: t('fmicodes-2022-3rd-place.description'), // https://fss.fmi.uni-sofia.bg/fmicodes-code-for-art/
      date: new Date('2022-03-20'),
    },
    {
      name: t('fmicodes-2023-organizer.name'),
      description: t('fmicodes-2023-organizer.description'),
      date: new Date('2023-03-18'),
    },
    {
      name: t('fmicodes-2024-organizer.name'),
      description: t('fmicodes-2024-organizer.description'),
      date: new Date('2024-03-16'),
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
  console.log(bottom);

  const minYear = top.reduce((acc, item) => {
    return Math.min(acc.dateStart.getFullYear(), item.dateStart.getFullYear());
  });
  const minDate = new Date(`${minYear}-01-01`);
  const maxDate = new Date(`${new Date().getFullYear()}-12-31`);
  const currentYear = new Date().getFullYear();
  const totalTime = maxDate.getTime() - minDate.getTime();

  return (
    <div className="mt-3 flex h-[150vh] w-full flex-row xl:h-auto xl:flex-col">
      <div className="relative w-1/2 p-0 xl:h-80 xl:w-auto">
        <ol className="absolute inset-0 ml-auto mt-auto flex h-full w-3/4 flex-col xl:h-3/4 xl:w-full xl:flex-row">
          {topPoints.map((item, index) => {
            const previousEndTimestamp = index > 0 ? topPoints[index - 1].date?.getTime() : minDate.getTime();
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
                    className="h-px bg-gradient-to-l from-transparent to-primary xl:h-full xl:w-px xl:bg-gradient-to-t"
                  >
                    <div
                      key={`${item.name}-point`}
                      className="absolute h-4 w-4 -translate-x-2 -translate-y-2 transform rounded-full bg-primary"
                    />

                    <span className="absolute -translate-x-1/2 -translate-y-8 transform text-xs">{index}</span>
                  </div>
                </li>
              </>
            );
          })}
        </ol>

        <ol className="absolute inset-0 ml-auto mt-auto flex h-full w-1/2 flex-col xl:h-1/2 xl:w-full xl:flex-row">
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

                <li
                  key={`${item.name}-vertical`}
                  className="mask-gradient-left block xl:hidden"
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
                  className={cn('mask-gradient-top hidden xl:block', item.dateEnd ? 'mask-gradient-right' : '')}
                  style={{ width: size }}
                >
                  <RevealCard
                    className="block h-full border-primary bg-primary"
                    title={item.name}
                    imageUrl={item.imageUrl}
                  >
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
    </div>
  );
}
