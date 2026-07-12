import { CrtOverlay } from '@/components/ui/crt-overlay/CrtOverlay';
import './globals.css';
import { montserrat, comfortana } from '@/lib/fonts/fonts';
import Image from 'next/image';
import styles from './global-not-found.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${comfortana.variable}`}
    >
      <body>
        <main>
          <CrtOverlay>
            <section className={`maxwidth ${styles.container}`}>
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
              <div className={styles.dialogBox}>
                <Image
                  src="/images/me.png"
                  alt="Pixel Art Sprite"
                  width={166}
                  height={205}
                  style={{ imageRendering: 'pixelated' }}
                  className="[image-rendering:pixelated] w-[120px] h-auto"
                />
                <p>
                  Strange... I&apos;ve worked on this website for months, and
                  I&apos;ve never seen the place you seek. Why not head back to
                  the{' '}
                  <a href={process.env.NEXT_PUBLIC_SITE_URL ?? '/'}>homepage</a>
                </p>
              </div>
            </section>
          </CrtOverlay>
        </main>
      </body>
    </html>
  );
}
