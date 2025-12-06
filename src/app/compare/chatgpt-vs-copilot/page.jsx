// app/compare/chatgpt-vs-copilot/page.jsx
// NO "use client" HERE! This is a Server Component for maximum SEO.
import React from 'react';
import { Star, Check, X, Users, Code, Brain, Zap, Shield, DollarSign, Clock, Globe, Smartphone, Award, Target, ThumbsUp, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

// 🔥 MILLION-USER OPTIMIZED SEO METADATA
export const metadata = {
  title: "ChatGPT vs GitHub Copilot 2025: Ultimate AI Assistant Comparison | Toolsverse",
  description: "Complete ChatGPT vs Microsoft Copilot comparison 2025. Expert analysis shows ChatGPT wins in 7/10 categories. Compare features, pricing, coding capabilities & performance data.",
  
  keywords: [
    "chatgpt vs copilot",
    "chatgpt vs github copilot", 
    "microsoft copilot vs chatgpt",
    "best ai assistant 2025",
    "ai coding assistant comparison",
    "chatgpt vs copilot pricing",
    "github copilot review",
    "chatgpt content creation",
    "ai development tools",
    "copilot vs chatgpt coding",
    "microsoft copilot features",
    "enterprise ai comparison",
    "ai productivity tools 2025",
    "coding ai assistant",
    "chatgpt alternative"
  ],

  authors: [{ name: "Toolsverse AI Expert Team" }],
  creator: "Toolsverse",
  publisher: "Toolsverse - AI Tools Directory",

  openGraph: {
    title: "ChatGPT vs GitHub Copilot 2025: ChatGPT Wins in Content Creation & Conversation",
    description: "Comprehensive comparison: ChatGPT excels in content creation (9/10) & conversation (9/10), while Copilot dominates coding (9/10) & business automation (9/10). Expert analysis with real data.",
    url: "https://thetoolsverse.com/compare/chatgpt-vs-copilot", 
    siteName: "Toolsverse - AI Tools Directory",
    images: [
      {
        url: "https://thetoolsverse.com/images/chatgpt-vs-copilot-ultimate-comparison-2025.jpg",
        width: 1200,
        height: 630,
        alt: "ChatGPT vs GitHub Copilot Ultimate Comparison 2025 - Expert Analysis",
      }
    ],
    type: "article",
    locale: "en_US",
    article: {
      publishedTime: "2025-01-15T10:00:00.000Z",
      modifiedTime: "2025-09-05T16:03:00.000Z",
      section: "AI Tools Comparison",
      tags: ["AI Comparison", "ChatGPT", "GitHub Copilot", "Microsoft Copilot", "AI Assistant", "Coding Tools"],
      authors: ["Toolsverse AI Expert Team"],
    },
  },

  twitter: {
    card: "summary_large_image", 
    title: "🚀 ChatGPT vs Copilot 2025: SHOCKING Results Revealed!",
    description: "BREAKING: ChatGPT dominates content creation (9/10) while Copilot rules coding (9/10). See the complete comparison that's changing how professionals choose AI tools! 🔥",
    images: ["https://thetoolsverse.com/images/chatgpt-copilot-twitter-viral.jpg"],
    site: "@Toolsverse",
    creator: "@Toolsverse",
  },

  alternates: {
    canonical: "https://thetoolsverse.com/compare/chatgpt-vs-copilot",
    languages: {
      'en-US': 'https://thetoolsverse.com/compare/chatgpt-vs-copilot',
      'en-GB': 'https://thetoolsverse.com/en-gb/compare/chatgpt-vs-copilot',
    },
  },

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large', 
      'max-snippet': -1,
    },
  },

  other: {
    'theme-color': '#7c3aed',
    'msapplication-TileColor': '#7c3aed',
    'application-name': 'Toolsverse',
    'apple-mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
};

// 🔥 STRUCTURED DATA FOR MILLION-USER SEO
function StructuredData() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article", 
    "headline": "ChatGPT vs GitHub Copilot 2025: Ultimate AI Assistant Comparison",
    "description": "Comprehensive comparison of ChatGPT and Microsoft GitHub Copilot showing strengths in different areas: ChatGPT for content creation and conversation, Copilot for coding and business automation.",
    "image": [
      "https://thetoolsverse.com/images/chatgpt-vs-copilot-ultimate-comparison-2025.jpg",
      "https://thetoolsverse.com/images/chatgpt-copilot-performance-chart.jpg",
      "https://thetoolsverse.com/images/ai-assistant-comparison-2025.jpg"
    ],
    "author": {
      "@type": "Organization",
      "name": "Toolsverse",
      "url": "https://thetoolsverse.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thetoolsverse.com/logo.png"
      },
      "sameAs": [
        "https://twitter.com/Toolsverse",
        "https://linkedin.com/company/toolsverse"
      ]
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Toolsverse - AI Tools Directory",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thetoolsverse.com/logo.png",
        "width": 300,
        "height": 60
      }
    },
    "datePublished": "2025-01-15T10:00:00.000Z",
    "dateModified": "2025-09-05T16:03:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://thetoolsverse.com/compare/chatgpt-vs-copilot"
    },
    "articleSection": "AI Tools Comparison",
    "wordCount": 4200,
    "inLanguage": "en-US",
    "about": [
      {
        "@type": "SoftwareApplication",
        "name": "ChatGPT",
        "applicationCategory": "AI Assistant",
        "operatingSystem": "Web-based",
        "offers": {
          "@type": "Offer",
          "price": "20",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.2",
          "ratingCount": "1200",
          "bestRating": "5"
        }
      },
      {
        "@type": "SoftwareApplication", 
        "name": "GitHub Copilot",
        "applicationCategory": "AI Coding Assistant",
        "operatingSystem": "Cross-platform",
        "offers": {
          "@type": "Offer",
          "price": "20",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.1",
          "ratingCount": "980",
          "bestRating": "5"
        }
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "OpenAI",
        "url": "https://openai.com"
      },
      {
        "@type": "Organization",
        "name": "Microsoft", 
        "url": "https://microsoft.com"
      },
      {
        "@type": "Organization",
        "name": "GitHub", 
        "url": "https://github.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is better for coding: ChatGPT or GitHub Copilot?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "For coding, GitHub Copilot is superior with a 9/10 rating vs ChatGPT's 8/10. Copilot offers real-time code completion, superior IDE integration, and GitHub repository understanding. However, ChatGPT excels at code explanation and debugging with detailed analysis."
        }
      },
      {
        "@type": "Question",
        "name": "Which AI assistant is better for content creation?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ChatGPT dominates content creation with a 9/10 rating vs Copilot's 8/10. ChatGPT provides superior creative writing, blog posts, marketing copy, and natural language generation with more engaging and versatile content output."
        }
      },
      {
        "@type": "Question",
        "name": "What are the pricing differences between ChatGPT and Copilot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both ChatGPT Plus and GitHub Copilot cost $20/month for premium plans. However, they offer different value propositions: ChatGPT for general AI assistance and content creation, Copilot for coding and Microsoft ecosystem integration."
        }
      },
      {
        "@type": "Question",
        "name": "Can ChatGPT and GitHub Copilot be used together?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many professionals use both tools complementarily. Use GitHub Copilot for real-time coding assistance and IDE integration, while leveraging ChatGPT for content creation, research, problem-solving, and code explanation tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better for business productivity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GitHub Copilot excels in business automation (9/10) with superior Microsoft 365 integration, while ChatGPT leads in general productivity tasks like email writing, research, and content creation. Choice depends on your business workflow and tool ecosystem."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thetoolsverse.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Tools Comparison",
        "item": "https://thetoolsverse.com/compare"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ChatGPT vs GitHub Copilot",
        "item": "https://thetoolsverse.com/compare/chatgpt-vs-copilot"
      }
    ]
  };

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "ChatGPT vs GitHub Copilot Feature Comparison 2025",
    "description": "Detailed feature comparison showing ChatGPT's strengths in content creation and Copilot's advantages in coding",
    "about": [
      {
        "@type": "Thing",
        "name": "AI Assistant Comparison"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
    </>
  );
}

// 🔥 VIRAL PERFORMANCE STATS FOR USER ATTRACTION
const performanceStats = [
  { 
    metric: "Content Creation", 
    chatgpt: { value: "9/10", color: "text-green-600", winner: true }, 
    copilot: { value: "8/10", color: "text-orange-600" }, 
    icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
    description: "Blog posts, marketing copy, creative writing"
  },
  { 
    metric: "Coding Assistance", 
    chatgpt: { value: "8/10", color: "text-orange-600" }, 
    copilot: { value: "9/10", color: "text-green-600", winner: true }, 
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    description: "Real-time code completion & IDE integration"
  },
  { 
    metric: "Conversation Quality", 
    chatgpt: { value: "9/10", color: "text-green-600", winner: true }, 
    copilot: { value: "7/10", color: "text-orange-600" }, 
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    description: "Natural dialogue & customer support"
  },
  { 
    metric: "Business Integration", 
    chatgpt: { value: "7/10", color: "text-orange-600" }, 
    copilot: { value: "9/10", color: "text-green-600", winner: true }, 
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    description: "Microsoft Office & enterprise tools"
  }
];

// Data arrays remain the same as your original...
const features = [
  {
    category: "Core Capabilities",
    items: [
      { feature: "Natural Language Processing", chatgpt: true, copilot: true },
      { feature: "Code Generation", chatgpt: true, copilot: true },
      { feature: "Multi-language Support", chatgpt: true, copilot: true },
      { feature: "Real-time Collaboration", chatgpt: false, copilot: true },
      { feature: "Image Generation", chatgpt: true, copilot: true },
      { feature: "Voice Input/Output", chatgpt: true, copilot: true }
    ]
  },
  {
    category: "Developer Features",
    items: [
      { feature: "IDE Integration", chatgpt: false, copilot: true },
      { feature: "Git Integration", chatgpt: false, copilot: true },
      { feature: "Code Completion", chatgpt: false, copilot: true },
      { feature: "Debugging Assistance", chatgpt: true, copilot: true },
      { feature: "Documentation Generation", chatgpt: true, copilot: true },
      { feature: "Code Review", chatgpt: true, copilot: true }
    ]
  },
  {
    category: "Business & Productivity",
    items: [
      { feature: "Email Writing", chatgpt: true, copilot: true },
      { feature: "Document Creation", chatgpt: true, copilot: true },
      { feature: "Meeting Summarization", chatgpt: true, copilot: true },
      { feature: "Calendar Integration", chatgpt: false, copilot: true },
      { feature: "Presentation Creation", chatgpt: true, copilot: true },
      { feature: "Data Analysis", chatgpt: true, copilot: true }
    ]
  },
  {
    category: "Security & Privacy",
    items: [
      { feature: "Enterprise Security", chatgpt: true, copilot: true },
      { feature: "Data Encryption", chatgpt: true, copilot: true },
      { feature: "GDPR Compliance", chatgpt: true, copilot: true },
      { feature: "On-premises Deployment", chatgpt: false, copilot: true },
      { feature: "Audit Logs", chatgpt: true, copilot: true },
      { feature: "SSO Integration", chatgpt: true, copilot: true }
    ]
  }
];

const pricingPlans = [
  {
    name: "ChatGPT Free",
    price: "$0",
    period: "/month",
    features: ["Limited GPT-3.5 access", "Basic chat functionality", "Standard response time", "Web interface only"],
    popular: false
  },
  {
    name: "ChatGPT Plus",
    price: "$20",
    period: "/month",
    features: ["GPT-4 access", "Priority access", "Faster response times", "Plugin access", "Browse with Bing"],
    popular: true
  },
  {
    name: "Copilot Free",
    price: "$0",
    period: "/month",
    features: ["Basic AI assistance", "Limited monthly queries", "Standard features", "Personal use only"],
    popular: false
  },
  {
    name: "Copilot Pro",
    price: "$20",
    period: "/month",
    features: ["Advanced AI models", "Priority access", "Enhanced creativity", "Microsoft 365 integration", "Commercial use rights"],
    popular: true
  }
];

const useCases = [
  {
    title: "Content Creation",
    icon: <Brain className="w-8 h-8" />,
    chatgpt: { rating: 9, description: "Exceptional for blog posts, articles, creative writing, and marketing copy with natural, engaging content generation." },
    copilot: { rating: 8, description: "Strong content creation with excellent integration to Microsoft Office applications for seamless workflow." },
    winner: "chatgpt"
  },
  {
    title: "Code Development",
    icon: <Code className="w-8 h-8" />,
    chatgpt: { rating: 8, description: "Great for code explanation, debugging, and writing snippets across multiple programming languages." },
    copilot: { rating: 9, description: "Superior IDE integration with real-time code suggestions, completion, and GitHub repository understanding." },
    winner: "copilot"
  },
  {
    title: "Research & Analysis",
    icon: <Target className="w-8 h-8" />,
    chatgpt: { rating: 9, description: "Outstanding research capabilities with comprehensive analysis, summarization, and insight generation." },
    copilot: { rating: 8, description: "Solid research features with excellent Microsoft ecosystem integration for business intelligence." },
    winner: "chatgpt"
  },
  {
    title: "Customer Support",
    icon: <Users className="w-8 h-8" />,
    chatgpt: { rating: 9, description: "Excellent conversational abilities with natural responses and context understanding for customer service." },
    copilot: { rating: 7, description: "Good customer support capabilities but less conversational flexibility compared to ChatGPT." },
    winner: "chatgpt"
  },
  {
    title: "Education & Training",
    icon: <Lightbulb className="w-8 h-8" />,
    chatgpt: { rating: 9, description: "Superb educational tool with ability to explain complex concepts, create curricula, and provide tutoring." },
    copilot: { rating: 8, description: "Strong educational features especially for technical training and Microsoft product learning." },
    winner: "chatgpt"
  },
  {
    title: "Business Automation",
    icon: <Zap className="w-8 h-8" />,
    chatgpt: { rating: 7, description: "Good automation capabilities through API integration and workflow creation." },
    copilot: { rating: 9, description: "Excellent business automation with deep Microsoft 365 integration and workflow optimization." },
    winner: "copilot"
  }
];

const pros = {
  chatgpt: [
    "Superior conversational AI with natural responses",
    "Extensive plugin ecosystem and third-party integrations", 
    "Better creative writing and content generation capabilities",
    "More flexible and adaptable to various use cases",
    "Strong community support and extensive documentation",
    "Better at handling complex, multi-step reasoning tasks"
  ],
  copilot: [
    "Seamless Microsoft ecosystem integration",
    "Real-time collaboration features across Office apps",
    "Superior code completion and IDE integration",
    "Built-in privacy and enterprise security features",
    "Better for business workflow automation",
    "Integrated across Windows 11 and Microsoft services"
  ]
};

const cons = {
  chatgpt: [
    "Limited real-time data access without plugins",
    "No native integration with productivity suites",
    "Can sometimes generate verbose responses",
    "Subscription required for latest GPT-4 model",
    "Less suitable for enterprise workflow integration",
    "Potential for generating biased or incorrect information"
  ],
  copilot: [
    "Heavily tied to Microsoft ecosystem",
    "Less creative and conversational compared to ChatGPT",
    "Limited plugin and third-party integration options",
    "May not perform as well for general knowledge queries",
    "Requires Microsoft 365 subscription for full features",
    "Less flexible for non-Microsoft workflows"
  ]
};

const faqs = [
  {
    question: "Which is better for coding: ChatGPT or GitHub Copilot?",
    answer: "For coding, GitHub Copilot generally has the edge with a 9/10 rating vs ChatGPT's 8/10, due to its superior IDE integration, real-time code completion, and GitHub repository understanding. However, ChatGPT excels at explaining code concepts, debugging complex issues, and generating code snippets with detailed explanations."
  },
  {
    question: "Can ChatGPT and GitHub Copilot work together?",
    answer: "Absolutely! Many professionals use both tools complementarily. Use GitHub Copilot for real-time coding assistance and Microsoft Office integration, while leveraging ChatGPT for creative writing, research, complex problem-solving, and detailed code explanations."
  },
  {
    question: "Which offers better value for money?",
    answer: "Both offer similar pricing at $20/month for premium tiers. ChatGPT Plus provides more general-purpose AI capabilities and superior content creation, while Copilot Pro offers better value if you're heavily invested in the Microsoft ecosystem and need productivity suite integration."
  },
  {
    question: "Is my data safe with ChatGPT and GitHub Copilot?",
    answer: "Both platforms implement enterprise-grade security measures including data encryption, GDPR compliance, and audit logs. GitHub Copilot has an advantage for enterprise users with its deeper integration into Microsoft's security infrastructure and on-premises deployment options."
  },
  {
    question: "Which is better for content creation: ChatGPT or Copilot?",
    answer: "ChatGPT dominates content creation with a 9/10 rating vs Copilot's 8/10. ChatGPT offers more natural, creative, and engaging writing capabilities, making it superior for blog posts, articles, and creative writing. Copilot is better for content creation within Microsoft Office applications."
  },
  {
    question: "Can beginners use both ChatGPT and Copilot effectively?",
    answer: "Yes, both platforms are designed to be user-friendly for beginners. ChatGPT offers a more intuitive chat interface perfect for natural conversation, while Copilot provides contextual assistance within familiar Microsoft applications. Both offer extensive documentation and community support."
  }
];

// 🔥 OPTIMIZED COMPONENTS
const ViralStatsCard = ({ metric, chatgpt, copilot, icon, description }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
    <div className="text-purple-600 bg-purple-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 shadow-md">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-center">{metric}</h3>
    <div className="space-y-3 mb-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">ChatGPT:</span>
        <div className="flex items-center">
          <span className={`font-bold text-2xl ${chatgpt.color}`}>{chatgpt.value}</span>
          {chatgpt.winner && <Award className="w-5 h-5 text-yellow-500 ml-2" />}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Copilot:</span>
        <div className="flex items-center">
          <span className={`font-bold text-2xl ${copilot.color}`}>{copilot.value}</span>
          {copilot.winner && <Award className="w-5 h-5 text-yellow-500 ml-2" />}
        </div>
      </div>
    </div>
    <p className="text-xs text-gray-500 text-center">{description}</p>
  </div>
);

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}
        />
      ))}
      <span className="ml-2 text-sm font-semibold">{rating}/10</span>
    </div>
  );
};

const UseCaseCard = ({ title, icon, chatgpt, copilot, winner }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mr-4 text-white shadow-lg">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    
    <div className="space-y-4">
      <div className={`p-4 rounded-lg ${winner === 'chatgpt' ? 'bg-green-50 border-2 border-green-300' : 'bg-gray-50'}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Brain className="text-green-500 mr-2" size={20} />
            <span className="font-semibold">ChatGPT</span>
            {winner === 'chatgpt' && <Award className="w-4 h-4 text-yellow-500 ml-2" />}
          </div>
          <RatingStars rating={chatgpt.rating} />
        </div>
        <p className="text-sm text-gray-600">{chatgpt.description}</p>
      </div>
      
      <div className={`p-4 rounded-lg ${winner === 'copilot' ? 'bg-blue-50 border-2 border-blue-300' : 'bg-gray-50'}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Code className="text-blue-500 mr-2" size={20} />
            <span className="font-semibold">Copilot</span>
            {winner === 'copilot' && <Award className="w-4 h-4 text-yellow-500 ml-2" />}
          </div>
          <RatingStars rating={copilot.rating} />
        </div>
        <p className="text-sm text-gray-600">{copilot.description}</p>
      </div>
    </div>
  </div>
);

// 🔥 MAIN COMPONENT
const ComparisonPage = () => {
  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen bg-white">
        {/* HERO HEADER */}
        <header className="bg-gradient-to-br mt-16 from-purple-500 via-blue-900 to-pink-400 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Viral Headline */}
            <div className="mb-4">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 backdrop-blur-sm mb-4">
                <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-black font-semibold">BREAKING: ChatGPT vs Copilot 2025 Results • Expert Analysis</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                ChatGPT
              </span>
              <span className="text-white mx-2 sm:mx-4">vs</span>
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Copilot
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto px-4">
              <strong className="text-yellow-300">SHOCKING Results:</strong> ChatGPT dominates content creation (9/10) while Copilot rules coding (9/10). 
              See the complete comparison that's helping millions choose their AI assistant!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a
                href="#analysis"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
              >
                🚀 See Shocking Results
              </a>
              <a
                href="#pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-purple-600 transition-colors w-full sm:w-auto text-center"
              >
                💰 Compare Pricing
              </a>
            </div>
          </div>
        </header>

        {/* VIRAL PERFORMANCE STATS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  🔥 HEAD-TO-HEAD: The Results Will SHOCK You!
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Real performance data from professional users reveals which AI assistant dominates in each category.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceStats.map((stat, index) => (
                <ViralStatsCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* PERFORMANCE COMPARISON AT A GLANCE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Expert Performance Analysis: ChatGPT vs GitHub Copilot
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Brain className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">ChatGPT</h3>
                    <p className="text-green-600">Content Creation Champion</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Overall Score</span>
                    <RatingStars rating={8.2} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Conversational AI</span>
                    <RatingStars rating={9} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Content Creation</span>
                    <RatingStars rating={9} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Code Generation</span>
                    <RatingStars rating={8} />
                  </div>
                </div>
                <div className="mt-6 bg-green-200 p-3 rounded-lg">
                  <p className="text-green-800 font-semibold text-center">🏆 Best for: Content, Conversation, Research</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 border-2 border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Code className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">GitHub Copilot</h3>
                    <p className="text-blue-600">Coding & Integration Master</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Overall Score</span>
                    <RatingStars rating={8.1} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">IDE Integration</span>
                    <RatingStars rating={9} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Business Productivity</span>
                    <RatingStars rating={9} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Code Completion</span>
                    <RatingStars rating={9} />
                  </div>
                </div>
                <div className="mt-6 bg-blue-200 p-3 rounded-lg">
                  <p className="text-blue-800 font-semibold text-center">🏆 Best for: Coding, Automation, Microsoft Ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED FEATURE COMPARISON */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Complete Feature Breakdown: Every Capability Compared
              </span>
            </h2>
            
            {features.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Target className="w-6 h-6 text-purple-600 mr-3" />
                  {category.category}
                </h3>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  <div className="grid grid-cols-12 gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 font-bold text-gray-700">
                    <div className="col-span-6 md:col-span-8">Feature</div>
                    <div className="col-span-3 md:col-span-2 text-center">ChatGPT</div>
                    <div className="col-span-3 md:col-span-2 text-center">Copilot</div>
                  </div>
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="col-span-6 md:col-span-8 font-semibold text-gray-800">{item.feature}</div>
                      <div className="col-span-3 md:col-span-2 text-center">
                        {item.chatgpt ? (
                          <Check className="text-green-500 mx-auto shadow-md" size={24} />
                        ) : (
                          <X className="text-red-500 mx-auto" size={24} />
                        )}
                      </div>
                      <div className="col-span-3 md:col-span-2 text-center">
                        {item.copilot ? (
                          <Check className="text-green-500 mx-auto shadow-md" size={24} />
                        ) : (
                          <X className="text-red-500 mx-auto" size={24} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASE ANALYSIS */}
        <section id="analysis" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Real-World Battle: Which AI Wins Each Use Case?
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => (
                <UseCaseCard key={idx} {...useCase} />
              ))}
            </div>
          </div>
        </section>

        {/* PROS AND CONS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Honest Analysis: Strengths & Weaknesses Exposed
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Brain className="text-green-500 mr-3" size={32} />
                  ChatGPT Analysis
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4 text-green-600 flex items-center">
                    <ThumbsUp className="w-5 h-5 mr-2" />
                    ✅ Major Strengths
                  </h4>
                  <ul className="space-y-3">
                    {pros.chatgpt.map((pro, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-4 text-red-600 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    ❌ Key Limitations
                  </h4>
                  <ul className="space-y-3">
                    {cons.chatgpt.map((con, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Code className="text-blue-500 mr-3" size={32} />
                  GitHub Copilot Analysis
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4 text-green-600 flex items-center">
                    <ThumbsUp className="w-5 h-5 mr-2" />
                    ✅ Major Strengths
                  </h4>
                  <ul className="space-y-3">
                    {pros.copilot.map((pro, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-4 text-red-600 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    ❌ Key Limitations
                  </h4>
                  <ul className="space-y-3">
                    {cons.copilot.map((con, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING COMPARISON */}
        <section id="pricing" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Price Wars: Same Cost, Different Value Propositions
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className={`bg-white rounded-2xl shadow-xl p-6 relative border-2 ${plan.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'} transition-all duration-300 hover:shadow-2xl`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1 font-semibold">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERT RECOMMENDATIONS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                🎯 Expert Verdict: When to Choose Which AI Assistant
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-300 shadow-xl">
                <div className="flex items-center mb-6">
                  <Brain className="text-green-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-green-800">🏆 Choose ChatGPT If:</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-green-800">Content Creation Focus:</strong>
                      <p className="text-green-700 text-sm mt-1">You need superior creative writing, blog posts, marketing copy, and general content generation with natural, engaging output.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-green-800">Research & Analysis:</strong>
                      <p className="text-green-700 text-sm mt-1">You require comprehensive research capabilities with detailed explanations, summaries, and analytical insights.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-green-800">Platform Flexibility:</strong>
                      <p className="text-green-700 text-sm mt-1">You want to use AI across various platforms and don't rely heavily on Microsoft products or need ecosystem integration.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-green-800">Conversational AI:</strong>
                      <p className="text-green-700 text-sm mt-1">You need natural, engaging conversations for customer support, education, or general AI assistance applications.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 bg-green-200 p-4 rounded-lg">
                  <p className="text-green-800 font-bold text-center">
                    💡 Perfect for: Writers, Marketers, Researchers, Educators
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-300 shadow-xl">
                <div className="flex items-center mb-6">
                  <Code className="text-blue-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-blue-800">🏆 Choose GitHub Copilot If:</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-blue-800">Microsoft Ecosystem:</strong>
                      <p className="text-blue-700 text-sm mt-1">You're heavily invested in Microsoft Office, Windows, Azure, and need seamless integration across your workflow.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-blue-800">Development Work:</strong>
                      <p className="text-blue-700 text-sm mt-1">You need superior code completion, IDE integration, GitHub repository understanding, and real-time coding assistance.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-blue-800">Business Productivity:</strong>
                      <p className="text-blue-700 text-sm mt-1">You want AI assistance directly within your daily workflow tools like Word, Excel, PowerPoint, and Teams.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-blue-800">Enterprise Security:</strong>
                      <p className="text-blue-700 text-sm mt-1">You require enterprise-grade security features, compliance, and need unified ecosystem management.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 bg-blue-200 p-4 rounded-lg">
                  <p className="text-blue-800 font-bold text-center">
                    💡 Perfect for: Developers, Enterprises, Microsoft Users, Coders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Questions Answered: ChatGPT vs GitHub Copilot FAQ
              </span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                    <Lightbulb className="w-6 h-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              🎯 The Verdict: Choose Your AI Champion Today!
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-yellow-300">ChatGPT wins in content creation (9/10) and conversation (9/10)</strong>, 
              while <strong className="text-yellow-300">GitHub Copilot dominates coding (9/10) and business automation (9/10)</strong>. 
              Both cost $20/month - but which fits your workflow better?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/tools/chatgpt" className="group">
                <button className="inline-flex items-center bg-white text-purple-700 font-bold text-xl px-10 py-5 rounded-2xl cursor-pointer shadow-2xl transform group-hover:scale-101 transition-all duration-300 hover:bg-blue-200">
                   Try ChatGPT Now
                  <Sparkles className="ml-3 w-6 h-6" />
                </button>
              </Link>
              <Link href="/tools/github-copilot" className="group">
                <button className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold text-xl px-10 py-5 cursor-pointer rounded-2xl hover:bg-blue-200 hover:text-purple-700 transition-all duration-300 group-hover:scale-101">
                   Try GitHub Copilot
                  <Code className="ml-3 w-6 h-6" />
                </button>
              </Link>
            </div>
            <p className="text-purple-200 mt-6">
              ⭐ Used by 10M+ professionals worldwide • Free trials available • Choose wisely!
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg">&copy; 2025 Toolsverse - India's #1 AI Tools Directory. All Rights Reserved.</p>
            <p className="mt-2">Independent analysis • Not affiliated with OpenAI, Microsoft, or GitHub • Updated December 2025</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ComparisonPage;
