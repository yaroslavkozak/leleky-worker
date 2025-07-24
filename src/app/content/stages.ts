import {
  BookOpen,
  CalendarRange,
  HeartPulse,
  Baby,
  Smile,
  ToyBrick,
  School,
  User
} from "lucide-react";

export const stages = [
  {
    id: "pregnancy-prep",
    name: "Підготовка до вагітності",
    description: "Перший етап батьківства: підготовка до вагітності. Тут ви знайдете ключові теми, поради, інструменти та статті для майбутніх батьків.",
    image: "/images/development-stages/prep/prep-hero.webp",
    icon: BookOpen,
    topics: [
      "basics",
      "ovulation",
      "reproductive-health",
      "prevention",
      "nutrition",
      "psychology",
      "family-planning"
    ],
    tools: [],
    blogPosts: [],
    articles: [],
  },
  {
    id: "pregnancy",
    name: "Вагітність",
    description: "Другий етап батьківства: вагітність. Тут ви знайдете ключові теми, поради, інструменти та статті для майбутніх мам.",
    image: "/images/development-stages/pregnancy/pregnant.webp",
    icon: HeartPulse,
    topics: [
      "by-trimesters",
      "by-weeks",
      "mom-state",
      "baby-development",
      "health-safety",
      "nutrition-activity",
      "birth-prep",
      "baby-prep"
    ],
    tools: [],
    blogPosts: [],
    articles: [],
  },
  {
    id: "newborn",
    name: "Новонароджений",
    description: "Третій етап: перші тижні життя дитини. Тут про догляд, годування, сон і зв'язок з новонародженим.",
    image: "/images/development-stages/newborn/newborn.webp",
    icon: Baby,
    topics: [
      "breastfeeding",
      "diapering",
      "sleep",
      "crying",
      "health-checks",
      "parent-bonding"
    ],
    tools: [],
    blogPosts: [],
    articles: [],
  },
  {
    id: "infant",
    name: "Немовля (від 2 місяців - 1 року)",
    description: "Четвертий етап: немовля. Активне зростання, розвиток моторики, перші звуки та емоції.",
    image: "/images/development-stages/infant/infant.webp",
    icon: Smile,
    topics: [
      "motor-skills",
      "feeding-milestones",
      "vaccination",
      "first-words",
      "baby-games",
      "safety-at-home"
    ],
    tools: [],
    blogPosts: [],
    articles: [],
  },
  {
    id: "toddler",
    name: "Малюк (1-3 р.)",
    description: "П’ятий етап: вивчення світу через гру, розвиток мови та емоцій, перші соціальні навички.",
    image: "https://placehold.co/600x300/png",
    icon: ToyBrick,
    topics: [
      "speech-development",
      "temperament",
      "discipline",
      "toilet-training",
      "play-activities",
      "routine"
    ],
    tools: [],
    blogPosts: [],
    articles: [],
  },
  {
    id: "preschooler",
    name: "Дошкільник (3-6 р.)",
    description: "Шостий етап: формування особистості, навички самостійності, підготовка до школи.",
    image: "https://placehold.co/600x300/png",
    icon: CalendarRange,
    topics: [
      "social-skills",
      "language-boost",
      "behavior-guidance",
      "learning-through-play",
      "preschool-prep"
    ],
    tools: [],
    blogPosts: [],
    articles: [],
  },
  {
    id: "schooler",
    name: "Школяр (6-11 р.)",
    description: "Сьомий етап: адаптація до школи, розвиток логіки, дружби, самооцінки.",
    image: "https://placehold.co/600x300/png",
    icon: School,
    topics: [
      "learning",
      "emotional-intelligence",
      "sports",
      "bullying",
      "screen-time",
      "responsibility"
    ],
    tools: [],
    blogPosts: [],
    articles: [],
  },
  {
    id: "teen",
    name: "Підліток (12+ р.)",
    description: "Восьмий етап: підлітковий вік. Ідентичність, незалежність, відносини, складні розмови.",
    image: "https://placehold.co/600x300/png",
    icon: User,
    topics: [
      "puberty",
      "mental-health",
      "peer-pressure",
      "communication",
      "digital-life",
      "future-planning"
    ],
    tools: [],
    blogPosts: [],
    articles: [],
  }
];
