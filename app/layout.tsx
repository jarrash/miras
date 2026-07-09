import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'مِراس - بودكاست مرونة الأعمال',
  description: 'حوارات مع القادة والخبراء وصناع القرار حول بناء المؤسسات القادرة على الصمود والتكيف والنمو',
  keywords: ['بودكاست', 'الأعمال', 'المرونة', 'القيادة', 'التحول الرقمي'],
  openGraph: {
    title: 'مِراس - بودكاست مرونة الأعمال',
    description: 'حوارات مع القادة والخبراء حول بناء المؤسسات المرنة',
    url: 'https://miras.podcast.com',
    type: 'website',
    images: [
      {
        url: '/assets/miras-logo-light.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
