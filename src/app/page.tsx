import LandingLayout from './components/LandingLayout';
import TrimesterSelectionBlock from './components/TrimesterSelectionBlock';
import WeekSelectionBlock from './components/WeekSelectionBlock';
import Section from './components/Section';
import { tools } from './content/tools';
import { blogPosts } from './content/blogPosts';
import { blogCategories } from './content/blogCategories';
import { topics } from './content/topics';
import Link from 'next/link';
import { advancedParentingStages, AdvancedStage } from './content/advancedParentingStages';
import ToolGrid from './components/ToolGrid';
import BlogPostGrid from './components/BlogPostGrid';
// import Head from 'next/head'; // In the app directory, use the Metadata API instead of next/head

const hero = (
  <section
    className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] w-full bg-cover bg-center"
    style={{ backgroundImage: "url('/images/homepage-slider/hero.webp')" }}
  >
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 w-full text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Ласкаво просимо до <span className="text-primary">Лелеки</span>
      </h1>
      <p className="text-lg text-white max-w-2xl mx-auto mb-8 drop-shadow">
        Ваш надійний порадник на кожному етапі батьківства — від планування до підліткового віку.
      </p>
      <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
        Почати тут
      </button>
    </div>
  </section>
);

const topicNameMap = Object.fromEntries(topics.map(t => [t.id, t.name]));
const blogCategoryMap = Object.fromEntries(blogCategories.map(c => [c.id, c.name]));

// Custom titles for stages in the homepage section
const customStageTitles = [
  'Ми плануємо дитину',
  'Я вагітна!',
  'Ми стали батьками',
  'Дитині вже рочок',
];

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Лелеки — Платформа для батьків: від планування до підлітків</title>
        <meta name="description" content="Ваш надійний порадник на кожному етапі батьківства — від планування до підліткового віку. Корисні статті, інструменти, блог та база знань для українських батьків." />
      </Head> */}
      <LandingLayout hero={hero}>
        <div className="overflow-x-hidden">
      <Section>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-text">Оберіть етап розвитку вашої дитини</h2>
            <p className="text-center text-muted max-w-2xl mx-auto mb-10">
              Виберіть етап, щоб отримати корисну інформацію, поради та інструменти для вашої ситуації.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {advancedParentingStages.map((stage: AdvancedStage, idx: number) => (
                <Link key={stage.id} href={stage.href || `/stages/${stage.id}`} className="bg-white rounded-xl shadow-lg flex flex-col items-center min-w-[220px] max-w-xs w-full hover:shadow-xl transition group mx-1 p-6">
                  {stage.icon && <stage.icon className="w-10 h-10 text-primary mb-4" />}
                  <h3 className="text-lg font-semibold text-text mb-1 text-center">{customStageTitles[idx] || stage.name}</h3>
                  <span className="mt-auto text-primary font-semibold">Перейти до етапу</span>
                </Link>
              ))}
            </div>
          </div>
        </Section>


        <Section>
          <TrimesterSelectionBlock />
        </Section>
        <Section>
          <WeekSelectionBlock />
        </Section>
        <Section className="bg-neutral">
          <div className="container mx-auto px-4">
            <ToolGrid tools={tools} />
          </div>
        </Section>
        <Section>
          <div className="container mx-auto px-4">
            <BlogPostGrid
              posts={blogPosts.slice(0, 12)}
              heading="Блог"
              topicNameMap={topicNameMap}
              blogCategoryMap={blogCategoryMap}
            />
          </div>
        </Section>
      </div>
    </LandingLayout>
    </>
  );
}
