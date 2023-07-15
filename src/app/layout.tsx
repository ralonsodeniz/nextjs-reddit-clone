import { Inter } from 'next/font/google';

import Navbar from '@/components/layout/Navbar';
import Toaster from '@/components/ui/Toast';
import { cn } from '@/lib/classnames';

import type { ReactNode } from 'react';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Koolala',
  description: 'NextJS reddit clone',
};

interface IRootLayout {
  children: ReactNode;
  authModal: ReactNode;
}

const classname = {
  html: cn('bg-white text-slate-900 antialiased'),
  body: cn([
    'flex min-h-screen flex-col bg-slate-50 antialiased',
    inter.className,
  ]),
  main: cn('container h-full max-w-7xl flex-1 pt-20'),
};

const RootLayout = ({ children, authModal }: IRootLayout) => {
  return (
    <html lang="en" className={classname.html}>
      <body className={classname.body}>
        <Navbar />
        {authModal}
        <main className={classname.main}>{children}</main>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
