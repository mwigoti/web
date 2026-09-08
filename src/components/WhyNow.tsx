import React from 'react';
import { ExternalLink } from 'lucide-react';

export const WhyNow: React.FC = () => {
  return (
    <section id="why-now" className="py-24 bg-[#1D3130] text-white border-b border-[#253E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#CFF4A7] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CFF4A7]" />
            <span>Macro Context &amp; Regulatory Drivers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            Why Continuous Agri-MRV Cannot Wait
          </h2>
          <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
            African agricultural commerce is undergoing an unprecedented shift. Economic scale and strict
            international regulatory timelines are making unverified, paper-based supply chains obsolete.
          </p>
        </div>

        {/* 3 Cited Sourced Statistics with Exact Attributions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1: Continental Agribusiness Footprint */}
          <div className="bg-[#152522] border border-[#2B4543] p-8 rounded-sm flex flex-col justify-between hover:border-[#CFF4A7]/30 transition-colors">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A4B8B2] mb-4">
                Economic Scale
              </div>
              <div className="font-headline font-bold text-4xl sm:text-5xl text-[#CFF4A7] tracking-tight tabular-nums mb-3">
                25% <span className="text-2xl text-white font-normal">GDP</span>
              </div>
              <p className="text-base font-semibold text-white mb-3 leading-snug">
                ~70% of total continental employment
              </p>
              <p className="text-sm text-[#D6E3DE] leading-relaxed font-normal">
                Africa&apos;s agribusiness sector contributes an estimated 25% of Africa&apos;s GDP and approximately 70% of employment.
                Continuous MRV protects the livelihoods and commercial durability anchored in this vital sector.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#253E3D] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A4B8B2]">
                Source: International Finance Corporation (IFC)
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#A4B8B2]" />
            </div>
          </div>

          {/* Stat 2: Kenya Horticultural Trade Volume */}
          <div className="bg-[#152522] border border-[#2B4543] p-8 rounded-sm flex flex-col justify-between hover:border-[#CFF4A7]/30 transition-colors">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A4B8B2] mb-4">
                Kenyan Horticultural Exports (2024)
              </div>
              <div className="font-headline font-bold text-4xl sm:text-5xl text-[#CFF4A7] tracking-tight tabular-nums mb-3">
                KES 136.6B
              </div>
              <p className="text-base font-semibold text-white mb-3 leading-snug">
                ~402,200 tonnes exported
              </p>
              <p className="text-sm text-[#D6E3DE] leading-relaxed font-normal">
                Kenya exported ~402,200 tonnes of fresh horticultural produce valued at KES 136.6 billion in 2024.
                Securing this critical trade corridor demands verifiable compliance with destination market import standards.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#253E3D] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A4B8B2]">
                Source: KNBS / AFA 2024
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#A4B8B2]" />
            </div>
          </div>

          {/* Stat 3: EUDR Regulatory Enforcement Deadline */}
          <div className="bg-[#152522] border border-[#2B4543] p-8 rounded-sm flex flex-col justify-between hover:border-[#CFF4A7]/30 transition-colors">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A4B8B2] mb-4">
                Regulatory Enforcement
              </div>
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#CFF4A7] tracking-tight tabular-nums mb-3">
                30 Dec 2026
              </div>
              <p className="text-base font-semibold text-white mb-3 leading-snug">
                EU Deforestation Regulation (EUDR)
              </p>
              <p className="text-sm text-[#D6E3DE] leading-relaxed font-normal">
                The EUDR applies to large and medium operators from 30 December 2026, requiring verifiable supply-chain information
                including precise farm plot geolocation, deforestation-free verification, and legally compliant production evidence.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#253E3D] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A4B8B2]">
                Source: European Commission (EUDR)
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#A4B8B2]" />
            </div>
          </div>
        </div>

        {/* Regulatory takeaway footnote */}
        <div className="mt-10 p-5 rounded-sm bg-[#152522]/60 border border-[#2B4543] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#D6E3DE]">
            <span className="text-[#CFF4A7] font-semibold">The consequence of inaction:</span> Exporters without plot-level geolocation and continuous vegetative evidence face immediate border rejection once regulatory cutoffs take effect.
          </p>
          <a
            href="#contact"
            className="text-xs font-mono font-medium text-[#CFF4A7] hover:underline whitespace-nowrap"
          >
            Prepare your portfolio for EUDR →
          </a>
        </div>
      </div>
    </section>
  );
};
