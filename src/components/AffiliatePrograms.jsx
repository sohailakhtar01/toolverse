import Image from 'next/image';
import Link from 'next/link';

const affiliatePrograms = [
  {
    id: 1,
    name: 'BLACKBOX AI',
    slug: 'blackbox-ai',
    logo: '/logo/blackboxai.png',
    deal: '20% Discount',
    monthlyVisits: '6.9M',
    pricing: 'Paid',
    website: 'https://blackbox.ai',
  },
  {
    id: 2,
    name: 'LearnWorlds',
    slug: 'learnworlds',
    logo: '/affiliates/learnworlds.png',
    deal: '',
    monthlyVisits: '1.1M',
    pricing: 'Paid',
    website: 'https://learnworlds.com',
  },
  {
    id: 3,
    name: 'Apollo.io',
    slug: 'apollo-io',
    logo: '/appolo.png',
    deal: '',
    monthlyVisits: '6.8M',
    pricing: 'Paid',
    website: 'https://apollo.io',
  },
  {
    id: 4,
    name: 'ThorData',
    slug: 'thordata',
    logo: '/affiliates/thordata.png',
    deal: '',
    monthlyVisits: '465K',
    pricing: 'Paid',
    website: 'https://thordata.com',
  },
  {
    id: 5,
    name: 'SaneBox',
    slug: 'sanebox',
    logo: '/affiliates/sanebox.png',
    deal: '',
    monthlyVisits: '171.8K',
    pricing: 'Paid',
    website: 'https://sanebox.com',
  },
  {
    id: 6,
    name: 'Hume AI',
    slug: 'hume-ai',
    logo: '/affiliates/hume.png',
    deal: '',
    monthlyVisits: '446.3K',
    pricing: 'Free',
    website: 'https://hume.ai',
  },
  {
    id: 7,
    name: 'Smartli',
    slug: 'smartli',
    logo: '/affiliates/smartli.png',
    deal: '',
    monthlyVisits: '79.7K',
    pricing: 'Paid',
    website: 'https://smartli.com',
  },
  {
    id: 8,
    name: 'BidX',
    slug: 'bidx',
    logo: '/affiliates/bidx.png',
    deal: '',
    monthlyVisits: '72K',
    pricing: 'Paid',
    website: 'https://bidx.com',
  },
];

export default function AffiliatePrograms() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              Partner Programs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Featured Affiliate Programs
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with top AI tools and earn commissions while helping others discover powerful solutions
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 backdrop-blur-sm">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b-2 border-gray-700">
                  <th className="px-8 py-5 text-left text-xs font-bold text-white uppercase tracking-widest">
                    Name
                  </th>
                  <th className="px-8 py-5 text-left text-xs font-bold text-white uppercase tracking-widest">
                    Deal
                  </th>
                  <th className="px-8 py-5 text-left text-xs font-bold text-white uppercase tracking-widest">
                    Monthly Visits
                  </th>
                  <th className="px-8 py-5 text-left text-xs font-bold text-white uppercase tracking-widest">
                    Pricing
                  </th>
                  <th className="px-8 py-5 text-center text-xs font-bold text-white uppercase tracking-widest">
                    Website
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {affiliatePrograms.map((program, index) => (
                  <tr
                    key={program.id}
                    className={`hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                  >
                    {/* Name Column */}
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 shadow-md ring-2 ring-gray-300/50 hover:ring-blue-400 transition-all duration-300">
                          <Image
                            src={program.logo}
                            alt={`${program.name} logo`}
                            fill
                            className="object-contain p-1.5"
                          />
                        </div>
                        <span className="font-bold text-gray-900 text-base tracking-tight">
                          {program.name}
                        </span>
                      </div>
                    </td>

                    {/* Deal Column */}
                    <td className="px-8 py-6">
                      {program.deal && program.deal.trim() !== '' ? (
                        program.deal.includes('Discount') ? (
                          <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
                            {program.deal}
                          </span>
                        ) : (
                          <span className="text-sm text-gray-700 font-semibold">
                            {program.deal}
                          </span>
                        )
                      ) : (
                        <span className="text-gray-400 font-medium text-sm">
                          ---
                        </span>
                      )}
                    </td>

                    {/* Monthly Visits Column */}
                    <td className="px-8 py-6">
                      <span className="text-sm text-gray-700 font-medium">
                        {program.monthlyVisits}
                      </span>
                    </td>

                    {/* Pricing Column */}
                    <td className="px-8 py-6">
                      <span
                        className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${program.pricing === 'Paid'
                            ? 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 ring-1 ring-orange-300'
                            : 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 ring-1 ring-green-300'
                          }`}
                      >
                        {program.pricing}
                      </span>
                    </td>

                    {/* Website Column */}
                    <td className="px-8 py-6 text-center">
                      <Link
                        href={program.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        Visit
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tablet View (Medium Screens) */}
          <div className="hidden md:block lg:hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b-2 border-gray-700">
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Program
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {affiliatePrograms.map((program, index) => (
                  <tr
                    key={program.id}
                    className={`hover:bg-blue-50/70 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative rounded-lg overflow-hidden bg-gray-100 shadow-md">
                          <Image
                            src={program.logo}
                            alt={`${program.name} logo`}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{program.name}</p>
                          <span
                            className={`inline-flex mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${program.pricing === 'Paid'
                                ? 'bg-orange-100 text-orange-700'
                                : 'bg-green-100 text-green-700'
                              }`}
                          >
                            {program.pricing}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="space-y-1.5">
                        <div className="text-xs text-gray-500">Deal:</div>
                        <div className="text-sm font-semibold text-gray-900">
                          {program.deal && program.deal.trim() !== '' ? program.deal : '---'}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{program.monthlyVisits}</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <Link
                        href={program.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-all shadow-md"
                      >
                        Visit
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-200">
            {affiliatePrograms.map((program, index) => (
              <div
                key={program.id}
                className={`p-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg ring-2 ring-gray-300/50">
                    <Image
                      src={program.logo}
                      alt={`${program.name} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-2 tracking-tight">
                      {program.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm ${program.pricing === 'Paid'
                          ? 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800'
                          : 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
                        }`}
                    >
                      {program.pricing}
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-3 border border-gray-200/50">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Deal:</span>
                    <span className="text-sm font-bold text-gray-900 text-right flex-1 ml-3">
                      {program.deal && program.deal.trim() !== '' ? program.deal : '---'}
                    </span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Visits:</span>
                    <span className="text-sm font-semibold text-gray-700">{program.monthlyVisits}</span>
                  </div>
                </div>

                {/* Button */}
                <Link
                  href={program.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
            <p className="text-gray-200 mb-5 text-lg font-medium">
              Want Toolsverse to become an affiliate partner?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
