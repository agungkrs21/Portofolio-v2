import Image from 'next/image';
import styles from './DialogBox.module.css';

interface DialogBoxPrps {
  dialog: string;
}

export function DialogBox({ dialog }: DialogBoxPrps) {
  return (
    <div className={styles.dialogBox}>
      <Image
        src="/images/me.png"
        alt="Pixel Art Sprite"
        width={166}
        height={205}
        style={{ imageRendering: 'pixelated' }}
        className="[image-rendering:pixelated] w-[120px] h-auto"
      />
      <p>{dialog}</p>
    </div>
  );
}
