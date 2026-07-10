import { useEffect } from 'react';

import { collectWebVitals } from '@/collectors/webVitals';
import { useWebVitalsStore, MetricKey } from '@/stores/performance.store';

export function useCollectWebVitals() {
  const setMetric = useWebVitalsStore((s) => s.setMetric);
  useEffect(() => {
    collectWebVitals((key: MetricKey, metric) => {
      setMetric(key, metric);
    });
  }, [setMetric]);
}
