import FeaturedToolsClient from '@/components/FeaturedToolsClient';

// ✅ Tools data with slug for routing
const toolsData = [
  {
    name: "Notion",
    slug: "notion",
    category: "Productivity",
    description: "All-in-one workspace for notes, tasks, wikis, and databases. Perfect for teams and individuals.",
    rating: 4.8,
    users: "10M+",
    price: "Free",
    featured: true,
    icon: "📝",
    trending: true
  },
  {
    name: "Figma",
    slug: "figma",
    category: "Design",
    description: "Collaborative design tool for creating beautiful interfaces and prototypes in real-time.",
    rating: 4.9,
    users: "8M+",
    price: "Free",
    featured: true,
    icon: "🎨",
    trending: false
  },
  {
    name: "Slack",
    slug: "slack",
    category: "Communication",
    description: "Team collaboration platform that brings all your communication together in one place.",
    rating: 4.6,
    users: "12M+",
    price: "$7.25/mo",
    featured: true,
    icon: "💬",
    trending: false
  },
  {
    name: "VS Code",
    slug: "vs-code",
    category: "Development",
    description: "Powerful code editor with intelligent features and extensive customization options.",
    rating: 4.9,
    users: "15M+",
    price: "Free",
    featured: true,
    icon: "⚡",
    trending: true
  },
  {
    name: "Google Analytics",
    slug: "google-analytics",
    category: "Analytics",
    description: "Web analytics service that tracks and reports website traffic and user behavior.",
    rating: 4.5,
    users: "5M+",
    price: "Free",
    featured: true,
    icon: "📊",
    trending: false
  },
  {
    name: "Trello",
    slug: "trello",
    category: "Productivity",
    description: "Visual project management tool that uses boards, lists, and cards to organize tasks.",
    rating: 4.4,
    users: "6M+",
    price: "Free",
    featured: true,
    icon: "📋",
    trending: false
  }
];

// ✅ SEO Metadata
export const metadata = {
  title: 'Featured Tools ‑ Top Productivity & Design Tools | ToolHub',
  description:
    'Discover the most popular and highly‑rated tools used by millions of professionals worldwide.',
  keywords: [
    'featured tools',
    'productivity tools',
    'design tools',
    'communication tools',
    'development tools',
    'analytics tools',
  ],
  openGraph: {
    title: 'Featured Tools ‑ Top Productivity & Design Tools',
    description:
      'Discover the most popular and highly‑rated tools used by millions of professionals worldwide.',
    type: 'website',
    url: '/featured',
  },
};

export default function FeaturedPage() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <FeaturedToolsClient toolsData={toolsData} />
    </div>
  );
}
