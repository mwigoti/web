import React from 'react';
import { ArrowRight, CheckCircle, Cpu, Satellite, Radio, ShieldCheck, Waves, Sprout } from 'lucide-react';
import { Reveal } from './Reveal';

interface SolutionsHubProps {
  onExploreTerraFarm: () => void;
  onExploreNewis: () => void;
  onRequestDemo?: () => void;
}

export const SolutionsHub: React.FC<SolutionsHubProps> = ({
  onExploreTerraFarm,
  onExploreNewis,
}) => {
  return (
    <section id="solutions" className="py-20 sm:py-24 bg-[#152522] text-white border-b border-[#253D3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFF4A7]/15 text-[#CFF4A7] border border-[#CFF4A7]/30 text-xs font-semibold font-mono uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFF4A7]" />
              <span>Our Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              One platform. Two frontlines of climate risk.
            </h2>
            <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
              Whether guarding urban settlements from flash floods or verifying remote smallholder acreage for EU export compliance, TerraSat unites spaceborne remote sensing, hyper-local IoT ground truth, and AI.
            </p>
          </Reveal>
        </div>

        {/* Dual Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Solution 01: Terra Farm */}
          <Reveal className="flex flex-col justify-between p-8 rounded-3xl bg-[#1A312D] border border-[#2B4543] relative overflow-hidden group hover:border-[#CFF4A7]/50 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CFF4A7]/5 blur-3xl rounded-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CFF4A7]/20 text-[#CFF4A7] text-xs font-mono font-bold">
                  <Sprout className="w-3.5 h-3.5" /> Product 01 · Agricultural Verification
                </span>
                <span className="text-xs font-mono text-[#A4B8B2]">EUDR &amp; Smallholder MRV</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                Terra Farm
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#CFF4A7] mb-4">
                Satellite &amp; IoT Monitoring, Reporting &amp; Verification
              </p>
              <p className="text-sm sm:text-base text-[#D6E3DE] leading-relaxed mb-6 font-normal">
                Continuous satellite and ground truth MRV for climate-smart agriculture. Built first for Kenya's coffee and tea sectors, Terra Farm provides cooperatives and exporters with the verified polygon cadastre, December 2020 deforestation baselines, and automated dossiers required by EU customs.
              </p>

              {/* 4 Steps */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {['01 · Monitor', '02 · Analyse', '03 · Flag', '04 · Verify'].map((step, i) => (
                  <div key={i} className="px-3 py-2 rounded-xl bg-[#142623] border border-[#26413E] text-[11px] font-mono font-semibold text-center text-[#CFF4A7]">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#26413E] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A4B8B2]">82% Cost Reduction vs Manual</span>
              <button
                type="button"
                onClick={onExploreTerraFarm}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#CFF4A7] text-[#1D3130] text-xs font-bold font-headline hover:bg-[#bde88c] active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <span>Explore Terra Farm</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Reveal>

          {/* Solution 02: NEWIS */}
          <Reveal delay={0.15} className="flex flex-col justify-between p-8 rounded-3xl bg-[#182C29] border border-[#2B4543] relative overflow-hidden group hover:border-[#38BDF8]/50 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/5 blur-3xl rounded-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] text-xs font-mono font-bold">
                  <Waves className="w-3.5 h-3.5" /> Product 02 · Flood Early Warning
                </span>
                <span className="text-xs font-mono text-[#A4B8B2]">Informal Settlement Protection</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                NEWIS
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#38BDF8] mb-4">
                Nairobi Early Warning &amp; Intervention System
              </p>
              <p className="text-sm sm:text-base text-[#D6E3DE] leading-relaxed mb-6 font-normal">
                Flood warnings that tell you not just that danger is coming, but exactly where to go. Built for informal settlements along the Mathare River corridor, NEWIS turns satellite flood data into ward-level SMS and USSD alerts, safe-space routing, and coordinated community responder queues.
              </p>

              {/* 4 Steps */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {['01 · Warn', '02 · Guide', '03 · Act', '04 · Protect'].map((step, i) => (
                  <div key={i} className="px-3 py-2 rounded-xl bg-[#11201D] border border-[#26413E] text-[11px] font-mono font-semibold text-center text-[#38BDF8]">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#26413E] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A4B8B2]">No Smartphone Required</span>
              <button
                type="button"
                onClick={onExploreNewis}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#38BDF8] text-[#11201D] text-xs font-bold font-headline hover:bg-[#7dd3fc] active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <span>Explore NEWIS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* The Shared Core Engine Banner */}
        <Reveal delay={0.25} className="p-6 sm:p-8 rounded-3xl bg-[#11201D] border border-[#2B4543]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#CFF4A7]/15 border border-[#CFF4A7]/30 flex items-center justify-center text-[#CFF4A7] shrink-0">
                <Satellite className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Spaceborne Constellations</h4>
                <p className="text-xs text-[#A4B8B2]">Sentinel-1 SAR, Sentinel-2 Optical, PlanetScope &amp; Landsat</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Last-Mile Ground Truth</h4>
                <p className="text-xs text-[#A4B8B2]">IoT telemetry, river gauges, USSD/SMS keywords &amp; CHW geotags</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Spatial AI &amp; Risk Logic</h4>
                <p className="text-xs text-[#A4B8B2]">Automated deforestation inference, flood grid routing &amp; WDRI index</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
