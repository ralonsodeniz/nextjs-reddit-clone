import { Inter } from 'next/font/google';

import Toaster from '@/components/ui/Toast';
import { cn } from '@/lib/classnames';
import { ThemeProvider } from '@/styles/ThemeProvider';

import Navbar from './_components/Navbar';

import type { ReactNode } from 'react';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  description: 'NextJS reddit clone',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  },
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' },
  ],
  title: { default: 'Koolala', template: '%s | Koolala' },
};

type RootLayoutProps = {
  authModal: ReactNode;
  children: ReactNode;
};

const classname = {
  body: cn(['flex min-h-screen flex-col antialiased', inter.className]),
  html: cn('bg-background text-slate-900 antialiased'),
  main: cn('container h-full max-w-7xl flex-1 pt-20'),
};

const RootLayout = ({ authModal, children }: RootLayoutProps) => {
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
