import dbConnect from '@/lib/mongodb';
import Tool from '@/models/Tool';
import ToolList from '@/components/ToolList';
import info from '@/data/info';
import {
  HeroSection,
  SEOContentSection,
  FAQSection,
} from '@/components/SeoSections';
import PaginationTools from '@/components/PaginationTools';

export const metadata = {
  title: info.freemium.title,
  description: info.freemium.description,
  keywords: info.freemium.keywords.join(', '),
  alternates: { canonical: info.freemium.canonical },
  openGraph: {
    title: info.freemium.title,
    description: info.freemium.description,
    url: info.freemium.ogUrl,
    type: 'website',
  },
};

async function ToolsSection({ searchParams }) {
  await dbConnect();

  const page = parseInt(searchParams?.page || '1', 10);
  const limit = 12;
  const skip = (page - 1) * limit;

  // freemium tools
  const query = { pricingType: { $regex: /^freemium$/i } };

  const [docs, total] = await Promise.all([
    Tool.find(query)
      .sort({ rating: -1, _id: 1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Tool.countDocuments(query),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  const freemiumTools = docs.map((t) => ({
    slug: t.slug || String(t._id),
    name: t.displayName || 'Untitled Tool',
    logo: t.logo || t.image || '/placeholder.png',
    url: t.url || '#',
    pricingType: t.pricingType || 'Freemium',
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

  return { freemiumTools, totalPages, page, pages };
}

export default async function FreemiumPage({ searchParams }) {
  const { freemiumTools, totalPages, page, pages } =
    await ToolsSection({ searchParams });

  return (
    <main>
      <HeroSection heroData={info.freemium.hero} />

      <section
        id="tools"
        className="max-w-8xl mx-auto py-24 px-4 -mt-55 sm:px-6 lg:px-2"
      >
        {/* scroll target for pagination */}
        <div id="tools-section" />

        <ToolList
          tools={freemiumTools}
          title="Best Freemium AI Tools"
          showSearch={true}
          showFilters={true}
        />

        <PaginationTools
          page={page}
          totalPages={totalPages}
          pages={pages}
          basePath="/freemium"
          scrollTargetId="tools-section"
        />
      </section>

      <SEOContentSection seoContent={info.freemium.seoContent} />
      <FAQSection faqs={info.freemium.faqs} />
    </main>
  );
}
