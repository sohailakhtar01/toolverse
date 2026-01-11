"use client";

const logos = [
  { src: "/logo/sanebox.jpg", alt: "SaneBox" },
  { src: "/logo/sohailad.png", alt: "AdCreative.ai" },
  { src: "/logo/apolloio.jpg", alt: "Apollo.io" },
  { src: "/logo/learnworlds.jpg", alt: "LearnWorlds" },
  { src: "/logo/bidx.png", alt: "BidX" },
  { src: "/logo/blackboxai.png", alt: "BLACKBOX AI" },
  { src: "/logo/elevenlabs.png", alt: "ElevenLabs" },
  { src: "/logo/browseai.png", alt: "Browse AI" },
  { src: "/logo/thordata.png", alt: "ThorData" },
  { src: "/logo/gammaapp.png", alt: "Gamma" },
  { src: "/logo/emergentai.png", alt: "Emergent" },
  { src: "/logo/humeai.webp", alt: "Hume AI" },
  { src: "/logo/smartli.jpeg", alt: "Smartli" },
];

function LeftScroll() {
  return (
    <section className="w-full bg-white py-10">

      {/* Centered Container */}
      <div className="w-[90%] md:w-[80%] mx-auto">

        {/* Scrolling Wrapper */}
        <div className="relative w-full overflow-hidden">

          {/* Left Fade Gradient */}
          <div className="absolute top-0 left-0 h-full w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Right Fade Gradient */}
          <div className="absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* The Animation Track */}
          {/* hover:pause stops the scroll when user hovers to read text */}
          <div className="flex w-max animate-scroll-left group py-4 hover:[animation-play-state:paused]">

            {/* --- First Set of Logos --- */}
            <div className="flex items-start gap-12 mx-6">
              {logos.map((logo, index) => (
                <LogoItem key={`a-${index}`} logo={logo} />
              ))}
            </div>

            {/* --- Second Set of Logos (Duplicate for infinite loop) --- */}
            <div className="flex items-start gap-12 mx-6">
              {logos.map((logo, index) => (
                <LogoItem key={`b-${index}`} logo={logo} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Extracted Component for Layout Consistency
const LogoItem = ({ logo }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[120px] gap-4 group/item cursor-default">

      {/* Image Container: 
         - Fixed Height (h-12) ensures text aligns horizontally across all items.
         - Flexbox centers the logo inside that height.
      */}
      <div className="h-12 w-auto flex items-center justify-center transition-transform duration-300 group-hover/item:-translate-y-1">
        <img
          src={logo.src}
          alt={logo.alt}
          // No grayscale, full opacity, full color always
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Text Label */}
      <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">
        {logo.alt}
      </span>

    </div>
  );
};

export default LeftScroll;