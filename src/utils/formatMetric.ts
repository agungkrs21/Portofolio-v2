import { MetricKey, WebVitalsMetrics } from '@/stores/performance.store';

const RATING_MAPPING = {
  good: 'good',
  poor: 'poor',
  'needs-improvement': 'NI',
};
export function formatMetric(
  key: MetricKey,
  metric: WebVitalsMetrics[MetricKey],
) {
  if (metric === undefined) {
    return null;
  }

  if (typeof metric === 'number') {
    return {
      key,
      name: key.toUpperCase(),
      value: metric.toFixed(2),
      rating: 'good',
    };
  }

  return {
    key,
    name: metric.name,
    value: Number.isInteger(metric.value)
      ? metric.value
      : metric.value.toFixed(2),
    rating: RATING_MAPPING[metric.rating],
  };
}

export type FormattedMetric = NonNullable<ReturnType<typeof formatMetric>>;
