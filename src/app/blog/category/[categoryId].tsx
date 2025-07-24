import BlogCategoryLayout from '../../components/BlogCategoryLayout';
import { useRouter } from 'next/router';
import { blogCategories } from '../../content/blogCategories';
import { blogPosts } from '../../content/blogPosts';
import { stages } from '../../content/stages';
import { topics } from '../../content/topics';
import { useState } from 'react';

export default function BlogCategoryPage() {
  const router = useRouter();
  const { categoryId } = router.query;
  const category = blogCategories.find(c => c.id === categoryId);

  // Get all posts for this category
  const categoryPosts = blogPosts.filter(post => post.category === categoryId);
  // Get all unique stages and topics from these posts
  const allStages = Array.from(new Set(categoryPosts.flatMap(p => p.relatedStages)));
  const allTopics = Array.from(new Set(categoryPosts.flatMap(p => p.relatedTopics)));

  // Map stage/topic IDs to Ukrainian names
  const stageNameMap = Object.fromEntries(stages.map(s => [s.id, s.name]));
  const topicNameMap = Object.fromEntries(topics.map(t => [t.id, t.name]));

  const [selectedStage, setSelectedStage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const filteredPosts = categoryPosts.filter(post =>
    (selectedStage === '' || post.relatedStages.includes(selectedStage)) &&
    (selectedTopic === '' || post.relatedTopics.includes(selectedTopic))
  );

  return (
    <BlogCategoryLayout
      title={category ? category.name : 'Категорія'}
      posts={filteredPosts}
      stages={allStages}
      topics={allTopics}
      stageNameMap={stageNameMap}
      topicNameMap={topicNameMap}
      selectedStage={selectedStage}
      setSelectedStage={setSelectedStage}
      selectedTopic={selectedTopic}
      setSelectedTopic={setSelectedTopic}
    />
  );
} 