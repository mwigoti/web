import React from 'react';
import { Waves, Sprout, HeartPulse, Building2, Coins, Users } from 'lucide-react';
import { Reveal } from './Reveal';

export const FocusAreas: React.FC = () => {
  const areas = [
    {
      index: '01',
      title: 'Flood Monitoring',
      description: 'Early warning, safe evacuation routing, and response coordination for flood-exposed urban and rural communities.',
      icon: Waves,
      tag: 'NEWIS System',
    },
    {
      index: '02',
      title: 'Climate-Smart Agriculture',
      description: 'Farm-level MRV, polygon validation, and continuous deforestation monitoring keeping smallholders in global supply chains.',
      icon: Sprout,
      tag: 'Terra Farm',
    },
    {
      index: '03',
      title: 'Public Health',
      description: 'Post-disaster health risk modeling, tracing waterborne disease, cholera vectors, and sanitation-linked vulnerabilities.',
      icon: HeartPulse,
      tag: 'WDRI Index',
    },
    {
      index: '04',
      title: 'Urban Planning & Drainage',
      description: 'Ward- and settlement-level elevation and hydrological risk data informing civil infrastructure and drainage maintenance.',
      icon: Building2,
      tag: 'Spatial Data',
    },
    {
      index: '05',
      title: 'Climate & Adaptation Finance',
      description: 'Objective satellite truth and IoT telemetry underwriting parametric insurance, resilience credit, and green lending.',
      icon: Coins,
      tag: 'Risk Underwriting',
    },
    {
      index: '06',
      title: 'Community Resilience',
      description: 'Last-mile empowerment through locally-led capacity building, youth workforces, and Community Health Promoters.',
      icon: Users,
      tag: 'Last-Mile Action',
    },
  ];

  return (
    <section id="focus-areas" className="py-20 sm:py-24 bg-[#142623] text-white border-b border-[#253D3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFF4A7]/15 text-[#CFF4A7] border border-[#CFF4A7]/30 text-xs font-semibold font-mono uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFF4A7]" />
              <span>Focus Areas</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Built once. Applied wherever climate risk lands.
            </h2>
            <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
              TerraSat's shared geospatial and IoT architecture spans six crucial domains, transforming spaceborne intelligence into tangible African resilience.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.index} delay={idx * 0.08} className="p-7 rounded-3xl bg-[#1A312D] border border-[#2B4543] flex flex-col justify-between hover:border-[#CFF4A7]/40 transition-all shadow-md group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#CFF4A7]">{area.index}</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#142623] border border-[#2B4543] text-[#A4B8B2]">
                      {area.tag}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#142623] border border-[#2B4543] flex items-center justify-center text-[#CFF4A7] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#CFF4A7] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#D6E3DE] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
