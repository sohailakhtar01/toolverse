'use client'

import { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Star,Target  } from 'lucide-react';

export default function StudyStatsCounter() {
  const [counts, setCounts] = useState({
    students: 0,
    tools: 0,
    studyTime: 0,
    rating: 0
  });

  const finalCounts = {
    students: 500000,
    tools: 100,
    studyTime: 75,
    rating: 4.8
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounts(prev => ({
        students: Math.min(prev.students + Math.ceil(finalCounts.students / steps), finalCounts.students),
        tools: Math.min(prev.tools + Math.ceil(finalCounts.tools / steps), finalCounts.tools),
        studyTime: Math.min(prev.studyTime + Math.ceil(finalCounts.studyTime / steps), finalCounts.studyTime),
        rating: Math.min(prev.rating + (finalCounts.rating / steps), finalCounts.rating)
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setCounts(finalCounts);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm text-center">
        <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
        <div className="text-3xl font-bold text-gray-900 mb-1">
          {counts.students >= 1000 ? `${Math.floor(counts.students / 1000)}K+` : counts.students}
        </div>
        <div className="text-sm font-medium text-gray-600">Active Students</div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm text-center">
        <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
        <div className="text-3xl font-bold text-gray-900 mb-1">{counts.tools}+</div>
        <div className="text-sm font-medium text-gray-600">Free AI Tools</div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm text-center">
        <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
        <div className="text-3xl font-bold text-gray-900 mb-1">{counts.studyTime}%</div>
        <div className="text-sm font-medium text-gray-600">Time Saved</div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm text-center">
        <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
        <div className="text-3xl font-bold text-gray-900 mb-1">{counts.rating.toFixed(1)}/5</div>
        <div className="text-sm font-medium text-gray-600">Student Rating</div>
      </div>
    </div>
  );
}
