'use client';

import { contactAsset } from '@/data/site/contact';
import { toastBus } from '@/lib/toast';
import type { IdText } from '@/i18n/locales/en/site/types';
import Image from 'next/image';

interface ContactLinkProps {
  links: IdText;
  styles: string;
}

export function ContactLink({ links, styles }: ContactLinkProps) {
  async function handleClick() {
    try {
      await navigator.clipboard.writeText('47ungkrs@gmai.com');

      toastBus.show({
        type: 'success',
        fading: true,
        title: 'Text Copied!',
        detail: '47ungkrs@gmail.com',
      });
    } catch (error) {
      console.error(error);
      toastBus.show({
        type: 'error',
        fading: false,
        title: 'Copy Email',
        detail: '47ungkrs@gmail.com',
      });
    }
  }
  return (
    <ul className={`${styles}`}>
      {links.map((contact, index) => {
        const asset = contactAsset[index];
        return (
          <li key={contactAsset[index].id}>
            <a
              {...linkProps({ link: asset.link, callback: handleClick })}
              aria-label={`${asset.id}`}
            >
              <Image src={`${asset.icon}`} alt="" width={25} height={23} />
              {contact.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

interface LinkProps {
  link: string;
  callback: () => void;
}

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
    onClick: callback,
  };
}
