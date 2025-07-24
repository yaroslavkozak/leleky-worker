import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

type LandingLayoutProps = {
  children: ReactNode;
  hero?: ReactNode;
};

export default function LandingLayout({ children, hero }: LandingLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {hero && <section className="w-full">{hero}</section>}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
} 