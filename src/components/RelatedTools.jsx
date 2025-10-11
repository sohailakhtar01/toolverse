// components/RelatedTools.jsx
import Link from 'next/link';
import { ArrowRight, Star, DollarSign, Zap } from 'lucide-react';

export default function RelatedTools({ currentTool, allTools }) {
  // Find tools with same category or tags
  const relatedTools = allTools
    .filter(tool => 
      tool.slug !== currentTool.slug && 
      (tool.category.some(cat => currentTool.category.includes(cat)) ||
       tool.tags.some(tag => currentTool.tags.includes(tag)))
    )
    .slice(0, 6); // Show max 6 related tools

  if (relatedTools.length === 0) return null;

  const getPriceBadgeStyle = (price) => {
    const styles = {
      'Free': 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      'Paid': 'bg-blue-100 text-blue-800 border border-blue-200',
      'Freemium': 'bg-purple-100 text-purple-800 border border-purple-200',
    };
    return styles[price] || 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  return (
    <section className="bg-white mt-6 rounded-3xl shadow-xl border border-gray-100 px-4 py-8 sm:p-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
          <Zap className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600" />
          Similar AI Tools You Should Check Out
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Explore these {currentTool.category[0]} alternatives and complementary tools
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTools.map(tool => (
          <Link 
            key={tool.slug} 
            href={`/tools/${tool.slug}`}
            className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-5 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col h-full">
              {/* Tool Image */}
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={tool.image} 
                  alt={`${tool.name} - ${currentTool.name} alternative`}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {tool.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriceBadgeStyle(tool.price)}`}>
                      {tool.price}
                    </span>
                    {tool.rating && (
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="font-medium text-gray-700">{tool.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                {tool.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tool.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {tool.tags.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    +{tool.tags.length - 3}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-800 font-medium text-sm">
                View {tool.name} Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-8 text-center">
        <Link 
          href={`/categories/${currentTool.category[0].toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-base hover:gap-3 transition-all"
        >
          View All {currentTool.category[0]} Tools
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
