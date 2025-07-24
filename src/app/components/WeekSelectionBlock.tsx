"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const trimesters = [
  { id: 'first', name: '1-й триместр', weeks: Array.from({ length: 13 }, (_, i) => i + 1) },
  { id: 'second', name: '2-й триместр', weeks: Array.from({ length: 14 }, (_, i) => i + 14) },
  { id: 'third', name: '3-й триместр', weeks: Array.from({ length: 14 }, (_, i) => i + 28) },
];

export default function WeekSelectionBlock() {
  const [active, setActive] = useState('first');
  const activeTrimester = trimesters.find(t => t.id === active) || trimesters[0];
  return (
    <section className="w-full py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Виберіть тиждень вагітності</h2>
      <div className="flex justify-center gap-x-4 mb-6 border-b px-4">
  {trimesters.map(t => (
    <button
      key={t.id}
      className={`px-4 py-2 min-w-[90px] font-semibold text-lg border-b-2 transition-colors ${active === t.id ? 'border-primary text-primary' : 'border-transparent text-muted'}`}
      onClick={() => setActive(t.id)}
    >
      {t.name}
    </button>
  ))}
</div>
      <div className="flex flex-wrap justify-center gap-4">
        {activeTrimester.weeks.map(week => (
          <Link
            key={week}
            href={`/stages/pregnancy/by-weeks/${week}`}
            className="rounded-full bg-neutral text-primary font-bold w-20 h-20 flex flex-col items-center justify-center shadow hover:bg-primary/10 hover:shadow-lg transition text-lg"
          >
            <span className="text-xs text-muted">Тиждень</span>
            <span className="text-2xl">{week}</span>
          </Link>
        ))}
      </div>
    </section>
  );
} 