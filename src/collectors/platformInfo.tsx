export function platformInfo() {
  const cssFeatures = getCssFeatures();
  const deviceInfo = getDeviceInfo();
  const hardwareInfo = getHardwareInfo();
  const resources = getResourceStats();

  return { cssFeatures, deviceInfo, hardwareInfo, resources };
}

function getCssFeatures() {
  return [
    {
      name: 'Grid',
      support: CSS.supports('display', 'grid'),
    },
    {
      name: 'Subgrid',
      support: CSS.supports('grid-template-columns', 'subgrid'),
    },
    {
      name: 'Backdrop Filter',
      support: CSS.supports('backdrop-filter', 'blur(10px)'),
    },
    {
      name: 'Container Queries',
      support: CSS.supports('container-type', 'inline-size'),
    },
    {
      name: ':has() Selector',
      support: CSS.supports('selector(:has(*))'),
    },
    {
      name: 'Scroll-Driven Animations',
      support: CSS.supports('animation-timeline', 'scroll()'),
    },
    {
      name: 'View Timeline',
      support: CSS.supports('animation-timeline', 'view()'),
    },
    {
      name: 'View Transitions',
      support: CSS.supports('view-transition-name', 'page'),
    },
    {
      name: 'OKLCH Color',
      support: CSS.supports('color', 'oklch(50% 0.2 240)'),
    },
    {
      name: 'Dynamic Viewport (dvh)',
      support: CSS.supports('height', '100dvh'),
    },
  ];
}

function getDeviceInfo() {
  return [
    {
      name: 'Language',
      value: navigator.languages.at(-1),
    },
    {
      name: 'Timezone',
      value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },

    {
      name: 'Cookies',
      value: navigator.cookieEnabled ? 'Enabled' : 'Disabled',
    },
  ];
}

function getHardwareInfo() {
  const memory =
    'deviceMemory' in navigator
      ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory
      : undefined;

  return [
    {
      name: 'OS',
      value: navigator.userAgent.match(/\(([^;]+)/)?.[1] ?? navigator.platform,
    },
    {
      name: 'CPU Threads',
      value: navigator.hardwareConcurrency,
    },
    {
      name: 'Memory',
      value: memory ? `${memory} GB` : 'Unknown',
    },
    {
      name: 'Resolution',
      value: `${screen.width} × ${screen.height}`,
    },
    {
      name: 'Dark Mode',
      value: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'Enabled'
        : 'Disabled',
    },

    {
      name: 'Touch Support',
      value: navigator.maxTouchPoints > 0 ? 'Yes' : 'No',
    },
  ];
}

function getResourceStats() {
  const stats = performance.getEntriesByType('resource').reduce(
    (stats, resource) => {
      const entry = resource as PerformanceResourceTiming;

      stats.totalTransfer += entry.transferSize;
      stats.totalEncoded += entry.encodedBodySize;
      stats.totalDecoded += entry.decodedBodySize;
      stats.totalResources++;

      return stats;
    },
    {
      totalResources: 0,
      totalTransfer: 0,
      totalEncoded: 0,
      totalDecoded: 0,
    },
  );

  return [
    {
      name: 'Resources',
      value: stats.totalResources,
    },
    {
      name: 'Transfer Size',
      value: formatBytes(stats.totalTransfer),
    },
    {
      name: 'Compressed Size',
      value: formatBytes(stats.totalEncoded),
    },
    {
      name: 'Decoded Size',
      value: formatBytes(stats.totalDecoded),
    },
  ];
}

export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  const value = bytes / 1024 ** exponent;

  return `${value.toFixed(decimals)} ${units[exponent]}`;
}

export type PlatformInfo = ReturnType<typeof platformInfo>;
