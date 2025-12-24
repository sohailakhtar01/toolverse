import { 
  Star, Check, X, Image, Palette, Zap, Shield, 
  DollarSign, Clock, Users, Camera, Layers, Brush, 
  Sparkles, Download, Settings 
} from 'lucide-react';
import Link from 'next/link';

// ✅ Next.js 15 App Router - Force Dynamic Rendering
export const dynamic = 'force-dynamic';

// ✅ SEO Metadata (Replaces next/head)
export const metadata = {
  title: 'Midjourney vs DALL-E: Ultimate AI Image Generator Comparison 2025',
  description: 'Compare Midjourney vs DALL-E AI image generators. Detailed analysis of features, pricing, quality, and use cases. Find the best AI art tool for your creative projects.',
  keywords: [
    'Midjourney vs DALL-E',
    'AI image generator comparison',
    'best AI art tool 2025',
    'artificial intelligence image generation',
    'AI art comparison',
    'digital art tools'
  ],
  authors: [{ name: 'ToolsVerse' }],
  openGraph: {
    title: 'Midjourney vs DALL-E: Ultimate AI Image Generator Comparison 2025',
    description: 'Compare Midjourney vs DALL-E AI image generators. Detailed analysis of features, pricing, quality, and use cases.',
    url: 'https://thetoolsverse.com/compare/midjourney-vs-dalle',
    siteName: 'ToolsVerse',
    images: [
      {
        url: 'https://thetoolsverse.com/og/midjourney-vs-dalle.jpg',
        width: 1200,
        height: 630,
        alt: 'Midjourney vs DALL-E AI Image Generator Comparison 2025'
      }
    ],
    type: 'article',
    publishedTime: '2025-09-05T00:00:00.000Z',
    modifiedTime: '2025-12-24T00:00:00.000Z'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midjourney vs DALL-E: Ultimate AI Image Generator Comparison 2025',
    description: 'Compare Midjourney vs DALL-E AI image generators. Detailed analysis of features, pricing, quality, and use cases.',
    images: ['https://thetoolsverse.com/og/midjourney-vs-dalle.jpg']
  },
  alternates: {
    canonical: 'https://thetoolsverse.com/compare/midjourney-vs-dalle'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

// Rating Stars Component
function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
        />
      ))}
      <span className="ml-2 text-sm font-semibold">{rating}/5</span>
    </div>
  );
}

export default function MidjourneyVsDALLE() {
  // Data Objects
  const features = [
    {
      category: 'Image Generation Quality',
      items: [
        { feature: 'Photorealistic Images', midjourney: true, dalle: true },
        { feature: 'Artistic Style Variety', midjourney: true, dalle: true },
        { feature: 'Fine Detail Rendering', midjourney: true, dalle: false },
        { feature: 'Consistent Character Generation', midjourney: true, dalle: false },
        { feature: 'Abstract Art Creation', midjourney: true, dalle: true },
        { feature: 'Portrait Quality', midjourney: true, dalle: true }
      ]
    },
    {
      category: 'Technical Capabilities',
      items: [
        { feature: 'Multiple Aspect Ratios', midjourney: true, dalle: true },
        { feature: 'Image Upscaling', midjourney: true, dalle: false },
        { feature: 'Variation Generation', midjourney: true, dalle: true },
        { feature: 'In-painting/Outpainting', midjourney: false, dalle: true },
        { feature: 'Image Editing', midjourney: false, dalle: true },
        { feature: 'Batch Processing', midjourney: true, dalle: false }
      ]
    },
    {
      category: 'User Experience',
      items: [
        { feature: 'Web Interface', midjourney: false, dalle: true },
        { feature: 'Discord Integration', midjourney: true, dalle: false },
        { feature: 'Mobile App', midjourney: false, dalle: false },
        { feature: 'API Access', midjourney: false, dalle: true },
        { feature: 'Prompt Suggestions', midjourney: false, dalle: true },
        { feature: 'Community Gallery', midjourney: true, dalle: false }
      ]
    },
    {
      category: 'Commercial Usage',
      items: [
        { feature: 'Commercial License', midjourney: true, dalle: true },
        { feature: 'Copyright Ownership', midjourney: true, dalle: true },
        { feature: 'Print Rights', midjourney: true, dalle: true },
        { feature: 'Resale Rights', midjourney: true, dalle: true },
        { feature: 'Attribution Required', midjourney: false, dalle: false },
        { feature: 'Enterprise Licensing', midjourney: true, dalle: true }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Midjourney Basic',
      price: '$10',
      period: '/month',
      features: [
        '200 image generations',
        'Personal use license',
        'Discord access',
        'General commercial terms',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Midjourney Standard',
      price: '$30',
      period: '/month',
      features: [
        'Unlimited relaxed generations',
        '15 hours fast generations',
        'Stealth mode option',
        'Commercial usage rights',
        'Premium support'
      ],
      popular: true
    },
    {
      name: 'DALL-E Credits',
      price: '$15',
      period: '/115 images',
      features: [
        '115 image generations',
        '1024x1024 resolution',
        'Web interface access',
        'API integration',
        'Commercial usage rights'
      ],
      popular: false
    },
    {
      name: 'DALL-E Plus',
      price: '$20',
      period: '/month',
      features: [
        'Faster generation times',
        'Priority access',
        'Higher quality outputs',
        'More style options',
        'Extended usage limits'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Digital Art Creation',
      midjourney: {
        rating: 5,
        description: 'Exceptional artistic quality with unmatched style diversity. Perfect for concept art, fantasy illustrations, and creative projects requiring artistic flair.'
      },
      dalle: {
        rating: 4,
        description: 'Strong artistic capabilities with good style control. Better for precise artistic direction and consistent commercial artwork.'
      }
    },
    {
      title: 'Marketing & Advertising',
      midjourney: {
        rating: 4,
        description: 'Outstanding creative visuals for campaigns, but requires Discord workflow which may not suit all marketing teams.'
      },
      dalle: {
        rating: 5,
        description: 'Ideal for marketing with web interface, precise control, and editing capabilities. Perfect for product mockups and advertising materials.'
      }
    },
    {
      title: 'Product Design & Mockups',
      midjourney: {
        rating: 3,
        description: 'Good for conceptual product visualization but lacks precision editing tools needed for detailed product design.'
      },
      dalle: {
        rating: 5,
        description: 'Excellent for product mockups with editing capabilities, precise control, and ability to iterate on specific elements.'
      }
    },
    {
      title: 'Social Media Content',
      midjourney: {
        rating: 4,
        description: 'Creates visually striking social media content with unique artistic styles that stand out in feeds.'
      },
      dalle: {
        rating: 4,
        description: 'Great for social media with easy web access and quick generation. Better for consistent brand imagery across platforms.'
      }
    },
    {
      title: 'Book & Game Illustrations',
      midjourney: {
        rating: 5,
        description: 'Unparalleled for fantasy, sci-fi, and artistic book illustrations. Excellent character consistency and world-building visuals.'
      },
      dalle: {
        rating: 3,
        description: 'Decent illustration capabilities but lacks the artistic depth and consistency required for professional book and game art.'
      }
    },
    {
      title: 'Website & UI Design',
      midjourney: {
        rating: 3,
        description: 'Can create inspiring design concepts but lacks the precision and editing tools needed for practical UI implementation.'
      },
      dalle: {
        rating: 4,
        description: 'Better suited for UI design with editing capabilities and precise control over elements. Good for hero images and backgrounds.'
      }
    }
  ];

  const pros = {
    midjourney: [
      'Superior artistic quality and visual aesthetics across all styles',
      'Exceptional detail rendering and composition balance',
      'Strong community with shared prompts and inspiration',
      'Consistent character generation and world-building capabilities',
      'Unique artistic styles not found in other AI generators',
      'Regular model updates with significant quality improvements',
      'Excellent for fantasy, sci-fi, and conceptual art creation'
    ],
    dalle: [
      'User-friendly web interface accessible from any browser',
      'Precise prompt understanding and instruction following',
      'Built-in image editing and inpainting capabilities',
      'API access for developer integration and automation',
      'Better safety filters and content moderation',
      'Seamless integration with other OpenAI products',
      'More suitable for business and commercial workflows'
    ]
  };

  const cons = {
    midjourney: [
      'Requires Discord account and familiarity with Discord commands',
      'No direct web interface or standalone application',
      'Limited editing capabilities once image is generated',
      'Public generation by default (stealth mode costs extra)',
      'Can be overwhelming for beginners due to Discord workflow',
      'No API access for developers and businesses',
      'Sometimes struggles with precise text rendering in images'
    ],
    dalle: [
      'Higher cost per image compared to Midjourney subscriptions',
      'Less artistic flair and creative interpretation',
      'Weaker performance on fantasy and abstract concepts',
      'More conservative outputs due to stronger safety filters',
      'Limited style consistency across multiple generations',
      'Shorter prompt length limits compared to Midjourney',
      'Less community interaction and inspiration sharing'
    ]
  };

  const faqs = [
    {
      question: 'Which AI image generator produces better quality images: Midjourney or DALL-E?',
      answer: 'Midjourney generally produces higher quality artistic images with superior composition, lighting, and detail rendering. It excels particularly in fantasy, portrait, and conceptual art. DALL-E produces good quality images with better precision for specific requirements and commercial use cases, making it more suitable for business applications.'
    },
    {
      question: 'Is Midjourney or DALL-E better for commercial use and business applications?',
      answer: 'DALL-E is generally better for commercial use due to its web interface, API access, editing capabilities, and integration with business workflows. Midjourney produces more artistic results but requires Discord usage which may not suit all business environments. Both offer commercial licensing, but DALL-E\'s infrastructure is more business-friendly.'
    },
    {
      question: 'Which is more cost-effective: Midjourney vs DALL-E pricing?',
      answer: 'Midjourney offers better value for high-volume users with unlimited relaxed generations at $30/month. DALL-E costs about $0.13 per image, making it more expensive for heavy usage but better for occasional use. For businesses needing 200+ images monthly, Midjourney is more cost-effective.'
    },
    {
      question: 'Can I edit images after generation in Midjourney and DALL-E?',
      answer: 'DALL-E offers built-in editing capabilities including inpainting, outpainting, and variations directly in the web interface. Midjourney focuses on generation quality but lacks editing tools - you can only create variations and upscale images. For post-generation editing needs, DALL-E is the clear winner.'
    },
    {
      question: 'Which AI art generator is easier to use for beginners?',
      answer: 'DALL-E is significantly easier for beginners with its intuitive web interface, clear navigation, and straightforward image generation process. Midjourney requires Discord familiarity and learning specific commands, making it less beginner-friendly despite producing superior artistic results.'
    },
    {
      question: 'Do Midjourney and DALL-E allow API access for developers?',
      answer: 'Only DALL-E offers API access, allowing developers to integrate image generation into applications, websites, and automated workflows. Midjourney operates exclusively through Discord and doesn\'t provide API access, limiting its use in custom applications and business automation.'
    },
    {
      question: 'Which is better for creating consistent characters across multiple images?',
      answer: 'Midjourney is significantly better at maintaining character consistency across multiple generations, especially for fantasy, anime, and artistic characters. DALL-E struggles more with character consistency but offers better precision for realistic human portraits and specific styling requirements.'
    },
    {
      question: 'Are there any content restrictions differences between Midjourney and DALL-E?',
      answer: 'DALL-E has stricter content policies and safety filters, particularly around public figures, violence, and adult content. Midjourney has more relaxed policies but still maintains content guidelines. Both platforms prohibit illegal content, but DALL-E\'s filters are more conservative and may restrict some artistic concepts that Midjourney allows.'
    }
  ];

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Midjourney vs DALL-E: Complete AI Image Generator Comparison 2025',
    description: 'Comprehensive comparison of Midjourney and DALL-E AI image generators. Compare features, pricing, quality, and use cases to choose the best AI art tool for your needs.',
    image: 'https://thetoolsverse.com/og/midjourney-vs-dalle.jpg',
    author: {
      '@type': 'Organization',
      name: 'ToolsVerse'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ToolsVerse',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thetoolsverse.com/logo.png'
      }
    },
    datePublished: '2025-09-05',
    dateModified: '2025-12-24',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  };

  return (
    <>
      {/* ✅ JSON-LD Structured Data (Server-Safe) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/compare" className="hover:text-purple-600 transition-colors">
                  Compare Tools
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Midjourney vs DALL-E
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Header */}
        <header className="bg-gradient-to-br from-purple-600 via-blue-500 to-pink-600 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Midjourney vs DALL-E: Ultimate Comparison 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
                The complete comparison guide to help you choose the perfect AI image generator for your creative projects, business needs, and artistic vision
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#features"
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Compare Features
                </a>
                <a
                  href="#pricing"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Summary Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Performance Overview
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Midjourney Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Palette className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Midjourney</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Overall Quality</span>
                    <RatingStars rating={5} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Artistic Style</span>
                    <RatingStars rating={5} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Detail & Composition</span>
                    <RatingStars rating={5} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Ease of Use</span>
                    <RatingStars rating={3} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Commercial Suitability</span>
                    <RatingStars rating={4} />
                  </div>
                </div>
              </div>

              {/* DALL-E Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Image className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">DALL-E</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Overall Quality</span>
                    <RatingStars rating={4} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Precision Control</span>
                    <RatingStars rating={5} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Editing Capabilities</span>
                    <RatingStars rating={5} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Ease of Use</span>
                    <RatingStars rating={5} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Business Integration</span>
                    <RatingStars rating={5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section id="features" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Comprehensive Feature Analysis
              </span>
            </h2>

            {features.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{category.category}</h3>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 font-semibold text-gray-700">
                    <div className="col-span-6 md:col-span-8">Feature</div>
                    <div className="col-span-3 md:col-span-2 text-center">Midjourney</div>
                    <div className="col-span-3 md:col-span-2 text-center">DALL-E</div>
                  </div>
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="col-span-6 md:col-span-8 font-medium text-gray-800">
                        {item.feature}
                      </div>
                      <div className="col-span-3 md:col-span-2 text-center">
                        {item.midjourney ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-red-500 mx-auto" size={20} />
                        )}
                      </div>
                      <div className="col-span-3 md:col-span-2 text-center">
                        {item.dalle ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-red-500 mx-auto" size={20} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Case Analysis */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Real-World Application Analysis
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{useCase.title}</h3>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Palette className="text-indigo-500 mr-2" size={20} />
                      <span className="font-semibold">Midjourney</span>
                    </div>
                    <RatingStars rating={useCase.midjourney.rating} />
                    <p className="text-sm text-gray-600 mt-2">{useCase.midjourney.description}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Image className="text-green-500 mr-2" size={20} />
                      <span className="font-semibold">DALL-E</span>
                    </div>
                    <RatingStars rating={useCase.dalle.rating} />
                    <p className="text-sm text-gray-600 mt-2">{useCase.dalle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strengths and Weaknesses */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Strengths and Limitations
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Midjourney */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Palette className="text-indigo-500 mr-3" size={28} />
                  Midjourney
                </h3>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-green-600 flex items-center">
                    <Check className="mr-2" size={20} />
                    Key Strengths
                  </h4>
                  <ul className="space-y-3">
                    {pros.midjourney.map((pro, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-red-600 flex items-center">
                    <X className="mr-2" size={20} />
                    Limitations
                  </h4>
                  <ul className="space-y-3">
                    {cons.midjourney.map((con, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* DALL-E */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Image className="text-green-500 mr-3" size={28} />
                  DALL-E
                </h3>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-green-600 flex items-center">
                    <Check className="mr-2" size={20} />
                    Key Strengths
                  </h4>
                  <ul className="space-y-3">
                    {pros.dalle.map((pro, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-red-600 flex items-center">
                    <X className="mr-2" size={20} />
                    Limitations
                  </h4>
                  <ul className="space-y-3">
                    {cons.dalle.map((con, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Pricing & Value Comparison
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl shadow-lg p-6 relative hover:shadow-xl transition-shadow duration-300 ${
                    plan.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Quality Comparison */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Image Quality & Style Comparison
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Visual Quality Analysis */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Visual Quality Analysis</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Photorealism & Detail</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Midjourney</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">9.5/10</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>DALL-E</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">8.0/10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Artistic Style Range</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Midjourney</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">10/10</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>DALL-E</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">7.5/10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Composition & Layout</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Midjourney</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">9.0/10</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>DALL-E</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">7.0/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Capabilities */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Technical Capabilities</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Prompt Understanding</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Midjourney</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">8.5/10</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>DALL-E</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">9.5/10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Generation Speed</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Midjourney</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">8.0/10</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>DALL-E</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">7.5/10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Consistency</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Midjourney</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">9.0/10</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>DALL-E</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">7.0/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Recommendations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Expert Recommendations
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Palette className="text-indigo-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-indigo-800">Choose Midjourney For:</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-indigo-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-indigo-800">Superior Artistic Quality:</strong>
                      <p className="text-indigo-700 text-sm mt-1">
                        When you need the highest quality artistic images with exceptional composition, lighting, and creative interpretation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-indigo-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-indigo-800">Fantasy & Concept Art:</strong>
                      <p className="text-indigo-700 text-sm mt-1">
                        Perfect for fantasy illustrations, concept art, character design, and imaginative creative projects that require artistic flair.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-indigo-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-indigo-800">Creative Professionals:</strong>
                      <p className="text-indigo-700 text-sm mt-1">
                        Ideal for artists, designers, and creative professionals who prioritize visual quality over workflow convenience.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-indigo-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-indigo-800">High-Volume Generation:</strong>
                      <p className="text-indigo-700 text-sm mt-1">
                        Best value for users needing to generate hundreds of images monthly with unlimited relaxed generations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Image className="text-green-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-green-800">Choose DALL-E For:</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-green-800">Image Editing Needs:</strong>
                      <p className="text-green-700 text-sm mt-1">
                        Essential when you need built-in editing capabilities, inpainting, outpainting, and iterative refinement of generated images.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-green-800">Beginner-Friendly Interface:</strong>
                      <p className="text-green-700 text-sm mt-1">
                        Best choice for beginners or teams who need an intuitive web interface without learning Discord commands.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-green-800">Business & Commercial Use:</strong>
                      <p className="text-green-700 text-sm mt-1">
                        Perfect for businesses needing professional workflow integration, API access, and streamlined commercial usage.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong className="text-green-800">Precision & Control:</strong>
                      <p className="text-green-700 text-sm mt-1">
                        When you need precise control over generation results, detailed prompt following, and specific styling requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Use Cases */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professional Industry Applications
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Camera className="text-purple-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Marketing & Advertising</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Both platforms excel in creating marketing visuals, but with different strengths for campaign needs.
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">Best for Creative Campaigns:</span>
                    <p className="text-sm text-gray-600">
                      Midjourney's artistic quality creates eye-catching, memorable campaign visuals that stand out.
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold">Best for Product Marketing:</span>
                    <p className="text-sm text-gray-600">
                      DALL-E's precision and editing capabilities make it ideal for product mockups and brand consistency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Brush className="text-indigo-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Creative Industries</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Entertainment, publishing, and creative professionals have distinct preferences based on workflow needs.
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">Game Development:</span>
                    <p className="text-sm text-gray-600">
                      Midjourney dominates for concept art, character design, and environmental artwork creation.
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold">Publishing:</span>
                    <p className="text-sm text-gray-600">
                      Book covers and illustrations benefit from Midjourney's superior artistic interpretation and style variety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Settings className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Business Applications</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Enterprise and business users require different features for workflow integration and scalability.
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">API Integration:</span>
                    <p className="text-sm text-gray-600">
                      DALL-E's API access enables seamless integration into business applications and automated workflows.
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold">Volume Generation:</span>
                    <p className="text-sm text-gray-600">
                      Midjourney's unlimited relaxed mode offers better value for high-volume business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                The Final Verdict
              </span>
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Both Are Winners - It Depends on Your Needs</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The choice between Midjourney and DALL-E isn't about which is objectively better, but which aligns better with your specific requirements, workflow, and creative goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-indigo-800 mb-4">Choose Midjourney If You Value:</h4>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• Superior artistic quality and visual appeal</li>
                    <li>• Creative freedom and artistic interpretation</li>
                    <li>• Fantasy, concept art, and imaginative projects</li>
                    <li>• High-volume generation at lower cost</li>
                    <li>• Community interaction and inspiration sharing</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-green-800 mb-4">Choose DALL-E If You Need:</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Professional workflow integration</li>
                    <li>• Precise control and prompt adherence</li>
                    <li>• Built-in editing and refinement tools</li>
                    <li>• API access for business applications</li>
                    <li>• User-friendly interface for teams</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 mb-6">
                  Many professionals use both tools complementarily - Midjourney for creative inspiration and high-quality artistic work, and DALL-E for precise commercial applications and workflow integration.
                </p>
                <p className="text-sm text-gray-500">Last updated: December 2025 | Comparison based on latest model versions and pricing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Creating Amazing AI Art?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Both Midjourney and DALL-E offer powerful AI image generation capabilities. Choose the one that best fits your creative workflow and start bringing your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/midjourney"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try Midjourney
              </Link>
              <Link
                href="/tools/dall-e"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try DALL-E
              </Link>
            </div>
            <p className="text-white mt-8 text-sm">&copy; 2025 ToolsVerse. All rights reserved.</p>
          </div>
        </section>
      </div>
    </>
  );
}
