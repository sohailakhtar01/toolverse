'use client'

import { useState, useEffect } from 'react';
import { Play, Brain, FileText, Calculator, Languages, CheckCircle } from 'lucide-react';

export default function InteractiveStudyDemo() {
  const [currentTool, setCurrentTool] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoTools = [
    { name: "AI Essay Writer", icon: <FileText className="w-6 h-6" />, task: "Writing research paper" },
    { name: "Math Solver", icon: <Calculator className="w-6 h-6" />, task: "Solving calculus problem" },
    { name: "Language Translator", icon: <Languages className="w-6 h-6" />, task: "Translating French text" },
    { name: "Study Planner", icon: <Brain className="w-6 h-6" />, task: "Creating study schedule" }
  ];

  const handlePlayDemo = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentTool(prev => {
        if (prev >= demoTools.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-w-lg mx-auto">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="ml-4 bg-white px-4 py-2 rounded-lg text-sm text-gray-600 font-mono">
            student-toolkit.ai
          </div>
        </div>
      </div>
      
      <div className="p-8">
        {!isPlaying ? (
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-white ml-1" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">See AI Tools in Action</h3>
            <p className="text-gray-600 mb-6">Watch how students use AI to complete tasks 10X faster</p>
            <button
              onClick={handlePlayDemo}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              Start Demo
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 mb-3">Tool {currentTool + 1} of {demoTools.length}</div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((currentTool + 1) / demoTools.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                  {demoTools[currentTool].icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{demoTools[currentTool].name}</div>
                  <div className="text-sm text-gray-600">{demoTools[currentTool].task}</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Task completed successfully!</span>
                </div>
                <div className="text-sm text-green-600 font-medium">✨ Saved 2 hours of work</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
