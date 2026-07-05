import Image from 'next/image';
import { contact } from '@/data/contact';
import styles from './Contact.module.css';
import { ContactLink } from '@/components/client/contacts/ContactLink';

export default function Contact() {
  return (
    <section id="contact">
      <div className={`maxwidth ${styles.container}`}>
        <StayInTouch />
        {/* dialog box */}
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
        {/* link contack */}
        <ContactLink styles={styles.link} links={contact.links} />
      </div>
    </section>
  );
}

function StayInTouch() {
  return (
    <div className={`${styles.styWrapper}`}>
      <Image
        src="/images/stay-in-touch-base.png"
        alt="Stay in touch"
        width={147}
        height={103}
        style={{ imageRendering: 'pixelated' }}
        className={`${styles.sty}`}
      />
      <div>
        <Image
          src="/particels/styt/bubble.png"
          alt="sprite buble"
          width={25}
          height={23}
          className={`${styles.styIcon} ${styles.stybubble}`}
        />
        <Image
          src="/particels/styt/love.png"
          alt="sprite love"
          width={13}
          height={12}
          className={`${styles.styIcon} ${styles.styLove}`}
        />
        <Image
          src="/particels/styt/mail.png"
          alt="sprite mail"
          width={30}
          height={23}
          className={`${styles.styIcon} ${styles.styEmail}`}
        />
        <Image
          src="/particels/styt/maniq-l.png"
          alt="sprite particel"
          width={194}
          height={71}
          className={`${styles.styIcon} ${styles.styManiql}`}
        />
        <Image
          src="/particels/styt/maniq-r.png"
          alt="sprite particel"
          width={194}
          height={71}
          className={`${styles.styIcon} ${styles.styManiqr}`}
        />
      </div>
    </div>
  );
}
