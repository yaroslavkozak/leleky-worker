import { useRouter } from 'next/router';
import { topicArticles, TopicArticle } from '../../../content/topicArticles';
import { topics } from '../../../content/topics';
import { tools } from '../../../content/tools';
import { blogPosts, BlogPost } from '../../../content/blogPosts';
import TopicArticleLayout from '../../../components/TopicArticleLayout';
import { ElementType } from 'react';

// Define Topic type for type safety
interface Topic {
  id: string;
  stageId: string;
  name: string;
  icon: ElementType;
  desc: string;
  image: string;
  tools?: string[];
  blogPosts?: string[];
}

export default function TopicArticlePage() {
  const router = useRouter();
  const { topicId, slug } = router.query;

  if (!topicId || !slug) return null;

  const article = topicArticles.find((a: TopicArticle) => a.topicId === topicId && a.slug === slug);
  if (!article) return <div className="container mx-auto py-20 text-center text-xl">Статтю не знайдено</div>;

  const stageArticles = topicArticles.filter((a: TopicArticle) => a.stageId === article.stageId && a.id !== article.id);
  const articlesInTopic = topicArticles.filter((a: TopicArticle) => a.topicId === article.topicId);
  const otherStageArticles = stageArticles
    .filter((a: TopicArticle) => a.topicId !== article.topicId)
    .map((a: TopicArticle) => ({ ...a, topicName: topics.find((t: Topic) => t.id === a.topicId)?.name || '', topicId: a.topicId }));

  // Only include tools that have all required fields
  const relatedTools = tools.filter(tool => tool && tool.id && article.relatedTools.includes(tool.id));
  const relatedBlogPosts = blogPosts.filter((post: BlogPost) => article.relatedBlogPosts.includes(post.id));

  return (
    <TopicArticleLayout
      title={article.title}
      content={article.content}
      topicId={article.topicId}
      articles={articlesInTopic}
      otherStageArticles={otherStageArticles}
      relatedTools={relatedTools}
      relatedBlogPosts={relatedBlogPosts}
    />
  );
} 