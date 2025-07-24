import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { topicArticles } from '../content/topicArticles';
import ToolGrid from './ToolGrid';
import BlogPostGrid from './BlogPostGrid';
import Head from 'next/head';
import type { BlogPost } from './BlogPostGrid';

export type Tool = {
  id: string;
  name: string;
  url: string;
  image: string;
  description: string;
};

type TopicLayoutProps = {
  children: ReactNode;
  title: string;
  image: string;
  description: string;
  blogPosts?: BlogPost[];
  tools?: Tool[];
  topicId?: string;
  stageId?: string;
  displayArticlesAsCards?: boolean;
};

export default function TopicLayout({ children, title, image, description, blogPosts, tools, topicId, stageId, displayArticlesAsCards }: TopicLayoutProps) {
  // Find all articles for this topic
  const articles = topicId ? topicArticles.filter(a => a.topicId === topicId) : [];
  // If no articles for this topic, show articles from other topics in the same stage
  let displayArticles = articles;
  let showOtherTopic = false;
  if (displayArticles.length === 0 && stageId && topicId) {
    displayArticles = topicArticles.filter(a => a.stageId === stageId && a.topicId !== topicId);
    showOtherTopic = true;
  }
  return (
    <>
      <Head>
        <title>{title} — Тема для батьків | Лелеки</title>
        <meta name="description" content={description} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4">
            <div className="mt-10 mb-10 flex flex-col items-start">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left">{title}</h1>
              <Image src={image} alt={title} width={400} height={200} className="rounded-xl mb-6 object-cover" style={{maxWidth: '100%', height: 'auto'}} sizes="(max-width: 640px) 100vw, 400px" />
              <p className="mb-8 text-lg text-muted max-w-2xl text-left">{description}</p>
            </div>

            {/* Topic Articles Section */}
            {displayArticles.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                  {showOtherTopic ? 'Статті на інші теми у цей період' : 'Статті'}
                </h2>
                {displayArticlesAsCards ? (
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {displayArticles.map(article => (
                      <Link key={article.id} href={`/topics/${article.topicId}/articles/${article.slug}`} className="block bg-white rounded-xl shadow hover:shadow-lg transition p-6 h-full">
                        <div className="font-semibold text-lg mb-2 text-primary">{article.title}</div>
                        <div className="text-sm text-muted">{article.content.replace(/<[^>]+>/g, '').slice(0, 80)}...</div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {displayArticles.map(article => (
                      <li key={article.id}>
                        <Link href={`/topics/${article.topicId}/articles/${article.slug}`} className="text-primary hover:underline font-medium">{article.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Tools Section */}
            {tools && <ToolGrid tools={tools} />}
            {children}
            {blogPosts && (
              <div className="mt-12">
                <BlogPostGrid
                  posts={blogPosts.map(post => ({
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