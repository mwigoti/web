import React from 'react';
import { ArrowDown, ArrowUpRight, Sprout } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/hero_farmer_1788884199011.jpg';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  return (
    <section
      id="terra-farm"
      className="relative flex items-center justify-center pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden bg-[#1D3130] text-white border-b border-[#2B4543]"
    >
      {/* Background Smallholder Farmer with Forest Green Duotone & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="African smallholder woman farmer tending crops in a fertile green field"
          className="w-full h-full object-cover object-[center_30%] filter brightness-[0.70] contrast-[1.05]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Deep Green Atmospheric & Gradient Overlay for pristine text legibility */}
        <div
          className="absolute inset-0 bg-[#152522]/50 mix-blend-multiply"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1D3130] via-[#1D3130]/75 to-[#152522]/85"
          aria-hidden="true"
        />
        {/* Subtle grid lines denoting geospatial coordinate overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#CFF4A7_1px,transparent_1px)] [background-size:32px_32px]"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left sm:text-center">
        {/* Product Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <Badge variant="default" className="text-xs font-mono uppercase tracking-wider py-1.5 px-4 backdrop-blur-sm">
            <Sprout className="w-3.5 h-3.5 mr-1" />
            <span>Product 01 of 02 · Terra Farm (Agricultural MRV)</span>
          </Badge>
        </motion.div>

        {/* Headline built directly from positioning statement */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.12] mb-6 sm:mx-auto"
        >
          Satellite MRV that keeps African smallholders in{' '}
          <span className="text-[#CFF4A7] underline decoration-[#CFF4A7]/30 underline-offset-8">
            global supply chains.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-base sm:text-lg text-[#D6E3DE] max-w-2xl sm:mx-auto leading-relaxed font-normal mb-10"
        >
          Continuous Earth observation paired with targeted agronomic action. Verify EUDR compliance, eliminate $140/farm manual survey penalties, and protect export livelihoods.
        </motion.p>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
        >
          <Button
            id="hero-request-demo-cta"
            type="button"
            variant="default"
            size="lg"
            onClick={onRequestDemo}
            className="rounded-full shadow-md hover:shadow-lg font-bold text-sm gap-2"
          >
            <span>Request Portfolio Pilot</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full text-xs font-mono uppercase tracking-wider bg-[#152522]/80 border-[#2B4543] hover:border-[#CFF4A7]/40 text-[#D6E3DE] gap-2"
          >
            <a href="#how-it-works">
              <span>Operational Cycle</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
