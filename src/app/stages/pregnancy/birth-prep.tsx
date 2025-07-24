import TopicLayout from '../../components/TopicLayout';
import { topics } from '../../content/topics';
import { blogPosts } from '../../content/blogPosts';
import { tools } from '../../content/tools';

const topic = topics.find(t => t.id === 'birth-prep');
const topicBlogPosts = blogPosts.filter(post => post.relatedTopics.includes('birth-prep'));
const topicStageId = topic?.stageId;
const topicTools = Array.from(
  new Map(
    tools
      .filter(tool =>
        (topic && (
          (tool.relatedTopics && tool.relatedTopics.includes(topic.id)) ||
          (topicStageId && tool.relatedStages && tool.relatedStages.includes(topicStageId))
        ))
      )
      .map(tool => [tool.id, tool])
  ).values()
);

export default function BirthPrepTopic() {
  if (!topic) return <div>Topic not found</div>;
  return (
    <TopicLayout
  title={topic.name}
  image={topic.image}
  description={topic.desc}
  blogPosts={topicBlogPosts}
  tools={topicTools}
>
  {/* No additional content yet */}
  <></>
</TopicLayout>
  );
} 