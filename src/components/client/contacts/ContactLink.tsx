'use client';

import styles from './ContactLink.module.css';
import { copyToClipBoard } from '@/utils/clipboard';
import Image from 'next/image';
import { useState } from 'react';
import { contactAsset } from '@/data/site/contact';

type Toast = {
  id: string;
  message: string;
  type: 'success' | 'error';
};

type Links = { id: string; text: string }[];
interface ContactLinkProps {
  links: Links;
  styles: string;
}

export function ContactLink({ links, styles }: ContactLinkProps) {
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
        {links.map((contact, index) => {
          return (
            <li key={contactAsset[index].id}>
              <a
                {...linkProps({
                  link: contactAsset[index].link,
                  callback: handleCopied,
                })}
                aria-label={`${contactAsset[index].id}`}
              >
                <Image
                  src={`${contactAsset[index].icon}`}
                  alt=""
                  width={25}
                  height={23}
                />
                {contact.text}
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

type LinkProps = {
  link: string;
  callback: (str: string) => void;
};

function linkProps({ link, callback }: LinkProps) {
  const isExternal = link.startsWith('http://') || link.startsWith('https://');

  if (isExternal) {
    return {
      href: link,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return {
    href: link,
    onClick: () => callback(link),
  };
}
