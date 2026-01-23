import Image from "next/image";
import Link from "next/link";
import { ExternalLink, TrendingUp, Sparkles, Handshake, BadgeCheck } from "lucide-react";
/**
 * Affiliate Programs Configuration
 * Truthful, conversion-focused, and scalable
 */
const affiliatePrograms = [
  {
    id: 27,
    name: "SaneBox",
    logo: "/logo/sanebox.jpg",
    deal: "$15 credit + 14-day free trial",
    pricing: "free-trial",
    visits: "171.8K",
    link: "https://try.sanebox.com/sohailakhtar",
    priority: "high",
  },
  {
    id: 8,
    name: "AdCreative.ai",
    logo: "/logo/sohailad.png",
    deal: "Free trial via partner link",
    pricing: "free-trial",
    visits: "2.4M",
    link: "https://free-trial.adcreative.ai/ra4hqcile4b1",
    priority: "high",
  },
  {
    id: 22,
    name: "Apollo.io",
    logo: "/logo/apolloio.jpg",
    deal: "Official partner link",
    pricing: "freemium",
    visits: "6.8M",
    link: "https://get.apollo.io/p923gpfn7ln3",
    priority: "high",
  },
  {
    id: 26,
    name: "LearnWorlds",
    logo: "/logo/learnworlds.jpg",
    deal: "Partner offer available",
    pricing: "Paid",
    visits: "1.1M",
    link: "https://get.learnworlds.com/uwbvkqkkvqko",
    priority: "medium",
  },
  {
    id: 17,
    name: "BidX",
    logo: "/logo/bidx.png",
    deal: "15% instant discount on coupon code (TOOLSVERSE15)",
    pricing: "paid",
    visits: "72K",
    link: "https://try.bidx.io/ihkx1wdx7726",
    priority: "medium",
  },
  {
    id: 7,
    name: "BLACKBOX AI",
    logo: "/logo/blackboxai.png",
    deal: "Official partner link",
    pricing: "freemium",
    visits: "6.9M",
    link: "https://blackboxai.partnerlinks.io/z04bp6ckqo0t",
    priority: "medium",
  },
  {
    id: 24,
    name: "ElevenLabs",
    logo: "/logo/elevenlabs.png",
    deal: "Creator partner program",
    pricing: "freemium",
    visits: "4.1M",
    link: "https://try.elevenlabs.io/xt7xt791ba4g",
    priority: "medium",
  },
  {
    id: 21,
    name: "Browse AI",
    logo: "/logo/browseai.png",
    deal: "Official partner link",
    pricing: "freemium",
    visits: "2.3M",
    link: "https://partners.browse.ai/tleealdbt1ef",
    priority: "low",
  },
  {
    id: 9,
    name: "ThorData",
    logo: "/logo/thordata.png",
    deal: "Official partner link",
    pricing: "paid",
    visits: "465K",
    link: "https://affiliate.thordata.com/segni217xog5",
    priority: "low",
  },
  {
    id: 10,
    name: "Gamma",
    logo: "/logo/gammaapp.png",
    deal: "Official partner link",
    pricing: "freemium",
    visits: "5M+",
    link: "https://try.gamma.app/33twwrhsf7eb",
    priority: "low",
  },
  {
    id: 11,
    name: "Emergent",
    logo: "/logo/emergentai.png",
    deal: "Official partner link",
    pricing: "freemium",
    visits: "3.8M",
    link: "https://get.emergent.sh/vvn16n4ykpum",
    priority: "low",
  },
  {
    id: 12,
    name: "Hume AI",
    logo: "/logo/humeai.webp",
    deal: "Official partner link",
    pricing: "freemium",
    visits: "446K",
    link: "https://try.hume.ai/kuofpkjs61co",
    priority: "low",
  },
  {
    id: 13,
    name: "Smartli",
    logo: "/logo/smartli.jpeg",
    deal: "Official partner link",
    pricing: "free-trial",
    visits: "79.7K",
    link: "https://smartli.partnerlinks.io/hxcf2i0zo3hh",
    priority: "low",
  },
  {
    id: 14,
    name: "Centripe",
    logo: "/logo/centripe.png",
    deal: "14-day free trial (credit card required)",
    pricing: "free-trial",
    visits: "16.5K",
    link: "https://partner.crmone.com/s3bcd4xyqnzm",
    priority: "medium",
  },
  {
    id: 15,
    name: "Iconosquare",
    logo: "/logo/iconosquare.webp",
    deal: "Free trial + paid plans available",
    pricing: "freemium",
    visits: "262.2K",
    link: "https://try.iconosquare.com/pricing-yyj7kz1rjjla",
    priority: "medium",
  },
  {
    id: 16,
    name: "QuillBot AI Humanizer",
    logo: "/logo/ai-humanizer-quillbot.png",
    deal: "Free to use + premium upgrade available",
    pricing: "free",
    visits: "47M",
    link: "https://try.quillbot.com/d050f3e00930",
    priority: "high",
  },
  {
    id: 1,
    name: "Reclaim.ai",
    logo: "/logo/reclaimai.png",
    deal: "Free plan available + paid productivity plans",
    pricing: "freemium",
    visits: "1M",
    link: "https://go.reclaim.ai/251ngneyr8mv",
    priority: "high",
  },
  {
    id: 18,
    name: "Brand24",
    logo: "/logo/brand24.jpeg",
    deal: "14-day free trial on all plans",
    pricing: "free-trial",
    visits: "277K",
    link: "https://try.brand24.com/89g7vup9z3su",
    priority: "high",
  },
  {
    id: 19,
    name: "Vista Social",
    logo: "/logo/vistasocial.png",
    deal: "14-day free trial (no credit card)",
    pricing: "free-trial",
    visits: "217.3K+",
    link: "https://join.vistasocial.com/g9099zgsw0fa",
    priority: "medium",
  },
  {
    id: 20,
    name: "Landbot",
    logo: "/logo/landbot.png",
    deal: "Free sandbox + paid chatbot plans",
    pricing: "freemium",
    visits: "377k",
    link: "https://get.landbotlab.com/rt5swx586u1w",
    priority: "medium",
  },
  {
    id: 3,
    name: "Logome.ai",
    logo: "/logo/logomeai.png",
    deal: "Try logo generation free, paid brand kits",
    pricing: "free-trial",
    visits: "300K+",
    link: "https://logomeai.partnerlinks.io/j3d9x4dvqson",
    priority: "low",
  },
  {
    id: 4,
    name: "Descript",
    logo: "/logo/descript.png",
    deal: "Free plan + AI audio & video editing",
    pricing: "freemium",
    visits: "5M+",
    link: "https://get.descript.com/04929q6odrgn",
    priority: "high",
  },
  {
    id: 23,
    name: "Tidio",
    logo: "/logo/tidio.png",
    deal: "7-day free trial on AI customer support",
    pricing: "free-trial",
    visits: "3M+",
    link: "https://affiliate.tidio.com/08lfj3o0iapb",
    priority: "high",
  },
  {
    id: 6,
    name: "GetResponse",
    logo: "/logo/getresponse.png",
    deal: "Free trial on email & marketing automation",
    pricing: "free-trial",
    visits: "10M+",
    link: "https://try.getresponsetoday.com/u1mbsb8iybsj",
    priority: "high",
  },
  {
    id: 25,
    name: "Murf AI",
    logo: "/logo/murfai.png",
    deal: "Free voice generation trial",
    pricing: "free-trial",
    visits: "4M+",
    link: "https://get.murf.ai/gsit1pdoxrll",
    priority: "medium",
  },
  {
    id: 5,
    name: "Prezi",
    logo: "/logo/prezi.png",
    deal: "Free plan + AI-powered presentations",
    pricing: "freemium",
    visits: "12M+",
    link: "https://try.prezi.com/ywu6u9mx8svt",
    priority: "medium",
  },
  {
    id: 2,
    name: "Gusto",
    logo: "/logo/gusto.png",
    deal: "Payroll & HR plans starting at $49/month",
    pricing: "free-trial",
    visits: "8M+",
    link: "https://get.gusto.com/phvi0tjgn6mt",
    priority: "medium",
  },
  {
    id: 28,
    name: "Castmagic",
    logo: "/logo/castmagic.png",
    deal: "AI transcription & content repurposing plans",
    pricing: "paid",
    visits: "500K+",
    link: "https://get.castmagic.io/z320s3dzlfii",
    priority: "low",
  },
];

export default function AffiliatePrograms() {
  // SORTING LOGIC:
  // We create a copy of the array and sort it by ID (Ascending: 1, 2, 3...)
  // This ensures that even if the JSON above is mixed up, the UI renders them in order.
  const sortedPrograms = [...affiliatePrograms].sort((a, b) => a.id - b.id);
  // --- ADD THIS LINE HERE ---
  const isVerified = (id) => [1, 2, 3, 4, 5].includes(id);

  return (
    <section
      id="partner-tools"
      className="py-24 rounded-t-[15px] bg-white  border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Header Section --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
                Partners We Trust & Recommend
              </h2>

              {/* Premium underline */}
              <div className="relative flex justify-center">
                <span className="absolute -bottom-2 h-[3px] w-40 sm:w-48 rounded-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-80" />
                <span className="absolute -bottom-2 h-[10px] w-40 sm:w-48 rounded-full bg-indigo-400/20 blur-lg" />
              </div>
            </div>

            <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These are tools we genuinely use and trust. When you choose to explore or
              purchase through our links, you may get exclusive offers, and it helps support
              ToolsVerse at no extra cost to you.
            </p>
          </div>
        </div>

        {/* --- Mobile View (Cards) --- */}
        {/* We map over 'sortedPrograms' instead of the raw array */}
        <div className="grid grid-cols-1 gap-5 md:hidden">
          {sortedPrograms.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex-shrink-0 bg-slate-50 rounded-lg p-1 border border-slate-100">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      fill
                      className="object-contain rounded-md"
                    />
                    {/* --- ADD THIS BLOCK HERE --- */}
                    {isVerified(tool.id) && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <BadgeCheck className="w-5 h-5 text-white fill-blue-500" strokeWidth={2.5} />
                      </div>
                    )}
                    {/* --------------------------- */}
                  </div>
                  <h3 className="font-semibold text-slate-900">{tool.name}</h3>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${tool.pricing.toLowerCase() === "paid"
                    ? "bg-amber-50 text-amber-700 border-amber-100"
                    : "bg-emerald-50 text-emerald-700 border-emerald-100"
                    }`}
                >
                  {tool.pricing}
                </span>
              </div>

              <div className="space-y-3 mb-5 pl-1">
                <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-xs text-slate-500 uppercase font-medium">
                    Deal
                  </span>
                  <span className="text-sm text-slate-700 font-medium text-right">
                    {tool.deal}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 uppercase font-medium">
                    Visits
                  </span>
                  <span className="text-sm text-slate-600 font-mono">
                    {tool.visits}
                  </span>
                </div>
              </div>

              <Link
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-purple-600 transition-colors shadow-sm"
              >
                Visit Site
              </Link>
            </div>
          ))}
        </div>

        {/* --- Desktop View (Table) --- */}
        {/* We map over 'sortedPrograms' here as well */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200">
                <th className="px-6 py-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tools
                </th>
                <th className="px-6 py-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Exclusive Deal
                </th>
                <th className="px-6 py-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Monthly Visits
                </th>
                <th className="px-6 py-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedPrograms.map((tool) => (
                <tr
                  key={tool.id}
                  className="hover:bg-slate-50/80 transition-colors duration-200 group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className="relative w-10 h-10 flex-shrink-0 bg-white rounded-lg border border-slate-100 p-1 shadow-sm">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          fill
                          className="object-contain rounded-md"
                        />
                        {/* --- ADD THIS BLOCK HERE --- */}
                        {isVerified(tool.id) && (
                          <div className="absolute -top-2 -right-2 z-10">
                            <BadgeCheck className="w-5 h-5 text-white fill-blue-500" strokeWidth={2.5} />
                          </div>
                        )}
                        {/* --------------------------- */}
                      </div>
                      <span className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                    {tool.deal}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500 font-mono">
                    {tool.visits}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${tool.pricing.toLowerCase() === "paid"
                        ? "bg-amber-50 text-amber-700 border-amber-100"
                        : "bg-emerald-50 text-emerald-700 border-emerald-100"
                        }`}
                    >
                      {tool.pricing}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Link
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 transition-all active:scale-95"
                    >
                      Visit
                      <svg
                        className="w-3.5 h-3.5 ml-1.5 opacity-60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
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

        {/* --- Footer Disclosure --- */}
        <p className="mt-8 text-sm text-slate-400 text-center max-w-3xl mx-auto">
          Trusted and verified partners only.
        </p>

        {/* --- Become a Partner CTA --- */}
        <div className="mt-20">
          <div className="relative bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm text-center overflow-hidden">
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900">
                Want us to become an affiliate partner?
              </h3>
              <p className="mt-3 text-slate-600 text-lg">
                Do you have a great AI tool that our audience needs to see?
                Let&apos;s collaborate.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-900 hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-purple-200"
                >
                  Contact Us
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}