'use client'

import { Play } from 'lucide-react';

export default function SmoothScrollButton() {
  const handleScrollToDemo = () => {
    document.getElementById('methodology')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <button
      onClick={handleScrollToDemo}
      className="px-8 py-4 border-2 border-blue-200 text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-2"
    >
      <Play className="w-5 h-5" />
      Watch Process Demo
    </button>
  );
}
