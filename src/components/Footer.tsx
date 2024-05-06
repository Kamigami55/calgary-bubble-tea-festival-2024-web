import Link from 'next/link';

import { PAGE_URL } from '@/constants/pageUrl';

export function Footer() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Link href={PAGE_URL.HOME}>Bubble Tea Festival</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href={PAGE_URL.HOME}>Home</Link>
        <Link href={PAGE_URL.ABOUT}>About</Link>
        <Link href={PAGE_URL.LOCATION}>Location</Link>
      </div>
    </header>
  );
}
