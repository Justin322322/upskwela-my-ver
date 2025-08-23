import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster, FontAwesomeSetup, ThemeProvider, ScrollToTop } from '@/components';
import { Roboto_Flex, Inter } from 'next/font/google';

const robotoFlex = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto-flex' });
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Upskwela — Community-Based Learning in the Philippines',
  description: 'Build communities, create courses, and learn together with Upskwela.',
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/logo.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} scroll-smooth`} suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} min-h-dvh bg-gradient-to-b from-sky-50 via-blue-50 to-white dark:from-sky-900/10 dark:via-sky-950/10 dark:to-[var(--background)]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="side-gradient-overlay" aria-hidden="true" />
          <FontAwesomeSetup />
          {children}
          <ScrollToTop />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
