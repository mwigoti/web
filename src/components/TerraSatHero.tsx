import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Award, Globe, Smartphone, Waves, Sprout } from 'lucide-react';

interface TerraSatHeroProps {
  onRequestDemo: () => void;
  onExploreTerraFarm: () => void;
  onExploreNewis: () => void;
}

export const TerraSatHero: React.FC<TerraSatHeroProps> = ({
  onRequestDemo,
  onExploreTerraFarm,
  onExploreNewis,
}) => {
  return (
    <section
      id="top"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#11201D] text-white border-b border-[#253D3A]"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A312D] border border-[#CFF4A7]/40 text-xs font-mono text-[#CFF4A7] uppercase tracking-wider mb-3.5 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#CFF4A7]" />
          <span>TerraSat Impact · Climate Risk Intelligence</span>
        </motion.div>

        {/* Primary Headline - scaled for optimal viewport density without pushing cards below the fold */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.12] mb-3.5 max-w-3xl"
        >
          Cultivating Africa's future, using{' '}
          <span className="text-[#CFF4A7]">
            space technology
          </span>
        </motion.h1>

        {/* Subhead narrative - WCAG AA compliant text color #D6E3DE (contrast ratio 11.2:1) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-[#D6E3DE] max-w-2xl leading-relaxed mb-5 font-normal"
        >
          TerraSat Impact turns satellite and IoT data into verifiable action on the ground —
          from flood warnings that reach feature phones in minutes, to farm-level
          evidence that keeps East African exports compliant. Two products. One shared
          Earth observation and ground truth engine.
        </motion.p>

        {/* Credential Tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182C29] border border-[#2B4543]">
            <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-[#E7EFE5] font-medium">ACT in Space Kenya 2026 Winner</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182C29] border border-[#2B4543]">
            <Globe className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="text-[#E7EFE5] font-medium">HQ in Nairobi &amp; Kigali</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182C29] border border-[#2B4543]">
            <Smartphone className="w-3.5 h-3.5 text-[#CFF4A7]" />
            <span className="text-[#E7EFE5] font-medium">Zero-Smartphone SMS/USSD</span>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mb-6"
        >
          <button
            type="button"
            onClick={onRequestDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#CFF4A7] text-[#1D3130] font-headline font-bold text-xs sm:text-sm hover:bg-[#bce68f] active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            <span>Request a Demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#2B4543] bg-[#182C29] text-[#E7EFE5] hover:border-[#CFF4A7]/60 hover:text-[#CFF4A7] text-xs sm:text-sm font-medium transition-all shadow-sm"
          >
            <span>Compare Products</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Dual Product Cards - Positioned ABOVE THE FOLD on 768px laptop screens */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full max-w-3xl text-left"
        >
          {/* Solution 1: Terra Farm */}
          <button
            type="button"
            onClick={onExploreTerraFarm}
            className="group text-left block p-4 sm:p-4.5 rounded-xl bg-[#162A27] border border-[#2B4543] hover:border-[#CFF4A7] hover:bg-[#1A332F] transition-all cursor-pointer w-full shadow-sm"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#CFF4A7] font-semibold flex items-center gap-1.5">
                <Sprout className="w-3.5 h-3.5 text-[#CFF4A7]" /> Product 01 · Agricultural MRV
              </span>
              <span className="text-xs font-mono text-[#CFF4A7] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Explore →
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#CFF4A7] transition-colors">
              Terra Farm
            </h3>
            <p className="text-xs text-[#D6E3DE] leading-relaxed">
              Satellite &amp; IoT MRV ensuring smallholder EUDR compliance, baseline verification, and zero manual survey penalties.
            </p>
          </button>

          {/* Solution 2: NEWIS */}
          <button
            type="button"
            onClick={onExploreNewis}
            className="group text-left block p-4 sm:p-4.5 rounded-xl bg-[#162A27] border border-[#2B4543] hover:border-[#38BDF8] hover:bg-[#1A332F] transition-all cursor-pointer w-full shadow-sm"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#38BDF8] font-semibold flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5 text-[#38BDF8]" /> Product 02 · Flood Early Warning
              </span>
              <span className="text-xs font-mono text-[#38BDF8] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Explore →
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
              NEWIS
            </h3>
            <p className="text-xs text-[#D6E3DE] leading-relaxed">
              Nairobi Early Warning &amp; Intervention System turning flood data into ward-level SMS/USSD alerts and safe routing.
            </p>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
