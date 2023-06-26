import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';
import { cn } from '@/lib';
import Navbar from '@/components/layout/Navbar';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home',
  description: 'NextJS reddit clone',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased')}>
      <body
        className={cn(
          'min-h-screen pt-12 bg-slate-50 antialiased',
          inter.className,
        )}
      >
        <Navbar />
        <main className={cn('container max-w-7xl h-full pt-12')}>
          {children}
        </main>
      </body>
    </html>
  );
}
