import NavBar from '@/components/ui/layout/navbar/Navbar';
import UtilityDock from '@/components/ui/layout/utility-dock/UtilityDock';
import { ReactNode } from 'react';

export default function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children};
      <UtilityDock />
    </>
  );
}
