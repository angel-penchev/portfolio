import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Badge>{t('name')}</Badge>
    </main>
  );
}
