// app/category/[category]/page.jsx
import ToolCard from '@/components/ToolCard'; // adjust path if needed
import { allTools } from '@/data/tools'; // your tools array
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const categories = [...new Set(allTools.map(tool => tool.category.toLowerCase()))];
  return categories.map(category => ({ category }));
}

export const dynamicParams = true;

export default function CategoryPage({ params }) {
  const category = params.category.toLowerCase();
  const filteredTools = allTools.filter(tool => tool.category.toLowerCase() === category);

  if (filteredTools.length === 0) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize">{category} Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
