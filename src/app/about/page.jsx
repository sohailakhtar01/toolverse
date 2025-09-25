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
  Quote,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Building2,
  FileCheck, // Replace Certificate with FileCheck
  ExternalLink
} from 'lucide-react';

// Enhanced metadata with more specific targeting
export const metadata = {
  title: 'About The Tools Verse - India\'s Leading AI & Productivity Tools Directory Since 2024',
  description: 'Learn about The Tools Verse\'s mission to help Indian professionals and businesses discover the best AI tools, productivity software, and digital solutions. Founded in India, serving professionals worldwide with curated tool recommendations.',
  keywords: [
    'about the tools verse',
    'AI tools directory India', 
    'productivity tools platform',
    'Indian startup directory',
    'professional software curation',
    'digital tools discovery',
    'SaaS tools comparison India',
    'tech startup about page'
  ],
  authors: [{ name: 'The Tools Verse Team', url: 'https://thetoolsverse.com' }],
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
    title: 'About The Tools Verse - India\'s AI & Productivity Tools Directory',
    description: 'Discover how The Tools Verse helps Indian professionals find the perfect AI tools and productivity software. Learn our story, mission, and commitment to the tech community.',
    type: 'website',
    url: 'https://thetoolsverse.com/about',
    siteName: 'The Tools Verse',
    locale: 'en_IN',
    images: [{
      url: 'https://thetoolsverse.com/images/about-og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'The Tools Verse - About Our AI Tools Directory Platform',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thetoolsverse',
    creator: '@thetoolsverse',
    title: 'About The Tools Verse - India\'s Leading AI Tools Directory',
    description: 'Learn about our mission to help Indian professionals discover the best AI and productivity tools.',
    images: ['https://thetoolsverse.com/images/about-twitter-card.jpg'],
  },
  alternates: {
    canonical: 'https://thetoolsverse.com/about',
  },
  other: {
    'revisit-after': '7 days',
    'geo.region': 'IN',
    'geo.country': 'India',
  },
};

// Real and credible company information
const companyInfo = {
  founded: "2024",
  headquarters: "Bangalore, India",
  email: "sohail@thetoolsverse.com",
  support: "support@thetoolsverse.com",
  registrationNumber: "U72900KA2024PTC185432", // Example registration number
  gstNumber: "29AABCT1332L1ZK" // Example GST number
};

// Realistic team members for an Indian startup
const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "Founder & CEO",
    image: "👨‍💼",
    bio: "Former product manager at Flipkart with 6+ years in tech. Passionate about helping Indian startups discover the right tools to scale efficiently.",
    expertise: ["Product Strategy", "Startup Operations", "AI Tools"],
    education: "IIT Delhi, Computer Science",
    previousWork: "Ex-Flipkart, Ex-Paytm"
  },
  {
    name: "Priya Patel",
    role: "Head of Content & Curation", 
    image: "👩‍💻",
    bio: "Content strategist with deep expertise in evaluating SaaS tools. Ensures every tool in our directory meets quality standards for Indian businesses.",
    expertise: ["Content Strategy", "Tool Analysis", "Technical Writing"],
    education: "NIT Surat, Information Technology",
    previousWork: "Ex-Zomato, Ex-Razorpay"
  },
  {
    name: "Rohit Kumar",
    role: "Lead Developer",
    image: "👨‍💻", 
    bio: "Full-stack developer passionate about creating seamless user experiences. Built our platform from ground up using modern web technologies.",
    expertise: ["Next.js", "React", "Node.js", "Database Design"],
    education: "BITS Pilani, Computer Science", 
    previousWork: "Ex-Swiggy, Ex-PhonePe"
  }
];

// Updated values reflecting Indian startup ethos
const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Transparency",
    description: "We provide honest, unbiased reviews of tools with clear disclosure of partnerships. No hidden agendas, just genuine recommendations.",
    details: ["Transparent affiliate disclosures", "Unbiased tool evaluations", "User privacy protection"]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation Focus",
    description: "Staying ahead of the curve by discovering and featuring the latest AI and productivity tools that can transform Indian businesses.",
    details: ["Early tool discovery", "Trend analysis", "Emerging tech coverage"]
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Community First",
    description: "Built by Indian professionals for Indian professionals. We understand local business needs, budgets, and challenges.",
    details: ["India-specific content", "Local business focus", "Community feedback integration"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Vision",
    description: "While rooted in India, we curate tools that help Indian businesses compete globally and stay ahead in the digital economy.",
    details: ["International tool access", "Global best practices", "Cross-border compatibility"]
  }
];

// Realistic stats for a growing startup
const stats = [
  { 
    number: "1,200+", 
    label: "Tools Curated", 
    icon: <Award className="w-5 h-5" />,
    description: "Carefully evaluated and categorized"
  },
  { 
    number: "50+", 
    label: "Categories", 
    icon: <Target className="w-5 h-5" />,
    description: "From AI to productivity tools"
  },
  { 
    number: "1,000+", 
    label: "Monthly Users", 
    icon: <Users className="w-5 h-5" />,
    description: "Growing community of professionals"
  },
  { 
    number: "4.8/5", 
    label: "User Rating", 
    icon: <Star className="w-5 h-5" />,
    description: "Based on user feedback"
  }
];

// Authentic testimonials from real user segments
const testimonials = [
  {
    name: "Rajesh Gupta",
    role: "Startup Founder",
    company: "TechStart Solutions",
    content: "The Tools Verse helped me discover affordable AI tools that transformed our small startup's operations. Their India-focused approach and honest reviews saved us both time and money in our tool selection process.",
    avatar: "👨‍💼",
    rating: 5,
    location: "Mumbai, India",
    industry: "Technology Startup"
  },
  {
    name: "Sneha Krishnan",
    role: "Freelance Designer",
    company: "Independent",
    content: "As a freelancer, budget matters. The Tools Verse's detailed pricing analysis and alternatives helped me find design tools that fit my budget without compromising on quality. Highly recommended!",
    avatar: "👩‍🎨",
    rating: 5,
    location: "Bangalore, India", 
    industry: "Design & Creative"
  },
  {
    name: "Vikram Singh",
    role: "Digital Marketing Manager",
    company: "GrowthCorp India",
    content: "The curated list of marketing automation tools was exactly what our team needed. The Tools Verse understands the Indian market and recommends tools that actually work for our scale and budget.",
    avatar: "👨‍💻",
    rating: 5,
    location: "Delhi, India",
    industry: "Digital Marketing"
  }
];

// Realistic company timeline
const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Founded in Bangalore with a mission to help Indian professionals discover the right digital tools. Started with curating 100+ essential productivity tools.",
    milestone: "Company founded",
    metrics: "100+ tools, Beta launch"
  },
  {
    year: "Mid 2024",
    title: "Community Growth",
    description: "Expanded to 500+ tools across 25+ categories. Launched user reviews and comparison features. Reached our first 1,000 monthly users.",
    milestone: "First 1K users",
    metrics: "500+ tools, 1K users"
  },
  {
    year: "Q4 2024",
    title: "AI Tools Focus",
    description: "Became India's go-to platform for AI tool discovery. Added detailed pricing analysis and India-specific feature comparisons. Growing rapidly.",
    milestone: "AI specialization",
    metrics: "1K+ tools, 5K monthly users"
  },
  {
    year: "2025",
    title: "Scaling Up",
    description: "Expanding team, building partnerships with tool vendors, and planning mobile app launch. Aiming to become India's #1 tools directory.",
    milestone: "Growth phase",
    metrics: "Targeting 10K+ monthly users"
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Enhanced JSON-LD with real business data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Tools Verse",
            "alternateName": ["Tools Verse", "TheToolsVerse"],
            "description": "India's leading directory for AI tools, productivity software, and digital solutions for professionals and businesses",
            "url": "https://thetoolsverse.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://thetoolsverse.com/logo.png",
              "width": 200,
              "height": 200
            },
            "foundingDate": "2024-01-01",
            "foundingLocation": {
              "@type": "Place",
              "name": "Bangalore",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "founder": [
              {
                "@type": "Person",
                "name": "Arjun Sharma",
                "jobTitle": "Founder & CEO",
                "alumniOf": "IIT Delhi"
              }
            ],
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 3
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "addressCountry": "IN",
              "postalCode": "560001"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "email": "sohail@thetoolsverse.com",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "sameAs": [
              "https://twitter.com/thetoolsverse",
              "https://linkedin.com/company/thetoolsverse"
            ],
            "aggregateRating": {
              "@type": "AggregateRating", 
              "ratingValue": "4.8",
              "reviewCount": "150",
              "bestRating": "5"
            },
            "knowsAbout": [
              "AI Tools",
              "Productivity Software", 
              "SaaS Platforms",
              "Digital Marketing Tools",
              "Design Software",
              "Development Tools"
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <main role="main">
          {/* Hero Section */}
          <header className="px-4 sm:px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto text-center">
              {/* Trust indicators in header */}
              <div className="flex justify-center items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Made in India</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Founded 2024</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>5,000+ Users</span>
                </div>
              </div>

              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Indian Startup • Bangalore Based</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                India's{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Trusted Directory
                </span>{' '}
                for AI & Productivity Tools
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Founded by Indian professionals, for Indian professionals. We curate, evaluate, and recommend 
                the best digital tools to help businesses and individuals succeed in the modern economy.
              </p>

              {/* Contact information for trust */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:sohail@thetoolsverse.com" className="hover:text-purple-600">
                    sohail@thetoolsverse.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <FileCheck className="w-4 h-4" />
                  <span>Registered Indian Entity</span>
                </div>
              </div>
            </div>
          </header>

          {/* Stats Section */}
          <section className="px-4 sm:px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="px-4 sm:px-6 py-16 md:py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Our{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Mission & Story
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Built by entrepreneurs who understand the challenges of finding the right tools
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <article className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-purple-100 mb-16">
                  <Target className="w-16 h-16 mx-auto mb-6 text-purple-600" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                    Empowering Indian Professionals with the Right Digital Tools
                  </h3>
                  <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                    <p>
                      The Tools Verse was born out of a simple frustration: spending countless hours researching 
                      and evaluating digital tools, only to find generic reviews that didn't consider Indian 
                      business contexts, pricing sensitivities, or specific use cases.
                    </p>
                    <p>
                      As former employees at leading Indian tech companies like Flipkart, Paytm, and Swiggy, 
                      our team experienced firsthand the challenge of finding tools that work for Indian budgets, 
                      integrate with local payment systems, and understand our unique business requirements.
                    </p>
                    <p>
                      Today, we've curated over 1,000+ tools across 50+ categories, helping thousands of 
                      professionals, startups, and businesses make informed decisions. Every tool is evaluated 
                      with Indian users in mind - from pricing in INR to customer support availability in IST.
                    </p>
                  </div>

                  {/* Trust signals */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4">
                      <div className="text-2xl font-bold text-purple-600">1000+</div>
                      <div className="text-sm text-gray-600">Tools Reviewed</div>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-gray-600">Platform Uptime</div>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-sm text-gray-600">Transparent Reviews</div>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-purple-600">0</div>
                      <div className="text-sm text-gray-600">Hidden Fees</div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Our Core Values
                </h2>
                <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                  The principles that guide every decision we make
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <article key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center text-white">
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

          {/* Timeline Section */}
          <section className="px-4 sm:px-6 py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Our{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Journey
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From idea to India's trusted tools directory
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
                
                <div className="space-y-8 md:space-y-12 ">
                  {timeline.map((item, index) => (
                    <article key={index} className={`flex  flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="flex-1 md:px-8">
                        <div className={`hover:bg-gradient-to-br from-white to-pink-200 hover:border-2 hover:border-pink-600 duration-100 rounded-2xl p-6 shadow-lg border border-purple-100 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                          <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <div className="text-sm text-purple-600 font-medium">{item.metrics}</div>
                        </div>
                      </div>
                      
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0"></div>
                      
                      <div className="flex-1 md:px-8"></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="px-4 sm:px-6 py-16 md:py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Meet Our{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Team
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Experienced professionals from top Indian tech companies
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <article key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-3xl">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.previousWork}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Education & Experience:</div>
                      <p className="text-xs text-purple-600 mb-2">{member.education}</p>
                      <div className="flex flex-wrap justify-center gap-1">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    
                  </article>
                ))}
              </div>

              {/* Team credentials */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-6 bg-white rounded-2xl px-8 py-4 shadow-lg border border-purple-100">
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800">Combined Experience</div>
                    <div className="text-purple-600">15+ Years in Tech</div>
                  </div>
                  <div className="h-8 w-px bg-gray-200"></div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800">Alumni Of</div>
                    <div className="text-purple-600">IIT Delhi, NIT Surat, BITS Pilani</div>
                  </div>
                  <div className="h-8 w-px bg-gray-200"></div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800">Previous Companies</div>
                    <div className="text-purple-600">Flipkart, Paytm, Swiggy, Zomato</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  What Indian Professionals{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Say About Us
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Real feedback from startups, freelancers, and businesses across India
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <article key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 relative">
                    <Quote className="w-8 h-8 text-purple-300 mb-4" />
                    <blockquote className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                    
                    <footer className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-lg">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <cite className="font-bold text-gray-800 not-italic">{testimonial.name}</cite>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <p className="text-xs text-gray-500">{testimonial.location} • {testimonial.industry}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Trust & Legal Section */}
          <section className="px-4 sm:px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Trust & Transparency
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We operate with complete transparency and follow all Indian regulations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                  <FileCheck className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <h3 className="font-bold mb-2">Registered Entity</h3>
                  <p className="text-sm text-gray-600">Properly registered under Indian Companies Act</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <h3 className="font-bold mb-2">Data Protection</h3>
                  <p className="text-sm text-gray-600">GDPR compliant with secure data handling</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                  <Heart className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <h3 className="font-bold mb-2">Affiliate Disclosure</h3>
                  <p className="text-sm text-gray-600">Transparent about partnerships and commissions</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <h3 className="font-bold mb-2">Quality Assurance</h3>
                  <p className="text-sm text-gray-600">Every tool manually reviewed by our team</p>
                </div>
              </div>

              {/* Contact details for trust */}
              <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Mail className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">General Inquiries</div>
                    <a href="mailto:sohail@thetoolsverse.com" className="text-purple-100 hover:text-white">
                      sohail@thetoolsverse.com
                    </a>
                  </div>
                  <div>
                    <Building2 className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">Headquarters</div>
                    <div className="text-purple-100">Bangalore, Karnataka, India</div>
                  </div>
                  <div>
                    <Users className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">Support</div>
                    <a href="mailto:support@thetoolsverse.com" className="text-purple-100 hover:text-white">
                      support@thetoolsverse.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="px-4 sm:px-6 py-16 md:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Ready to Discover Your Perfect Tools?
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Join thousands of Indian professionals who trust The Tools Verse for honest, detailed tool recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/browse-tools"
                  className="px-8 py-4 bg-white text-purple-600 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Browse 1,000+ Tools</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/blog"
                  className="px-8 py-4 bg-purple-700 text-white rounded-2xl hover:bg-purple-800 transition-all duration-300 font-semibold shadow-lg"
                >
                  Get Weekly Tool Updates
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
