import Button from '@/components/Button';

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <body lang={locale}>
      <Button language="ko">한국어</Button>
      <Button language="en">영어</Button>

      {children}
    </body>
  );
}
