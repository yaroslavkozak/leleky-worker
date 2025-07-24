import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import Head from 'next/head';

type BlogPostLayoutProps = {
  title: string;
  content: ReactNode;
  similarPosts?: ReactNode;
};

export default function BlogPostLayout({ title, content, similarPosts }: BlogPostLayoutProps) {
  // For JSON-LD, we need more props, but use title for now
  const description = `Блог пост: ${title}. Читайте більше на платформі Лелеки.`;
  const image = '/images/blog-placeholder.webp'; // Replace with real image if available
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Head>
        <title>{title} — Блог для батьків | Лелеки</title>
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta property="og:title" content={`${title} — Блог для батьків | Лелеки`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} — Блог для батьків | Лелеки`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description,
          image,
          url,
          publisher: {
            '@type': 'Organization',
            name: 'Лелеки',
            logo: {
              '@type': 'ImageObject',
              url: '/images/logo.webp',
            },
          },
        }) }} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4">
            <div className="mt-10 mb-8 flex flex-col items-start">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-left">{title}</h1>
              <div className="prose max-w-none mb-12">{content}</div>
            </div>
            {similarPosts && (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Схожі пости</h2>
                {similarPosts}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 