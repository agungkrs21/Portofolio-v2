import { ReactNode } from 'react';

interface ParseTextParam {
  text: string;
  links: { id: string; text: string; href: string }[];
}

export function parseText({ text, links }: ParseTextParam): ReactNode[] {
  const map = new Map(links.map((link) => [link.id, link]));

  return text.split(/(\{\{.*?\}\})/g).map((part) => {
    const match = /\{\{(.*?)\}\}/.exec(part);

    if (!match) return part;

    const link = map.get(match[1]);

    if (!link) return part;

    return (
      <a
        key={link.id}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.text}
      </a>
    );
  });
}
