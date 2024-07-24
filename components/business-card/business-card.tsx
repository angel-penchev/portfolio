'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

interface BusinessCardProps {
  containerClassName?: string;
}

export function BusinessCard({ containerClassName }: BusinessCardProps) {
  const t = useTranslations('components.business-card');
  return (
    <CardContainer className="inter-var group/card" containerClassName={containerClassName}>
      <CardBody className="grid h-auto w-[50rem] scale-75 gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-transform group-hover/card:scale-100 sm:grid-cols-2">
        <CardItem translateZ="70" className="w-full">
          <Image
            src="/images/angel-penchev.jpeg"
            height="2000"
            width="2000"
            className="aspect-square w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt={t('name')}
          />
        </CardItem>

        <div className="flex flex-col items-center justify-center gap-y-12 text-center">
          <CardItem translateZ="60" className="flex flex-col items-center justify-center gap-1">
            <CardItem translateZ="1000" as="h1" className="text-2xl font-bold lg:text-4xl">
              {t('name')}
            </CardItem>
            <p className="max-w-sm text-xs uppercase tracking-wide text-muted-foreground lg:text-sm">{t('title')}</p>
          </CardItem>

          <CardItem translateZ="80">
            <Link href="/connect" className="group">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
              >
                <span className="flex flex-row items-center">
                  {t('lets-connect')}
                  <div className="ml-0 h-2.5 w-0 rounded-full bg-primary transition-all delay-150 duration-300 group-hover:ml-2 group-hover:block group-hover:w-2.5 group-hover:bg-green-500" />
                </span>
              </HoverBorderGradient>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
