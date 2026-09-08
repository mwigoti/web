import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glareOpacity?: number;
  maxTilt?: number;
  glareColor?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glareOpacity = 0.25,
  maxTilt = 8,
  glareColor = 'rgba(207, 244, 167, 0.3)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized mouse coordinate within card (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery 60fps tilt
  const springConfig = { damping: 20, stiffness: 260, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  // Dynamic glare position
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Center-relative ratio: -0.5 to 0.5
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="h-full w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`relative h-full w-full overflow-hidden transition-shadow duration-300 ${className}`}
      >
        {/* Card Content with 3D Depth capability */}
        <div style={{ transform: 'translateZ(1px)' }} className="h-full w-full">
          {children}
        </div>

        {/* Dynamic Specular Glare Layer */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? glareOpacity : 0,
            background: `radial-gradient(circle 280px at 50% 50%, ${glareColor}, transparent 75%)`,
            left: glareX,
            top: glareY,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>
    </div>
  );
};
