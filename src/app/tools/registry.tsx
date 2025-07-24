import ToolLayout from '../components/ToolLayout';
import { tools } from '../content/tools';
import Image from 'next/image';

const tool = tools.find(t => t.id === 'registry');

export default function RegistryToolPage() {
  if (!tool) return <div>Tool not found</div>;
  return (
    <ToolLayout heading={tool.name} description={tool.description}>
      <Image src={tool.image} alt={tool.name} width={240} height={240} className="rounded mb-4" />
      {/* Tool-specific content goes here */}
    </ToolLayout>
  );
} 