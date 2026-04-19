import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '또비 | 풀스택 개발자 포트폴리오',
  description:
    'Next.js, NestJS, TypeScript를 다루는 풀스택 개발자 또비의 포트폴리오입니다. 실제 운영 서비스 경험 보유.',
  keywords: ['풀스택', '프론트엔드', 'React', 'Next.js', 'NestJS', 'TypeScript', '포트폴리오'],
  openGraph: {
    title: '또비 | 풀스택 개발자',
    description: 'Vue.js → Next.js, NestJS 기반 풀스택 개발자 포트폴리오',
    url: 'https://또비.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
