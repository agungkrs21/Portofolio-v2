'use client';

import { formatMetric, FormattedMetric } from '@/utils/formatMetric';
import styles from './PerfomancePanel.module.css';
import {
  useWebVitalsStore,
  MetricKey,
  METRIC_KEYS,
} from '@/stores/performance.store';

export default function PerfomancePanel() {
  const metrics = useWebVitalsStore((s) => s.metrics);
  const metricsFormatted = METRIC_KEYS.map((key) =>
    formatMetric(key, metrics[key]),
  ).filter((metric): metric is FormattedMetric => metric !== null);
  // console.log(formattedMetrics);
  return (
    <div className={`${styles.container}`}>
      <p>Real User Metrics</p>
      <WebVitalsTable metrics={metricsFormatted} />
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
