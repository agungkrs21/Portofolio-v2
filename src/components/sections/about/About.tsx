import Image from 'next/image';
import styles from './About.module.css';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section className={`${styles.about}`}>
      <div className={`maxwidth ${styles.wrapper}`}>
        <div className={`${styles.box}`}>
          <h1>Hi, I&apos;M</h1>
          <p>
            <span>{profile.name}</span>, {profile.heroDescription}
          </p>

          {/* dialog box */}
          <div className={styles.dialogBox}>
            <img
              src="/images/me.png"
              alt="Pixel Art Sprite"
              width={120}
              height={120}
              style={{ imageRendering: 'pixelated' }}
              className="rendering-pixelated w-[120px] h-[120px]"
            />
            {profile.goal}
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div>
            <img
              src="/images/me-big.png"
              alt="Pixel Art Sprite"
              width={350}
              height={350}
              style={{ imageRendering: 'pixelated' }}
              className="max-w-full h-auto rendering-pixelated"
            />
          </div>
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
        width={20}
        height={20}
        style={{ imageRendering: 'pixelated' }}
        className="rendering-pixelated w-auto h-[20px]"
      />
      <span>{detail}</span>
    </div>
  );
}
