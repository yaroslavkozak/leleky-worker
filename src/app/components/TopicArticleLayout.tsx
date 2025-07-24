import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import BlogPostGrid from './BlogPostGrid';
import Head from 'next/head';
import type { BlogPost } from './BlogPostGrid';

interface TopicArticleLayoutProps {
  title: string;
  content: React.ReactNode;
  topicId: string;
  articles: { id: string; title: string; slug: string; }[];
  otherStageArticles: { id: string; title: string; slug: string; topicId: string; topicName: string; }[];
  relatedTools: { id: string; name: string; url: string; image: string; description: string; }[];
  relatedBlogPosts: { id: string; title: string; url: string; date: string; excerpt: string; }[];
}

export default function TopicArticleLayout({ title, content, topicId, articles, otherStageArticles, relatedTools, relatedBlogPosts }: TopicArticleLayoutProps) {
  const description = `Дізнайтеся більше про тему: ${title}. Корисна стаття для батьків на платформі Лелеки.`;
  const image = '/images/blog-placeholder.webp'; // Replace with real image if available
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Head>
        <title>{title} — Стаття для батьків | Лелеки</title>
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta property="og:title" content={`${title} — Стаття для батьків | Лелеки`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} — Стаття для батьків | Лелеки`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
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
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mt-10 mb-8 flex flex-col items-start">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-left">{title}</h1>
              <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: String(content) }} />
            </div>

            {/* Other Interesting Articles */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Інші цікаві статті</h2>
              <div className="space-y-2">
                {articles.length > 1 && (
                  <>
                    <div className="font-semibold text-muted mb-1">У цій темі:</div>
                    {articles.filter(a => a.slug !== undefined && a.title !== title).map(article => (
                      <div key={article.id}>
                        <Link href={`/topics/${topicId}/articles/${article.slug}`} className="hover:underline text-primary">{article.title}</Link>
                      </div>
                    ))}
                  </>
                )}
                {otherStageArticles.length > 0 && (
                  <>
                    <div className="font-semibold text-muted mt-4 mb-1">В інших темах цього етапу:</div>
                    {otherStageArticles.map(article => (
                      <div key={article.id}>
                        <Link href={`/topics/${article.topicId}/articles/${article.slug}`} className="hover:underline text-primary">{article.title} <span className="text-xs text-muted">({article.topicName})</span></Link>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Інструменти</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
                  {relatedTools.map(tool => (
                    <Link key={tool.id} href={tool.url} className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                      <Image src={tool.image} alt={tool.name} width={120} height={120} className="w-full h-32 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                        <p className="text-sm text-muted mb-2">{tool.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Blog Posts */}
            {relatedBlogPosts.length > 0 && (
              <div className="mb-12">
                <BlogPostGrid
                  posts={relatedBlogPosts.map(post => ({
                    ...post,
                    image: (post as BlogPost).image || '/images/blog-placeholder.webp',
                  }))}
                  heading="Блог"
                />
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 