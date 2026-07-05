'use client';

import { copyToClipBoard } from '@/utils/clipboard';
import Image from 'next/image';

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
  function handleCopied(str: string) {
    const email = str.match(/^mailto:(.+)$/)?.[1];

    if (!email) return;

    copyToClipBoard(email);
    
  }
  return (
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
  );
}
