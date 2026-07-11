import Image from "next/image";
import styles from "./SettingsPanel.module.css"

export default function SettingsPanel() {
 return (
    <div className={`${styles.container}`}>
      <Image
        src="/images/me-desk-200.png"
        alt="Work In Progress"
        width={208}
        height={166}
        className="[image-rendering:pixelated] h-auto w-[208px]"
      />
    </div>
  );
}
