// components/Breadcrumbs.jsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  // Generate Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.thetoolsverse.com${item.path}`
    }))
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav 
        className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-6 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100" 
        aria-label="Breadcrumb"
      >
        {items.map((item, index) => (
          <div key={item.path} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            )}
            
            {index === items.length - 1 ? (
              // Last item (current page) - no link
              <span className="font-semibold text-gray-900 flex items-center gap-1.5">
                {index === 0 && <Home className="w-4 h-4" />}
                {item.name}
              </span>
            ) : (
              // Clickable breadcrumb items
              <Link 
                href={item.path} 
                className="hover:text-blue-600 transition-colors font-medium flex items-center gap-1.5 hover:underline"
              >
                {index === 0 && <Home className="w-4 h-4" />}
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
