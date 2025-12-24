"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

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

NProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.3,
});

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.currentTarget.href;
      if (target !== window.location.href) {
        NProgress.start();
      }
    };

    document.querySelectorAll("a[href]").forEach((a) =>
      a.addEventListener("click", handleClick)
    );

    return () => {
      document.querySelectorAll("a[href]").forEach((a) =>
        a.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return null;
}
