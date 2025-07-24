import StageLayout from '../components/StageLayout';
import { stages } from '../content/stages';
import { topics } from '../content/topics';
import { blogPosts } from '../content/blogPosts';
import { tools } from '../content/tools';

const stage = stages.find(s => s.id === 'schooler');
const stageTopics = topics.filter(t => t.stageId === 'schooler');
const stageBlogPosts = blogPosts.filter(post => post.relatedStages.includes('schooler'));
const stageTools = tools.filter(tool => tool.relatedStages.includes('schooler'));

export default function SchoolerStage() {
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