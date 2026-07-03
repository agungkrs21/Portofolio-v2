import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { Button } from '@/components/ui/button/Button';

// readonly type
const links = ['about', 'project', 'contact'] as const;

export default function NavBar() {
  return (
    <nav className={`${styles.navbar}`}>
      {/* TODO BRAND IMAGE */}
      <div className={`${styles.container}`}>
        <Link href="#">
          <Image src="/brand.svg" alt="logo" width={74} height={60} />
        </Link>

        <ul className="flex-center">
          {links.map((link) => (
            <li key={link}>
              <Button href={`#${link}`}>{link.toUpperCase()}</Button>
            </li>
          ))}
          <li className="ml-8">
            <Button variant="secondary">RESUME</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
