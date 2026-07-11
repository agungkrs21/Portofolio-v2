import Image from 'next/image';
import Link from 'next/link';
import styles from './not-found.module.css';
export default function NotFound() {
  return (
    <section className={`maxwidth firstPage ${styles.container}`}>
      <h1>
        <span className="hidden">Not found</span>
        <Image
          src="/images/404-desk-300.png"
          alt=""
          width={474}
          height={351}
          priority
          className="[image-rendering:pixelated] h-auto w-[474px]"
        />
      </h1>
      <p>
        Strange... I&apos;ve worked on this website for months, and I&apos;ve
        never seen the place you seek. Why not head back to the{' '}
        <Link href="/">homepage</Link>
      </p>
    </section>
  );
}
