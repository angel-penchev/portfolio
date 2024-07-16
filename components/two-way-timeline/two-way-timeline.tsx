import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Badge } from '@/components/ui/badge';

export async function TwoWayTimeline() {
  const t = await getTranslations('components.two-way-timeline');
  const top = [
    {
      name: t('TUES'),
      description: '',
      color: '#444444',
      dateStart: new Date('2016-09-15'),
      dateEnd: new Date('2021-06-15'),
    },
    {
      name: t('SU'),
      description: '',
      color: '#888888',
      dateStart: new Date('2021-10-01'),
      dateEnd: null,
    },
  ];

  const bottom = [
    {
      name: t('telebidpro'),
      position: t('project-intern'),
      description: '',
      color: '#444444',
      dateStart: new Date('2020-07-01'),
      dateEnd: new Date('2020-07-31'),
    },
    {
      name: t('haemimont'),
      position: t('intern'),
      color: '#444444',
      dateStart: new Date('2021-09-01'),
      dateEnd: new Date('2021-12-01'),
    },
    {
      name: t('haemimont'),
      position: t('software-developer'),
      color: '#888888',
      dateStart: new Date('2021-12-01'),
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
    <div className="flex h-[1000px] flex-row xl:flex-col">
      <ol className="-z-10 flex h-full w-auto flex-col xl:h-auto xl:w-full xl:flex-row">
        {top.map((item, index) => {
          const time = (item.dateEnd ? item.dateEnd.getTime() : Date.now()) - item.dateStart.getTime();
          const size = `${(time / totalTime) * 100}%`;

          const previousEndTimestamp = index > 0 ? top[index - 1].dateEnd?.getTime() : minDate.getTime();
          const gapTime = previousEndTimestamp ? item.dateStart.getTime() - previousEndTimestamp : 0;
          const margin = `${(gapTime / totalTime) * 100}%`;

          return (
            <>
              {/* I need to this atrocity because percentage margins don't take the parent size vertically*/}
              <div className="hidden xl:block" style={{ width: margin }} />
              <div className="block xl:hidden" style={{ height: margin }} />

              <li key={item.name} className="hidden h-32 xl:block" style={{ width: size, backgroundColor: item.color }}>
                {item.name}
              </li>

              <li
                key={item.name}
                className="block w-64 xl:hidden"
                style={{ height: size, backgroundColor: item.color }}
              >
                {item.name}
              </li>
            </>
          );
        })}
      </ol>

      <ol className="flex h-auto w-0 flex-col items-center gap-1 xl:h-0 xl:w-auto xl:flex-row">
        {Array.from({ length: currentYear - minYear + 1 }, (_, i) => minYear + i).map((year) => (
          <>
            <li key={`${year}-year`}>
              <Badge className="h-6 text-sm">{year}</Badge>
            </li>
            <div key={`${year}-line`} className="h-full w-1 grow bg-primary xl:h-1 xl:w-full"></div>
          </>
        ))}
      </ol>

      <ol className="-z-10 flex h-full w-auto flex-col xl:h-auto xl:w-full xl:flex-row">
        {bottom.map((item, index) => {
          const time = (item.dateEnd ? item.dateEnd.getTime() : Date.now()) - item.dateStart.getTime();
          const size = `${(time / totalTime) * 100}%`;

          const previousEndTimestamp = index > 0 ? bottom[index - 1].dateEnd?.getTime() : minDate.getTime();
          const gapTime = previousEndTimestamp ? item.dateStart.getTime() - previousEndTimestamp : 0;
          const margin = `${(gapTime / totalTime) * 100}%`;

          return (
            <>
              {/* I need to this atrocity because percentage margins don't take the parent size vertically*/}
              <div className="hidden xl:block" style={{ width: margin }} />
              <div className="block xl:hidden" style={{ height: margin }} />

              <li key={item.name} className="hidden h-32 xl:block" style={{ width: size, backgroundColor: item.color }}>
                {item.name}
              </li>

              <li
                key={item.name}
                className="block w-64 xl:hidden"
                style={{ height: size, backgroundColor: item.color }}
              >
                {item.name}
              </li>
            </>
          );
        })}
      </ol>
    </div>
  );
}
