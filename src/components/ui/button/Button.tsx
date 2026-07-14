import Link from 'next/link';
import styles from './Button.module.css';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type LinkButtonProps = {
  href: string;
  type?: 'link' | 'normal';
  variant?: 'primary' | 'secondary';
  padding?: boolean;
  children: ReactNode;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  variant?: 'primary' | 'secondary';
  padding?: boolean;
  children: ReactNode;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({
  href,
  type = 'link',
  variant = 'primary',
  padding = true,
  children,
  ...props
}: ButtonProps) {
  const classes = `${styles.btn} ${padding ? 'py-2 px-4' : ''}  ${variant !== 'primary' ? styles.secondary : styles.primary}`;

  if (href && type === 'link') {
    return (
      <Link href={href} className={`${classes}`}>
        {children}
      </Link>
    );
  }
  if (href && type === 'normal') {
    return (
      <a href={href} className={`${classes}`}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${classes}`} {...props}>
      {children}
    </button>
  );
}
