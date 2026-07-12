import { create } from 'zustand';
import type { Locale } from '@/i18n/config';
// "pirete software" style 🤣
export type Toggle = 0 | 1;

export type Settings = {
  language: Locale;
  cursor: Toggle;
  animation: Toggle;
  crt_effect: Toggle;
};

export type SettingsKey = keyof Settings;

type SiteSettings = {
  settings: Partial<Settings>;
  initialize: (settings: Settings) => void;
  setSettings: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
};

export const useSiteSettings = create<SiteSettings>((set) => ({
  settings: {},

  initialize: (settings) => set({ settings }),

  setSettings: (key, value) =>
    set((state) => ({
      settings: {
        ...state.settings,
        [key]: value,
      },
    })),
}));
