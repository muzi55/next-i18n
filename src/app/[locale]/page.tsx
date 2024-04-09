import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('main'); // json key 값

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subTitle')}</p>

      <p>{t('summary')}</p>
    </div>
  );
}
