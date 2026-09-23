import React from 'react';
import { motion } from 'motion/react';

interface SectionTransitionProps {
  fromColor?: string;
  toColor?: string;
  variant?: 'line' | 'gradient' | 'accent' | 'split';
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  fromColor = '#F7F9F5',
  toColor = '#F2F5EF',
  variant = 'line',
  className = '',
}) => {
  if (variant === 'gradient') {
    return (
      <div
        aria-hidden="true"
        className={`w-full h-12 pointer-events-none relative z-10 ${className}`}
        style={{
          background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        }}
      />
    );
  }

  if (variant === 'accent') {
    return (
      <div
        aria-hidden="true"
        className={`w-full relative py-2 overflow-hidden flex items-center justify-center pointer-events-none ${className}`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#D8DFD5]" />
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-1.5 h-1.5 rounded-full bg-[#1A532E]"
          />
          <div className="h-px flex-1 bg-[#D8DFD5]" />
        </div>
      </div>
    );
  }

  // Default subtle structural divider with dynamic scroll progress accent
  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-[1px] bg-[#D8DFD5] overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: '100%', opacity: 0.6 }}
        viewport={{ once: false, amount: 'some' }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
        className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-[#1A532E]/40 to-transparent"
      />
    </div>
  );
};

export default SectionTransition;
