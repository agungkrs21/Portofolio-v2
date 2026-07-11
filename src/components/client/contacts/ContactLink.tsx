'use client';

import styles from './ContactLink.module.css';
import { copyToClipBoard } from '@/utils/clipboard';
import Image from 'next/image';
import { useState } from 'react';

type Toast = {
  id: string;
  message: string;
  type: 'success' | 'error';
};

type Links = {
  url: string;
  name: string;
  icon: string;
  term: string;
};
type Props = {
  links: Links[];
  styles: string;
};

export function ContactLink({ links, styles }: Props) {
  const [toast, setToast] = useState<Toast[]>([]);
  const [counter, setCounter] = useState<number>(0);

  function handleCopied(str: string) {
    const email = str.match(/^mailto:(.+)$/)?.[1];

    if (!email) {
      showToast('Failed to copy!', 'error');
      return;
    }
    copyToClipBoard(email);
    showToast(`Copied: ${email}`, 'success');
  }

  function showToast(message: string, type: Toast['type']) {
    setCounter((prev) => prev + 1);
    const id = String(counter);

    setToast((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  }

  function removeToast(id: string) {
    setToast((prev) => prev.filter((i) => i.id !== id));
  }
  return (
    <>
      {toast.map((t) => (
        <ToastContainer key={t.id} type={t.type} message={t.message} />
      ))}
      <ul className={`${styles}`}>
        {links.map((link) => {
          const isExternal =
            link.url.startsWith('http://') || link.url.startsWith('https://');

          const anchorProps = isExternal
            ? {
                href: link.url,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {
                href: link.url,
                onClick: () => handleCopied(link.url),
              };

          return (
            <li key={link.name}>
              <a {...anchorProps}>
                <Image
                  src={link.icon}
                  alt={`Sprite ${link.name}`}
                  width={25}
                  height={23}
                />
                {link.term}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function ToastContainer({ type, message }: { type: string; message: string }) {
  return (
    <div className={`${styles.toastContainer} ${styles[type]}`}>
      <Image
        src="/icon/toast-cat.png"
        alt="sprite-cat"
        width={25}
        height={31}
      />
      <span>{message}</span>
    </div>
  );
}
