import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
import { MetricKey } from '@/stores/performance.store';
import type { Metric } from 'web-vitals';

export type WebVitalCallback = (name: MetricKey, metric: Metric) => void;

export function collectWebVitals(callback: WebVitalCallback) {
  onCLS((metric) => callback('cls', metric));
  onFCP((metric) => callback('fcp', metric));
  onINP((metric) => callback('inp', metric));
  onLCP((metric) => callback('lcp', metric));
  onTTFB((metric) => callback('ttfb', metric));
}
