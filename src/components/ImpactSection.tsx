import React from 'react';
import { CheckCircle, AlertTriangle, ShieldCheck, TrendingDown, Users, Trees } from 'lucide-react';
import { Reveal } from './Reveal';
import { Card3D } from './Card3D';
import { Badge } from '@/src/components/ui/badge';
import { Card } from '@/src/components/ui/card';

export const ImpactSection: React.FC = () => {
  const metrics = [
    {
      value: '100%',
      label: 'Smallholder Inclusion',
      subtext: 'Keeps smallholder farming families enrolled in high-value EU and US export contracts.',
      icon: Users,
    },
    {
      value: '-$140',
      label: 'Per-Parcel Savings',
      subtext: 'Replaces $150 manual paper surveyor fees with continuous digital satellite coverage.',
      icon: TrendingDown,
    },
    {
      value: '0.00 ha',
      label: 'Forest Maintained',
      subtext: 'Historical Dec 2020 cutoff verification confirms zero deforestation across monitored basins.',
      icon: Trees,
    },
  ];

  return (
    <section id="impact" className="py-20 bg-[#F4F6F2] text-[#16211F] border-b border-[#D8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-14">
          <div className="mb-4">
            <Badge variant="outline" className="text-xs font-semibold font-mono uppercase tracking-wider bg-[#E5F3E7] text-[#1A532E] border-[#BCDDC3] gap-2 py-1 px-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D47] animate-pulse" />
              <span>Impact &amp; Economics</span>
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E1B] leading-[1.2] mb-4">
            Protecting smallholder livelihoods while meeting strict EUDR standards.
          </h2>
          <p className="text-base sm:text-lg text-[#253934] leading-relaxed font-normal">
            With EU Deforestation Regulation enforcement active, agricultural exporters face a severe choice: drop thousands of smallholders or pay bankrupting manual audit fees. TerraFarm eliminates this trade-off.
          </p>
        </Reveal>

        {/* 3 Essential Metric Cards with Staggered Reveal and 3D Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <Card3D
                  className="bg-white border border-[#D5DDD7] p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#1D3130]/30 transition-all flex flex-col justify-between"
                  maxTilt={7}
                  glareOpacity={0.2}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <Badge variant="secondary" className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2B403B] bg-[#EEF2EA] border-[#D8DFD5]">
                        {m.label}
                      </Badge>
                      <div className="w-9 h-9 rounded-full bg-[#EAF5EC] border border-[#C2E4CD] flex items-center justify-center text-[#1E5C35] shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-headline text-[#0F1E1B] mb-2 tracking-tight">
                      {m.value}
                    </div>
                  </div>
                  <p className="text-sm text-[#273B36] font-medium leading-relaxed pt-4 border-t border-[#E8ECE6]">
                    {m.subtext}
                  </p>
                </Card3D>
              </Reveal>
            );
          })}
        </div>

        {/* Minimalist 2-Column Comparison with Reveal */}
        <Reveal delay={0.2}>
          <Card className="bg-white border-[#D5DDD7] rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-0">
            {/* The Manual Audit Trap */}
            <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#D5DDD7] bg-[#FAFBF8]">
              <div className="mb-4">
                <Badge variant="outline" className="gap-2 bg-[#FEF3C7] text-[#92400E] border-[#FDE68A] text-xs font-semibold font-mono uppercase tracking-wider py-1 px-3">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>The Manual Audit Barrier</span>
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-[#0F1E1B] mb-4">
                Costly, sporadic paper surveys exclude smallholders
              </h3>
              <ul className="space-y-4 text-sm sm:text-[15px] text-[#243732] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0" />
                  <span><strong className="text-[#0F1E1B] font-semibold">$150/farm manual audits</strong> force commercial buyers to drop dispersed smallholders in favor of corporate monoculture plantations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0" />
                  <span><strong className="text-[#0F1E1B] font-semibold">Delayed anomaly detection</strong> means pest outbreaks and water stress are noticed only after 30%+ crop yield loss occurs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0" />
                  <span><strong className="text-[#0F1E1B] font-semibold">Fragmented paper records</strong> fail strict EU customs scrutiny, carbon credit registries, and port authority audits.</span>
                </li>
              </ul>
            </div>

            {/* The TerraFarm Approach */}
            <div className="p-8 sm:p-10 bg-white">
              <div className="mb-4">
                <Badge variant="outline" className="gap-2 bg-[#DCFCE7] text-[#14532D] border-[#BBF7D0] text-xs font-semibold font-mono uppercase tracking-wider py-1 px-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>The TerraFarm Continuous Standard</span>
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-[#0F1E1B] mb-4">
                Continuous satellite MRV with targeted field response
              </h3>
              <ul className="space-y-4 text-sm sm:text-[15px] text-[#243732] leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#15803D] mt-1 shrink-0" />
                  <span><strong className="text-[#0F1E1B] font-semibold">100% digital coverage</strong> guarantees entire smallholder cooperative unions meet EUDR compliance at a fraction of manual cost.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#15803D] mt-1 shrink-0" />
                  <span><strong className="text-[#0F1E1B] font-semibold">5-day satellite passes</strong> detect vegetative canopy drops 3 weeks before permanent crop failure, routing field agronomists immediately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#15803D] mt-1 shrink-0" />
                  <span><strong className="text-[#0F1E1B] font-semibold">Cryptographically signed dossiers</strong> generate instant, auditable Due Diligence Statements for European customs clearance.</span>
                </li>
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};
