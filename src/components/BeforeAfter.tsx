"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const transformations = [
  {
    id: 1,
    name: "Anime Style",
    description: "Convert photos to stunning anime artwork",
    beforeImage: "/images/before_image_1.webp",
    afterImage: "/images/after_image_1.webp",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    gradient: "from-pink-400 via-rose-400 to-red-400",
  },
  {
    id: 2,
    name: "Cyberpunk Glow",
    description: "Transform portraits into neon-lit cyberpunk art",
    beforeImage: "/images/cyberpunk_before.webp",
    afterImage: "/images/cyberpunk_after.webp",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    gradient: "from-cyan-400 via-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Oil Painting",
    description: "Classic oil painting effect with rich textures",
    beforeImage: "/images/oil_painting_before.webp",
    afterImage: "/images/oil_painting_after.webp",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    gradient: "from-amber-600 via-orange-500 to-yellow-400",
  },
  {
    id: 4,
    name: "Watercolor",
    description: "Soft watercolor effect with gentle color bleeds",
    beforeImage: "/images/watercolor_before.webp",
    afterImage: "/images/watercolor_after.webp",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    gradient: "from-blue-300 via-teal-300 to-green-300",
  },
];

export default function BeforeAfter() {
  const [activeTransform, setActiveTransform] = useState(transformations[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) handleSliderChange(e.clientX);
  }, [isDragging, handleSliderChange]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isDragging) handleSliderChange(e.touches[0].clientX);
  }, [isDragging, handleSliderChange]);

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <section id="showcase" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            See the <span className="text-gradient">Magic</span> in Action
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Drag the slider to reveal stunning transformations. Choose from dozens
            of AI-powered effects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Slider */}
          <div className="relative">
            <div
              ref={containerRef}
              className="relative aspect-square rounded-3xl overflow-hidden glass p-2"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden select-none">
                {/* After Image */}
                <div className="absolute inset-0">
                  <Image
                    src={activeTransform.afterImage}
                    alt="After transformation"
                    fill
                    className="object-cover object-top"
                    priority
                    draggable={false}
                  />
                </div>

                {/* Before Image */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src={activeTransform.beforeImage}
                    alt="Before transformation"
                    fill
                    className="object-cover object-top"
                    priority
                    draggable={false}
                  />
                </div>

                {/* Slider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 z-10"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Vertical Line */}
                  <div
                    className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 transition-all duration-300 ${
                      isDragging ? 'bg-primary-400' : 'bg-white'
                    }`}
                    style={{
                      boxShadow: isDragging
                        ? '0 0 12px rgba(139, 92, 246, 0.8), 0 0 24px rgba(139, 92, 246, 0.4)'
                        : '0 0 8px rgba(255, 255, 255, 0.5)',
                    }}
                  />

                  {/* Handle */}
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full cursor-ew-resize flex items-center justify-center transition-all duration-300 ${
                      isDragging
                        ? 'bg-primary-500 scale-110'
                        : 'bg-white hover:scale-105'
                    }`}
                    style={{
                      boxShadow: isDragging
                        ? '0 0 20px rgba(139, 92, 246, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3)'
                        : '0 4px 12px rgba(0, 0, 0, 0.3)',
                    }}
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={() => setIsDragging(true)}
                  >
                    <svg
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isDragging ? 'text-white' : 'text-gray-700'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Invisible Slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  onMouseDown={() => setIsDragging(true)}
                  onTouchStart={() => setIsDragging(true)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
              </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between mt-4 px-4">
              <span className="text-gray-400 text-sm font-medium">Original</span>
              <span className="text-gradient text-sm font-medium">
                {activeTransform.name}
              </span>
            </div>
          </div>

          {/* Transform Options */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">
              Choose a Transformation
            </h3>
            {transformations.map((transform) => (
              <button
                key={transform.id}
                onClick={() => setActiveTransform(transform)}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-300 ${
                  activeTransform.id === transform.id
                    ? "glass border-primary-500/50 scale-[1.02]"
                    : "glass glass-hover"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${transform.gradient} flex items-center justify-center`}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={transform.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{transform.name}</h4>
                    <p className="text-sm text-gray-400">{transform.description}</p>
                  </div>
                  {activeTransform.id === transform.id && (
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-primary-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
