import React from 'react';
import { Building2, Users } from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';
import { Card } from '@/src/components/ui/card';

export const WhoItsFor: React.FC = () => {
  const buyers = [
    {
      title: 'Agricultural Exporters & Aggregators',
      description:
        'Protect export shipments to the EU and global markets by ensuring 100% parcel traceability and meeting strict pesticide MRL and zero-deforestation mandates.',
      keyNeed: 'Avoid container rejections & border delays',
    },
    {
      title: 'Cooperatives & Producer Groups',
      description:
        'Track member farm production, predict seasonal harvest volumes, and provide certifiers with unbroken sustainability evidence across thousands of smallholders.',
      keyNeed: 'Streamline Rainforest Alliance & fair trade audits',
    },
    {
      title: 'Mid-Scale & Commercial Farms',
      description:
        'Continuously detect crop moisture stress, uneven fertilization, and irrigation anomalies across extensive acreage before yields are compromised.',
      keyNeed: 'Optimize input spending & protect yields',
    },
    {
      title: 'Agricultural Insurers',
      description:
        'Index and monitor insured cropland, independently corroborate parametric weather and drought loss events, and eliminate fraudulent claims.',
      keyNeed: 'Objective parametric claims settlement',
    },
    {
      title: 'Commercial Banks & Ag-SACCOs',
      description:
        'Underwrite working capital and input loans with digital farm collateral and continuous crop health verification throughout the credit cycle.',
      keyNeed: 'De-risk agricultural loan portfolios',
    },
  ];

  const operators = [
    {
      title: 'Farm Managers & Lead Agronomists',
      description:
        'View multi-parcel vegetation indices, prioritize irrigation and input application schedules, and receive instant alerts when a sector underperforms.',
      workflow: 'Web GIS Dashboard & Agronomic Analytics',
    },
    {
      title: 'Extension & Compliance Officers',
      description:
        'Replace blind, uncoordinated routine farm inspections with high-priority verification queues that guide field staff directly to flagged coordinates.',
      workflow: 'Targeted Verification Task Queues',
    },
    {
      title: 'Field Agents & Scouting Officers',
      description:
        'Capture geotagged, offline-capable photographic evidence, confirm ground crop condition, and record corrective agronomic interventions on mobile.',
      workflow: 'Offline Mobile Inspection App',
    },
    {
      title: 'Producer Organization Coordinators',
      description:
        'Coordinate farmer member onboarding, verify plot boundary delineations, and maintain up-to-date farmer master ledgers.',
      workflow: 'Member Registration & Geolocation Module',
    },
    {
      title: 'Contract & Smallholder Farmers',
      description:
        'Gain verified production records that establish creditworthiness, qualify for sustainable export premiums, and unlock agronomic advisory.',
      workflow: 'Verified Farm ID & Sustainable Practice Certificate',
    },
  ];

  return (
    <section id="who-its-for" className="py-24 bg-[#F7F8F3] text-[#16211F] border-b border-[#E3E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-3">
            <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wider text-[#475B55] border-[#D8DFD5] bg-[#EEF2EA] gap-2 py-1 px-3">
              <span className="w-2 h-2 rounded-full bg-[#1D3130]" />
              <span>Stakeholder Alignment</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D3130] leading-tight mb-4">
            Built for Commercial Risk Holders. Engineered for Field Practitioners.
          </h2>
          <p className="text-base sm:text-lg text-[#475B55] leading-relaxed">
            TerraFarm aligns institutional buyers who need verifiable portfolio assurance with the daily
            workflows of ground-level agronomy and compliance teams.
          </p>
        </div>

        {/* Two-Column Asymmetric Structure with Clear Distinguishable Card Boundaries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Column A: Commercial Buyers ("Who Pays") */}
          <Card className="bg-white border-2 border-[#CBD5E1] p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between border-b border-[#E3E7DF] pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1D3130] text-[#CFF4A7] flex items-center justify-center shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1D3130]">Who Invests</h3>
                  <span className="text-xs text-[#475B55] uppercase tracking-wider font-semibold">
                    The Commercial Buyers
                  </span>
                </div>
              </div>
              <Badge variant="outline" className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F7F8F3] text-[#1D3130] border-[#D8DFD5]">
                Portfolio Value
              </Badge>
            </div>

            <div className="space-y-6 divide-y divide-[#F0F2EB]">
              {buyers.map((buyer, idx) => (
                <div key={buyer.title} className={idx > 0 ? 'pt-6' : ''}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h4 className="text-base font-bold text-[#1D3130]">{buyer.title}</h4>
                  </div>
                  <p className="text-sm text-[#16211F]/80 leading-relaxed mb-3 font-normal">
                    {buyer.description}
                  </p>
                  <div className="text-xs text-[#475B55] font-medium flex items-center gap-1.5 bg-[#F8FAF6] p-2 rounded-lg border border-[#E8ECE4]">
                    <span className="font-semibold text-[#1D3130]">Primary Mandate:</span>
                    <span>{buyer.keyNeed}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Column B: Operational Users ("Who Uses It") */}
          <Card className="bg-white border-2 border-[#CBD5E1] p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between border-b border-[#E3E7DF] pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CFF4A7] text-[#1D3130] flex items-center justify-center shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1D3130]">Who Operates</h3>
                  <span className="text-xs text-[#475B55] uppercase tracking-wider font-semibold">
                    The Daily Users
                  </span>
                </div>
              </div>
              <Badge variant="outline" className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F7F8F3] text-[#1D3130] border-[#D8DFD5]">
                Operational Interface
              </Badge>
            </div>

            <div className="space-y-6 divide-y divide-[#F0F2EB]">
              {operators.map((op, idx) => (
                <div key={op.title} className={idx > 0 ? 'pt-6' : ''}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h4 className="text-base font-bold text-[#1D3130]">{op.title}</h4>
                  </div>
                  <p className="text-sm text-[#16211F]/80 leading-relaxed mb-3 font-normal">
                    {op.description}
                  </p>
                  <div className="text-xs text-[#475B55] font-medium flex items-center gap-1.5 bg-[#F8FAF6] p-2 rounded-lg border border-[#E8ECE4]">
                    <span className="font-semibold text-[#1D3130]">Interface:</span>
                    <span className="font-mono text-[11px] text-[#1A532E] font-semibold">{op.workflow}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
