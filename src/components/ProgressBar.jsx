"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

// 1. Custom Styling (Tumhara purana style code - Same rakha hai)
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    #nprogress { pointer-events: none; }
    #nprogress .bar {
      background: linear-gradient(to right, #9333ea, #ec4899);
      position: fixed;
      z-index: 9999;
      top: 0; left: 0;
      width: 100%;
      height: 3px;
    }
  `;
  document.head.appendChild(style);
}

// 2. NProgress Configuration
NProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.3,
});

function ProgressBarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ✅ FIX 1: Stop bar when route change completes
  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  // ✅ FIX 2: Smart Event Listeners with Cleanup
  useEffect(() => {
    let timeoutId;

    const handleClick = (e) => {
      const anchor = e.currentTarget;
      const targetUrl = anchor.href;
      const currentUrl = window.location.href;

      // Logic: Start bar ONLY if navigating to internal link
      // Ignore: External links, New Tabs (Ctrl+Click), Same Page Anchors
      if (
        targetUrl.startsWith(window.location.origin) && // Internal only
        targetUrl !== currentUrl &&                     // Not same page
        anchor.target !== "_blank" &&                   // Not new tab
        !e.ctrlKey &&                                   // Not Ctrl+Click
        !e.metaKey                                      // Not Cmd+Click
      ) {
        // Small delay to prevent flashing on instant loads
        timeoutId = setTimeout(() => NProgress.start(), 100);
      }
    };

    // Attach listeners to ALL links currently on screen
    const anchors = document.querySelectorAll("a[href]");
    anchors.forEach((a) => a.addEventListener("click", handleClick));

    // Cleanup function (Critical for Memory Leak fix)
    return () => {
      clearTimeout(timeoutId);
      anchors.forEach((a) => a.removeEventListener("click", handleClick));
      NProgress.done();
    };
  }, [pathname, searchParams]); // 🔄 Re-run whenever user navigates

  return null;
}

// ✅ FIX 3: Suspense Wrapper (Required for useSearchParams in Next.js)
export default function ProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarContent />
    </Suspense>
  );
}