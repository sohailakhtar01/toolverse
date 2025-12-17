"use client";

const logos = [
  { src: "/logo/openai.webp", alt: "OpenAI" },
  { src: "/logo/google.webp", alt: "Google" },
  { src: "/logo/stabilityai.webp", alt: "Stability AI" },
  { src: "/logo/microsoft.webp", alt: "Microsoft" },
  { src: "/logo/deepmind.webp", alt: "DeepMind" },
  { src: "/logo/meta.webp", alt: "Meta" },
];

function LeftScroll() {
  return (
    // ✅ Changed w-[80%] to w-full so it fits in your flex row properly
    <section className="w-[80%] mx-auto bg-white">
      
      {/* Container */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left Shadow Overlay */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Shadow Overlay */}
        <div className="absolute top-0 right-0 h-full w-12 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* The Sliding Wrapper */}
        <div className="flex w-max animate-scroll-left group py-4">
          
          {/* First Set of Logos */}
          <div className="flex items-center gap-16 mx-8">
            {logos.map((logo, index) => (
              <div key={`a-${index}`} className="flex items-center justify-center min-w-[100px]">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  // ✅ FIXED: Constant size (h-8 sm:h-10) for all screens
                  className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Second Set of Logos */}
          <div className="flex items-center gap-16 mx-8">
            {logos.map((logo, index) => (
              <div key={`b-${index}`} className="flex items-center justify-center min-w-[100px]">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  // ✅ FIXED: Matches the first set exactly
                  className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default LeftScroll;