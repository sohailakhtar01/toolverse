// components/Breadcrumbs.jsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center" aria-label="Breadcrumb">
      <ol className="flex items-center  space-x-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;
          
          return (
            <li key={item.path} className="flex items-center ">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
              )}
              
              {isLast ? (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-sm">
                  {isFirst && <Home className="w-3.5 h-3.5" />}
                  <span className="max-w-[200px] truncate">{item.name}</span>
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="group inline-flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow"
                >
                  {isFirst && <Home className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-700 transition-colors" />}
                  <span className="max-w-[150px] truncate">{item.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
