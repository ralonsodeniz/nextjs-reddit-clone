import { Inter } from 'next/font/google';

import Navbar from '@/components/layout/Navbar';
import Toaster from '@/components/ui/Toast';
import { cn } from '@/lib/classnames';
import { ThemeProvider } from '@/styles/ThemeProvider';

import type { ReactNode } from 'react';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Koolala',
  description: 'NextJS reddit clone',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface IRootLayout {
  children: ReactNode;
  authModal: ReactNode;
}

const classname = {
  html: cn('bg-background text-slate-900 antialiased'),
  body: cn(['flex min-h-screen flex-col antialiased', inter.className]),
  main: cn('container h-full max-w-7xl flex-1 pt-20'),
};

const RootLayout = ({ children, authModal }: IRootLayout) => {
  return (
    <html lang="en" className={classname.html} suppressHydrationWarning>
      <body className={classname.body}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {authModal}
          <main className={classname.main}>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
