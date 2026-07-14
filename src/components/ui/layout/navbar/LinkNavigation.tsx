'use client';

import { Button } from '@/components/ui/button/Button';
import type { Locale } from '@/i18n/config';
import { useEffect, useRef, useState } from 'react';
import styles from './LinkNavigation.module.css';
import Image from 'next/image';
interface LinkNavigationProps {
  locale: Locale;
  links: { id: string; text: string }[];
}

export function LinkNavigation({ locale, links }: LinkNavigationProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const clickOutsideMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', clickOutsideMenu);

    return () => document.removeEventListener('pointerdown', clickOutsideMenu);
  }, []);

  function handleClick(state: boolean) {
    if (state === isOpen) return;
    setIsOpen(state);
  }

  return (
    <div ref={menuRef} className={`${styles.container}`}>
      <ul className={`${isOpen ? styles.menu_open : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Button href={`/${locale}#${link.id}`}>{link.text}</Button>
          </li>
        ))}
        <li>
          <Button
            href={`/resume/Resume-Agung-Kurniawan-2026-${locale}.pdf`}
            variant="secondary"
            type="normal"
          >
            RESUME
          </Button>
        </li>
      </ul>

      <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
    </div>
  );
}

interface HamburgerMenuProps {
  isOpen: boolean;
  handleClick: (state: boolean) => void;
}

function HamburgerMenu({ isOpen, handleClick }: HamburgerMenuProps) {
  return (
    <div className={`${styles.hamburgerMenu_ct}`}>
      <Button onClick={() => handleClick(!isOpen)}>
        <Image
          src="/icon/hamburger.svg"
          alt="Hamburger Menu"
          width={30}
          height={30}
          className="[image-rendering:pixelated] h-[30px] w-[30px]"
        />
      </Button>
    </div>
  );
}
