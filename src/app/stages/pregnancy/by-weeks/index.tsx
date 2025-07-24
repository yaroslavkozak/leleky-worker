import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { tools } from '../../../content/tools';
import { blogPosts } from '../../../content/blogPosts';
import BlogPostGrid from '../../../components/BlogPostGrid';
import Head from 'next/head';
import ToolGrid from '../../../components/ToolGrid';
import type { BlogPost } from '../../../components/BlogPostGrid';

const trimesters = [
  { id: 'first', name: '1-й триместр', weeks: Array.from({ length: 13 }, (_, i) => i + 1) },
  { id: 'second', name: '2-й триместр', weeks: Array.from({ length: 14 }, (_, i) => i + 14) },
  { id: 'third', name: '3-й триместр', weeks: Array.from({ length: 14 }, (_, i) => i + 28) },
];

const pregnancyTools = tools.filter(t => t.relatedStages.includes('pregnancy'));
const pregnancyBlogPosts = blogPosts.filter(p => p.relatedStages.includes('pregnancy'));

export default function ByWeeksPage() {
  const [active, setActive] = useState('first');
  const activeTrimester = trimesters.find(t => t.id === active) || trimesters[0];
  const title = 'Виберіть тиждень вагітності — Лелеки';
  const description = 'Обирайте тиждень вагітності, щоб отримати корисні поради, інструменти та статті для кожного етапу. Платформа Лелеки для українських батьків.';
  const image = '/images/homepage-slider/hero.webp';
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
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
      <Layout>
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-8 text-center">Виберіть тиждень вагітності</h1>
          <div className="flex justify-center gap-8 mb-6 border-b">
            {trimesters.map(t => (
              <button
                key={t.id}
                className={`px-6 py-2 font-semibold text-lg border-b-2 transition-colors ${active === t.id ? 'border-primary text-primary' : 'border-transparent text-muted'}`}
                onClick={() => setActive(t.id)}
              >
                {t.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {activeTrimester.weeks.map(week => (
              <Link
                key={week}
                href={`/stages/pregnancy/by-weeks/${week}`}
                className="rounded-full bg-neutral text-primary font-bold w-20 h-20 flex flex-col items-center justify-center shadow hover:bg-primary/10 hover:shadow-lg transition text-lg"
              >
                <span className="text-xs text-muted">Тиждень</span>
                <span className="text-2xl">{week}</span>
              </Link>
            ))}
          </div>
          {/* Tools Section */}
          <section className="mt-12">
            <ToolGrid tools={pregnancyTools} />
          </section>
          {/* Blog Posts Section */}
          <section className="mt-12">
            <BlogPostGrid
              posts={pregnancyBlogPosts.map(post => ({
                ...post,
                image: (post as BlogPost).image || '/images/blog-placeholder.webp',
              }))}
              heading="Блог про вагітність"
            />
          </section>
        </div>
      </Layout>
    </>
  );
} 