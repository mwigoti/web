import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const sequence = [
    'Farm',
    'Continuous EO Monitoring',
    'Deviation Detected',
    'Risk Prioritization',
    'Targeted Field Verification',
    'Intervention',
    'Evidence Recorded',
  ];

  return (
    <section id="value-proposition" className="relative bg-[#FFFFFF] text-[#16211F] overflow-hidden">
      {/* Full-bleed Photo Breather Band (High altitude Kenyan terraced cropland) */}
      <div className="relative w-full h-[460px] sm:h-[540px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=2400&q=80"
          alt="High-resolution aerial view of contour-terraced East African agricultural farmland and agroforestry buffer"
          className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Subtle forest tint overlay (#1D3130) */}
        <div className="absolute inset-0 bg-[#1D3130]/45 mix-blend-multiply" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D3130] via-transparent to-black/20" aria-hidden="true" />

        {/* Caption over Breather Band */}
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1.5 rounded-sm bg-[#152522]/85 border border-[#2B4543] text-xs text-[#E7EFE5] backdrop-blur-sm">
            <span className="text-[#CFF4A7] font-medium">Contour agroforestry observation:</span> 100% boundary continuity across multi-hectare smallholder clusters.
          </div>
        </div>
      </div>

      {/* Value Statement Content Block (Dark Forest Band) */}
      <div className="bg-[#1D3130] text-white py-20 border-b border-[#253E3D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#CFF4A7] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#CFF4A7]" />
            <span>The Value Proposition</span>
          </div>

          {/* Large Core Statement */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
            TerraFarm replaces the wait with{' '}
            <span className="text-[#CFF4A7]">continuous monitoring.</span>
          </h2>

          {/* The Operational Flow Callout (Horizontal sequence) */}
          <div className="bg-[#152522] border border-[#2B4543] p-6 sm:p-8 rounded-sm mb-10 overflow-x-auto">
            <p className="text-xs font-mono uppercase text-[#A4B8B2] tracking-wider mb-4">
              Operational Closed Loop:
            </p>
            <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white whitespace-nowrap">
              {sequence.map((item, index) => (
                <React.Fragment key={item}>
                  <span className={`px-3 py-1.5 rounded-sm border ${
                    index === sequence.length - 1
                      ? 'bg-[#CFF4A7] text-[#1D3130] border-[#CFF4A7] font-bold'
                      : index === 0
                      ? 'bg-[#1D3130] text-white border-[#2B4543]'
                      : 'bg-[#1D3130]/80 text-[#E7EFE5] border-[#2B4543]'
                  }`}>
                    {item}
                  </span>
                  {index < sequence.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#CFF4A7] shrink-0 opacity-70" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Two-Column Value Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-lg text-[#E7EFE5]/90 leading-relaxed font-normal">
                Instead of deploying field agents uniformly across an entire portfolio, customers focus
                physical verification exactly where TerraFarm identifies a material deviation or evidence
                gap — reducing unnecessary inspections, improving response time, strengthening
                traceability, and creating an auditable history of what happened on the farm.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CFF4A7] shrink-0 mt-1" />
                  <span className="text-sm text-[#D6E3DE]">
                    Zero wasted visits on healthy, stable parcels
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CFF4A7] shrink-0 mt-1" />
                  <span className="text-sm text-[#D6E3DE]">
                    Faster response before yield loss occurs
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CFF4A7] shrink-0 mt-1" />
                  <span className="text-sm text-[#D6E3DE]">
                    Immutable evidence trail for every plot
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CFF4A7] shrink-0 mt-1" />
                  <span className="text-sm text-[#D6E3DE]">
                    Instant audit readiness for EUDR &amp; certifiers
                  </span>
                </div>
              </div>
            </div>

            {/* Commercial Framing Callout Card */}
            <div className="lg:col-span-5 bg-[#152522] border-l-2 border-[#CFF4A7] p-6 sm:p-7 rounded-r-sm">
              <span className="text-xs uppercase font-mono tracking-wider text-[#CFF4A7] font-semibold block mb-2">
                Commercial Framing
              </span>
              <p className="text-xl sm:text-2xl font-bold font-headline text-white leading-snug">
                “TerraFarm does not sell satellite imagery; it sells continuous farm intelligence and verifiable evidence.”
              </p>
              <p className="text-xs text-[#A4B8B2] mt-4 leading-relaxed">
                Raw pixels do not pass an audit. TerraFarm transforms satellite, IoT, and ground observation streams
                into defensible, farm-specific compliance ledgers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
