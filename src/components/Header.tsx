'use client';
import Image from 'next/image';
import Link from 'next/link';

import { PAGE_URL } from '@/constants/pageUrl';

export function Header() {
  return (
    <header className="my-1 flex h-16 w-full items-center justify-between px-5 py-3 lg:px-16">
      <div className="flex items-center">
        <Link href={PAGE_URL.HOME}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={297}
            height={22}
            className="md:w-full w-5/6"
          />
        </Link>
      </div>
      <div className="hidden items-center gap-8 lg:flex">
        <Link href={PAGE_URL.HOME}>Home</Link>
        <Link href={PAGE_URL.ABOUT}>About</Link>
        <Link href={PAGE_URL.LOCATION}>Location</Link>
      </div>

      <div className="flex lg:hidden">
        <button>
          <Image src="/menu.svg" alt="menu" width={24} height={24} />
        </button>
      </div>
    </header>
  );
}
