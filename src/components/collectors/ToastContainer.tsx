'use client';

import { toastBus } from '@/lib/toast';
import { ToastData } from '@/lib/toast/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ToastContainer() {
  const [toastList, setToastList] = useState<ToastData[]>([]);

  function removeToast(id: number) {
    setToastList((prev) => prev.filter((toast) => toast.id !== id));
  }

  useEffect(() => {
    return toastBus.subscribe((toast) => {
      const id = Math.floor(Math.random() * 100);
      setToastList((prev) => [...prev, { ...toast, id }]);
      if (toast.fading) {
        setTimeout(() => removeToast(id), 5000);
      }
    });
  }, []);

  return (
    <ul id="toast">
      {toastList.map((toast) => (
        <li
          key={toast.id}
          className={`${toast.type} ${toast.fading ? 't_fading' : ''}`}
        >
          <button
            aria-label="close button"
            onClick={() => removeToast(toast.id!)}
          >
            ❌
          </button>
          <div>
            <p>{toast.title}</p>
            <p>{toast.detail}</p>
          </div>
          <Image
            src="/icon/toast-cat.png"
            alt=""
            width={25}
            height={31}
            className="[image-rendering:pixelated] w-7 h-auto"
          />
        </li>
      ))}
    </ul>
  );
}
