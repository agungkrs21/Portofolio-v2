import { ReactNode } from 'react';
type Text = { en: string; id: string };
interface ParseTextParam {
  text: string;
  links: { id: string; text: Text; href: string }[];
  locale: string;
}

export function parseText({
  text,
  links,
  locale,
}: ParseTextParam): ReactNode[] {
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
        {link.text[locale as keyof Text]}
      </a>
    );
  });
}
