"use client";

import { useState, useEffect } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const transformations = [
  {
    name: "Cyberpunk",
    before: "from-gray-400 to-gray-600",
    after: "from-cyan-400 via-purple-500 to-pink-500",
  },
  {
    name: "Oil Painting",
    before: "from-gray-400 to-gray-600",
    after: "from-amber-500 via-orange-500 to-yellow-500",
  },
  {
    name: "Anime",
    before: "from-gray-400 to-gray-600",
    after: "from-pink-400 via-rose-400 to-red-400",
  },
  {
    name: "Watercolor",
    before: "from-gray-400 to-gray-600",
    after: "from-blue-400 via-teal-400 to-green-400",
  },
];

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransforming, setIsTransforming] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentTransform, setCurrentTransform] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setIsTransforming(false);
      setShowResult(false);
      setCurrentTransform(0);

      // Generate particles
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setParticles(newParticles);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const stepTimers: NodeJS.Timeout[] = [];

    // Auto-advance demo steps
    if (currentStep === 0) {
      stepTimers.push(setTimeout(() => setCurrentStep(1), 1500));
    } else if (currentStep === 1) {
      stepTimers.push(setTimeout(() => {
        setCurrentStep(2);
        setIsTransforming(true);
      }, 2000));
    } else if (currentStep === 2 && isTransforming) {
      stepTimers.push(setTimeout(() => {
        setIsTransforming(false);
        setShowResult(true);
        setCurrentStep(3);
      }, 2500));
    } else if (currentStep === 3) {
      stepTimers.push(setTimeout(() => {
        setShowResult(false);
        setCurrentTransform((prev) => (prev + 1) % transformations.length);
        setCurrentStep(1);
      }, 3000));
    }

    return () => stepTimers.forEach(clearTimeout);
  }, [isOpen, currentStep, isTransforming]);

  if (!isOpen) return null;

  const current = transformations[currentTransform];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-16 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 sm:-top-12 right-0 text-white/60 hover:text-white transition-colors z-10"
        >
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="glass rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-white/60 text-sm font-medium">Prismorph Demo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-primary-400 font-medium px-2 py-1 rounded-full bg-primary-500/20">
                LIVE PREVIEW
              </span>
            </div>
          </div>

          {/* Demo Area */}
          <div className="p-4 sm:p-6 md:p-8 relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-center">
            {/* Floating Particles during transformation */}
            {isTransforming && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute w-2 h-2 rounded-full animate-particle"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      animationDelay: `${particle.delay}s`,
                      background: `linear-gradient(to right, rgb(139, 92, 246), rgb(217, 70, 239))`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Step 0: Welcome */}
            {currentStep === 0 && (
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to Prismorph</h3>
                <p className="text-gray-400">Watch the magic unfold...</p>
              </div>
            )}

            {/* Step 1: Show original photo */}
            {currentStep >= 1 && (
              <div className="w-full max-w-[280px] sm:max-w-sm">
                {/* Photo container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  {/* Before state */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${current.before} transition-opacity duration-500 ${
                      showResult ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* After state */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${current.after} transition-opacity duration-1000 ${
                      showResult ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Transformation overlay */}
                  {isTransforming && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="text-center">
                        <div className="relative w-16 h-16 mx-auto mb-4">
                          <div className="absolute inset-0 rounded-full border-4 border-white/20" />
                          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 animate-spin" />
                          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-accent-500 animate-spin-reverse" />
                        </div>
                        <p className="text-white font-medium animate-pulse">Applying {current.name}...</p>
                      </div>
                    </div>
                  )}

                  {/* Success checkmark */}
                  {showResult && (
                    <div className="absolute top-4 right-4 animate-scale-in">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Labels */}
                <div className="flex justify-between mt-4 px-2">
                  <span className={`text-sm font-medium transition-colors ${!showResult ? "text-white" : "text-gray-500"}`}>
                    Original
                  </span>
                  <span className={`text-sm font-medium transition-colors ${showResult ? "text-gradient" : "text-gray-500"}`}>
                    {current.name} Effect
                  </span>
                </div>

                {/* Progress dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {transformations.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTransform
                          ? "w-6 bg-gradient-to-r from-primary-500 to-accent-500"
                          : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <p className="text-gray-400 text-sm">
              {showResult ? "Transformation complete!" : isTransforming ? "AI is working its magic..." : "Select any style to transform"}
            </p>
            <a
              href="/coming-soon"
              target="_blank"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get the App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
