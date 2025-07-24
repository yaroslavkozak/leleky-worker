import { ReactNode } from 'react';

export default function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`w-full py-10 px-4 ${className}`}>
      {children}
    </section>
  );
} 