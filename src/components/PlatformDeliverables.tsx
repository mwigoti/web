import React from 'react';
import { FileText, Activity, Navigation, CheckCircle, Building2, UserCheck, Landmark } from 'lucide-react';
import { Reveal } from './Reveal';
import { Card3D } from './Card3D';

export const PlatformDeliverables: React.FC = () => {
  const deliverables = [
    {
      code: 'DDS-01',
      title: 'Digital Farm Dossier',
      format: 'GeoJSON / PDF',
      description: 'Definitive boundary polygon with land tenure data and December 2020 deforestation cutoff certification.',
      icon: FileText,
    },
    {
      code: 'SAT-02',
      title: 'Vegetative Trajectory & NDVI',
      format: 'Time-Series Geospatial',
      description: '5-day multi-spectral canopy curves benchmarking crop vigor, moisture stress, and seasonal harvest trajectory.',
      icon: Activity,
    },
    {
      code: 'EXT-03',
      title: 'Targeted Ground Action Queue',
      format: 'Mobile App / Dispatch',
      description: 'Automated field routing sending agronomists exclusively to plots showing biophysical anomalies.',
      icon: Navigation,
    },
    {
      code: 'AUD-04',
      title: 'EUDR Due Diligence Statement',
      format: 'Cryptographic Audit Dossier',
      description: 'Export-ready due diligence package compliant with EUDR Article 9 & 10 regulations for immediate customs clearance.',
      icon: CheckCircle,
    },
  ];

  const stakeholders = [
    {
      icon: Building2,
      role: 'Cooperatives & Exporters',
      benefit: 'Maintain smallholder contracts for EU and US markets without paying crippling manual survey penalties.',
    },
    {
      icon: UserCheck,
      role: 'Extension & Agronomy Teams',
      benefit: 'End blind travel. Deploy field officers with precise GPS coordinates directly to plots with active water or pest stress.',
    },
    {
      icon: Landmark,
      role: 'ESG Lenders & Global Buyers',
      benefit: 'Access immutable proof of deforestation-free production and verify harvest yields prior to loan disbursement.',
    },
  ];

  return (
    <section id="deliverables" className="py-20 bg-[#F4F6F2] text-[#16211F] border-b border-[#D8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F3E7] text-[#1A532E] border border-[#BCDDC3] text-xs font-semibold font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D47] animate-pulse" />
            <span>Auditable Deliverables</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E1B] leading-tight mb-4">
            Auditable outputs for every stage of the value chain.
          </h2>
          <p className="text-base sm:text-lg text-[#2A3E39] leading-relaxed font-normal">
            Machine-readable data packets designed for commercial port authorities, international certifiers, and rural extension teams.
          </p>
        </Reveal>

        {/* 4 Deliverable Cards with Staggered Reveal and 3D Tilt Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliverables.map((d, idx) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.code} delay={idx * 0.1}>
                <Card3D
                  className="bg-white border border-[#D5DDD7] p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#1D3130]/40 transition-all flex flex-col justify-between"
                  maxTilt={8}
                  glareOpacity={0.25}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#1A532E] bg-[#E5F3E7] px-2.5 py-0.5 rounded-full font-bold border border-[#BCDDC3]">{d.code}</span>
                      <div className="w-8 h-8 rounded-full bg-[#FAFBF8] border border-[#D5DDD7] flex items-center justify-center text-[#1D3130] shadow-xs">
                        <Icon className="w-4 h-4 text-[#1D3130]" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#0F1E1B] mb-2.5">
                      {d.title}
                    </h3>
                    <p className="text-sm text-[#273B36] leading-relaxed mb-4">
                      {d.description}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#2B403B] pt-3.5 border-t border-[#E8ECE6]">
                    Format: <span className="text-[#0F1E1B] font-semibold">{d.format}</span>
                  </div>
                </Card3D>
              </Reveal>
            );
          })}
        </div>

        {/* Stakeholder Relevance (3 Clean Columns) */}
        <Reveal delay={0.2} className="border-t border-[#D5DDD7] pt-14">
          <div className="text-xs font-mono font-semibold uppercase text-[#2B403B] mb-8 tracking-wider">
            Engineered For
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stakeholders.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#1D3130] flex items-center justify-center text-[#CFF4A7] shrink-0 mt-0.5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0F1E1B] mb-1.5">{s.role}</h4>
                    <p className="text-sm text-[#2A3E39] leading-relaxed font-normal">{s.benefit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Clean Credibility Footer Strip */}
        <div className="mt-14 pt-6 border-t border-[#D5DDD7] flex flex-wrap items-center justify-between gap-4 text-xs text-[#2B403B] font-mono">
          <span>Data Ingestion: Copernicus Sentinel-2 · Planet High-Res · Soil IoT</span>
          <span className="text-[#1A532E] font-semibold">EUDR Article 9 &amp; 10 Validated</span>
        </div>
      </div>
    </section>
  );
};
