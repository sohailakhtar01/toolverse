// components/PaginationTools.jsx
'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

function buildHref(basePath, page) {
  return page === 1 ? basePath : `${basePath}?page=${page}`;
}

export default function PaginationTools({
  page,
  totalPages,
  pages,
  basePath,
  scrollTargetId,   // e.g. "tools-section"
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  if (totalPages <= 1) return null;

  const handleClick = (targetPage) => (e) => {
    e.preventDefault();

    startTransition(() => {
      router.push(buildHref(basePath, targetPage), { scroll: false });
    });

    // wait a bit so the new page content is rendered, then scroll
    setTimeout(() => {
      const el = document.getElementById(scrollTargetId || 'tools-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150); // 100–200ms is enough in practice
  };

  return (
    <div className="flex justify-center py-10">
      <div className="inline-flex items-center gap-2">
        {/* Previous button */}
        <button
          onClick={handleClick(page > 1 ? page - 1 : 1)}
          disabled={page === 1 || isPending}
          className={`px-4 py-2 rounded-xl border text-sm font-medium ${
            page === 1
              ? 'bg-gray-100 text-gray-400 cursor-default'
              : 'bg-white text-teal-700 border-gray-200 hover:bg-gray-50'
          }`}
        >
          «
        </button>

        {pages.map((p, idx) =>
          typeof p === 'number' ? (
            <button
              key={idx}
              onClick={handleClick(p)}
              disabled={isPending}
              className={`w-10 h-10 flex items-center justify-center rounded-xl border text-sm font-semibold ${
                p === page
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-white text-teal-700 border-gray-200 hover:bg-gray-50'
              }`}
              aria-current={p === page ? 'page' : undefined}
            >
              {p}
            </button>
          ) : (
            <span
              key={idx}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-teal-700 border border-gray-200 text-sm"
            >
              …
            </span>
          )
        )}

        {/* Next button */}
        <button
          onClick={handleClick(page < totalPages ? page + 1 : totalPages)}
          disabled={page === totalPages || isPending}
          className={`px-4 py-2 rounded-xl border text-sm font-medium ${
            page === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-default'
              : 'bg-white text-teal-700 border-gray-200 hover:bg-gray-50'
          }`}
        >
          »
        </button>
      </div>
    </div>
  );
}
