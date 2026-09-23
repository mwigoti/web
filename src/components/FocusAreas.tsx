import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface ImpactArea {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
}

export const FocusAreas: React.FC = () => {
  // Simple, human-friendly domains avoiding dense engineering jargon
  const areas: ImpactArea[] = [
    {
      id: 'flood-safety',
      category: 'Disaster Prevention',
      title: 'Flood Warnings & Community Safety',
      description:
        'Giving families and local authorities enough advance notice before rivers rise, along with clear directions to high ground.',
      impact: 'Faster alerts reaching residents directly on basic mobile phones',
    },
    {
      id: 'sustainable-farming',
      category: 'Agriculture',
      title: 'Sustainable Farming & Forest Protection',
      description:
        'Helping smallholder farmers map their land accurately to protect forests and secure uninterrupted access to global markets.',
      impact: 'Verifiable proof that coffee, tea, and crops are grown sustainably',
    },
    {
      id: 'community-health',
      category: 'Public Health',
      title: 'Water Safety & Health Protection',
      description:
        'Tracking standing flood water and drainage bottlenecks to protect neighborhoods from waterborne illnesses like cholera.',
      impact: 'Early prevention measures for high-risk settlement areas',
    },
    {
      id: 'city-planning',
      category: 'Urban Planning',
      title: 'Better Drainage & City Planning',
      description:
        'Providing city engineers with clear elevation and water-flow data to build better roads, bridges, and runoff channels.',
      impact: 'Targeted maintenance where flooding strikes hardest',
    },
    {
      id: 'climate-insurance',
      category: 'Climate Finance',
      title: 'Fair Insurance & Fast Relief',
      description:
        'Using transparent satellite records so farmers and businesses get quick, automatic relief payouts right after major climate disasters.',
      impact: 'Rapid payouts without prolonged paperwork or delay',
    },
    {
      id: 'local-action',
      category: 'Community Action',
      title: 'Local Youth & Community Leaders',
      description:
        'Training local community health promoters and young people to verify ground conditions and guide safety operations on the ground.',
      impact: 'Over 250 trained community leaders taking immediate action',
    },
  ];

  return (
    <section
      id="focus-areas"
      aria-label="Areas of Focus"
      className="py-20 sm:py-28 bg-[#F2F5EF] text-[#11201D] border-b border-[#D8DFD5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Minimal Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1A532E] mb-3">
              Where We Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#11201D] leading-tight">
              Protecting livelihoods and communities across Africa.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475B55] leading-relaxed">
              Every satellite image and ground sensor serves a simple, practical purpose: keeping people safe and safeguarding everyday livelihoods.
            </p>
          </Reveal>
        </div>

        {/* Distinct Defined Cards Grid with Clear Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {areas.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.04} className="h-full">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#1A532E]/60 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group">
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#F2F5EF] border border-[#D8DFD5] font-semibold uppercase tracking-wider text-[#1A532E] text-[11px]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#11201D] mb-3 group-hover:text-[#1A532E] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475B55] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Practical Outcome Highlight */}
                <div className="pt-4 border-t border-[#E8ECE4] flex items-center justify-between text-xs text-[#697D76]">
                  <span className="font-medium text-[#11201D] pr-2">{item.impact}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#1A532E] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
