import { ReactNode } from 'react';

interface ParseTextParam {
  text: string;
  links: { id: string; text: string; href: string }[];
}

export function parseText({ text, links }: ParseTextParam): ReactNode[] {
  return text.split(/(\{\{.*?\}\})/g).map((part, i) => {
    const match = part.match(/\{\{(.*?)\}\}/);

    if (!match) return part;

    const link = links.find((link) => link.id === match[1]);

    if (!link) return part;

    return (
      <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
        {link.text}
      </a>
    );
  });
}
