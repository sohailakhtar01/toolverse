import Link from "next/link";

export const metadata = {
  title: "How It Works - Find Perfect AI Tools for Your Business | ToolVault",
  description: "Learn how to discover, compare, and choose the best AI tools for your business needs. Step-by-step guide to finding productivity software, design tools, and automation solutions.",
  keywords: "how to find AI tools, best AI software selection, compare AI tools pricing, choose productivity software, AI tools for business, digital tools comparison guide",
  openGraph: {
    title: "How It Works - Find Perfect AI Tools for Your Business",
    description: "Step-by-step guide to discovering and selecting the best AI tools for your specific business needs.",
    type: "website",
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Discover Your Needs",
      description: "Start by identifying what you want to achieve with AI tools",
      details: "Whether you need productivity software, design tools, writing assistants, or automation solutions, we help you understand your specific requirements.",
      icon: "🎯",
      color: "from-purple-500 to-purple-600",
      features: [
        "Identify your business goals",
        "Understand your team's workflow",
        "Define your budget requirements",
        "Assess current tool limitations"
      ]
    },
    {
      number: "02",
      title: "Browse by Category",
      description: "Explore our carefully curated categories to find relevant tools",
      details: "Navigate through specialized categories like AI Writing, Design, Productivity, Analytics, and more to find tools that match your specific use case.",
      icon: "📂",
      color: "from-pink-500 to-pink-600",
      features: [
        "12+ specialized categories",
        "Smart category filtering",
        "Popular tools in each category",
        "Trending AI solutions"
      ]
    },
    {
      number: "03",
      title: "Filter & Sort",
      description: "Use our advanced filtering system to narrow down your options",
      details: "Sort by pricing, ratings, features, or popularity. Filter by free vs paid tools, business size, or specific functionalities to find your perfect match.",
      icon: "⚡",
      color: "from-blue-500 to-blue-600",
      features: [
        "Sort by price, rating, popularity",
        "Filter by free/paid options",
        "Advanced search functionality",
        "Custom comparison views"
      ]
    },
    {
      number: "04",
      title: "Compare & Evaluate",
      description: "Get detailed insights about each tool to make informed decisions",
      details: "Access comprehensive reviews, pricing information, feature comparisons, and user ratings to evaluate which tools best fit your needs.",
      icon: "🔍",
      color: "from-green-500 to-green-600",
      features: [
        "Detailed tool reviews",
        "Pricing comparisons",
        "Feature breakdowns",
        "User ratings & feedback"
      ]
    },
    {
      number: "05",
      title: "Try & Implement",
      description: "Start using your chosen tools with confidence",
      details: "Get direct access to tools, take advantage of free trials, and implement solutions that will transform your business productivity.",
      icon: "🚀",
      color: "from-orange-500 to-orange-600",
      features: [
        "Direct tool access",
        "Free trial opportunities",
        "Implementation guides",
        "Support resources"
      ]
    }
  ];

  const benefits = [
    {
      title: "Save Time & Money",
      description: "Avoid costly mistakes by finding the right tools faster",
      icon: "💰",
      stats: "Save 70% research time"
    },
    {
      title: "Expert Curation",
      description: "All tools are carefully reviewed by our expert team",
      icon: "⭐",
      stats: "2,500+ tools reviewed"
    },
    {
      title: "Unbiased Reviews",
      description: "Get honest, transparent reviews from real users",
      icon: "🛡️",
      stats: "100% honest reviews"
    },
    {
      title: "Latest Updates",
      description: "Stay updated with the newest AI tools and features",
      icon: "🔄",
      stats: "Updated daily"
    }
  ];

  return (
    <div className="min-h-screen mt-[25px] bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-pink-100/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center mb-16">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-purple-600 font-medium">How It Works</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How to Find the{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Perfect AI Tools
              </span>
              <br className="hidden sm:block" />
              for Your Business
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover how our AI tools directory helps you find, compare, and choose the best digital solutions 
              for your specific business needs in just 5 simple steps.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/browse-tools"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                Start Exploring Tools
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 border-2 border-purple-200 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="relative mt-[-50]py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Finding the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Right AI Tools
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to discover productivity software, design tools, and automation solutions 
              that will transform your business workflow.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-transparent hidden lg:block"></div>
                )}
                
                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                        {step.number}
                      </div>
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <p className="text-gray-600 mb-8">
                      {step.details}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className={`w-full h-32 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                          <span className="text-6xl text-white/80">{step.icon}</span>
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 bg-gray-200 rounded-full"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Tools Directory?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Join thousands of businesses who trust us to find the best AI tools and software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-purple-100 mb-3">
                  {benefit.description}
                </p>
                <div className="text-sm font-medium text-purple-200">
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about finding and using AI tools for your business.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I know which AI tools are right for my business?",
                answer: "Start by identifying your specific needs and goals. Our category-based browsing and filtering system helps you narrow down tools based on your industry, team size, and budget. Read user reviews and compare features to make an informed decision."
              },
              {
                question: "Are all the AI tools on your platform free?",
                answer: "We feature both free and paid AI tools. You can easily filter by pricing to find free tools, freemium options, or premium solutions. Each tool listing clearly displays pricing information and available trial periods."
              },
              {
                question: "How often do you update your AI tools database?",
                answer: "We update our database daily with new AI tools, pricing changes, and feature updates. Our team continuously reviews and adds emerging AI solutions to ensure you have access to the latest innovations."
              },
              {
                question: "Can I submit my own AI tool to be featured?",
                answer: "Yes! We welcome submissions from AI tool creators and companies. Use our submission form to provide details about your tool, and our review team will evaluate it for inclusion in our directory."
              },
              {
                question: "Do you provide support for choosing the right tools?",
                answer: "While we don't offer direct consultation, our detailed reviews, comparison features, and user ratings provide comprehensive information to help you make the best choice for your specific needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start exploring our curated collection of AI tools and find the perfect solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/browse-tools"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              Browse AI Tools Now
            </Link>
            {/* <Link
              href="/categories"
              className="px-8 py-4 border-2 border-purple-200 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all"
            >
              View Categories
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}