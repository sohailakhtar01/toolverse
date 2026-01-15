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
    <section className="relative w-full bg-white py-12 overflow-hidden">
      {/* Subtle section dividers */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Centered Container */}
      <div className="w-[90%] md:w-[80%] mx-auto relative">

        {/* Fade edges */}
        <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Scroll Track */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-left py-6 hover:[animation-play-state:paused]">

            {/* First set */}
            <div className="flex items-start gap-14 mx-8">
              {logos.map((logo, index) => (
                <LogoItem key={`a-${index}`} logo={logo} />
              ))}
            </div>

            {/* Duplicate set */}
            <div className="flex items-start gap-14 mx-8">
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

const LogoItem = ({ logo }) => {
  return (
    <div className="flex flex-col items-center min-w-[120px] gap-3 group cursor-default select-none">

      {/* Logo */}
      <div className="h-12 flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03]">
        <img
          src={logo.src}
          alt={logo.alt}
          className="h-full w-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Label */}
      <span className="text-sm font-medium text-gray-500 tracking-tight group-hover:text-gray-700 transition-colors">
        {logo.alt}
      </span>
    </div>
  );
};

export default LeftScroll;
