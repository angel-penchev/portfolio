import React from 'react';
import { Timeline, TimelineSide } from '@/components/timeline/timeline';
import { getTranslations } from 'next-intl/server';
import { TbCertificate, TbPodium } from 'react-icons/tb';
import { FaAward, FaLaptop, FaLaptopCode } from 'react-icons/fa6';
import { IoLogoGameControllerA } from 'react-icons/io';
import { FaPaintBrush } from 'react-icons/fa';
import { GiPodiumThird, GiPodiumWinner } from 'react-icons/gi';
import { HiSparkles } from 'react-icons/hi2';

export async function PersonalTimeline() {
  const t = await getTranslations('components.personal-timeline');
  const periods = [
    {
      name: t('tues.name'),
      description: t('tues.description'),
      imageUrl: '/logos/tues.svg',
      colorClass: 'bg-blue-900',
      dateStart: new Date('2016-09-15'),
      dateEnd: new Date('2021-06-12'),
      side: TimelineSide.Top,
    },
    {
      name: t('sofia-university.name'),
      description: t('sofia-university.description'),
      imageUrl: '/logos/sofia-university.svg',
      colorClass: 'bg-purple-900',
      dateStart: new Date('2021-10-01'),
      dateEnd: null,
      side: TimelineSide.Top,
    },
    {
      name: t('telebidpro.name'),
      description: t('telebidpro.description'),
      imageUrl: '/logos/tues.svg',
      colorClass: 'bg-orange-800',
      dateStart: new Date('2020-06-10'),
      dateEnd: new Date('2020-12-31'),
      side: TimelineSide.Bottom,
    },
    {
      name: t('haemimont.name'),
      description: t('haemimont.description'),
      imageUrl: '/logos/haemimont.svg',
      colorClass: 'bg-blue-600',
      dateStart: new Date('2021-09-01'),
      dateEnd: null,
      side: TimelineSide.Bottom,
    },
  ];

  const points = [
    {
      name: t('hacktues-3.name'),
      longName: t('hacktues-3.long-name'),
      description: t('hacktues-3.description'), // https://tues.bg/blog/hack-tues-3-art-creativity-72
      date: new Date('2017-03-26'),
      icon: <FaPaintBrush />,
      isImportant: false,
      side: TimelineSide.Top,
    },
    {
      name: t('fce.name'),
      description: t('fce-certification.description'),
      date: new Date('2017-06-15'),
      icon: <TbCertificate />,
      isImportant: true,
      side: TimelineSide.Bottom,
    },
    {
      name: t('hack-30xtues.name'),
      longName: t('hack-30xtues.long-name'),
      description: t('hack-30xtues.description'), // https://tues.bg/blog/hack-tues-3-art-creativity-72
      date: new Date('2018-03-26'),
      icon: <IoLogoGameControllerA />,
      isImportant: false,
      side: TimelineSide.Top,
    },
    {
      name: t('hacktues-5.name'),
      longName: t('hacktues-5.long-name'),
      description: t('hacktues-5.description'), // https://tues.bg/blog/hack-tues-3-art-creativity-72
      date: new Date('2019-03-26'),
      icon: <FaLaptop />,
      isImportant: false,
      side: TimelineSide.Bottom,
    },
    {
      name: t('tues-fest-2019.name'),
      longName: t('tues-fest-2019.long-name'),
      description: t('tues-fest-2019.description'), // https://elsys-bg.org/blog/18-uchenicheski-proekta-poluchiha-nagradi-vyv-vtoroto-izlojenie-na-uchenicheski-proekti-tues-fest-325
      date: new Date('2019-04-20'),
      icon: <FaAward />,
      isImportant: true,
      side: TimelineSide.Top,
    },
    {
      name: t('cae.name'),
      longName: t('cae.long-name'),
      description: t('cae-certification.description'),
      date: new Date('2019-08-15'),
      icon: <TbCertificate />,
      isImportant: true,
      side: TimelineSide.Bottom,
    },
    {
      name: t('tues-site-admin.name'),
      longName: t('tues-site-admin.long-name'),
      description: t('tues-site-admin.description'),
      date: new Date('2020-03-15'),
      icon: <FaLaptopCode />,
      isImportant: false,
      side: TimelineSide.Top,
    },
    {
      name: t('tues-fest-2020.name'),
      longName: t('tues-fest-2020.long-name'),
      description: t('tues-fest-2020.description'), // https://tues.bg/blog/mashtabno-virtualno-izlojenie-na-tehnologichni-proekti-organiziraha-uchenici-ot-tues-433
      date: new Date('2020-06-06'),
      icon: <FaAward />,
      isImportant: true,
      side: TimelineSide.Bottom,
    },
    {
      name: t('hacktues-6.name'),
      longName: t('hacktues-6.long-name'),
      description: t('hacktues-6.description'), // https://elsys-bg.org/blog/avtomatizirana-sistema-za-dostavka-na-pratki-s-dronove-specheli-goljamata-nagrada-na-shestija-uchenicheski-hakaton-hack-tues-6-447
      date: new Date('2020-10-11'),
      icon: <GiPodiumWinner />,
      isImportant: true,
      side: TimelineSide.Top,
    },
    {
      name: t('tues-fest-2021.name'),
      longName: t('tues-fest-2021.long-name'),
      description: t('tues-fest-2021.description'),
      date: new Date('2021-03-25'), // https://elsys-bg.org/blog/tues-fest-2021-48-chasa-tues-484
      icon: <FaAward />,
      isImportant: true,
      side: TimelineSide.Bottom,
    },
    {
      name: t('national-computer-networking-olympiad-2021.name'),
      description: 'national-computer-networking-olympiad-2021.description', // https://elsys-bg.org/blog/edinstveno-tuesari-v-top-15-na-nacionalnoto-systezanie-po-komputyrni-mreji-502
      date: new Date('2021-06-12'),
      icon: <FaAward />,
      isImportant: true,
      side: TimelineSide.Top,
    },
    {
      name: t('ccna.name'),
      description: 'ccna.description', // https://elsys-bg.org/blog/edinstveno-tuesari-v-top-15-na-nacionalnoto-systezanie-po-komputyrni-mreji-502
      date: new Date('2021-08-01'),
      icon: <TbCertificate />,
      isImportant: true,
      side: TimelineSide.Bottom,
    },
    {
      name: t('tues-science-fair-2021.name'),
      description: t('tues-science-fair-2021.description'), // https://elsys-bg.org/blog/pyrvo-izdanie-festival-na-naukata-v-tues-520; https://elsys-bg.org/blog/silen-start-za-tues-v-uchenicheskija-inovacionen-hyb-na-tu-sofija-489
      date: new Date('2021-11-15'),
      icon: <TbPodium />,
      isImportant: false,
      side: TimelineSide.Top,
    },
    {
      name: t('fmicodes-2022.name'),
      description: t('fmicodes-2022.description'), // https://fss.fmi.uni-sofia.bg/fmicodes-code-for-art/
      date: new Date('2022-03-20'),
      icon: <GiPodiumThird />,
      isImportant: true,
      side: TimelineSide.Top,
    },
    {
      name: t('fmicodes-2023.name'),
      description: t('fmicodes-2023.description'),
      date: new Date('2023-03-18'),
      icon: <HiSparkles />,
      isImportant: true,
      side: TimelineSide.Top,
    },
    {
      name: t('fmicodes-2024.name'),
      description: t('fmicodes-2024.description'),
      date: new Date('2024-03-16'),
      icon: <HiSparkles />,
      isImportant: true,
      side: TimelineSide.Top,
    },
  ];

  return <Timeline points={points} periods={periods} />;
}
