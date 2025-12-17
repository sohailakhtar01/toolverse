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
  title: info.freeTrial.title,
  description: info.freeTrial.description,
  keywords: info.freeTrial.keywords.join(', '),
  alternates: { canonical: info.freeTrial.canonical },
  openGraph: {
    title: info.freeTrial.title,
    description: info.freeTrial.description,
    url: info.freeTrial.ogUrl,
    type: 'website',
  },
};

async function ToolsSection({ searchParams }) {
  await dbConnect();

  const page = parseInt(searchParams?.page || '1', 10);
  const limit = 12;
  const skip = (page - 1) * limit;

  // free-trial tools (match values like "Free Trial", "free-trial", etc.)
  const query = { pricingType: { $regex: /free[\s-]?trial/i } };

  const [docs, total] = await Promise.all([
    Tool.find(query)
      .sort({ rating: -1, _id: 1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Tool.countDocuments(query),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  const freeTrialTools = docs.map((t) => ({
    slug: t.slug || String(t._id),
    name: t.displayName || 'Untitled Tool',
    logo: t.logo || t.image || '/placeholder.png',
    url: t.url || '#',
    pricingType: t.pricingType || 'Free Trial',
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

  return { freeTrialTools, totalPages, page, pages };
}

export default async function FreeTrialPage({ searchParams }) {
  const { freeTrialTools, totalPages, page, pages } =
    await ToolsSection({ searchParams });

  return (
    <main>
      <HeroSection heroData={info.freeTrial.hero} />

      <section
        id="tools"
        className="max-w-8xl mx-auto py-24 px-4 -mt-55 sm:px-6 lg:px-2"
      >
        {/* scroll target for pagination */}
        <div id="tools-section" />

        <ToolList
          tools={freeTrialTools}
          title="Best AI Tools With Free Trials"
          showSearch={true}
          showFilters={true}
        />

        <PaginationTools
          page={page}
          totalPages={totalPages}
          pages={pages}
          basePath="/free-trial"
          scrollTargetId="tools-section"
        />
      </section>

      <SEOContentSection seoContent={info.freeTrial.seoContent} />
      <FAQSection faqs={info.freeTrial.faqs} />
    </main>
  );
}
