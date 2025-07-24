import KnowledgeBaseLayout from '../components/KnowledgeBaseLayout';
import { topics } from '../content/topics';

const sortedTopics = [...topics].sort((a, b) => a.name.localeCompare(b.name, 'uk'));

export default function TopicsAtoZ() {
  return (
    <KnowledgeBaseLayout title="Теми від А до Я">
      <div className="max-w-3xl mx-auto">
        <ul className="divide-y divide-neutral">
          {sortedTopics.map(topic => (
            <li key={topic.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {topic.icon && <topic.icon className="w-6 h-6 text-primary" />}
                <span className="font-medium text-lg">{topic.name}</span>
              </div>
              <a href={`/stages/${topic.stageId}/${topic.id}`} className="text-primary hover:underline text-sm">Перейти</a>
            </li>
          ))}
        </ul>
      </div>
    </KnowledgeBaseLayout>
  );
} 