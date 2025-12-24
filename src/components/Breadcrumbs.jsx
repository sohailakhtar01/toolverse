// components/Breadcrumbs.jsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center w-full" aria-label="Breadcrumb">
      {/* CHANGES: 
         1. flex-wrap -> flex-nowrap: Keeps items in one line
         2. overflow-x-auto: Enables horizontal scrolling on mobile
         3. pb-1: Adds space for the scrollbar (if visible) or touch area
         4. no-scrollbar: (Optional utility) keeps it clean
      */}
      <ol className="flex items-center space-x-2 flex-nowrap overflow-x-auto w-full py-1 scrollbar-hide">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;
          
          return (
            <li key={item.path} className="flex items-center flex-shrink-0">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 mx-1 sm:mx-2 flex-shrink-0" />
              )}
              
              {isLast ? (
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm">
                  {isFirst && <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                  {/* Smaller truncation limit on mobile */}
                  <span className="max-w-[100px] sm:max-w-[200px] truncate">{item.name}</span>
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow"
                >
                  {isFirst && <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-700 transition-colors" />}
                  <span className="max-w-[80px] sm:max-w-[150px] truncate">{item.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}