import Link from 'next/link';

const trimesters = [
  { id: 'first', name: '1-й триместр', desc: '1–13 тиждень', color: 'bg-blue-100' },
  { id: 'second', name: '2-й триместр', desc: '14–27 тиждень', color: 'bg-green-100' },
  { id: 'third', name: '3-й триместр', desc: '28–40+ тиждень', color: 'bg-yellow-100' },
];

export default function TrimesterSelectionBlock() {
  return (
    <section className="w-full py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Виберіть триместр</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {trimesters.map(t => (
          <Link
            key={t.id}
            href={`/stages/pregnancy/by-trimesters/${t.id}`}
            className={`rounded-xl shadow-lg p-8 w-64 flex flex-col items-center hover:shadow-xl transition ${t.color} hover:ring-2 hover:ring-primary/40 focus:ring-2 focus:ring-primary/60 outline-none`}
          >
            <span className="text-3xl font-bold mb-2">{t.name}</span>
            <span className="text-muted text-lg">{t.desc}</span>
          </Link>
        ))}
      </div>
    </section>
  );
} 