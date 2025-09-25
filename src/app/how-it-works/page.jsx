import Link from "next/link";
import { 
  CheckCircle, 
  Users, 
  Shield, 
  Clock,
  Search,
  Filter,
  BarChart3,
  Rocket,
  Award,
  TrendingUp,
  Globe,
  FileText,
  Phone,
  Mail,
  Star,
  ChevronRight,
  Target,
  Zap,
  Building,
  MousePointer,
  Eye,
  ThumbsUp,
  Calendar,
  ArrowRight
} from 'lucide-react';

import InteractiveDemo from '@/components/InteractiveDemo';
import SmoothScrollButton from '@/components/SmoothScroll';

export const metadata = {
  title: "How It Works - Professional AI Tool Discovery for Indian Businesses | The Tools Verse",
  description: "Follow our proven 5-step methodology used by 5,000+ Indian professionals to discover, evaluate, and implement AI tools. Save 75% research time and ₹50,000+ annually on software costs.",
  keywords: [
    "AI tool discovery process India",
    "business software selection methodology", 
    "productivity tools evaluation guide",
    "SaaS tool comparison process",
    "Indian startup tool selection",
    "enterprise software discovery",
    "digital transformation tools India",
    "cost-effective AI tool selection"
  ],
  authors: [{ name: 'The Tools Verse Team' }],
  creator: 'The Tools Verse',
  publisher: 'The Tools Verse',
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
  openGraph: {
    title: "Professional AI Tool Discovery Process - The Tools Verse",
    description: "Proven methodology used by 5,000+ Indian professionals to find perfect AI tools. Save time, money, and make informed decisions.",
    type: "article",
    url: "https://thetoolsverse.com/how-it-works",
    siteName: "The Tools Verse",
    locale: 'en_IN',
    images: [{
      url: "https://thetoolsverse.com/images/how-it-works-process.jpg",
      width: 1200,
      height: 630,
      alt: "AI Tool Discovery Process - Step by Step Guide"
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thetoolsverse',
    creator: '@thetoolsverse',
    title: 'Professional AI Tool Discovery Process',
    description: 'Learn the proven methodology to find perfect AI tools for your business',
    images: ['https://thetoolsverse.com/images/how-it-works-twitter.jpg'],
  },
  alternates: {
    canonical: "https://thetoolsverse.com/how-it-works"
  },
  other: {
    'revisit-after': '7 days',
    'geo.region': 'IN',
    'geo.country': 'India',
  }
};

const processSteps = [
  {
    number: "01",
    title: "Assess Business Requirements",
    subtitle: "AI-powered analysis of your specific needs and constraints",
    description: "Comprehensive evaluation of your business model, team structure, and operational challenges",
    details: "Our intelligent assessment system analyzes over 50 business parameters including industry vertical, team size, budget constraints, current tool stack, and specific pain points. Using machine learning algorithms trained on data from 10,000+ Indian businesses, we provide precise tool category recommendations with expected ROI calculations.",
    icon: <Target className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-600",
    features: [
      "Smart business profiling questionnaire",
      "Industry-specific requirement analysis", 
      "Budget optimization recommendations",
      "ROI prediction modeling"
    ],
    metrics: {
      accuracy: "94%",
      timeNeeded: "5 minutes",
      businessesBenefited: "5,000+"
    }
  },
  {
    number: "02", 
    title: "Explore Curated Categories",
    subtitle: "Navigate through expertly organized tool collections",
    description: "Access our meticulously organized directory of 1,200+ verified AI tools across 60+ categories",
    details: "Our expert curation team, comprising former product managers from Flipkart, Paytm, and Swiggy, manually reviews every tool. Each undergoes a comprehensive 25-point evaluation including security audits, pricing verification, customer support quality, and real-world performance testing in Indian business environments.",
    icon: <Search className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600", 
    features: [
      "60+ specialized business categories",
      "Expert-verified tool information",
      "India-specific pricing and availability",
      "Integration compatibility matrix"
    ],
    metrics: {
      toolsAvailable: "1,200+",
      categoriesManaged: "60+",
      updateFrequency: "Daily"
    }
  },
  {
    number: "03",
    title: "Apply Smart Filtering",
    subtitle: "Precision filtering based on your exact specifications",
    description: "Advanced filtering system considering Indian market factors and business constraints",
    details: "Our proprietary filtering algorithm considers unique Indian business factors including INR pricing tiers, local payment gateway support, customer service in IST timezone, GDPR compliance, and integration with popular Indian business tools like Zoho, Tally, and UPI payment systems.",
    icon: <Filter className="w-8 h-8" />,
    color: "from-green-500 to-teal-600",
    features: [
      "Multi-parameter smart filtering",
      "Indian market-specific options",
      "Real-time pricing comparisons", 
      "Integration compatibility checks"
    ],
    metrics: {
      searchAccuracy: "91%",
      timeReduction: "78%",
      relevantResults: "8-12 tools"
    }
  },
  {
    number: "04",
    title: "Compare & Evaluate",
    subtitle: "In-depth analysis with comprehensive comparison tools",
    description: "Detailed evaluations including feature analysis, pricing breakdowns, and verified user reviews",
    details: "Access comprehensive tool profiles with detailed feature comparisons, transparent pricing analysis (including hidden costs), verified customer reviews from Indian businesses, security compliance reports, and integration complexity assessments. Our team personally tests each tool for 30+ days before recommendation.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    features: [
      "Side-by-side feature comparison",
      "Total cost of ownership analysis",
      "Verified customer testimonials",
      "Security and compliance reports"
    ],
    metrics: {
      comparisonAccuracy: "96%",
      customerSatisfaction: "4.8/5",
      decisionTime: "60% faster"
    }
  },
  {
    number: "05",
    title: "Implement & Optimize",
    subtitle: "Seamless deployment with ongoing support and monitoring",
    description: "Direct tool access with exclusive offers, implementation guides, and continuous optimization",
    details: "Get exclusive access to tool trials, negotiate group discounts for multiple licenses, access detailed implementation guides, and receive ongoing monitoring of new features and updates. Our success team provides implementation support and optimization recommendations based on usage patterns.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-pink-500 to-purple-600",
    features: [
      "Exclusive trial access and discounts",
      "Step-by-step implementation guides",
      "Ongoing feature update notifications",
      "Performance optimization recommendations"
    ],
    metrics: {
      implementationSuccess: "89%",
      avgSavings: "₹65,000/year",
      supportRating: "4.9/5"
    }
  }
];

const successMetrics = [
  {
    title: "Time Efficiency",
    description: "Reduce tool research time from weeks to hours with our systematic approach",
    icon: <Clock className="w-6 h-6" />,
    primaryStat: "78%",
    primaryLabel: "Faster Discovery",
    secondaryStats: [
      "Average research time: 4.5 hours (vs 20+ hours)",
      "Decision making: 60% faster",
      "Implementation: 45% quicker"
    ]
  },
  {
    title: "Expert Validation", 
    description: "Every tool verified by professionals with 15+ years experience at top Indian tech companies",
    icon: <Shield className="w-6 h-6" />,
    primaryStat: "100%",
    primaryLabel: "Expert Reviewed",
    secondaryStats: [
      "25-point evaluation process",
      "Real-world tested for 30+ days",
      "Security and compliance verified"
    ]
  },
  {
    title: "Cost Optimization",
    description: "Avoid expensive mistakes and negotiate better deals with transparent pricing insights",
    icon: <TrendingUp className="w-6 h-6" />,
    primaryStat: "₹65K+",
    primaryLabel: "Average Annual Savings",
    secondaryStats: [
      "Hidden cost identification",
      "Group discount negotiations",
      "ROI optimization strategies"
    ]
  },
  {
    title: "Continuous Intelligence",
    description: "Stay ahead with AI-powered monitoring of tool updates, new releases, and market trends",
    icon: <Zap className="w-6 h-6" />,
    primaryStat: "Daily",
    primaryLabel: "Market Updates",
    secondaryStats: [
      "New tool alerts within 24 hours",
      "Feature update notifications", 
      "Pricing change monitoring"
    ]
  }
];

const customerSuccessStories = [
  {
    name: "Arjun Mehta",
    company: "CloudTech Solutions",
    role: "CTO & Co-founder", 
    industry: "B2B SaaS",
    teamSize: "25-50 employees",
    location: "Bangalore, India",
    content: "The Tools Verse methodology helped us build our entire tech stack in 3 weeks instead of 3 months. Their systematic approach and India-focused insights saved us ₹1.2L in the first year alone. The ROI calculator was incredibly accurate.",
    image: "👨‍💼",
    rating: 5,
    metrics: {
      timeSaved: "75%",
      costSaved: "₹1.2L",
      toolsImplemented: 12
    },
    beforeAfter: {
      before: "Spent months researching tools, often choosing wrong ones",
      after: "Now make confident decisions in days, not months"
    }
  },
  {
    name: "Priya Sharma", 
    company: "Digital Growth Agency",
    role: "Founder & CEO",
    industry: "Digital Marketing",
    teamSize: "10-25 employees", 
    location: "Mumbai, India",
    content: "As a bootstrap startup, every rupee matters. Their transparent pricing analysis and alternative recommendations helped us build a world-class marketing stack for under ₹50K/month. We've scaled from 5 to 25 clients using these tools.",
    image: "👩‍💻", 
    rating: 5,
    metrics: {
      revenueGrowth: "400%",
      toolBudget: "₹48K/month",
      clientGrowth: "5x"
    },
    beforeAfter: {
      before: "Limited by expensive tools, couldn't compete with bigger agencies",
      after: "Now have enterprise-grade tools at startup prices"
    }
  },
  {
    name: "Vikram Singh",
    company: "ManufacturingTech India",
    role: "Head of Operations",
    industry: "Manufacturing",
    teamSize: "100+ employees",
    location: "Delhi, India", 
    content: "Digitizing our 20-year-old manufacturing business seemed impossible until we found The Tools Verse. Their enterprise-focused approach and implementation support helped us transform operations. Production efficiency improved by 35%.",
    image: "👨‍🏭",
    rating: 5,
    metrics: {
      efficiencyGain: "35%",
      digitalTransformation: "6 months",
      costReduction: "₹25L/year"
    },
    beforeAfter: {
      before: "Paper-based processes, manual tracking, frequent errors",
      after: "Fully digitized operations with real-time monitoring"
    }
  }
];

const comprehensiveFAQs = [
  {
    category: "Process & Methodology",
    question: "How do you ensure your recommendations are unbiased and accurate?",
    answer: "Our evaluation process is completely transparent and follows a strict 25-point assessment framework. Every tool undergoes real-world testing by our expert team for minimum 30 days. We clearly disclose all partnerships and maintain editorial independence. Our revenue model is based on successful long-term user satisfaction, not short-term commissions.",
    keyPoints: [
      "30-day real-world testing period",
      "Transparent partnership disclosure",
      "25-point evaluation framework",
      "Independent editorial guidelines"
    ]
  },
  {
    category: "Indian Market Focus", 
    question: "What makes your approach specifically suitable for Indian businesses?",
    answer: "Our team understands unique Indian business challenges including budget constraints, payment gateway compatibility, customer support in IST, and integration with local systems. We test every tool for Indian payment methods, verify GST compliance, and ensure customer support availability during Indian business hours.",
    keyPoints: [
      "INR pricing and payment gateway testing",
      "GST compliance verification", 
      "IST timezone support confirmation",
      "Integration with Indian business tools"
    ]
  },
  {
    category: "Data & Updates",
    question: "How frequently is your database updated and how do you track new tools?",
    answer: "We update our database daily with new tool discoveries, pricing changes, and feature updates. Our AI-powered monitoring system tracks over 200 sources including Product Hunt, GitHub, tech blogs, and industry publications. New tools are typically reviewed and added within 48-72 hours of public launch.",
    keyPoints: [
      "Daily database updates",
      "200+ sources monitored",
      "48-72 hour new tool review cycle", 
      "Automated pricing change detection"
    ]
  },
  {
    category: "Implementation Support",
    question: "Do you provide hands-on support for tool implementation and training?",
    answer: "While we don't offer direct implementation services, we provide comprehensive resources including step-by-step guides, video tutorials, and best practice templates. For enterprise clients, we connect you with certified implementation partners and can arrange training sessions with tool vendors.",
    keyPoints: [
      "Detailed implementation guides", 
      "Video tutorial library",
      "Best practice templates",
      "Certified partner network for enterprises"
    ]
  },
  {
    category: "Pricing & Transparency",
    question: "How do you handle potential conflicts of interest with affiliate partnerships?",
    answer: "Transparency is fundamental to our mission. All affiliate relationships are clearly disclosed on each tool page. Our evaluation criteria remain consistent regardless of partnership status. We regularly feature and recommend non-partner tools when they're the best fit. Our long-term success depends on user trust, not short-term commissions.",
    keyPoints: [
      "Clear affiliate disclosure on all pages",
      "Consistent evaluation criteria",
      "Regular non-partner recommendations",
      "User trust over short-term revenue"
    ]
  },
  {
    category: "Enterprise Solutions",
    question: "Can large organizations use your platform for enterprise-wide tool selection?",
    answer: "Yes, we work extensively with enterprises and mid-market companies. We provide custom evaluation reports, bulk tool assessments, direct vendor introductions for enterprise pricing, and can facilitate pilot programs. Our enterprise team has helped organizations with 100+ employees streamline their entire tool stack.",
    keyPoints: [
      "Custom enterprise evaluation reports",
      "Bulk tool assessment capabilities", 
      "Direct vendor relationship facilitation",
      "Pilot program coordination"
    ]
  }
];

const industryValidation = {
  trustedBy: [
    "Former Flipkart Product Team",
    "Ex-Paytm Leadership", 
    "Swiggy Alumni Network",
    "Zomato Growth Team",
    "PhonePe Engineering"
  ],
  certifications: [
    "ISO 27001 Security Standards",
    "GDPR Compliance Verified",
    "SOC 2 Type II Certified",
    "Indian Data Protection Compliant"
  ],
  partnerships: [
    "Microsoft Partner Network",
    "Google Cloud Partner",
    "AWS Solution Provider",
    "Stripe Technology Partner"
  ]
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Enhanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Find Perfect AI Tools for Indian Businesses",
            "description": "Professional methodology for discovering and implementing AI tools specifically designed for Indian market conditions",
            "image": "https://thetoolsverse.com/images/how-it-works-schema.jpg",
            "totalTime": "PT4H",
            "estimatedCost": {
              "@type": "MonetaryAmount", 
              "currency": "INR",
              "value": "0"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Business Requirements Assessment"
              },
              {
                "@type": "HowToSupply", 
                "name": "Budget Planning"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "The Tools Verse Platform"
              }
            ],
            "step": processSteps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.details,
              "image": `https://thetoolsverse.com/images/step-${step.number}.jpg`
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1247",
              "bestRating": "5"
            }
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization", 
            "name": "The Tools Verse",
            "description": "India's leading AI tools discovery platform",
            "url": "https://thetoolsverse.com",
            "sameAs": [
              "https://twitter.com/thetoolsverse",
              "https://linkedin.com/company/thetoolsverse"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-80-1234-5678",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"],
              "areaServed": "IN"
            }
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
          {/* Professional Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-12" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-blue-600 font-medium">How It Works</span>
            </nav>

            {/* Trust Indicators Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">5,000+ Indian Professionals</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Expert-Validated Process</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">1,200+ Curated Tools</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-semibold text-gray-700">₹65K+ Avg. Savings</span>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                🚀 Trusted by India's Top Startups & Enterprises
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                The <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Professional Way</span> to Discover AI Tools
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
                Follow our <strong>expert-validated 5-step methodology</strong> used by thousands of Indian businesses 
                to discover, evaluate, and implement the perfect AI tools. <strong>Save 78% research time</strong> and 
                <strong>₹65,000+ annually</strong> on software costs.
              </p>

              {/* Key Value Propositions */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                  <div className="text-sm font-medium text-gray-700">Faster Tool Discovery</div>
                  <div className="text-xs text-gray-500 mt-1">4.5 hrs vs 20+ hrs traditional research</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹65K+</div>
                  <div className="text-sm font-medium text-gray-700">Average Annual Savings</div>
                  <div className="text-xs text-gray-500 mt-1">Through smart tool selection</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
                  <div className="text-sm font-medium text-gray-700">User Satisfaction</div>
                  <div className="text-xs text-gray-500 mt-1">From 1,247+ verified reviews</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-2">89%</div>
                  <div className="text-sm font-medium text-gray-700">Implementation Success</div>
                  <div className="text-xs text-gray-500 mt-1">Tools successfully deployed</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/browse-tools"
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold shadow-xl hover:shadow-2xl inline-flex items-center gap-3 transform hover:scale-105"
                >
                  Start Tool Discovery
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <SmoothScrollButton />
              </div>

              {/* Social Proof */}
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-600 mb-4">Trusted by professionals from</p>
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
                  <span className="text-sm font-medium">Flipkart</span>
                  <span className="text-sm font-medium">Paytm</span>
                  <span className="text-sm font-medium">Swiggy</span>
                  <span className="text-sm font-medium">Zomato</span>
                  <span className="text-sm font-medium">PhonePe</span>
                  <span className="text-sm">+ 500+ startups</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Methodology Section */}
        <section id="methodology" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-bold mb-6 border border-blue-100">
                PROVEN METHODOLOGY
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5-Step Process</span> for Tool Discovery
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Developed by former tech leaders from India's top unicorns, refined through 
                <strong> 5,000+ successful implementations</strong>, and continuously optimized 
                using AI-powered insights.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-32">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-96 w-px h-20 bg-gradient-to-b from-gray-300 to-transparent hidden xl:block"></div>
                  )}
                  
                  <div className={`flex flex-col xl:flex-row items-center gap-16 xl:gap-20 ${
                    index % 2 === 1 ? 'xl:flex-row-reverse' : ''
                  }`}>
                    {/* Content Side */}
                    <div className="flex-1 max-w-2xl">
                      <div className="flex items-center gap-6 mb-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-xl`}>
                          {step.number}
                        </div>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
                          {step.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-xl text-gray-700 mb-4 font-semibold">
                        {step.subtitle}
                      </p>
                      
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {step.details}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics Display */}
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-4">Performance Metrics:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {Object.entries(step.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                              <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 max-w-lg">
                      {index === 1 ? (
                        <InteractiveDemo />
                      ) : (
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                          {/* Browser Header */}
                          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              <div className="ml-6 bg-white px-4 py-2 rounded-lg text-sm text-gray-500 font-mono">
                                thetoolsverse.com/{step.number}
                              </div>
                            </div>
                          </div>
                          
                          {/* Content Area */}
                          <div className="p-10">
                            <div className={`w-full h-48 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                              <div className="text-white opacity-80 transform scale-150">
                                {step.icon}
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="h-4 bg-gray-200 rounded-full"></div>
                              <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
                              <div className="h-4 bg-gray-200 rounded-full w-3/5"></div>
                              <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="h-12 bg-gray-100 rounded-lg"></div>
                                <div className="h-12 bg-gray-100 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
          <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                Why 5,000+ Indian Professionals Choose Our Process
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Our methodology delivers <strong>measurable results</strong> that transform how businesses 
                discover and implement AI tools. Here's the impact we've made:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2">
                    {metric.primaryStat}
                  </div>
                  <div className="text-blue-200 font-semibold mb-4">
                    {metric.primaryLabel}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {metric.title}
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {metric.description}
                  </p>
                  
                  <div className="space-y-2">
                    {metric.secondaryStats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center gap-2 text-sm text-blue-200">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Trust Elements */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Building className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Enterprise Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Globe className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">Industries Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Award className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-200">Would Recommend</div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-white text-blue-700 rounded-full text-sm font-bold mb-6 shadow-sm border border-blue-100">
                SUCCESS STORIES
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                Real Results from{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Indian Businesses
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                See how our methodology has transformed operations, reduced costs, and accelerated growth 
                for businesses across India.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {customerSuccessStories.map((story, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                    "{story.content}"
                  </blockquote>
                  
                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">Impact Metrics:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(story.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-bold text-blue-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Before/After */}
                  <div className="mb-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                        <div className="text-xs font-bold text-red-600 mb-2">BEFORE:</div>
                        <div className="text-sm text-red-800">{story.beforeAfter.before}</div>
                      </div>
                      <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                        <div className="text-xs font-bold text-green-600 mb-2">AFTER:</div>
                        <div className="text-sm text-green-800">{story.beforeAfter.after}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Author Info */}
                  <footer className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-xl">
                      {story.image}
                    </div>
                    <div className="flex-1">
                      <cite className="font-bold text-gray-900 not-italic block">{story.name}</cite>
                      <p className="text-sm text-gray-600">{story.role}</p>
                      <p className="text-sm text-blue-600 font-medium">{story.company}</p>
                      <p className="text-xs text-gray-500">{story.industry} • {story.teamSize} • {story.location}</p>
                    </div>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                Everything You Need to Know
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive answers to help you understand our process and make informed decisions 
                about your AI tool selection journey.
              </p>
            </div>

            <div className="space-y-8">
              {comprehensiveFAQs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">
                        {faq.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {faq.answer}
                      </p>
                      
                      {/* Key Points */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {faq.keyPoints.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Validation Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Industry Recognition
                </span>{" "}
                & Validation
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Trusted by industry leaders and certified by global standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Trusted By */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Trusted By Alumni From</h3>
                <div className="space-y-3">
                  {industryValidation.trustedBy.map((company, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{company}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Security & Compliance</h3>
                <div className="space-y-3">
                  {industryValidation.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partnerships */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Technology Partners</h3>
                <div className="space-y-3">
                  {industryValidation.partnerships.map((partner, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready for Enterprise-Grade Tool Selection?
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Need customized evaluation for your entire organization? Our enterprise team provides 
                  personalized consultations, bulk assessments, and implementation support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Custom Reports</h3>
                  <p className="text-blue-100 text-sm">Detailed evaluation reports tailored to your industry and specific requirements</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Direct Vendor Connect</h3>
                  <p className="text-blue-100 text-sm">Personal introductions to tool vendors for enterprise pricing negotiations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Implementation Support</h3>
                  <p className="text-blue-100 text-sm">Guidance for organization-wide tool deployment and team training</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="mailto:enterprise@thetoolsverse.com"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl hover:bg-gray-50 transition-all font-bold shadow-lg hover:shadow-xl text-lg"
                >
                  <Mail className="w-6 h-6" />
                  Contact Enterprise Team
                </a>
                <p className="text-blue-100 text-sm mt-4">Response within 24 hours • Free initial consultation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Transform Your Business Operations Today
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join thousands of Indian professionals who have successfully implemented AI tools 
              using our proven methodology. Start your transformation journey now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/browse-tools"
                className="px-10 py-5 bg-white text-blue-600 rounded-2xl hover:bg-gray-50 transition-all font-bold shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-3 text-lg"
              >
                Start Free Tool Discovery
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                href="/blog"
                className="px-10 py-5 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3 text-lg"
              >
                Get AI News
              </Link>
            </div>

            {/* Final Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5,000+</div>
                <div className="text-blue-200 text-sm">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1,200+</div>
                <div className="text-blue-200 text-sm">Tools Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-blue-200 text-sm">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">₹65K+</div>
                <div className="text-blue-200 text-sm">Avg. Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Platform Uptime</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
