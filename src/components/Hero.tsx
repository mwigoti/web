import React from 'react';
import { ArrowDown, ArrowUpRight, Sprout, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
        {/* Clear, MRV & Compliance Inclusion Value Proposition Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.14] mb-5 sm:mx-auto"
        >
          Verify compliance and keep smallholders connected to{' '}
          <span className="text-[#CFF4A7] underline decoration-[#CFF4A7]/30 underline-offset-8">
            global export markets.
          </span>
        </motion.h1>

        {/* Actionable Subhead: satellite imagery + IoT + field records */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-base sm:text-lg text-[#D6E3DE] max-w-2xl sm:mx-auto leading-relaxed font-normal mb-8"
        >
          Terra Farm brings together satellite imagery, ground sensors, and verified field records into an automated compliance engine—protecting family farms from exclusion under international deforestation and traceability regulations.
        </motion.p>

        {/* Simple Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#CFF4A7] mb-9">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#CFF4A7]" />
            Satellite Imagery Verification
          </span>
          <span className="text-[#2B4543] hidden sm:inline">|</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#CFF4A7]" />
            Ground Soil &amp; Weather Sensors
          </span>
          <span className="text-[#2B4543] hidden sm:inline">|</span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#CFF4A7]" />
            Audit-Ready Farmer Export Dossiers
          </span>
        </div>

        {/* Action Controls with High-Contrast Primary Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
        >
          {/* High-Contrast Standout CTA */}
          <Button
            id="hero-start-cultivating-cta"
            type="button"
            size="lg"
            onClick={onRequestDemo}
            className="rounded-full bg-[#CFF4A7] text-[#11201D] hover:bg-[#bde892] font-bold text-sm sm:text-base px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Start Verification Demo</span>
            <ArrowUpRight className="w-5 h-5 text-[#11201D]" />
          </Button>

          {/* Secondary Action: Jump to Live Compliance Dashboard */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full text-xs font-mono uppercase tracking-wider bg-[#152522]/80 border-[#2B4543] hover:border-[#CFF4A7]/60 text-[#D6E3DE] hover:text-white px-6 py-6 gap-2 cursor-pointer"
          >
            <a href="#compliance-dashboard">
              <span>View Compliance Ledger</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#CFF4A7]" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
