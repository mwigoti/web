import React from 'react';
import { Reveal } from './Reveal';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Boundary & Baseline',
      summary: 'GPS parcel perimeter is registered with 5-year historical vegetative and forest cover baselines.',
      outcome: 'Establishes recognized digital land tenure and locks Dec 2020 deforestation cutoff.',
    },
    {
      num: '02',
      title: 'Continuous Observation',
      summary: 'Copernicus Sentinel-2 & Planet multispectral passes monitor canopy vigor and moisture every 5 days.',
      outcome: 'Replaces sporadic manual visits with 100% continuous digital oversight across every farm.',
    },
    {
      num: '03',
      title: 'Targeted Ground Action',
      summary: 'Automated algorithms flag moisture or canopy stress, routing field agronomists only where needed.',
      outcome: 'Saves 70% of field travel costs; averts up to 35% harvest loss through early intervention.',
    },
    {
      num: '04',
      title: 'Audit-Ready Clearance',
      summary: 'Every satellite pass and field remediation is cryptographically signed into an immutable ledger.',
      outcome: 'Instantly exports verified EUDR Due Diligence Statements (DDS) ready for customs.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white text-[#16211F] border-b border-[#E3E7DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F3E7] text-[#1A532E] border border-[#BCDDC3] text-xs font-semibold font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D47] animate-pulse" />
            <span>Operational Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E1B] leading-tight mb-4">
            How TerraFarm works: from orbit to verified harvest.
          </h2>
          <p className="text-base sm:text-lg text-[#2A3E39] leading-relaxed font-normal">
            A seamless closed loop uniting remote Earth observation with field extension teams.
          </p>
        </Reveal>

        {/* 4-Step Minimalist Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, idx) => {
            return (
              <Reveal
                key={step.num}
                delay={idx * 0.1}
                className="border-2 border-[#CBD5E1] p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-[#1A532E]/60 hover:shadow-lg transition-all duration-200 bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#1A532E] bg-[#E5F3E7] px-2.5 py-1 rounded-full border border-[#BCDDC3]">STAGE {step.num}</span>
                    <span className="text-[11px] font-mono text-[#526660]">Verified Step</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F1E1B] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#273B36] leading-relaxed mb-5">
                    {step.summary}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-[#D5DDD7] text-xs font-medium text-[#112320]">
                  <span className="text-[#1A532E] font-mono block text-[11px] font-semibold uppercase mb-1 tracking-wider">Outcome</span>
                  <span className="text-[#243732]">{step.outcome}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
