'use client';
import { useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import categories from '@/data/categories';
import Image from 'next/image';
import Link from "next/link";
import { categoryToSlug } from '@/lib/categorySlug';

const getPricingDisplay = (type) => {
  switch ((type || "").toLowerCase()) {
    case 'free': return { label: 'Free', color: 'bg-green-100 text-green-700' };
    case 'freemium': return { label: 'Freemium', color: 'bg-orange-100 text-orange-700' };
    case 'paid': return { label: 'Paid', color: 'bg-red-100 text-red-700' };
    case 'free trial': return { label: 'Free Trial', color: 'bg-purple-100 text-purple-700' };
    default: return { label: type || '', color: 'bg-gray-100 text-gray-600' };
  }
};

const ToolCard = ({ tool, viewMode = 'grid' }) => {
  const router = useRouter();
  const pricing = getPricingDisplay(tool.pricingType);
  console.log(tool.name, tool.featuredRank);

  return (

    <div
      className={`
  group relative bg-white rounded-xl border border-gray-100 p-6
  flex flex-col justify-between
  transition-transform  duration-300 ease-out
  hover:scale-[1.02] hover:-translate-y-2 hover:shadow-xl
  hover:border-purple-200
  ${viewMode === 'list' ? 'flex-row items-center gap-6' : 'h-full'}
`}

    >

      {/* PRICING + RATING */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`
              inline-block w-4 h-2 rounded-full
              ${tool.pricingType === 'free' ? 'bg-green-500' :
                tool.pricingType === 'freemium' ? 'bg-orange-500' :
                  tool.pricingType === 'paid' ? 'bg-red-500' :
                    'bg-purple-500'}
            `}
          ></span>
          <span className="text-sm font-medium text-gray-800">{pricing.label}</span>
        </div>

        {/* RATING – Bottom Right */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 text-yellow-500 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.737c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          <span className="font-medium">{tool.rating}</span>
        </div>

      </div>

      {/* LOGO + NAME */}

      <Link
        href={`/tools/${tool.slug}`}
        className="flex items-center justify-center gap-3 mb-4 group"
      >
        <img
          src={tool.logo || tool.image}
          alt={tool.name}
          className="
      w-10 h-10 rounded-lg object-cover bg-gray-100 flex-shrink-0
      transition-transform duration-300
      group-hover:scale-110
    "
        />

        <h3
          className="relative inline-block text-lg font-semibold
    bg-gradient-to-r from-purple-600 to-pink-600
    bg-clip-text text-transparent"
          title={tool.name}
        >
          {tool.name}
          <span className="
      absolute left-0 -bottom-1 w-0 h-0.5
      bg-gradient-to-r from-purple-500 to-pink-500
      transition-all duration-300
      group-hover:w-full
      rounded-md origin-left
    "></span>
        </h3>
      </Link>


      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm mb-7 mt-4 line-clamp-2 min-h-[38px]">
        {tool.shortDescription}
      </p>

      {/* CATEGORIES */}
      {/* CATEGORIES */}
      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {(tool.categories || []).slice(0, 2).map((category) => {
          const slug = categoryToSlug(category);

          return (
            <Link
              key={category}
              href={`/categories/${slug}`}
              onClick={(e) => e.stopPropagation()}
              className="
          px-3 py-1
          bg-gray-100 text-gray-700
          text-xs rounded-full whitespace-nowrap
          hover:bg-purple-100 hover:text-purple-700
          transition
        "
              aria-label={`Browse ${category} tools`}
            >
              #{category}
            </Link>
          );
        })}

        {/* +MORE COUNT */}
        {(tool.categories?.length || 0) > 2 && (
          <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
            +{tool.categories.length - 2}
          </span>
        )}
      </div>

      {/* TOP BADGE (Only for Rank 1–5) */}
      {/* TOP BADGE (Only for Rank 1–5) */}
      {tool.isFeatured && tool.featuredRank && tool.featuredRank <= 5 && (
        <div className="absolute -top-1 -right-1 w-30 h-30 z-20 pointer-events-none overflow-hidden rounded-tr-xl">

          <Image
            src="/ribbon.png"
            alt="Top Rank Ribbon"
            fill
            className="object-contain scale-110 -translate-y-4 translate-x-3"
            priority
          />

          <div className="absolute top-[22px] -right-[11px] w-[100px] transform rotate-45 flex flex-col items-center justify-center text-center">
            <span className="block text-sm font-extrabold text-white leading-none drop-shadow-md">
              TOP {tool.featuredRank}
            </span>
          </div>

        </div>
      )}





      {/* VISIT BUTTON */}
      <div className="flex justify-center items-center mt-auto">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative group flex items-center gap-2 px-8 py-2 mb-5 cursor-pointer rounded-md font-semibold font-spaceGrotesk border border-gray-200 shadow-sm bg-white text-black overflow-hidden transition-all duration-500 hover:text-white hover:scale-[1.02]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 origin-center transform transition-transform duration-700 ease-in-out group-hover:scale-x-100 rounded-md -z-10"></span>
          <span className="relative flex items-center gap-2 z-10">
            <ExternalLink className="w-5 h-5" />
            VISIT TOOL
          </span>
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
