import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import LenisProvider from '@/components/LenisProvider';
import FontAwesomeSetup from '@/components/FontAwesomeSetup';
import { Roboto_Flex, Inter } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';

const robotoFlex = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto-flex' });
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Upskwela — Community-Based Learning in the Philippines',
  description: 'Build communities, create courses, and learn together with Upskwela.',
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/logo.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} scroll-smooth`}>
      <head />
      <body
        className={`${inter.className} min-h-dvh bg-gradient-to-b from-sky-50 via-blue-50 to-white dark:from-sky-900/10 dark:via-sky-950/10 dark:to-[var(--background)]`}
      >
        <div className="side-gradient-overlay" aria-hidden="true" />
        <FontAwesomeSetup />
        <LenisProvider>{children}</LenisProvider>
        <ScrollToTop />
        <Toaster richColors />
      </body>
    </html>
  );
}
