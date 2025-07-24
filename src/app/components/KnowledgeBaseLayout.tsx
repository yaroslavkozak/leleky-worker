import Header from './Header';
import Footer from './Footer';
import React from 'react';
import Head from 'next/head';

interface KnowledgeBaseLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function KnowledgeBaseLayout({ title, children }: KnowledgeBaseLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} — База знань | Лелеки</title>
        <meta name="description" content={`База знань: ${title}. Корисна інформація для батьків на платформі Лелеки.`} />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
} 