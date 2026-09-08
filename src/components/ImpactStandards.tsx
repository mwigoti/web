import React from 'react';
import { ArrowUpRight, ShieldCheck, FileCheck, Layers, Award, Globe, Scale } from 'lucide-react';
import { Reveal } from './Reveal';

export const ImpactStandards: React.FC = () => {
  const standards = [
    {
      title: 'Disaster Monitoring Framework',
      subtitle: 'Open Data, Privacy & ISO Geomatics Compliance',
      desc: 'Rigorous ground-truth calibration compliant with ISO 19115 spatial metadata and strict community privacy protocols for informal settlement residents.',
      icon: ShieldCheck,
      badge: 'ISO / OGC',
    },
    {
      title: 'EUDR & TRACES Automated Dossier Readiness',
      subtitle: 'EU Regulation 2023/1115 Articles 9 & 10',
      desc: 'Polygon cadastres timestamped against Dec 31, 2020 forest baselines, formatted in WGS84 GeoJSON and ready for direct TRACES-NT customs upload.',
      icon: FileCheck,
      badge: 'EU Regulation 2023/1115',
    },
    {
      title: 'Climate Finance & Parametric Triggering',
      subtitle: 'Objective Indices for Adaptation Lending',
      desc: 'Tamper-evident satellite and IoT water telemetry for index-based micro-insurance and climate resilience grants without slow manual claims.',
      icon: Scale,
      badge: 'Parametric Finance',
    },
    {
      title: 'UN Sustainable Development Goals (SDGs)',
      subtitle: 'Measurable Impact on the Ground',
      desc: 'Direct alignment with SDG 1 (No Poverty), SDG 2 (Zero Hunger), SDG 11 (Sustainable Cities & Communities), and SDG 13 (Climate Action).',
      icon: Globe,
      badge: 'SDG 1, 2, 11, 13',
    },
  ];

  const clients = [
    'Public Sector & Municipalities',
    'Financial Institutions & Insurers',
    'Agricultural Cooperatives',
    'NGOs & Humanitarian Agencies',
    'International Development Partners',
    'Microfinance Institutions',
    'ESG & Carbon Consultants',
    'Commodity Exporters (Coffee & Tea)',
  ];

  return (
    <section id="impact" className="py-20 sm:py-24 bg-[#152522] text-white border-b border-[#253D3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFF4A7]/15 text-[#CFF4A7] border border-[#CFF4A7]/30 text-xs font-semibold font-mono uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFF4A7]" />
              <span>Impact &amp; Standards</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Built on open standards. Verified where it counts.
            </h2>
            <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
              Whether meeting strict European Union import due diligence or humanitarian disaster monitoring protocols, TerraSat is architected for auditability and trust.
            </p>
          </Reveal>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <Reveal key={std.title} delay={idx * 0.1} className="p-7 rounded-3xl bg-[#1A312D] border border-[#2B4543] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#142623] border border-[#2B4543] text-[#CFF4A7]">
                      {std.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#CFF4A7]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{std.title}</h3>
                  <div className="text-xs font-mono text-[#A4B8B2] mb-3">{std.subtitle}</div>
                  <p className="text-xs sm:text-sm text-[#D6E3DE] leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Who We Serve */}
        <Reveal delay={0.2} className="p-8 sm:p-10 rounded-3xl bg-[#11201D] border border-[#2B4543]">
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-1 font-semibold">
              Ecosystem Partners &amp; Stakeholders
            </div>
            <h3 className="text-2xl font-bold text-white">Who We Serve</h3>
            <p className="text-xs sm:text-sm text-[#D6E3DE] mt-1">
              Engineered for the organizations and institutions closest to the risk.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {clients.map((client) => (
              <div
                key={client}
                className="px-4 py-2 rounded-full bg-[#162A27] border border-[#2B4543] text-xs sm:text-sm text-[#E7EFE5] hover:border-[#CFF4A7]/40 hover:text-white transition-all font-medium"
              >
                {client}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
