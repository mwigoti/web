import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import africaMapImg from '../assets/images/africa_relief_map_1789035229990.jpg';

interface TerraSatHeroProps {
  onRequestDemo: () => void;
  onExploreTerraFarm?: () => void;
  onExploreNewis?: () => void;
}

export const TerraSatHero: React.FC<TerraSatHeroProps> = ({
  onRequestDemo,
}) => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] sm:min-h-screen pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-36 bg-[#F7F9F5] text-[#11201D] border-b border-[#D8DFD5] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* High-Contrast Embossed Africa Relief Map Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <img
          src={africaMapImg}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-[860px] sm:w-[1100px] lg:w-[1380px] xl:w-[1550px] max-w-none h-auto object-contain opacity-85 sm:opacity-95 mix-blend-multiply select-none filter contrast-135 brightness-95 saturate-110"
        />
        {/* Contrast Shield: Generous radial luminance gradient that guarantees pristine WCAG AAA legibility for the headline and text, completely preventing color clashing with dark topography */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 960px 620px at 50% 48%, rgba(247, 249, 245, 0.96) 0%, rgba(247, 249, 245, 0.88) 36%, rgba(247, 249, 245, 0.28) 72%, transparent 100%)',
          }}
        />
        {/* Edge gradient blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F9F5] via-transparent to-[#F7F9F5]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center flex-grow justify-center my-auto">
        {/* Expanded Grand Hero Content */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Primary Headline: Expanded scale, strict 2 font colors in title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[74px] font-extrabold tracking-tight text-[#11201D] leading-[1.08] mb-8 text-center"
          >
            Cultivating Africa's future, using{' '}
            <span className="text-[#1A532E]">
              space technology
            </span>
          </motion.h1>

          {/* Subhead narrative: Expanded scale with secondary font color */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-lg sm:text-xl md:text-2xl sm:leading-relaxed text-[#475B55] mb-12 font-normal max-w-3xl text-center"
          >
            TerraSat Impact turns satellite Earth observation and local ground truth into verifiable action — from rapid flood warnings reaching informal settlements via feature phones, to farm-level audit dossiers keeping East African coffee and tea exports compliant.
          </motion.p>

          {/* Primary Action Buttons: Generously sized */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              type="button"
              variant="default"
              size="default"
              onClick={onRequestDemo}
              className="w-full sm:w-auto rounded-full bg-[#EAF5EC] hover:bg-[#D8EBD9] border border-[#BCDDC3] text-[#1A532E] font-headline font-bold text-sm sm:text-base px-8 py-3.5 sm:px-9 sm:py-4 shadow-sm gap-2 transition-all cursor-pointer"
            >
              <span>Request Technical Walkthrough</span>
              <ArrowUpRight className="w-4 h-4 text-[#1A532E]" />
            </Button>

            <Button
              asChild
              variant="outline"
              size="default"
              className="w-full sm:w-auto rounded-full border-[#D8DFD5] bg-white hover:bg-[#F2F5EF] text-[#11201D] text-sm sm:text-base font-medium px-7 py-3.5 sm:px-8 sm:py-4 shadow-xs gap-2 transition-all cursor-pointer"
            >
              <a href="#solutions">
                <span>Explore Solutions</span>
                <ArrowDown className="w-4 h-4 text-[#11201D]" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Interactive Scroll Animator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative z-20 pt-6 pb-2 sm:pt-10 flex flex-col items-center"
      >
        <a
          href="#solutions"
          className="flex flex-col items-center gap-2 group cursor-pointer text-[#475B55] hover:text-[#1A532E] transition-colors focus:outline-none"
          aria-label="Scroll to explore Solutions"
        >
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase font-semibold text-[#475B55] group-hover:text-[#1A532E] transition-colors">
            Scroll to Explore
          </span>

          {/* Mouse capsule with animated scroll dot */}
          <div className="w-5 h-8.5 rounded-full border-2 border-[#1A532E]/35 group-hover:border-[#1A532E] transition-colors flex items-start justify-center p-1 bg-white/70 backdrop-blur-xs shadow-2xs">
            <motion.div
              animate={{
                y: [0, 13, 0],
                opacity: [0.9, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#1A532E]"
            />
          </div>

          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[#1A532E]/70 group-hover:text-[#1A532E] transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
