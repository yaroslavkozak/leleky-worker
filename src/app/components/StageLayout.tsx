import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import Image from 'next/image';
import ToolGrid from './ToolGrid';
import BlogPostGrid from './BlogPostGrid';
import Head from 'next/head';
import type { BlogPost } from './BlogPostGrid';

export type StageTopic = {
  id: string;
  name: string;
  desc: string;
  image: string;
  icon: React.ElementType;
  stageId: string;
};

export type StageTool = {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
};

export type StageBlogPost = {
  id: string;
  title: string;
  url: string;
  date: string;
  excerpt: string;
};

type StageLayoutProps = {
  title: string;
  image: string;
  description: string;
  topics?: StageTopic[];
  tools?: StageTool[];
  blogPosts?: StageBlogPost[];
};

export default function StageLayout({ title, image, description, topics = [], tools = [], blogPosts = [] }: StageLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} — Етап розвитку дитини | Лелеки</title>
        <meta name="description" content={description} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4">
            <div className="mt-10 mb-10 flex flex-col items-start">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left">{title}</h1>
              <Image src={image} alt={title} width={600} height={300} className="rounded-xl mb-6 object-cover" style={{maxWidth: '100%', height: 'auto'}} sizes="(max-width: 768px) 100vw, 600px" />
              <p className="mb-8 text-lg text-muted max-w-2xl text-left">{description}</p>
            </div>

            {/* Key Topics Section */}
            <h2 className="text-2xl font-semibold mb-4">Ключові теми</h2>
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10">
  {topics.length === 0 && <div>Немає тем для цього етапу.</div>}
  {topics.map(topic => (
    <Link
      key={topic.id}
      href={`/stages/${topic.stageId}/${topic.id}`}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden focus-visible:ring-2 focus-visible:ring-primary/60 outline-none"
    >
      <div className="relative">
        <Image
          src={topic.image}
          alt={topic.name}
          width={400}
          height={200}
          className="w-full h-32 object-cover rounded-t-xl border-b border-neutral"
        />
        {topic.icon && (
          <span className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 z-10">
            <topic.icon className="w-12 h-12 text-primary bg-white rounded-full border border-neutral shadow p-2" />
          </span>
        )}
      </div>
      <div className="flex flex-col items-center px-4 pt-8 pb-4 w-full">
        <h3 className="text-lg font-semibold text-text mb-1 text-center">{topic.name}</h3>
        <p className="text-sm text-muted mb-2 text-center">{topic.desc}</p>
      </div>
    </Link>
  ))}
</div>

            {/* Tools Section */}
            <ToolGrid tools={tools} />

            {/* Blog Section */}
            <BlogPostGrid
              posts={blogPosts.map(post => ({
                ...post,
                image: (post as BlogPost).image || '/images/blog-placeholder.webp',
              }))}
              heading="Блог"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 