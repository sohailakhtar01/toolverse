'use client'

import { useState, useEffect } from 'react';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoSteps = [
    "Select your business type",
    "Choose your team size", 
    "Set your budget range",
    "Get personalized recommendations",
    "Compare top 3 tools"
  ];

  const handlePlayDemo = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-lg mx-auto">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="ml-4 bg-white px-3 py-1 rounded-md text-xs text-gray-500">
            thetoolsverse.com/discover
          </div>
        </div>
      </div>
      
      <div className="p-8">
        {!isPlaying ? (
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">See Our Process in Action</h3>
            <p className="text-gray-600 mb-6">Watch how we help you discover the perfect AI tools in under 2 minutes</p>
            <button
              onClick={handlePlayDemo}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Start Demo
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 mb-2">Step {currentStep + 1} of {demoSteps.length}</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>
            {demoSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  index === currentStep 
                    ? 'bg-blue-50 border border-blue-200' 
                    : index < currentStep 
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  index === currentStep 
                    ? 'bg-blue-500 text-white' 
                    : index < currentStep 
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-500'
                }`}>
                  {index < currentStep ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <span className="text-xs font-bold">{index + 1}</span>
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  index === currentStep ? 'text-blue-900' : index < currentStep ? 'text-green-900' : 'text-gray-700'
                }`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
