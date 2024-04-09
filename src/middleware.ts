import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 지원하는 언어
  locales: ['en', 'ko'],
  // 기본 언어
  defaultLocale: 'ko',
});

export const config = {
  // 미들웨어를 적용할 경로
  matcher: ['/', '/(ko|en)/:path*'],
};
