import React from 'react';
import { Reveal } from './Reveal';
import { Badge } from '@/src/components/ui/badge';
import { Card } from '@/src/components/ui/card';

export const FocusAreas: React.FC = () => {
  const areas = [
    {
      index: '01',
      title: 'Flood Monitoring',
      description: 'Early warning, safe evacuation routing, and response coordination for flood-exposed urban and rural communities.',
      domain: 'Disaster Prevention',
      tag: 'NEWIS System',
    },
    {
      index: '02',
      title: 'Climate-Smart Agriculture',
      description: 'Farm-level MRV, polygon validation, and continuous deforestation monitoring keeping smallholders in global supply chains.',
      domain: 'Supply Chains',
      tag: 'Terra Farm',
    },
    {
      index: '03',
      title: 'Public Health',
      description: 'Post-disaster health risk modeling, tracing waterborne disease, cholera vectors, and sanitation-linked vulnerabilities.',
      domain: 'Epidemiology',
      tag: 'WDRI Index',
    },
    {
      index: '04',
      title: 'Urban Planning & Drainage',
      description: 'Ward- and settlement-level elevation and hydrological risk data informing civil infrastructure and drainage maintenance.',
      domain: 'Civil Infrastructure',
      tag: 'Spatial Data',
    },
    {
      index: '05',
      title: 'Climate & Adaptation Finance',
      description: 'Objective satellite truth and IoT telemetry underwriting parametric insurance, resilience credit, and green lending.',
      domain: 'Risk Underwriting',
      tag: 'Parametric Finance',
    },
    {
      index: '06',
      title: 'Community Resilience',
      description: 'Last-mile empowerment through locally-led capacity building, youth workforces, and Community Health Promoters.',
      domain: 'Ground Action',
      tag: 'Last-Mile Action',
    },
  ];

  return (
    <section id="focus-areas" className="py-20 sm:py-24 bg-[#F2F5EF] text-[#11201D] border-b border-[#D8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <div className="mb-4">
              <Badge variant="outline" className="text-xs font-semibold font-mono uppercase tracking-wider py-1 px-3 gap-2 bg-[#EAF5EC] text-[#1A532E] border-[#BCDDC3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A532E]" />
                <span>Focus Areas</span>
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#11201D] leading-tight mb-4">
              Built once. Applied wherever climate risk lands.
            </h2>
            <p className="text-base sm:text-lg text-[#475B55] leading-relaxed font-normal">
              TerraSat's shared geospatial and IoT architecture spans six crucial domains, transforming spaceborne intelligence into tangible African resilience.
            </p>
          </Reveal>
        </div>

        {/* Clean Editorial Cards: No AI Icon Blobs, Strict 3 Font Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <Reveal key={area.index} delay={idx * 0.08} className="h-full">
              <Card className="h-full p-7 rounded-3xl bg-white border-[#D8DFD5] flex flex-col justify-between hover:border-[#1A532E]/50 transition-all shadow-xs group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-mono font-bold text-[#1A532E] tracking-wider">
                      DOMAIN {area.index}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#F7F9F5] border border-[#D8DFD5] text-[#475B55]">
                      {area.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#11201D] mb-2 group-hover:text-[#1A532E] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#475B55] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E8ECE4] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#475B55]">{area.domain}</span>
                  <span className="text-[#1A532E] font-medium group-hover:translate-x-0.5 transition-transform">Active Protocol →</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
