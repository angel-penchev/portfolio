'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { useTranslations } from 'next-intl';

export function BusinessCard() {
  const t = useTranslations('components.business-card');
  return (
    <CardContainer className="inter-var">
      <CardBody className="grid h-auto w-auto gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm md:w-[70vw] md:grid-cols-2">
        <CardItem translateZ="70" className="w-full">
          <Image
            src="/images/angel-penchev.jpeg"
            height="2000"
            width="2000"
            className="aspect-square w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt={t('name')}
          />
        </CardItem>

        <div className="flex flex-col justify-center gap-y-12">
          <CardItem translateZ="60">
            <CardItem translateZ="1000">
              <h1 className="text-xl font-bold md:text-3xl">{t('name')}</h1>
            </CardItem>

            <p className="text-md max-w-sm xl:text-xl">{t('title')}</p>
          </CardItem>

          <CardItem
            translateZ="80"
            as="button"
            className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
          >
            {t('lets-connect')}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
