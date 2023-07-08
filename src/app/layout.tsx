import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';

import { cn } from '@/lib/classnames';
import Navbar from '@/components/layout/Navbar';
import Toaster from '@/components/ui/Toast';

import '@/styles/globals.css';

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
  html: 'bg-white text-slate-900 antialiased',
  body: ['min-h-screen bg-slate-50 antialiased flex flex-col', inter.className],
  main: 'container max-w-7xl h-full pt-20 flex-1',
};

const RootLayout = ({ children, authModal }: IRootLayout) => {

  return (
    <html lang="en" className={cn(classname.html)}>
      <body className={cn(classname.body)}>
        <Navbar />
        {authModal}
        <main className={cn(classname.main)}>{children}</main>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
