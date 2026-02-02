"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
      {timeBlocks.map((block, index) => (
        <div key={block.label} className="relative group">
          <div className="w-24 sm:w-32 h-28 sm:h-36 rounded-2xl glass flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient">
              {block.value.toString().padStart(2, "0")}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-2">
              {block.label}
            </span>
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

          {index < timeBlocks.length - 1 && (
            <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 flex-col gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse delay-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
