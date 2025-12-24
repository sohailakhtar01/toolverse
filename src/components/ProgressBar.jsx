"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// Custom CSS inline - no separate file needed!
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: linear-gradient(to right, #9333ea, #ec4899);
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #ec4899, 0 0 5px #ec4899;
      opacity: 1;
      transform: rotate(3deg) translate(0px, -4px);
    }
  `;
  document.head.appendChild(style);
}

// Configuration
NProgress.configure({ 
  showSpinner: false,
  speed: 400,
  minimum: 0.3
});

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const targetUrl = e.currentTarget.href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const handleMutation = () => {
      const anchorElements = document.querySelectorAll('a[href]');
      anchorElements.forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document, { childList: true, subtree: true });
    handleMutation();

    return () => mutationObserver.disconnect();
  }, []);

  return null;
}
