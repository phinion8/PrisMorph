"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function TransformationPreview() {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isAnimating) return;

    const animate = () => {
      setSliderPosition((prev) => {
        let next = prev + 0.3 * direction;

        // Reverse direction at boundaries
        if (next >= 100) {
          setDirection(-1);
          next = 100;
        } else if (next <= 0) {
          setDirection(1);
          next = 0;
        }

        return next;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating, direction]);

  return (
    <div className="mb-8 sm:mb-10">
      {/* Preview Container */}
      <div className="relative max-w-[280px] sm:max-w-md mx-auto">
        <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden glass p-1">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/before_image_1.webp"
                alt="Original photo"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/after_image_1.webp"
                alt="AI transformed"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Magic Stars Effect */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-star-twinkle"
                  style={{
                    left: `${10 + (i * 12)}%`,
                    top: `${15 + ((i * 11) % 70)}%`,
                    fontSize: `${10 + (i % 3) * 4}px`,
                    color: i % 2 === 0 ? 'rgba(217, 70, 239, 0.3)' : 'rgba(255, 255, 255, 0.25)',
                    animationDuration: `${2 + (i % 3) * 0.5}s`,
                    animationDelay: `${i * 0.2}s`,
                    textShadow: '0 0 8px currentColor',
                  }}
                >
                  {i % 2 === 0 ? '✦' : '✧'}
                </div>
              ))}
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
              style={{
                left: `${sliderPosition}%`,
                transform: 'translateX(-50%)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)'
              }}
            />

            {/* Labels */}
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <span className="text-[10px] sm:text-xs text-white/80 leading-none">Original</span>
            </div>
            <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-gradient-to-r from-primary-500/80 to-accent-500/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-[10px] sm:text-xs text-white font-medium leading-none">AI Magic</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 sm:mt-3 px-2 sm:px-4">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
              style={{ width: `${sliderPosition}%` }}
            />
          </div>
        </div>
      </div>

      {/* Call to Action Text */}
      <div className="mt-4 sm:mt-6 text-center">
        <p className="text-base sm:text-xl text-white font-medium mb-1 sm:mb-2">
          Want to create transformations like this?
        </p>
        <p className="text-sm sm:text-base text-gray-400">
          Anime, Cyberpunk, Oil Painting, and 50+ more styles await you.
        </p>
      </div>
    </div>
  );
}
