import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type LinkButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ href, variant = 'primary', children }: ButtonProps) {
  const classes = `btn ${variant !== 'primary' ? 'btn-secondary' : 'primary'}`;

  if (href) {
    return (
      <Link href={href} className={`${classes}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${classes}`}>{children}</button>;
}
