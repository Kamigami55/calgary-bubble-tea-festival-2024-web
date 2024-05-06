import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const prompt = Prompt({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calgary Bubble Tea Festival 2024',
  description: 'Experience the origin of the bubble tea',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(prompt.className, 'bg-white')}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
