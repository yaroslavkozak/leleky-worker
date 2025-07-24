import BlogPostLayout from '../components/BlogPostLayout';
import { useRouter } from 'next/router';
import { blogPosts } from '../content/blogPosts';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPostPage() {
  const router = useRouter();
  const { postId } = router.query;
  const post = blogPosts.find(p => p.id === postId);

  // Find similar posts: same topic, or same stage if only one for topic
  let similar: typeof blogPosts = [];
  if (post) {
    similar = blogPosts.filter(
      p =>
        p.id !== post.id &&
        (p.relatedTopics.some(t => post.relatedTopics.includes(t)) ||
          (p.relatedStages.some(s => post.relatedStages.includes(s)) &&
            blogPosts.filter(x => x.relatedTopics.some(t => post.relatedTopics.includes(t))).length <= 1))
    );
  }

  return (
    <BlogPostLayout
      title={post ? post.title : 'Блог пост'}
      content={post ? (
        <>
          <Image src={post.image} alt={post.title} width={600} height={300} className="rounded-xl mb-6 object-cover" />
          <p>{post.excerpt}</p>
          <div className="mt-6 text-xs text-gray-400">{post.date}</div>
        </>
      ) : null}
      similarPosts={similar.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {similar.map(sim => (
            <Link key={sim.id} href={sim.url} className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <Image src={sim.image} alt={sim.title} width={400} height={200} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{sim.title}</h3>
                <span className="text-xs text-gray-400">{sim.date}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : <div>Немає схожих постів.</div>}
    />
  );
} 