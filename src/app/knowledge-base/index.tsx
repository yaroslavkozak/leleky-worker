import KnowledgeBaseLayout from '../components/KnowledgeBaseLayout';
export default function KnowledgeBaseHome() {
  return (
    <KnowledgeBaseLayout title="База знань">
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">База знань</h1>
        <p className="text-lg text-muted">Оберіть розділ бази знань у меню.</p>
      </div>
    </KnowledgeBaseLayout>
  );
} 