import Image from 'next/image';
import styles from './SettingsPanel.module.css';

export default function SettingsPanel() {
  return (
    <div className={`${styles.container}`}>
      <p>Currently avibale</p>
      <section>
        <div>
          <p>Languge</p>
          <div className={`${styles.set_languge}`}>
            <button>en</button>
            <button>id</button>
          </div>
        </div>
        <div>
          <p>Cursor</p>
          <div>
            <button>on</button>
            <button>off</button>
          </div>
        </div>
      </section>

      <p>This here just to remaind me to add it</p>
      <section>
        <div>
          <p>Animation</p>
          <span>button here</span>
        </div>
        <div>
          <p>Crt Effect</p>
          <span>button here</span>
        </div>
      </section>
    </div>
  );
}
