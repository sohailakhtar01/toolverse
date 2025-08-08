import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Zap,
  Star,
  Quote
} from 'lucide-react';

// Metadata for SEO - Fixed and optimized
export const metadata = {
  title: 'About ToolHub - Empowering Professionals with the Right Tools Worldwide',
  description: 'Discover ToolHub\'s mission to connect professionals with the best productivity tools. Learn about our team, values, and journey from 2020 to serving 10M+ users across 150+ countries.',
  keywords: ['about toolhub', 'tool discovery platform', 'productivity tools', 'professional software', 'team', 'company values', 'startup story'],
  authors: [{ name: 'ToolHub Team' }],
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
    title: 'About ToolHub - Empowering Professionals Worldwide',
    description: 'Learn about our mission to connect professionals with the best tools worldwide. Meet our team and discover our journey from startup to global platform.',
    type: 'website',
    url: 'https://toolhub.com/about',
    siteName: 'ToolHub',
    images: [{
      url: 'https://toolhub.com/images/about-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ToolHub About Us - Team and Mission',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ToolHub - Empowering Professionals Worldwide',
    description: 'Learn about our mission to connect professionals with the best tools worldwide.',
    images: ['https://toolhub.com/images/about-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://toolhub.com/about',
  },
  other: {
    'revisit-after': '7 days',
  },
};

// Team data with proper schema markup
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "👩‍💼",
    bio: "Passionate about connecting people with the right tools to amplify their potential. 10+ years in tech leadership.",
    linkedin: "https://linkedin.com/in/sarahjohnson-toolhub",
    expertise: ["Leadership", "Product Strategy", "Business Development"]
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    image: "👨‍💻",
    bio: "Building intuitive experiences that make complex workflows simple and enjoyable. Former Google PM with 8+ years experience.",
    linkedin: "https://linkedin.com/in/michaelchen-toolhub",
    expertise: ["Product Management", "UX Strategy", "Data Analytics"]
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "👩‍🎨",
    bio: "Creating beautiful, accessible designs that inspire and empower users worldwide. Award-winning designer with global experience.",
    linkedin: "https://linkedin.com/in/emilyrodriguez-toolhub",
    expertise: ["UI/UX Design", "Design Systems", "Accessibility"]
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    image: "👨‍🔬",
    bio: "Architecting scalable solutions that handle millions of users with reliability. Former Netflix engineer with deep ML expertise.",
    linkedin: "https://linkedin.com/in/davidkim-toolhub",
    expertise: ["Software Architecture", "Machine Learning", "DevOps"]
  }
];

// Values data with detailed descriptions
const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Security",
    description: "We prioritize user privacy and data security in everything we build. SOC2 compliant with enterprise-grade protection.",
    details: ["End-to-end encryption", "GDPR compliant", "Regular security audits"]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    description: "Constantly pushing boundaries to deliver cutting-edge solutions. AI-powered recommendations and smart tool matching.",
    details: ["AI-driven insights", "Machine learning algorithms", "Continuous improvement"]
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "User-Centric",
    description: "Every decision is made with our users' success and satisfaction in mind. 24/7 support and community-driven features.",
    details: ["User feedback integration", "Community support", "Personalized experiences"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Impact",
    description: "Empowering professionals worldwide to achieve their goals efficiently. Available in 15+ languages across 150+ countries.",
    details: ["Multi-language support", "Local partnerships", "Global accessibility"]
  }
];

// Stats data with context
const stats = [
  { 
    number: "10M+", 
    label: "Active Users", 
    icon: <Users className="w-5 h-5" />,
    description: "Professionals using our platform monthly"
  },
  { 
    number: "500+", 
    label: "Featured Tools", 
    icon: <Award className="w-5 h-5" />,
    description: "Carefully curated and vetted tools"
  },
  { 
    number: "150+", 
    label: "Countries", 
    icon: <Globe className="w-5 h-5" />,
    description: "Global reach and localized content"
  },
  { 
    number: "99.9%", 
    label: "Uptime", 
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Reliable platform performance"
  }
];

// Enhanced testimonials with more context
const testimonials = [
  {
    name: "Alex Thompson",
    role: "Senior Product Manager at TechCorp",
    company: "TechCorp",
    content: "ToolHub has completely transformed how our team discovers and adopts new productivity tools. The curated selection and detailed comparisons save us countless hours of research. We've improved our workflow efficiency by 35% since using the platform.",
    avatar: "👨‍💼",
    rating: 5,
    industry: "Technology",
    teamSize: "50+ employees"
  },
  {
    name: "Maria Garcia",
    role: "Freelance UX Designer",
    company: "Independent",
    content: "As a freelance designer, finding the right tools quickly is crucial for my business. ToolHub's AI-powered recommendations have boosted my productivity by 40% and helped me discover tools I never knew existed. The ROI calculator feature is incredibly helpful.",
    avatar: "👩‍🎨",
    rating: 5,
    industry: "Design",
    teamSize: "Solo freelancer"
  },
  {
    name: "James Wilson",
    role: "Startup Founder & CEO",
    company: "InnovateNow",
    content: "The detailed tool comparisons and honest reviews helped us make informed decisions that saved our startup thousands of dollars. ToolHub's category guides are comprehensive and the community insights are invaluable for early-stage companies.",
    avatar: "👨‍🚀",
    rating: 5,
    industry: "Startup",
    teamSize: "10-20 employees"
  }
];

// Enhanced timeline with more details
const timeline = [
  {
    year: "2020",
    title: "The Idea & Foundation",
    description: "Founded by Sarah Johnson with a vision to simplify tool discovery for professionals worldwide. Started with extensive market research and user interviews.",
    milestone: "Company founded",
    metrics: "Initial concept validation"
  },
  {
    year: "2021",
    title: "Product Launch & Early Growth",
    description: "Successfully launched with 50 carefully curated productivity tools and gained 1,000 early adopters. Implemented user feedback system and basic recommendation engine.",
    milestone: "Product launch",
    metrics: "1K users, 50 tools"
  },
  {
    year: "2022",
    title: "Rapid Expansion & Scale",
    description: "Achieved significant growth milestone of 1 million active users and expanded catalog to 200+ tools across 15 categories. Introduced tool comparison features.",
    milestone: "1M users milestone",
    metrics: "1M users, 200+ tools"
  },
  {
    year: "2023",
    title: "Global Market Expansion",
    description: "Successfully expanded to 150+ countries with localized content, multi-language support, and region-specific tool recommendations. Established international partnerships.",
    milestone: "Global expansion",
    metrics: "150+ countries, 5M users"
  },
  {
    year: "2024",
    title: "AI Revolution & Innovation",
    description: "Launched advanced AI-powered tool recommendations, smart matching algorithms, and personalized dashboard. Introduced enterprise solutions and API platform.",
    milestone: "AI integration",
    metrics: "10M users, 500+ tools, AI-powered features"
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Enhanced JSON-LD Structured Data for Better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ToolHub",
            "alternateName": "ToolHub Platform",
            "description": "Leading platform connecting professionals with the best productivity tools and software worldwide",
            "url": "https://toolhub.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://toolhub.com/logo.png",
              "width": 200,
              "height": 200
            },
            "foundingDate": "2020-01-01",
            "foundingLocation": {
              "@type": "Place",
              "name": "United States"
            },
            "founder": [
              {
                "@type": "Person",
                "name": "Sarah Johnson",
                "jobTitle": "CEO & Founder",
                "sameAs": "https://linkedin.com/in/sarahjohnson-toolhub"
              }
            ],
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 25
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressRegion": "California"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-TOOLHUB",
              "contactType": "customer service",
              "availableLanguage": ["English", "Spanish", "French", "German"]
            },
            "sameAs": [
              "https://twitter.com/toolhub",
              "https://linkedin.com/company/toolhub",
              "https://facebook.com/toolhub",
              "https://youtube.com/toolhub"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "10000",
              "bestRating": "5"
            },
            "offers": {
              "@type": "Offer",
              "description": "Free and premium tool discovery services"
            }
          })
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://toolhub.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://toolhub.com/about"
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Semantic HTML structure */}
        <main role="main">
          {/* Hero Section with better semantic markup */}
          <header className="px-4 sm:px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" aria-hidden="true" />
                <span className="text-sm font-medium text-purple-700">Our Story Since 2020</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  10 Million+ Professionals
                </span>{' '}
                Worldwide
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                We believe that the right productivity tools can transform how people work, create, and achieve their goals. 
                Since 2020, our mission has been connecting professionals with 500+ carefully curated tools across 150+ countries.
              </p>

              {/* Key benefits list for SEO */}
              <div className="hidden">
                <ul>
                  <li>10+ million active users worldwide</li>
                  <li>500+ vetted productivity tools and software</li>
                  <li>AI-powered tool recommendations</li>
                  <li>Available in 150+ countries</li>
                  <li>Free and premium discovery services</li>
                  <li>Enterprise solutions available</li>
                </ul>
              </div>
            </div>
          </header>

          {/* Stats Section with enhanced markup */}
          <section className="px-4 sm:px-6 py-16 bg-white" aria-labelledby="stats-heading">
            <div className="max-w-7xl mx-auto">
              <h2 id="stats-heading" className="sr-only">ToolHub Platform Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2" role="text">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section with enhanced content */}
          <section id="mission" className="px-4 sm:px-6 py-16 md:py-20" aria-labelledby="mission-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold mb-4">
                  Our{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Mission & Vision
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Democratizing access to powerful productivity tools and resources worldwide
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <article className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-purple-100 text-center mb-16">
                  <Target className="w-16 h-16 mx-auto mb-6 text-purple-600" aria-hidden="true" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">Transforming Professional Workflows</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    To democratize access to powerful productivity tools and resources, enabling professionals worldwide 
                    to discover, evaluate, and adopt the right solutions for their unique challenges. We're 
                    building a world where the best tools are accessible to everyone, regardless of their 
                    background, company size, or budget constraints. Our AI-powered platform has already helped
                    over 10 million professionals optimize their workflows and increase productivity by an average of 35%.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">Global Accessibility</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">Quality Curation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">AI Innovation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">Community Driven</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Values Section with enhanced content */}
          <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-purple-600 to-pink-600" aria-labelledby="values-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Our Core Values & Principles
                </h2>
                <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                  The fundamental principles that guide everything we do at ToolHub
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <article key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center text-white" aria-hidden="true">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-purple-100 text-sm leading-relaxed mb-4">{value.description}</p>
                    <ul className="text-xs text-purple-200 space-y-1">
                      {value.details.map((detail, i) => (
                        <li key={i}>• {detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section with enhanced markup */}
          <section className="px-4 sm:px-6 py-16 md:py-20 bg-white" aria-labelledby="timeline-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-bold mb-4">
                  Our{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Growth Journey
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From startup idea to global platform serving millions
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden md:block" aria-hidden="true"></div>
                
                <div className="space-y-8 md:space-y-12">
                  {timeline.map((item, index) => (
                    <article key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="flex-1 md:px-8">
                        <div className={`bg-white rounded-2xl p-6 shadow-lg border border-purple-100 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <div className="text-sm text-purple-600 font-medium">{item.metrics}</div>
                        </div>
                      </div>
                      
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0" aria-hidden="true"></div>
                      
                      <div className="flex-1 md:px-8"></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Section with enhanced markup */}
          <section className="px-4 sm:px-6 py-16 md:py-20" aria-labelledby="team-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold mb-4">
                  Meet Our{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Leadership Team
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Experienced professionals dedicated to empowering your success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <article key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-3xl" role="img" aria-label={`${member.name} avatar`}>
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Expertise:</div>
                      <div className="flex flex-wrap justify-center gap-1">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={member.linkedin}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                      <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Testimonials Section */}
          <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-purple-50 to-pink-50" aria-labelledby="testimonials-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold mb-4">
                  What Professionals{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Say About Us
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Real stories from professionals who've transformed their workflow with ToolHub
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <article key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 relative">
                    <Quote className="w-8 h-8 text-purple-300 mb-4" aria-hidden="true" />
                    <blockquote className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                    
                    <footer className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-lg" role="img" aria-label={`${testimonial.name} avatar`}>
                          {testimonial.avatar}
                        </div>
                        <div>
                          <cite className="font-bold text-gray-800 not-italic">{testimonial.name}</cite>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <p className="text-xs text-gray-500">{testimonial.industry} • {testimonial.teamSize}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-1" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="px-4 sm:px-6 py-16 md:py-20 bg-gradient-to-r from-purple-600 to-pink-600" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Workflow Today?
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Join 10+ million professionals who've already discovered their perfect productivity tools with ToolHub
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/tools"
                  className="px-8 py-4 bg-white text-purple-600 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg inline-flex items-center justify-center space-x-2"
                  role="button"
                >
                  <span>Explore 500+ Tools</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}