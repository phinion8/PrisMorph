"use client";

import { useState } from "react";

const transformations = [
  {
    id: 1,
    name: "Cyberpunk Glow",
    description: "Transform portraits into neon-lit cyberpunk art",
    before: "bg-gradient-to-br from-gray-400 to-gray-600",
    after: "bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: 2,
    name: "Oil Painting",
    description: "Classic oil painting effect with rich textures",
    before: "bg-gradient-to-br from-gray-400 to-gray-600",
    after: "bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-400",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    id: 3,
    name: "Anime Style",
    description: "Convert photos to stunning anime artwork",
    before: "bg-gradient-to-br from-gray-400 to-gray-600",
    after: "bg-gradient-to-br from-pink-400 via-rose-400 to-red-400",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: 4,
    name: "Watercolor",
    description: "Soft watercolor effect with gentle color bleeds",
    before: "bg-gradient-to-br from-gray-400 to-gray-600",
    after: "bg-gradient-to-br from-blue-300 via-teal-300 to-green-300",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
];

export default function BeforeAfter() {
  const [activeTransform, setActiveTransform] = useState(transformations[0]);
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="showcase" className="py-20 sm:py-32 relative">
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
            <div className="relative aspect-square rounded-3xl overflow-hidden glass p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {/* After Image (Background) */}
                <div
                  className={`absolute inset-0 ${activeTransform.after} flex items-center justify-center`}
                >
                  <div className="text-center text-white/80">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">After</span>
                  </div>
                </div>

                {/* Before Image (Overlay with clip) */}
                <div
                  className={`absolute inset-0 ${activeTransform.before} flex items-center justify-center`}
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <div className="text-center text-white/80">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Before</span>
                  </div>
                </div>

                {/* Slider Control */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-800"
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

                {/* Slider Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
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
                    className={`w-12 h-12 rounded-xl ${transform.after} flex items-center justify-center`}
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
