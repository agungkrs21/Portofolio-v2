import { create } from 'zustand';
import type { Metric } from 'web-vitals';

export const METRIC_KEYS = [
  'cls',
  'inp',
  'fcp',
  'lcp',
  'ttfb',
  'fps',
  'memory',
] as const;

export type MetricKey = (typeof METRIC_KEYS)[number];

export type WebVitalsMetrics = {
  [K in MetricKey]?: K extends 'fps' | 'memory' ? number : Metric;
};

type WebVitalsStore = {
  metrics: WebVitalsMetrics;

  setMetric: <K extends keyof WebVitalsMetrics>(
    key: K,
    value: WebVitalsMetrics[K],
  ) => void;
};

export const useWebVitalsStore = create<WebVitalsStore>((set) => ({
  metrics: {},

  setMetric: (key, value) =>
    set((state) => ({
      metrics: {
        ...state.metrics,
        [key]: value,
      },
    })),
}));
