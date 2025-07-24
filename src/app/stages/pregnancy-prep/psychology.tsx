import TopicLayout from '../../components/TopicLayout';
import { topics } from '../../content/topics';
import { blogPosts } from '../../content/blogPosts';
import { tools } from '../../content/tools';

const topic = topics.find(t => t.id === 'psychology');
const topicBlogPosts = blogPosts.filter(post => post.relatedTopics.includes('psychology'));
const topicTools = tools.filter(tool => tool.relatedTopics && tool.relatedTopics.includes('psychology'));

export default function PsychologyTopic() {
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