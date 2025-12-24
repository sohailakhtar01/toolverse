import dbConnect from '@/lib/mongodb';
import Tool from '@/models/Tool';
import ToolList from '@/components/ToolList';
import info from '@/data/info';
import HomeSearchBar from "@/components/HomeSearchBar";


import {
  HeroSection,
  SEOContentSection,
  FAQSection,
} from '@/components/SeoSections';
import PaginationTools from '@/components/PaginationTools';

export const metadata = {
  title: info.free.title,
  description: info.free.description,
  keywords: info.free.keywords.join(', '),
  alternates: { canonical: info.free.canonical },
  openGraph: {
    title: info.free.title,
    description: info.free.description,
    url: info.free.ogUrl,
    type: 'website',
  },
};

async function ToolsSection({ searchParams }) {
  await dbConnect();

  const page = parseInt(searchParams?.page || '1', 10);
  const limit = 12;
  const skip = (page - 1) * limit;
  const query = { pricingType: { $regex: /^free$/i } };

  const [docs, total] = await Promise.all([
    Tool.find(query).sort({ rating: -1, _id: 1 }).skip(skip).limit(limit).lean(),
    Tool.countDocuments(query),
  ]);
  const allCategories = await Tool.distinct("categories");

  const totalPages = Math.max(1, Math.ceil(total / limit));

  const freeTools = docs.map((t) => ({
    slug: t.slug || String(t._id),
    name: t.displayName || 'Untitled Tool',
    logo: t.logo || t.image || '/placeholder.png',
    url: t.url || '#',
    pricingType: t.pricingType || 'Free',
    rating: typeof t.rating === 'number' ? t.rating : null,
    categories:
      Array.isArray(t.categories) && t.categories.length
        ? t.categories
        : Array.isArray(t.category)
        ? t.category
        : ['Uncategorized'],
    tags:
      Array.isArray(t.tags) && t.tags.length
        ? t.tags
        : Array.isArray(t.features)
        ? t.features
        : [],
    shortDescription:
      t.shortDescription ||
      t.longDescription?.slice(0, 140) ||
      t.description?.slice(0, 140) ||
      '',
  }));

  // build page numbers like: 1 2 3 ... 5
  const pages = [];
  const maxToShow = 5;

  if (totalPages <= maxToShow) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    const left = Math.max(2, page - 1);
    const right = Math.min(totalPages - 1, page + 1);

    if (left > 2) pages.push('left-ellipsis');
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push('right-ellipsis');
    pages.push(totalPages);
  }

return { freeTools, totalPages, page, pages, allCategories };
}

export default async function FreePage({ searchParams }) {
const { freeTools, totalPages, page, pages, allCategories } =
  await ToolsSection({ searchParams });

  return (
    <main>
      <HeroSection heroData={info.free.hero} />
      <div className="mb-20">
  <HomeSearchBar allCategories={allCategories} />
</div>



      <section
        id="tools"
        className="max-w-8xl mx-auto py-24 px-4 -mt-55 sm:px-6 lg:px-2"
      >
        {/* scroll target */}
        <div id="tools-section" />

       <ToolList
  tools={freeTools}
  title="All Free AI Tools"
  showSearch={false}
  showFilters={false}
/>


        <PaginationTools
          page={page}
          totalPages={totalPages}
          pages={pages}
          basePath="/free"
          scrollTargetId="tools-section"   // 👈 scroll here
        />
      </section>

      <SEOContentSection seoContent={info.free.seoContent} />
      <FAQSection faqs={info.free.faqs} />
    </main>
  );
}
