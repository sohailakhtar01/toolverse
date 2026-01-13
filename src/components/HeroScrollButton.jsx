"use client";

export default function HeroScrollButton() {
    const handleScroll = () => {
        const element = document.getElementById("partner-tools");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={handleScroll}
            className="group cursor-pointer relative inline-flex p-[2px] overflow-hidden rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            aria-label="Scroll to partner tools"
        >
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ff4b1f_60%,#ff9068_70%,#43e97b_80%,#38f9d7_90%,transparent_100%)]" />
            <span className="relative inline-flex h-full w-full items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-700 group-hover:bg-slate-50 transition-colors">
                <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                </svg>
                <span>View our recommended tools</span>
                <span className="ml-1 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all">
                    →
                </span>
            </span>
        </button>
    );
}