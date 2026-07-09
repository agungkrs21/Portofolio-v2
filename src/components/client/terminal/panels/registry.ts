import { lazy } from 'react';

export const PANELS = {
  music: {
    title: 'Music',
    icon: '🎵',
    component: lazy(
      () => import('@/components/client/terminal/panels/music/MusicPanel'),
    ),
  },
  command: {
    title: 'Command',
    icon: '⌘',
    component: lazy(
      () => import('@/components/client/terminal/panels/command/CommandPanel'),
    ),
  },
  performance: {
    title: 'Performance',
    icon: '📊',
    component: lazy(
      () =>
        import('@/components/client/terminal/panels/performance/PerfomancePanel'),
    ),
  },
  settings: {
    title: 'Settings',
    icon: '⚙️',
    component: lazy(
      () =>
        import('@/components/client/terminal/panels/settings/SettingsPanel'),
    ),
  },
  theme: {
    title: 'Theme',
    icon: '🌗',
    component: lazy(
      () => import('@/components/client/terminal/panels/theme/ThemePanel'),
    ),
  },
};
