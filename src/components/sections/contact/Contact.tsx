import Image from 'next/image';
import { contact } from '@/data/contact';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className={`maxwidth ${styles.container}`}>
        <div>
          <Image
            src="/images/stay-in-touch-base.png"
            alt="Stay in touch"
            width={147}
            height={103}
            style={{ imageRendering: 'pixelated' }}
            className={`${styles.sty}`}
          />
        </div>
        <div className={`${styles.dialogbox}`}>
          <Image
            src="/images/me-phone-o.png"
            alt="Pixel Art Sprite"
            width={186}
            height={238}
            style={{ imageRendering: 'pixelated' }}
          />
          <p>{contact.summary}</p>
        </div>
        <ul className={`${styles.link}`}>
          {contact.links.map((link) => (
            <li key={link.name}>
              <Image
                src={link.icon}
                alt={`Sprite ${link.name}`}
                width={25}
                height={23}
              />
              <a href="#">{link.term}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
