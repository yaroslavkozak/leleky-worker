export type AdvancedStage = {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
  subCategories: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
  knowledgeBaseLinks: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
  relatedPosts: { name: string; href: string; category: string; }[];
  relatedTools: { name: string; href: string; icon: React.ElementType; }[];
};

import {
  Leaf, BookOpen, CalendarRange, HeartPulse, Stethoscope, Apple, HeartHandshake, Users, Calculator, Calendar, CreditCard, ListChecks, Layers, Baby
} from 'lucide-react';

export const advancedParentingStages: AdvancedStage[] = [
  {
    id: 'pregnancy-prep',
    name: 'Підготовка до вагітності',
    href: '/stages/pregnancy-prep',
    icon: Leaf,
    subCategories: [
      { name: 'Основи вагітності', href: '/stages/pregnancy-prep/basics', icon: BookOpen },
      { name: 'Овуляція та фертильність', href: '/stages/pregnancy-prep/ovulation', icon: CalendarRange },
      { name: "Репродуктивне здоров'я", href: '/stages/pregnancy-prep/reproductive-health', icon: HeartPulse },
      { name: 'Профілактика та обстеження', href: '/stages/pregnancy-prep/prevention', icon: Stethoscope },
      { name: 'Харчування та спосіб життя', href: '/stages/pregnancy-prep/nutrition', icon: Apple },
      { name: 'Психологічна підготовка', href: '/stages/pregnancy-prep/psychology', icon: HeartHandshake },
      { name: 'Планування сім’ї', href: '/stages/pregnancy-prep/family-planning', icon: Users },
    ],
    knowledgeBaseLinks: [
      { name: 'Теми від А до Я', href: '#', icon: BookOpen },
      { name: 'Часті запитання (FAQ)', href: '#', icon: CalendarRange },
      { name: 'Cимптоми', href: '#', icon: HeartPulse },
      { name: 'Посібники', href: '#', icon: BookOpen },
      { name: 'Корисні продукти', href: '#', icon: Apple },
      { name: 'Лікарні та лікарі', href: '#', icon: Stethoscope },
      { name: 'Чати для майбутніх батьків', href: '#', icon: Users },
    ],
    relatedPosts: [
      { name: 'Як зрозуміти, що ви готові до дитини?', href: '#', category: 'Історії батьків' },
      { name: 'ТОП-5 вітамінів для майбутніх мам', href: '#', category: 'Колонки експертів' },
      { name: 'Огляд найкращих додатків для планування', href: '#', category: 'Огляди товарів' },
      { name: 'Фільми, які надихають на батьківство', href: '#', category: 'Що подивитись / почитати' },
    ],
    relatedTools: [
      { name: 'Калькулятор овуляції', href: '#', icon: Calculator },
      { name: 'Калькулятор дати пологів', href: '#', icon: Calendar },
      { name: 'Калькулятор дати зачаття', href: '#', icon: CalendarRange },
      { name: 'Чи я вагітна?', href: '#', icon: HeartPulse },
      { name: 'Калькулятор бюджету вагітності', href: '#', icon: CreditCard },
      { name: 'Чекліст покупок до вагітності та в пологовий', href: '#', icon: ListChecks },
    ],
  },
  {
    id: 'pregnancy',
    name: 'Вагітність',
    href: '/stages/pregnancy',
    icon: HeartPulse,
    subCategories: [
      { name: 'За триместрами', href: '/stages/pregnancy/by-trimesters', icon: Layers },
      { name: 'По тижнях', href: '/stages/pregnancy/by-weeks', icon: CalendarRange },
      { name: 'Стан мами', href: '/stages/pregnancy/mom-state', icon: HeartPulse },
      { name: 'Розвиток дитини', href: '/stages/pregnancy/baby-development', icon: Baby },
      { name: 'Здоров’я та безпека', href: '/stages/pregnancy/health-safety', icon: Stethoscope },
      { name: 'Харчування та активність', href: '/stages/pregnancy/nutrition-activity', icon: Apple },
      { name: 'Підготовка до пологів', href: '/stages/pregnancy/birth-prep', icon: BookOpen },
      { name: 'Підготовка до дитини', href: '/stages/pregnancy/baby-prep', icon: Users },
    ],
    knowledgeBaseLinks: [
      { name: 'Теми від А до Я', href: '#', icon: BookOpen },
      { name: 'Часті запитання (FAQ)', href: '#', icon: CalendarRange },
      { name: 'Cимптоми', href: '#', icon: HeartPulse },
      { name: 'Посібники', href: '#', icon: BookOpen },
      { name: 'Корисні продукти', href: '#', icon: Apple },
      { name: 'Лікарні та лікарі', href: '#', icon: Stethoscope },
      { name: 'Чати для майбутніх батьків', href: '#', icon: Users },
    ],
    relatedPosts: [],
    relatedTools: [],
  },
  // ... (copy the rest of the stages from Header.tsx)
]; 