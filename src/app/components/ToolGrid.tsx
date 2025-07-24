import Image from 'next/image';
import Link from 'next/link';

export type Tool = {
  id: string;
  name: string;
  url: string;
  image: string;
  description: string;
};

export default function ToolGrid({ tools, heading = 'Інструменти', className = '' }: { tools: Tool[]; heading?: string; className?: string }) {
  return (
    <div className={`mb-10 ${className}`}>
      {heading && <h2 className="text-2xl font-semibold mb-4">{heading}</h2>}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {tools.length === 0 && <div>Немає інструментів для цієї теми.</div>}
        {tools.map(tool => (
          <Link key={tool.id} href={tool.url} className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <Image src={tool.image} alt={tool.name} width={240} height={240} className="w-full h-60 object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm text-muted mb-2">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 