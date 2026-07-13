'use client';

import styles from './PerfomancePanel.module.css';
import { LoadingBar } from '@/components/ui/loading-bar/LoadingBar';
import { formatMetric, FormattedMetric } from '@/utils/formatMetric';
import { useWebVitalsStore, METRIC_KEYS } from '@/stores/performance.store';
import { useSiteSettings } from '@/stores/site-settings.store';

const LOCALES = {
  en: {
    t1: 'Real User Metrics',
    p1: 'Continue using the application to collect more data.',
  },
  id: {
    t1: 'Metrik Pengguna Nyata',
    p1: 'Terus gunakan aplikasi untuk mengumpulkan data lebih lanjut.',
  },
};

export default function PerfomancePanel() {
  const metrics = useWebVitalsStore((s) => s.metrics);
  const metricsFormatted = METRIC_KEYS.map((key) =>
    formatMetric(key, metrics[key]),
  ).filter((metric): metric is FormattedMetric => metric !== null);

  const { language } = useSiteSettings((s) => s.settings);
  const locale = LOCALES[language ?? 'en'];

  return (
    <div className={`${styles.container}`}>
      <p>{locale.t1}</p>
      <LoadingBar percent={metricsFormatted.length * 2} />
      <WebVitalsTable metrics={metricsFormatted} />
      {metricsFormatted.length < 5 && <span>{locale.p1}</span>}
    </div>
  );
}

function WebVitalsTable({ metrics }: { metrics: FormattedMetric[] }) {
  return (
    <div className={`${styles.ratingCt}`}>
      {metrics.map((metric) => {
        if (metric.key === 'fps' || metric.key === 'memory') return;
        return (
          <div key={metric.key} className={`${styles.ratingTable}`}>
            <p>{metric.name}</p>
            <p>{metric.value}</p>
            <p>
              {metric.rating}
              <span
                className={`${styles.circle} ${styles[metric.rating]}`}
              ></span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
