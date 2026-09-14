import React from 'react';
import { Badge } from '@/src/components/ui/badge';
import { Card } from '@/src/components/ui/card';

export const ProblemSection: React.FC = () => {
  const gaps = [
    {
      num: '01',
      title: 'High field-verification costs',
      description:
        'Visit frequency and coverage cannot scale with portfolio growth. Deploying field agents uniformly across hundreds of dispersed smallholder farms wastes capital on routine visits to compliant plots while missing anomalies elsewhere.',
      impact: 'Escalating cost-per-hectare as farmer networks expand.',
    },
    {
      num: '02',
      title: 'Weak evidence trails',
      description:
        'Farm records live scattered across paper visit sheets, verbal agent declarations, uncoordinated mobile photos, and disparate spreadsheets — rarely linked to an unbroken, timestamped historical record of farm management.',
      impact: 'Inability to defend historical agronomic practices during buyer audits.',
    },
    {
      num: '03',
      title: 'Compliance & traceability exposure',
      description:
        'Mandatory standards like GLOBALG.A.P., Rainforest Alliance, strict EU pesticide MRLs, and the EU Deforestation Regulation (EUDR, taking effect 30 December 2026) require plot-level geolocation and continuous evidence that is often thin exactly when needed.',
      impact: 'Risk of shipment rejections, fines, and export border decertification.',
    },
    {
      num: '04',
      title: 'Poor portfolio visibility',
      description:
        'Production data aggregated at the cooperative union or regional depot level conceals farm-level reality — masking which specific farms are experiencing water stress, nutrient deficiency, or illegal boundary encroachment until harvest yields suffer.',
      impact: 'Late corrective action after crop damage or boundary violations have occurred.',
    },
  ];

  return (
    <section id="problem" className="py-24 bg-[#F7F8F3] text-[#16211F] border-b border-[#E3E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-3">
            <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wider text-[#475B55] border-[#D8DFD5] bg-[#EEF2EA] gap-2 py-1 px-3">
              <span className="w-2 h-2 rounded-full bg-[#1D3130]" />
              <span>The Monitoring Deficit</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D3130] leading-tight mb-5">
            Dispersed agricultural portfolios cannot be monitored through periodic physical visits alone.
          </h2>
          <p className="text-lg text-[#475B55] leading-relaxed">
            Organizations managing vast smallholder networks — exporters, aggregators, cooperatives,
            commercial growers, insurers, and ag-lenders — face four compounding operational gaps when
            relying on sporadic ground inspections and disconnected records:
          </p>
        </div>

        {/* 2x2 Clean Structural Grid (No Icon Circles, Restrained Tabular Figures) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {gaps.map((gap) => (
            <Card
              key={gap.num}
              className="bg-white border-[#E3E7DF] p-8 rounded-2xl shadow-xs flex flex-col justify-between transition-all hover:border-[#1D3130]/30"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#F0F2EB] pb-4 mb-5">
                  <Badge variant="secondary" className="font-headline text-xs font-bold tabular-nums text-[#1D3130] bg-[#EEF2EA] border-[#D8DFD5]">
                    GAP {gap.num}
                  </Badge>
                  <span className="text-xs text-[#475B55] tracking-wide uppercase font-medium">
                    MRV Risk Vector
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1D3130] mb-3 leading-snug">
                  {gap.title}
                </h3>
                <p className="text-base text-[#16211F]/85 leading-relaxed mb-6 font-normal">
                  {gap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0F2EB] flex items-start gap-2">
                <span className="text-xs font-semibold text-[#1D3130] shrink-0 uppercase tracking-wider mt-0.5">
                  Result:
                </span>
                <span className="text-xs font-medium text-[#475B55]">
                  {gap.impact}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Supporting Context Callout Strip */}
        <Card className="mt-12 bg-white border-[#E3E7DF] p-6 rounded-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#F7F8F3] border border-[#E3E7DF] flex items-center justify-center shrink-0">
              <span className="font-headline font-bold text-sm text-[#1D3130]">VS</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1D3130]">
                The Traditional Model: Uniform, Blind Inspection
              </p>
              <p className="text-xs text-[#475B55] mt-0.5">
                Agents inspect random farms regardless of risk, wasting 60–80% of travel time on healthy, compliant plots.
              </p>
            </div>
          </div>
          <Badge variant="default" className="text-xs font-medium text-[#1D3130] bg-[#CFF4A7] hover:bg-[#CFF4A7] px-4 py-2 rounded-lg border border-[#BDE891] shrink-0">
            TerraFarm solution: Target ground agents exclusively where deviations are flagged.
          </Badge>
        </Card>
      </div>
    </section>
  );
};
