import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer({ locale }: { locale: string }) {
  return (
    <section id="footer">
      <div className={`${styles.container}`}>
        <Image
          src="/images/my-cat.png"
          alt="Sprite cate"
          width={48}
          height={48}
        />
        <p className={`${locale === 'en' ? 'block' : 'hidden'}`}>
          Designed in Figma, developed with Next.js and Tailwind CSS, and
          deployed on Vercel. Every visual asset was handcrafted in Adobe
          Photoshop.
        </p>
        <p className={`${locale === 'id' ? 'block' : 'hidden'}`}>
          Dirancang menggunakan Figma, dikembangkan dengan Next.js dan Tailwind
          CSS, serta dideploy di Vercel. Seluruh aset visual dibuat secara
          manual menggunakan Adobe Photoshop.
        </p>
      </div>
    </section>
  );
}
