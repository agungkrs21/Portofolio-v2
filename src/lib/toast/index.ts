import { target } from '@/lib/toast/bus';
import type { ToastData } from '@/lib/toast/types';

export const toastBus = {
  show(data: ToastData) {
    target.dispatchEvent(
      new CustomEvent('toast', {
        detail: data,
      }),
    );
  },

  subscribe(callback: (toast: ToastData) => void) {
    const handler = (e: Event) => {
      callback((e as CustomEvent<ToastData>).detail);
    };

    target.addEventListener('toast', handler);

    return () => target.removeEventListener('toast', handler);
  },
};
