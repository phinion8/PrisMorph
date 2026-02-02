"use client";

import { ReactNode, useState, useRef } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function Card3D({
  children,
  className = "",
  glowColor = "rgba(139, 92, 246, 0.3)",
}: Card3DProps) {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform({ rotateX, rotateY, x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  const isHovering = transform.rotateX !== 0 || transform.rotateY !== 0;

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-200 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${isHovering ? 1.02 : 1})`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect that follows cursor */}
      {isHovering && (
        <div
          className="absolute pointer-events-none rounded-2xl blur-xl transition-opacity duration-200"
          style={{
            width: "150px",
            height: "150px",
            left: transform.x - 75,
            top: transform.y - 75,
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            opacity: 0.6,
          }}
        />
      )}
      {children}
    </div>
  );
}
