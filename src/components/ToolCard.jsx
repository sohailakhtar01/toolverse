// src/components/ToolCard.jsx
import Link from 'next/link';

const ToolCard = ({ tool, viewMode }) => {
  return (
    <Link href={`/tools/${tool.slug}`} className="block group">
      <div className={`
        relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex
        ${viewMode === 'list' ? 'flex-row items-center gap-6' : 'flex-col'}
        transition-all duration-200 hover:shadow-md hover:border-purple-200
      `}>
        <img
          src={tool.image}
          alt={tool.name}
          className={`
            rounded-xl object-cover
            ${viewMode === 'list' ? 'w-24 h-24 flex-shrink-0' : 'w-24 h-24 mx-auto mb-4'}
          `}
        />
        <div className={`${viewMode === 'list' ? 'flex-grow' : 'text-center'}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
            {tool.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {tool.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {tool.keywords.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-purple-600">{tool.price}</span>
            <span className="flex items-center text-yellow-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.737c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              {tool.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;