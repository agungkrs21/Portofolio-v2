import { Terminal } from '@/components/client/terminal/Terminal';
import styles from './UtilityDock.module.css';

export default function UtilityDock() {
  return (
    <div className={`${styles.container}`}>
      <Terminal  />
    </div>
  );
}
