import Link from 'next/link';
import Image from 'next/image';

export type BlogPost = {
  id: string;
  title: string;
  url: string;
  image: string;
  date: string;
  excerpt: string;
  relatedTopics?: string[];
  category?: string;
};

export default function BlogPostGrid({ posts, heading, className = '', topicNameMap = {}, blogCategoryMap = {} }: {
  posts: BlogPost[];
  heading?: string;
  className?: string;
  topicNameMap?: Record<string, string>;
  blogCategoryMap?: Record<string, string>;
}) {
  return (
    <div className={`w-full ${className}`}>
      {heading && <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text">{heading}</h2>}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {posts.map(post => (
          <Link key={post.id} href={post.url} className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden w-full max-w-xs">
            <Image src={typeof post.image === 'string' && post.image ? post.image : '/images/blog-placeholder.webp'} alt={post.title} width={400} height={200} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              {(post.relatedTopics && post.category) && (
                <div className="text-xs text-muted mb-1">
                  {post.relatedTopics.map(tid => topicNameMap[tid] || tid).join(', ')} | {blogCategoryMap[post.category] || post.category}
                </div>
              )}
              <p className="text-sm text-muted mb-2">{post.excerpt}</p>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 