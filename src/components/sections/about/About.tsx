import Link from 'next/link';
import Image from 'next/image';
import styles from './About.module.css';
import { profileAssets } from '@/data/site/profile';
import type { Profile } from '@/i18n/locales/en/site/types';
import { DialogBox } from '@/components/client/dialog-box/DialogBox';

interface AboutProps {
  locale: string;
  dict: Profile;
}

export default function About({ locale, dict }: AboutProps) {
  return (
    <section className={`${styles.about}`} id="about">
      <div className={`maxwidth firstPage ${styles.wrapper}`}>
        <div className={`${styles.box}`}>
          <h1>{dict.title}</h1>
          <p>
            <span>{dict.name}</span>, {dict.summary}
          </p>

          <Link href={`/${locale}/about`} prefetch={false}>
            <p className={`${styles.abMore}`}>{dict.btn_text}</p>
          </Link>

          {/* dialog box */}
          <DialogBox dialog={dict.goal} />
        </div>
        {/* profile pic box */}
        <div className={`${styles.box}`}>
          <div>
            <Image
              src="/images/me-pp.png"
              alt="Pixel Art Sprite"
              width={520}
              height={520}
              className={`[image-rendering:pixelated] ${styles.imgBig}`}
              priority
            />
          </div>
          <div className={`${styles.wave}`}></div>
          <div className={`${styles.wave}`}></div>
        </div>
        <div className={`${styles.box}`}>
          {dict.details.map((detail, index) => (
            <Detail
              key={detail.id}
              path={profileAssets[index]}
              detail={detail.text}
            />
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
        className="[image-rendering:pixelated] w-auto h-[20px]"
        priority
      />
      <span>{detail}</span>
    </div>
  );
}
