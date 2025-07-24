import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import Head from 'next/head';

// Dedicated tool detail page layout
// Always show header, title section, body section, and footer

type ToolLayoutProps = {
  children?: ReactNode;
  heading?: string;
  description?: string;
};

export default function ToolLayout({ children, heading, description }: ToolLayoutProps) {
  return (
    <>
      <Head>
        <title>{heading} — Інструмент для батьків | Лелеки</title>
        <meta name="description" content={description || 'Корисний інструмент для батьків на платформі Лелеки.'} />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-10">
          {heading && (
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-left">{heading}</h1>
              {description && <p className="text-lg text-muted max-w-2xl mb-4">{description}</p>}
            </div>
          )}
          <div>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 