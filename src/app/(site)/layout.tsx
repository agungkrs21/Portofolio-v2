import NavBar from '@/components/ui/layout/navbar/Navbar';
import { ReactNode } from 'react';

export default function PageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>
    <NavBar />
    {children};
  </>;
}
