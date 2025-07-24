import TopicLayout from '../../components/TopicLayout';
import { topics } from '../../content/topics';
import { blogPosts } from '../../content/blogPosts';
import { tools } from '../../content/tools';

const topic = topics.find(t => t.id === 'ovulation');
const topicBlogPosts = blogPosts.filter(post => post.relatedTopics.includes('ovulation'));
const topicTools = tools.filter(tool => tool.relatedTopics && tool.relatedTopics.includes('ovulation'));

export default function OvulationTopic() {
  if (!topic) return <div>Topic not found</div>;
  return (
    <TopicLayout
  title={topic.name}
  image={topic.image}
  description={topic.desc}
  blogPosts={topicBlogPosts}
  tools={topicTools}
  topicId={topic.id}
  stageId={topic.stageId}
  displayArticlesAsCards={true}
>
  {/* No additional content yet */}
  <></>
</TopicLayout>
  );
} 