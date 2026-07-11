import Image from 'next/image';
import styles from './About.module.css';
import { profile } from '@/data/profile';
import Link from 'next/link';
import { DialogBox } from '@/components/client/dialog-box/DialogBox';

interface AboutProps {
  locale: string;
}

export default function About({ locale }: AboutProps) {
  return (
    <section className={`${styles.about}`} id="about">
      <div className={`maxwidth firstPage ${styles.wrapper}`}>
        <div className={`${styles.box}`}>
          <h1>Hi, I&apos;M</h1>
          <p>
            <span>{profile.name}</span>, {profile.heroDescription}
          </p>

          <Link href={`/${locale}/about`}>
            <p className={`${styles.abMore}`}>More about me</p>
          </Link>

          {/* dialog box */}
          <DialogBox dialog={profile.goal} />
        </div>
        {/* profile pic box */}
        <div className={`${styles.box}`}>
          <div>
            <img
              src="/images/me-pp.png"
              alt="Pixel Art Sprite"
              width={520}
              height={520}
              style={{ imageRendering: 'pixelated' }}
              className={`${styles.imgBig}`}
            />
          </div>
          <div className={`${styles.wave}`}></div>
          <div className={`${styles.wave}`}></div>
        </div>
        <div className={`${styles.box}`}>
          {profile.details.map((detail) => (
            <Detail key={detail.desc} path={detail.icon} detail={detail.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

type DetailProps = {
  path: string;
  detail: string;
};

function Detail({ path, detail }: DetailProps) {
  return (
    <div className={`${styles.detail}`}>
      <Image
        src={`${path}`}
        alt="icon"
        width={21}
        height={21}
        style={{ imageRendering: 'pixelated' }}
        className="rendering-pixelated w-auto h-[20px]"
      />
      <span>{detail}</span>
    </div>
  );
}
