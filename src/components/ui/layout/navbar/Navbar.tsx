import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import type { Locale } from '@/i18n/config';
import { LinkNavigation } from '@/components/ui/layout/navbar/LinkNavigation';
import { getDictionary } from '@/i18n/dictionary';

interface NavBarPorps {
  locale: Locale;
}

export default async function NavBar({ locale }: NavBarPorps) {
  const { navBar } = await getDictionary(locale);
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.container}`}>
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

        <LinkNavigation locale={locale} links={navBar.links} />
      </div>
    </nav>
  );
}
