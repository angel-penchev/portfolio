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
      color: '#444444',
      dateStart: new Date('2021-10-01'),
      dateEnd: null,
    },
  ];

  const minYear = top.reduce((acc, item) => {
    return Math.min(acc.dateStart.getFullYear(), item.dateStart.getFullYear());
  });
  const currentYear = new Date().getFullYear();

  return (
    <ol className="mx-1 flex flex-col items-center gap-1 xl:flex-row" style={{ height: '1600px' }}>
      {Array.from({ length: currentYear - minYear + 1 }, (_, i) => minYear + i).map((year) => (
        <>
          <li>
            <Badge className="aspect-square text-sm">{year}</Badge>
          </li>
          <div className="h-full w-1 grow bg-primary xl:h-1 xl:w-full"></div>
        </>
      ))}
    </ol>
  );
}
