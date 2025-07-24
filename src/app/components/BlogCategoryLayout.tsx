import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import type { BlogPost } from './BlogPostGrid';

export type BlogCategoryLayoutProps = {
  title: string;
  posts: BlogPost[];
  stages: string[];
  topics: string[];
  stageNameMap: Record<string, string>;
  topicNameMap: Record<string, string>;
  selectedStage: string;
  setSelectedStage: (v: string) => void;
  selectedTopic: string;
  setSelectedTopic: (v: string) => void;
};

export default function BlogCategoryLayout({
  title,
  posts,
  stages,
  topics,
  stageNameMap,
  topicNameMap,
  selectedStage,
  setSelectedStage,
  selectedTopic,
  setSelectedTopic,
}: BlogCategoryLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} — Категорія блогу | Лелеки</title>
        <meta name="description" content={`Блог категорія: ${title}. Читайте корисні статті для батьків на платформі Лелеки.`} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4">
            <div className="mt-10 mb-8 flex flex-col items-start">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left">{title}</h1>
              <div className="mb-6 w-full">
                <div className="flex flex-wrap gap-4 gap-y-2 w-full justify-start">
                  <select
                    className="border rounded px-3 py-2"
                    value={selectedStage}
                    onChange={e => setSelectedStage(e.target.value)}
                  >
                    <option value="">Всі етапи</option>
                    {stages.map(stage => (
                      <option key={stage} value={stage}>{stageNameMap[stage] || stage}</option>
                    ))}
                  </select>
                  <select
                    className="border rounded px-3 py-2"
                    value={selectedTopic}
                    onChange={e => setSelectedTopic(e.target.value)}
                  >
                    <option value="">Всі теми</option>
                    {topics.map(topic => (
                      <option key={topic} value={topic}>{topicNameMap[topic] || topic}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 max-w-7xl">
              {posts.map(post => (
                <Link key={post.id} href={post.url} className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden w-full max-w-2xl h-full flex flex-col">
                  <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-muted mb-2 flex-1">{post.excerpt}</p>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 