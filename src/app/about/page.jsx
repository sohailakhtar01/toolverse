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

// Metadata for SEO
export const metadata = {
  title: 'About Us - Empowering Professionals with the Right Tools | ToolHub',
  description: 'Learn about ToolHub\'s mission to connect professionals with the best tools worldwide. Discover our story, values, and the team behind the platform.',
  keywords: 'about toolhub, our mission, team, company values, tool discovery platform',
  openGraph: {
    title: 'About ToolHub - Empowering Professionals Worldwide',
    description: 'Learn about our mission to connect professionals with the best tools worldwide.',
    type: 'website',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
};

// Team data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "👩‍💼",
    bio: "Passionate about connecting people with the right tools to amplify their potential.",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    image: "👨‍💻",
    bio: "Building intuitive experiences that make complex workflows simple and enjoyable.",
    linkedin: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "👩‍🎨",
    bio: "Creating beautiful, accessible designs that inspire and empower users worldwide.",
    linkedin: "#"
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    image: "👨‍🔬",
    bio: "Architecting scalable solutions that handle millions of users with reliability.",
    linkedin: "#"
  }
];

// Values data
const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Security",
    description: "We prioritize user privacy and data security in everything we build."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    description: "Constantly pushing boundaries to deliver cutting-edge solutions."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "User-Centric",
    description: "Every decision is made with our users' success and satisfaction in mind."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Impact",
    description: "Empowering professionals worldwide to achieve their goals efficiently."
  }
];

// Stats data
const stats = [
  { number: "10M+", label: "Active Users", icon: <Users className="w-5 h-5" /> },
  { number: "500+", label: "Featured Tools", icon: <Award className="w-5 h-5" /> },
  { number: "150+", label: "Countries", icon: <Globe className="w-5 h-5" /> },
  { number: "99.9%", label: "Uptime", icon: <TrendingUp className="w-5 h-5" /> }
];

// Testimonials data
const testimonials = [
  {
    name: "Alex Thompson",
    role: "Product Manager at TechCorp",
    content: "ToolHub has transformed how our team discovers and adopts new tools. The curated selection saves us countless hours of research.",
    avatar: "👨‍💼",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Freelance Designer",
    content: "As a freelancer, finding the right tools quickly is crucial. ToolHub's recommendations have boosted my productivity by 40%.",
    avatar: "👩‍🎨",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    content: "The tool comparisons and reviews helped us make informed decisions that saved our startup thousands of dollars.",
    avatar: "👨‍🚀",
    rating: 5
  }
];

// Journey timeline data
const timeline = [
  {
    year: "2020",
    title: "The Idea",
    description: "Founded with a vision to simplify tool discovery for professionals worldwide."
  },
  {
    year: "2021",
    title: "First Launch",
    description: "Launched with 50 carefully curated tools and 1,000 early adopters."
  },
  {
    year: "2022",
    title: "Rapid Growth",
    description: "Reached 1 million users and expanded to 200+ tools across multiple categories."
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded to 150+ countries with localized content and recommendations."
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Launched AI-powered tool recommendations and smart matching algorithms."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ToolHub",
            "description": "Platform connecting professionals with the best tools worldwide",
            "url": "https://toolhub.com",
            "logo": "https://toolhub.com/logo.png",
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "Sarah Johnson"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://twitter.com/toolhub",
              "https://linkedin.com/company/toolhub"
            ]
          })
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Our Story</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professionals
              </span>{' '}
              Worldwide
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We believe that the right tools can transform how people work, create, and achieve their goals. 
              Our mission is to connect professionals with the tools that matter most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg inline-block"
              >
                Join Our Community
              </a>
              <a 
                href="#mission" 
                className="px-8 py-4 border-2 border-purple-200 text-purple-600 rounded-2xl hover:bg-purple-50 transition-all duration-300 font-semibold inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="px-4 sm:px-6 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Democratizing access to powerful tools and resources worldwide
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-purple-100 text-center mb-16">
                <Target className="w-16 h-16 mx-auto mb-6 text-purple-600" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  To democratize access to powerful tools and resources, enabling professionals worldwide 
                  to discover, evaluate, and adopt the right solutions for their unique challenges. We're 
                  building a world where the best tools are accessible to everyone, regardless of their 
                  background or resources.
                </p>
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Accessibility</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Quality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Innovation</span>
                  </div>
                </div>
              </div>
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
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">{value.description}</p>
                </div>
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
                From a simple idea to a global platform
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
              
              <div className="space-y-8 md:space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 md:px-8">
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border border-purple-100 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0"></div>
                    
                    <div className="flex-1 md:px-8"></div>
                  </div>
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
                Passionate professionals dedicated to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <article key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-3xl">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    Connect on LinkedIn
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What People{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from professionals who've transformed their workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 relative">
                  <Quote className="w-8 h-8 text-purple-300 mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16 md:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join millions of professionals who've already discovered their perfect tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/featured"
                className="px-8 py-4 bg-white text-purple-600 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Tools</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}