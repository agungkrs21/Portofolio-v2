import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <section id="footer">
      <div className={`${styles.container}`}>
        <Image
          src="/images/my-cat.png"
          alt="Sprite cate"
          width={48}
          height={48}
        />
        <p>
          Designed in Figma, developed with Next.js and Tailwind CSS, and
          deployed on Vercel. Every visual asset was handcrafted in Adobe
          Photoshop.
        </p>
      </div>
    </section>
  );
}
