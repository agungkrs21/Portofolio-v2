'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { Button } from '@/components/ui/button/Button';
import { useState, useRef, useEffect } from 'react';

// readonly type
const links = ['about', 'projects', 'contact'] as const;
interface NavBarPorps {
  locale: string;
}

export default function NavBar({ locale }: NavBarPorps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const clickOutsideMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', clickOutsideMenu);

    return () => document.removeEventListener('pointerdown', clickOutsideMenu);
  }, []);

  return (
    <nav className={`${styles.navbar}`}>
      <div ref={menuRef} className={`${styles.container}`}>
        <Link href={`/${locale}`}>
          <Image
            src="/brand.svg"
            alt="logo"
            width={74}
            height={30}
            priority
            className="w-[74px] h-[30px]"
          />
        </Link>

        {/* link navigation */}
        <ul
          className={`flex-center ml-auto ${open ? styles.open : styles.close}`}
        >
          {links.map((link) => (
            <li key={link}>
              <Button href={`/${locale}#${link}`}>{link.toUpperCase()}</Button>
            </li>
          ))}
          <li>
            {/* resume buttom */}
            <Button variant="secondary">RESUME</Button>
          </li>
        </ul>
        {/* hamburger icon */}
        <div className={styles.hamburger}>
          <Button padding={false} onClick={() => setOpen(!open)}>
            <Image
              src="/icon/hamburger.svg"
              alt="hamburger"
              width={30}
              height={30}
              className="pixelated h-[30px] w-[30px]"
            />
          </Button>
        </div>
      </div>
    </nav>
  );
}
