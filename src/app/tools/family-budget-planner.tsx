import ToolLayout from '../components/ToolLayout';
import { tools } from '../content/tools';
import Image from 'next/image';

const tool = tools.find(t => t.id === 'family-budget-planner');

export default function FamilyBudgetPlanner() {
  if (!tool) return <div>Tool not found</div>;
  return (
    <ToolLayout heading={tool.name} description={tool.description}>
      <Image src={tool.image} alt={tool.name} className="rounded mb-4" width={240} height={240} />
      <div className="bg-neutral p-6 rounded-xl">(Тут буде планувальник бюджету)</div>
    </ToolLayout>
  );
} 