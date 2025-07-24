import StageLayout from '../components/StageLayout';
import { stages } from '../content/stages';
import { topics } from '../content/topics';
import { blogPosts } from '../content/blogPosts';
import { tools } from '../content/tools';

const stage = stages.find(s => s.id === 'toddler');
const stageTopics = topics.filter(t => t.stageId === 'toddler');
const stageBlogPosts = blogPosts.filter(post => post.relatedStages.includes('toddler'));
const stageTools = tools.filter(tool => tool.relatedStages.includes('toddler'));

export default function ToddlerStage() {
  if (!stage) return <div>Stage not found</div>;
  return (
    <StageLayout
      title={stage.name}
      image={stage.image}
      description={stage.description}
      topics={stageTopics}
      tools={stageTools}
      blogPosts={stageBlogPosts}
    />
  );
} 