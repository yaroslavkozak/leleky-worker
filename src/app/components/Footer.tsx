import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { advancedParentingStages } from '../content/advancedParentingStages';
import { tools } from '../content/tools';
import { blogCategories } from '../content/blogCategories';

const knowledgeBase = [
  { name: 'Теми від А до Я', href: '/knowledge-base/a-to-z' },
  { name: 'Часті запитання', href: '/knowledge-base/faq' },
  { name: 'Перевірка симптомів', href: '/knowledge-base/symptoms' },
  { name: 'Посібники для батьків', href: '/knowledge-base/guides' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral text-muted mt-12 border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-8 h-8">
              <Image src="/globe.svg" alt="Leleka Logo" width={32} height={32} className="w-8 h-8" sizes="32px" />
            </span>
            <span className="font-bold text-xl text-primary">Лелеки</span>
          </div>
          <p className="text-sm text-muted max-w-xs text-center md:text-left">Платформа для сучасних батьків. Поради, інструменти, знання та підтримка на кожному етапі розвитку дитини.</p>
        </div>
        {/* Stages */}
        <div>
          <h4 className="font-semibold text-text mb-3">Етапи розвитку</h4>
          <ul className="space-y-1">
            {advancedParentingStages.map(stage => (
              <li key={stage.id}>
                <Link href={stage.href} className="hover:underline">{stage.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Tools */}
        <div>
          <h4 className="font-semibold text-text mb-3">Інструменти</h4>
          <ul className="space-y-1">
            {tools.map(tool => (
              <li key={tool.id}>
                <Link href={tool.url} className="hover:underline">{tool.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Blog */}
        <div>
          <h4 className="font-semibold text-text mb-3">Блог</h4>
          <ul className="space-y-1">
            {blogCategories.map(cat => (
              <li key={cat.id}>
                <Link href={`/blog/category/${cat.id}`} className="hover:underline">{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Knowledge Base */}
        <div>
          <h4 className="font-semibold text-text mb-3">База знань</h4>
          <ul className="space-y-1">
            {knowledgeBase.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-muted">
        <div className="mb-1">&copy; {new Date().getFullYear()} Leleka. Всі права захищені.</div>
        <div>Звʼязок: <a href="mailto:hello@leleka.com" className="hover:underline">hello@leleka.com</a></div>
      </div>
    </footer>
  );
} 