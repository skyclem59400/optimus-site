"use client";

import { motion } from "motion/react";
import { type ReactNode, useRef, useState } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowOnHover?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  tiltIntensity = 10,
  glowOnHover = true,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * tiltIntensity;
    const rotateY = (x - 0.5) * tiltIntensity;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
    setGlowPosition({ x: x * 100, y: y * 100 });
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setTransform("");
    setGlowPosition({ x: 50, y: 50 });
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform,
        transition: transform
          ? "transform 0.1s ease-out"
          : "transform 0.4s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
    >
      {glowOnHover && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(45, 212, 191, 0.1), transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
