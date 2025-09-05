// src/app/free-ai-tools/students/page.jsx
import Link from 'next/link';
import { 
  GraduationCap, 
  BookOpen, 
  PenTool, 
  Search, 
  Calculator, 
  Languages, 
  Presentation, 
  FileText,
  Users,
  TrendingUp,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Zap,
  Target,
  Award,
  BookMarked,
  Lightbulb,
  Shield,
  Gift,
  Sparkles
} from 'lucide-react';

// SEO Metadata - Student-focused optimization
export const metadata = {
  title: "100+ Free AI Tools for Students 2025 | Study Smarter, Not Harder | Toolsverse",
  description: "Discover 100+ free AI tools helping 5M+ students get A+ grades. Study 5X faster with AI writing, research, math, language & presentation tools. Complete student toolkit - 100% FREE forever!",
  
  keywords: [
    "free ai tools for students",
    "ai study tools",
    "free student ai tools 2025",
    "ai homework help",
    "free ai writing tools students",
    "ai research tools students",
    "free ai math solver",
    "ai note taking tools",
    "student productivity ai",
    "free academic ai tools",
    "ai tools for college students",
    "study ai tools free",
    "ai exam preparation",
    "free ai presentation tools",
    "student ai toolkit"
  ].join(", "),
  
  openGraph: {
    title: "100+ Free AI Tools for Students 2025 - Study 5X Faster | Toolsverse",
    description: "Join 5M+ students using these secret FREE AI tools to get A+ grades. Complete student AI toolkit - writing, research, math, presentations & more!",
    url: "https://thetoolsverse.com/free-ai-tools/students",
    siteName: "Toolsverse - AI Tools Directory",
    images: [
      {
        url: "/students-ai-tools-og.jpg",
        width: 1200,
        height: 630,
        alt: "Free AI Tools for Students 2025 - Study Smarter with Toolsverse",
      },
    ],
    type: "article",
    locale: "en_US",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "100+ Free AI Tools for Students - Get A+ Grades Faster",
    description: "Secret AI tools used by top students to study 5X faster. 100% FREE student toolkit inside!",
    images: ["/students-ai-tools-og.jpg"],
    site: "@Toolsverse",
  },
  
  alternates: {
    canonical: "https://thetoolsverse.com/free-ai-tools/students",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  other: {
    'theme-color': '#3b82f6',
    'msapplication-TileColor': '#3b82f6',
    'article:author': 'Toolsverse Education Team',
    'article:section': 'Education Technology',
    'article:tag': 'AI Tools, Students, Free Software, Study Tools, Academic AI',
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "100+ Free AI Tools for Students 2025 | Study Smarter, Not Harder",
  "description": "Complete guide to free AI tools helping students study faster, improve grades, and ace exams. Discover writing, research, math, and presentation AI tools.",
  "image": "https://thetoolsverse.com/students-ai-tools-og.jpg",
  "author": {
    "@type": "Organization",
    "name": "Toolsverse",
    "url": "https://thetoolsverse.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Toolsverse",
    "logo": {
      "@type": "ImageObject",
      "url": "https://thetoolsverse.com/logo.png"
    }
  },
  "datePublished": "2025-01-01",
  "dateModified": "2025-09-05",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://thetoolsverse.com/free-ai-tools/students"
  },
  "articleSection": "Education Technology",
  "keywords": "free AI tools students, study AI, homework help, academic AI tools"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are these AI tools really free for students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All tools listed have robust free plans specifically designed for students. Many offer additional student discounts or extended free features with a .edu email address."
      }
    },
    {
      "@type": "Question", 
      "name": "Will using AI tools affect academic integrity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When used responsibly, AI tools enhance learning rather than replace it. Use them for research, brainstorming, and understanding concepts, but always create original work and cite sources appropriately."
      }
    },
    {
      "@type": "Question",
      "name": "How can AI tools improve my grades?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI tools help by organizing study materials, explaining complex concepts, assisting with research, checking grammar, solving math problems step-by-step, and creating study schedules - allowing you to study more efficiently."
      }
    }
  ]
};

// AI Tools Data
const aiToolsData = {
  studyAI: [
    {
      name: "Notion AI",
      slug: "notion",
      description: "Smart note-taking and study organization with AI-powered summaries",
      benefits: "Organize notes, create study guides, summarize lectures",
      pricing: "FREE plan available",
      useCase: "Perfect for creating structured study materials and exam preparation",
      category: "Study Organization"
    },
    {
      name: "Anki",
      slug: "anki",
      description: "AI-enhanced spaced repetition flashcard system",
      benefits: "Memorize faster with intelligent scheduling",
      pricing: "100% FREE",
      useCase: "Ideal for medical students, language learning, and fact memorization",
      category: "Memory & Retention"
    },
    {
      name: "Quizlet",
      slug: "quizlet",
      description: "AI-generated quizzes and study sets from your notes",
      benefits: "Auto-generate practice questions from any text",
      pricing: "FREE with premium features",
      useCase: "Transform textbook chapters into interactive study sessions",
      category: "Practice Testing"
    }
  ],
  writingAI: [
    {
      name: "Grammarly",
      slug: "grammarly",
      description: "AI writing assistant for error-free academic papers",
      benefits: "Fix grammar, improve clarity, check plagiarism",
      pricing: "FREE plan for students",
      useCase: "Essential for essays, research papers, and email communications",
      category: "Writing Enhancement"
    },
    {
      name: "QuillBot",
      slug: "quillbot",
      description: "AI paraphrasing and grammar checking tool",
      benefits: "Rewrite sentences, summarize text, avoid plagiarism",
      pricing: "FREE with daily limits",
      useCase: "Improve sentence structure and create original content",
      category: "Paraphrasing"
    },
    {
      name: "Hemingway Editor",
      slug: "hemingway-editor",
      description: "AI-powered writing clarity and readability checker",
      benefits: "Simplify complex sentences, improve readability",
      pricing: "100% FREE",
      useCase: "Make your academic writing clear and concise",
      category: "Clarity Enhancement"
    }
  ],
  researchAI: [
    {
      name: "Perplexity AI",
      slug: "perplexity-ai",
      description: "AI research assistant with real-time citations",
      benefits: "Find credible sources, get instant answers with references",
      pricing: "FREE plan available",
      useCase: "Research papers, fact-checking, literature reviews",
      category: "Academic Research"
    },
    {
      name: "Consensus",
      slug: "consensus",
      description: "AI-powered scientific research search engine",
      benefits: "Find peer-reviewed papers, extract key insights",
      pricing: "FREE for students",
      useCase: "Science projects, research papers, evidence-based arguments",
      category: "Scientific Research"
    },
    {
      name: "Elicit",
      slug: "elicit",
      description: "AI research assistant for academic literature",
      benefits: "Summarize papers, extract key findings, find related research",
      pricing: "FREE plan available",
      useCase: "Literature reviews, thesis research, academic writing",
      category: "Literature Review"
    }
  ],
  mathAI: [
    {
      name: "Wolfram Alpha",
      slug: "wolfram-alpha",
      description: "Computational AI for complex math problems",
      benefits: "Step-by-step solutions, graphing, calculations",
      pricing: "FREE with basic features",
      useCase: "Calculus, algebra, statistics, physics problems",
      category: "Problem Solving"
    },
    {
      name: "Photomath",
      slug: "photomath",
      description: "AI camera-based math problem solver",
      benefits: "Scan problems, get instant step-by-step solutions",
      pricing: "FREE mobile app",
      useCase: "Homework help, understanding solution methods",
      category: "Mobile Math Help"
    },
    {
      name: "Symbolab",
      slug: "symbolab",
      description: "AI algebra and calculus solver with explanations",
      benefits: "Detailed explanations, practice problems, graphing",
      pricing: "FREE with ads",
      useCase: "Learn math concepts through AI-guided problem solving",
      category: "Math Learning"
    }
  ],
  languageAI: [
    {
      name: "DeepL",
      slug: "deepl",
      description: "AI-powered translation with academic accuracy",
      benefits: "Translate research papers, maintain context and meaning",
      pricing: "FREE plan available",
      useCase: "Foreign language research, international academic papers",
      category: "Translation"
    },
    {
      name: "Duolingo",
      slug: "duolingo",
      description: "AI-personalized language learning platform",
      benefits: "Adaptive learning, conversation practice, progress tracking",
      pricing: "FREE with premium options",
      useCase: "Learn languages for study abroad, academic requirements",
      category: "Language Learning"
    },
    {
      name: "Reverso Context",
      slug: "reverso-context",
      description: "AI contextual translation and language examples",
      benefits: "See real-world usage examples, improve language skills",
      pricing: "100% FREE",
      useCase: "Academic writing in foreign languages, context understanding",
      category: "Contextual Learning"
    }
  ],
  presentationAI: [
    {
      name: "Canva AI",
      slug: "canva-ai",
      description: "AI-powered presentation and design tool",
      benefits: "Auto-generate slides, professional templates, brand consistency",
      pricing: "FREE plan for students",
      useCase: "Class presentations, project reports, academic posters",
      category: "Design & Presentations"
    },
    {
      name: "Gamma",
      slug: "gamma",
      description: "AI presentation builder from text prompts",
      benefits: "Create presentations from outlines, auto-format content",
      pricing: "FREE plan available",
      useCase: "Quick presentation creation, thesis defenses",
      category: "Automated Presentations"
    },
    {
      name: "Beautiful.AI",
      slug: "beautiful-ai",
      description: "AI-assisted slide design with smart formatting",
      benefits: "Professional layouts, auto-adjusting content, team collaboration",
      pricing: "FREE for students",
      useCase: "Academic conferences, group projects, research presentations",
      category: "Professional Presentations"
    }
  ],
  notetakingAI: [
    {
      name: "Otter.ai",
      slug: "otter-ai",
      description: "AI transcription for lectures and meetings",
      benefits: "Record and transcribe lectures, searchable notes",
      pricing: "FREE plan available",
      useCase: "Lecture capture, interview transcription, study group notes",
      category: "Audio Transcription"
    },
    {
      name: "Obsidian",
      slug: "obsidian",
      description: "AI-enhanced knowledge management and note linking",
      benefits: "Connect ideas, visualize knowledge graphs, smart search",
      pricing: "100% FREE",
      useCase: "Research organization, thesis planning, concept mapping",
      category: "Knowledge Management"
    },
    {
      name: "RemNote",
      slug: "remnote",
      description: "AI-powered spaced repetition note-taking",
      benefits: "Turn notes into flashcards, hierarchical organization",
      pricing: "FREE for students",
      useCase: "Active learning, medical school, law school preparation",
      category: "Active Note-Taking"
    }
  ]
};

// Student Testimonials
const testimonials = [
  {
    name: "Priya Sharma",
    university: "IIT Bombay",
    grade: "Computer Science Engineering",
    improvement: "From 6.8 to 8.4 CPI in Data Structures",
    story: "Using AI tools like Notion AI and Wolfram Alpha completely transformed how I understood complex algorithms. My coding assignments improved dramatically, and I saved 12 hours per week on homework and revision.",
    time_saved: "12 hours/week",
    gpa_improvement: "6.8 to 8.4 CPI"
  },
  {
    name: "Arjun Patel",
    university: "AIIMS Delhi", 
    grade: "MBBS 2nd Year",
    improvement: "NEET PG mock score from 520 to 680",
    story: "AI flashcards and spaced repetition helped me memorize thousands of medical terms and drug names. Went from struggling with Pharmacology to scoring 85% in internal exams within 4 months.",
    time_saved: "15 hours/week",
    gpa_improvement: "65% to 85% in internals"
  },
  {
    name: "Sneha Reddy",
    university: "St. Stephen's College, Delhi",
    grade: "Economics Honours",
    improvement: "From 62% to 79% in Econometrics",
    story: "AI math solvers helped me understand statistical concepts step-by-step. Research papers became easier with Perplexity AI, and Grammarly improved my essay writing significantly. No more stress before exams!",
    time_saved: "8 hours/week", 
    gpa_improvement: "62% to 79%"
  },
  {
    name: "Karan Singh",
    university: "BITS Pilani",
    grade: "Electrical Engineering",
    improvement: "From 7.2 to 8.6 CGPA overall",
    story: "Circuit analysis and signal processing became so much easier with AI study tools. Otter.ai helped me transcribe lectures, and Anki flashcards made formula memorization effortless. Best decision for my academics.",
    time_saved: "10 hours/week",
    gpa_improvement: "7.2 to 8.6 CGPA"
  },
  {
    name: "Aditi Gupta",
    university: "Lady Shri Ram College",
    grade: "Psychology Honours",
    improvement: "From 68% to 84% in Research Methods",
    story: "AI research tools like Consensus and Elicit made literature review so much faster. Writing my thesis became enjoyable instead of stressful. My professors were impressed with the quality of my citations and analysis.",
    time_saved: "14 hours/week",
    gpa_improvement: "68% to 84%"
  },
  {
    name: "Rohit Kumar",
    university: "IIT Kharagpur",
    grade: "Mechanical Engineering",
    improvement: "From 6.9 to 8.1 CPI in Heat Transfer",
    story: "Complex thermodynamics problems that used to take hours now get solved in minutes with AI math tools. My presentation skills also improved using Canva AI for project submissions. Time saved helped me focus on internship prep.",
    time_saved: "9 hours/week",
    gpa_improvement: "6.9 to 8.1 CPI"
  }
];

// Study Workflows
const studyWorkflows = {
  stem: {
    title: "STEM Study Workflow",
    icon: Calculator,
    steps: [
      "Use Wolfram Alpha for complex problem solving",
      "Create Anki flashcards for formulas and concepts", 
      "Record lectures with Otter.ai for review",
      "Organize notes in Notion with AI summaries"
    ]
  },
  humanities: {
    title: "Humanities Study Workflow", 
    icon: BookOpen,
    steps: [
      "Research with Perplexity AI for credible sources",
      "Use Grammarly for essay writing and editing",
      "Create presentations with Canva AI",
      "Organize research in Obsidian knowledge graphs"
    ]
  },
  language: {
    title: "Language Learning Workflow",
    icon: Languages,  
    steps: [
      "Daily practice with Duolingo AI tutor",
      "Translate academic papers with DeepL",
      "Use Reverso Context for real-world examples", 
      "Practice conversations with AI language partners"
    ]
  },
  business: {
    title: "Business Study Workflow",
    icon: TrendingUp,
    steps: [
      "Research market data with AI tools",
      "Create business presentations with Gamma",
      "Analyze case studies with AI summarization",
      "Practice presentations with AI feedback"
    ]
  }
};

export default function StudentsAIToolsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Trust Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                AI Tools Used by 5M+ students • Improved grades by 2 levels • 100% FREE forever
              </div>
            </div>

            {/* Main Headlines */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <GraduationCap className="w-12 h-12  sm:w-16 inline-block text-blue-600 mb-2" />
                
                <span className="text-blue-600">GAME CHANGER:</span> These FREE AI Tools Are Helping Students Get A+ Grades
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Top university students are using these secret AI tools to study <strong className="text-blue-600">5X faster</strong> and ace every exam. Complete student toolkit inside.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5M+</div>
                  <div className="text-gray-600">Students Using</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2 Levels</div>
                  <div className="text-gray-600">Grade Improvement</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <Gift className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-gray-600">FREE Forever</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <a
    href="#studylevel"
    className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2"
  >
    <Zap className="w-5 h-5" />
    Choose AI Based on your Level
    <ArrowRight className="w-5 h-5" />
  </a>

  <a
    href="#exampreparation"
    className="border-2 border-blue-600 cursor-pointer text-blue-600 hover:bg-blue-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2"
  >
    <Gift className="w-5 h-5" />
    Exam Preparation Strategy
  </a>
</div>

            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
    <GraduationCap className="w-8 h-8 text-purple-600" />
    Real Student Success Stories
  </h2>
              <p className="text-xl text-gray-600">See how AI tools transformed their academic performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.university}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                      {testimonial.improvement}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{testimonial.story}</p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1 text-blue-600">
                      <Clock className="w-4 h-4" />
                      Saved: {testimonial.time_saved}
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      {testimonial.gpa_improvement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Complete AI Toolkit for Students
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master every subject with these carefully curated, 100% free AI tools
              </p>
            </div>

            {/* Study AI Tools */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Study AI Tools</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  3 FREE Tools
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiToolsData.studyAI.map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        {tool.pricing}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{tool.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-blue-600 mb-1">Perfect for:</div>
                      <div className="text-sm text-gray-600">{tool.benefits}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Use Case:</div>
                      <div className="text-sm text-gray-600">{tool.useCase}</div>
                    </div>
                    <Link href={`/tools/${tool.slug}`} className="block cursor-pointer group">
  <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer  text-white py-2 px-4 rounded-lg font-semibold transition-colors">
    Try {tool.name} Free
  </button>
</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Writing AI Tools */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <PenTool className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Writing AI Tools</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  3 FREE Tools
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiToolsData.writingAI.map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        {tool.pricing}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{tool.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-green-600 mb-1">Perfect for:</div>
                      <div className="text-sm text-gray-600">{tool.benefits}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Use Case:</div>
                      <div className="text-sm text-gray-600">{tool.useCase}</div>
                    </div>
                    <Link href={`/tools/${tool.slug}`} className="block cursor-pointer group">
  <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer  text-white py-2 px-4 rounded-lg font-semibold transition-colors">
    Try {tool.name} Free
  </button>
</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Research AI Tools */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Research AI Tools</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  3 FREE Tools
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiToolsData.researchAI.map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        {tool.pricing}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{tool.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Perfect for:</div>
                      <div className="text-sm text-gray-600">{tool.benefits}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Use Case:</div>
                      <div className="text-sm text-gray-600">{tool.useCase}</div>
                    </div>
                    <Link href={`/tools/${tool.slug}`} className="block cursor-pointer group">
  <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer  text-white py-2 px-4 rounded-lg font-semibold transition-colors">
    Try {tool.name} Free
  </button>
</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Math AI Tools */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Math AI Tools</h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  3 FREE Tools
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiToolsData.mathAI.map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        {tool.pricing}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{tool.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-orange-600 mb-1">Perfect for:</div>
                      <div className="text-sm text-gray-600">{tool.benefits}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Use Case:</div>
                      <div className="text-sm text-gray-600">{tool.useCase}</div>
                    </div>
                    <Link href={`/tools/${tool.slug}`} className="block cursor-pointer group">
  <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer  text-white py-2 px-4 rounded-lg font-semibold transition-colors">
    Try {tool.name} Free
  </button>
</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Language AI Tools */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Languages className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Language AI Tools</h3>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                  3 FREE Tools
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiToolsData.languageAI.map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        {tool.pricing}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{tool.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-indigo-600 mb-1">Perfect for:</div>
                      <div className="text-sm text-gray-600">{tool.benefits}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Use Case:</div>
                      <div className="text-sm text-gray-600">{tool.useCase}</div>
                    </div>
                    <Link href={`/tools/${tool.slug}`} className="block cursor-pointer group">
  <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer  text-white py-2 px-4 rounded-lg font-semibold transition-colors">
    Try {tool.name} Free
  </button>
</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Presentation AI Tools */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Presentation AI Tools</h3>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                  3 FREE Tools
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiToolsData.presentationAI.map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        {tool.pricing}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{tool.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-pink-600 mb-1">Perfect for:</div>
                      <div className="text-sm text-gray-600">{tool.benefits}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Use Case:</div>
                      <div className="text-sm text-gray-600">{tool.useCase}</div>
                    </div>
                    <Link href={`/tools/${tool.slug}`} className="block cursor-pointer group">
  <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer  text-white py-2 px-4 rounded-lg font-semibold transition-colors">
    Try {tool.name} Free
  </button>
</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Note-taking AI Tools */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Note-taking AI Tools</h3>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                  3 FREE Tools
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiToolsData.notetakingAI.map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        {tool.pricing}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{tool.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-teal-600 mb-1">Perfect for:</div>
                      <div className="text-sm text-gray-600">{tool.benefits}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Use Case:</div>
                      <div className="text-sm text-gray-600">{tool.useCase}</div>
                    </div>
                    <Link href={`/tools/${tool.slug}`} className="block cursor-pointer group">
  <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer  text-white py-2 px-4 rounded-lg font-semibold transition-colors">
    Try {tool.name} Free
  </button>
</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Study Workflows Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Subject-Specific Study Workflows
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven AI-powered study strategies used by top students in different majors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(studyWorkflows).map(([key, workflow]) => (
                <div key={key} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <workflow.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {workflow.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {workflow.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <div className="text-sm text-gray-700 leading-relaxed">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Preparation Section */}
        <section id="exampreparation" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                AI-Powered Exam Preparation Strategies
              </h2>
              <p className="text-xl text-gray-600">
                Turn AI tools into your personal exam success system
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">30 Days Before Exam</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Use Perplexity AI to create comprehensive study guides from your syllabus
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Generate Anki flashcards for key concepts and definitions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Organize all notes in Notion with AI-generated summaries
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">7 Days Before Exam</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Use Quizlet AI to generate practice questions from your notes
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Practice spaced repetition with AI-optimized review schedules
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Get AI explanations for complex problems using Wolfram Alpha
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">1 Day Before Exam</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Review AI-generated summary notes for last-minute cramming
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Take AI-generated mock tests to identify weak areas
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Use meditation apps with AI-personalized relaxation techniques
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Day of Exam</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Quick review using AI-generated key point summaries
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Use AI-powered breathing exercises to reduce exam anxiety
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      Trust your AI-enhanced preparation and ace the exam!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Recommendations */}
        <section id="studylevel" className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                University-Specific AI Tool Recommendations
              </h2>
              <p className="text-xl text-gray-600">
                Top tools used by students at leading universities worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookMarked className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Harvard Students Use</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Notion AI for case study organization</li>
                  <li>• Perplexity for legal research</li>
                  <li>• Grammarly for essay perfection</li>
                  <li>• Otter.ai for lecture transcription</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calculator className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">MIT Students Use</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Wolfram Alpha for complex calculations</li>
                  <li>• GitHub Copilot for coding assistance</li>
                  <li>• Obsidian for knowledge graphs</li>
                  <li>• Anki for technical memorization</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Stanford Students Use</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Gamma for pitch presentations</li>
                  <li>• Consensus for research papers</li>
                  <li>• DeepL for international studies</li>
                  <li>• Canva AI for design projects</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Oxford Students Use</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• QuillBot for essay paraphrasing</li>
                  <li>• Elicit for literature reviews</li>
                  <li>• RemNote for active recall</li>
                  <li>• Beautiful.AI for thesis defense</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about using AI tools ethically as a student
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Are these AI tools really free for students?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes! All tools listed have robust free plans specifically designed for students. Many offer additional student discounts or extended free features with a .edu email address. We've specifically curated tools that provide significant value without requiring payment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Will using AI tools affect academic integrity?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      When used responsibly, AI tools enhance learning rather than replace it. Use them for research, brainstorming, understanding concepts, and improving your writing, but always create original work and cite sources appropriately. Most universities encourage the use of AI as a learning aid when used ethically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      How can AI tools improve my grades?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      AI tools help by organizing study materials, explaining complex concepts, assisting with research, checking grammar, solving math problems step-by-step, and creating personalized study schedules. Students typically see 1-2 letter grade improvements within a semester by studying more efficiently and understanding concepts better.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      What's the difference between free and paid features?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Free plans typically include core features with usage limits (like number of queries per day or documents per month). Paid plans offer unlimited usage, advanced features, and priority support. For most students, free plans provide more than enough functionality for academic success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      How do I avoid plagiarism when using AI tools?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Always use AI tools as learning aids, not content generators. Use them to understand concepts, organize ideas, and improve your writing, but write your own original work. When AI helps you find sources or information, cite them properly. Run your work through plagiarism checkers and be transparent with professors about your AI usage when required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Which AI tools should I start with as a beginner?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Start with the "Big 4": Grammarly for writing, Notion AI for note organization, Wolfram Alpha for math, and Perplexity for research. These cover the core academic needs and have the gentlest learning curves. Once comfortable, add specialized tools for your specific subjects or study preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 flex items-center -gap-19 justify-center">
    <Sparkles className="w-20 h-20 text-white" />
    Ready to Transform Your Academic Performance?
  </h2>
  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
    Join over <strong className="text-white">5 million students</strong> who are already studying smarter, not harder. Get instant access to our complete AI toolkit and start seeing grade improvements within weeks.
  </p>
</div>

            

            <div className="text-blue-100 text-sm">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  100% FREE Forever
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  No Credit Card Required
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Join 5M+ Students
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
