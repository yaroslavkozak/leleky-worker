import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { tools } from '../../../content/tools';
import { blogPosts } from '../../../content/blogPosts';
import type { BlogPost } from '../../../components/BlogPostGrid';
import BlogPostGrid from '../../../components/BlogPostGrid';
import ToolGrid from '../../../components/ToolGrid';
import Head from 'next/head';

const trimesterNames: Record<string, string> = {
  first: '1-й триместр',
  second: '2-й триместр',
  third: '3-й триместр',
};

const pregnancyTools = tools.filter(t => t.relatedStages.includes('pregnancy'));
const pregnancyBlogPosts = blogPosts.filter(p => p.relatedStages.includes('pregnancy'));

export default function TrimesterPage() {
  const router = useRouter();
  const { trimester } = router.query;
  const title = trimesterNames[trimester as string] || 'Триместр';
  const pageTitle = `${title} вагітності — Лелеки`;
  const description = `Дізнайтеся більше про ${title.toLowerCase()} вагітності. Корисні поради, інструменти та статті для кожного етапу на платформі Лелеки.`;
  const image = '/images/homepage-slider/hero.webp';
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: pageTitle,
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
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <div className="bg-neutral p-6 rounded-xl mb-8">(Тут буде контент для {title})</div>
          <section className="mt-12">
            <ToolGrid tools={pregnancyTools} />
          </section>
          <section className="mt-12">
            <BlogPostGrid
              posts={pregnancyBlogPosts.map(post => ({
                ...post,
                image: (post as BlogPost).image || '/images/blog-placeholder.webp',
              }))}
              heading="Блог"
            />
          </section>
        </div>
      </Layout>
    </>
  );
} 