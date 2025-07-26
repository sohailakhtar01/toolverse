// app/blog/[slug]/page.jsx

import AIExcelDataAnalysisPost from '@/components/blog/AIExcelDataAnalysisPost';
import AIRecruitingRevolutionPost from '@/components/blog/AIRecruitingRevolutionPost';
import DemystifyingAIDetectionPost from '@/components/blog/DemystifyingAIDetectionPost';

const components = {
  'ai-in-excel-data-analysis': <AIExcelDataAnalysisPost />,
  'ai-job-recruiters': <AIRecruitingRevolutionPost />,
  'ai-detection-tools': <DemystifyingAIDetectionPost />,
};

export default function BlogPostPage({ params }) {
  const PostComponent = components[params.slug];

  if (!PostComponent) return <h1>404 | Blog Post Not Found</h1>;

  return PostComponent;
}

export function generateStaticParams() {
  return [
    { slug: 'ai-in-excel-data-analysis' },
    { slug: 'ai-job-recruiters' },
    { slug: 'ai-detection-tools' },
  ];
}
