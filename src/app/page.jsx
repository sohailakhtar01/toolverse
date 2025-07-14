// ✅ No "use client" here – this is a server component
import LandingClient from '@/components/LandingClient';

export const metadata = {
  title: 'ToolVault - Discover the Best AI Tools & Software for Your Business',
  description:
    'Explore the ultimate collection of AI-powered tools, software, and digital services designed to boost productivity, streamline workflows, and grow your business. Handpicked, categorized, and easy to browse.',
  keywords: [
    'AI tools',
    'best AI software',
    'tool directory',
    'digital tools',
    'productivity tools',
    'design tools',
    'development tools',
    'marketing automation',
    'SaaS tools',
    'ToolVault'
  ],
  openGraph: {
    title: 'ToolVault - Discover the Best AI Tools & Software',
    description:
      'Explore the best AI-powered tools and digital services for every need — curated and categorized to save you time.',
    type: 'website',
    url: 'https://yourdomain.com/', // replace with your actual domain
    siteName: 'ToolVault',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolVault - Curated AI Tools for Business Growth',
    description: 'Find the perfect tool for every task. Discover, filter, and explore the best AI tools.',
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-white via-purple-50 to-purple-100">
      <LandingClient />
    </main>
  );
}
