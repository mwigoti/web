import React, { useState } from 'react';
import {
  Satellite,
  Handshake,
  GraduationCap,
  ShieldAlert,
  Building2,
  ExternalLink,
  CheckCircle2,
  Award,
  Globe2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Reveal } from './Reveal';

interface PartnersSectionProps {
  onRequestDemo?: () => void;
}

type PartnerCategory = 'all' | 'space' | 'community' | 'academic';

interface Partner {
  name: string;
  category: 'space' | 'community' | 'academic';
  categoryLabel: string;
  role: string;
  summary: string;
  location: string;
  initiative: string;
  badgeColor: string;
  icon: React.ElementType;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onRequestDemo }) => {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>('all');

  const partners: Partner[] = [
    {
      name: 'Kenya Space Agency (KSA)',
      category: 'space',
      categoryLabel: 'National Space Agency',
      role: 'Earth Observation & AI Spaceborne Payload',
      summary:
        'Strategic collaboration advancing spaceborne AI algorithms, CubeSat nanosatellite telemetry validation, and spatial data infrastructure support for national climate and disaster monitoring.',
      location: 'Nairobi, Kenya',
      initiative: 'STAR.VISION spaceborne AI payload & ASI nanosatellite engineering',
      badgeColor: 'bg-[#CFF4A7]/15 text-[#CFF4A7] border-[#CFF4A7]/30',
      icon: Satellite,
    },
    {
      name: 'Italian Space Agency (ASI)',
      category: 'space',
      categoryLabel: 'International Space Agency',
      role: 'Nanosatellite Capacity & Telemetry Tracking',
      summary:
        'Technical partnership rooted at the Luigi Broglio Space Centre in Malindi, conducting CubeSat nanosatellite flight telemetry, ground station tracking, and spaceborne mission engineering.',
      location: 'Malindi, Kenya / Rome, Italy',
      initiative: 'Broglio Space Centre Nanosatellite Training Program',
      badgeColor: 'bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30',
      icon: Globe2,
    },
    {
      name: 'STAR.VISION Aerospace',
      category: 'space',
      categoryLabel: 'Orbital Edge Computing',
      role: 'In-Orbit Edge AI Processing Pipeline',
      summary:
        'Engineering collaboration deploying neural edge algorithms aboard satellites to analyze multi-spectral optical and SAR radar imagery before downlink, slashing latency from hours to minutes.',
      location: 'International Alliance',
      initiative: 'Spaceborne orbital edge inference for real-time flood warning',
      badgeColor: 'bg-[#CFF4A7]/15 text-[#CFF4A7] border-[#CFF4A7]/30',
      icon: Satellite,
    },
    {
      name: 'Mathare River Adoption Initiative',
      category: 'community',
      categoryLabel: 'Grassroots Community Action',
      role: 'Last-Mile Hydrology Ground Truth & Ward Wardens',
      summary:
        'Community anchor along the 6 informal settlement wards of Mathare. Mobilizes local wardens, verifies drainage clearances, and establishes safe evacuation shelter staging areas.',
      location: 'Mathare Valley, Nairobi',
      initiative: 'Ground truth hydrology calibration & USSD maintenance task verification',
      badgeColor: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30',
      icon: Handshake,
    },
    {
      name: 'Kenya Red Cross Society',
      category: 'community',
      categoryLabel: 'Humanitarian Disaster Response',
      role: 'Emergency Evacuation & Safe Shelter Dispatch',
      summary:
        'Institutional humanitarian coordination linking NEWIS predictive water levels directly with emergency evacuation routes, community cholera warnings, and designated shelter venues.',
      location: 'National Headquarters, Nairobi',
      initiative: 'Early warning to early action protocol for informal urban settlements',
      badgeColor: 'bg-red-950/50 text-red-300 border-red-500/30',
      icon: ShieldAlert,
    },
    {
      name: 'Shining Hope for Communities (SHOFCO)',
      category: 'community',
      categoryLabel: 'Urban Community Network',
      role: 'Critical Water Point & Amenity Tracking',
      summary:
        'Field-level infrastructure intelligence tracking 80+ clean water kiosks and aerial pipelines in high-risk zones to trigger contamination advisories during severe flash floods.',
      location: 'Nairobi Informal Settlements',
      initiative: 'Real-time water point security & emergency SMS health advisories',
      badgeColor: 'bg-amber-950/50 text-amber-300 border-amber-500/30',
      icon: Building2,
    },
    {
      name: 'University of Nairobi (UoN)',
      category: 'academic',
      categoryLabel: 'Academic Research Lab',
      role: 'Geospatial Engineering & Spatial Decision Systems',
      summary:
        'Department of Geospatial and Space Technology research alliance refining Urban Flood Numbers (UFN) modeling, hydrological boundary mapping, and peer-reviewed remote sensing validation.',
      location: 'Nairobi, Kenya',
      initiative: 'Scientific peer validation of high-density settlement hydrology models',
      badgeColor: 'bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30',
      icon: GraduationCap,
    },
    {
      name: 'University of Eastern Africa, Baraton',
      category: 'academic',
      categoryLabel: 'Software Systems Lab',
      role: 'Resilient Microservices & USSD Telephony',
      summary:
        'Software engineering collaboration designing low-latency, zero-smartphone USSD communication pipelines that operate reliably across standard 2G GSM cellular networks.',
      location: 'Nandi County, Kenya',
      initiative: 'Fault-tolerant USSD session engines and localized linguistic routing',
      badgeColor: 'bg-[#CFF4A7]/15 text-[#CFF4A7] border-[#CFF4A7]/30',
      icon: GraduationCap,
    },
    {
      name: 'ActInSpace Kenya 2026 (Winner)',
      category: 'space',
      categoryLabel: 'Space Innovation Award',
      role: 'National Space Competition Champion',
      summary:
        'Awarded first place in Kenya for pioneering the commercialization of Earth observation data to safeguard African smallholder agricultural supply chains and urban communities.',
      location: 'Kenya & CNES / ESA BIC Global',
      initiative: 'Scaling spaceborne environmental intelligence across East Africa',
      badgeColor: 'bg-[#CFF4A7]/20 text-[#CFF4A7] border-[#CFF4A7]/40',
      icon: Award,
    },
  ];

  const filteredPartners =
    activeCategory === 'all'
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  const stats = [
    { value: '4', label: 'Space & Sensor Collaborations', sub: 'KSA, ASI, STAR.VISION, ESA' },
    { value: '6', label: 'Mathare Wards Instrumented', sub: '100% grassroots field coverage' },
    { value: '< 180s', label: 'Last-Mile SMS & USSD Dispatch', sub: 'Zero smartphone barrier' },
    { value: '100%', label: 'Open Satellite Data Interoperability', sub: 'Sentinel-1/2, Landsat, TRACES' },
  ];

  return (
    <section id="partners" className="py-24 sm:py-28 bg-[#0D1816] text-white border-b border-[#253D3A] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CFF4A7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Reveal>
            <div className="mb-3">
              <Badge variant="default" className="text-xs font-semibold font-mono uppercase tracking-wider py-1 px-3 gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11201D]" />
                <span>Partners &amp; Ecosystem Alliances</span>
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              From orbit to the last mile: built with trusted partners.
            </h2>
            <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
              TerraSat unites national space agencies, humanitarian responders, university engineering laboratories, and grassroots community wardens. Together, we ensure satellite data transforms into real-world action where it matters most.
            </p>
          </Reveal>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#142623] border border-[#2B4543] flex flex-col justify-between h-full">
                <div className="text-2xl sm:text-4xl font-extrabold font-mono text-[#CFF4A7] mb-1.5">
                  {stat.value}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-[#A4B8B2]">
                    {stat.sub}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Partners (9)' },
            { id: 'space', label: 'Space & Satellite (3)' },
            { id: 'community', label: 'Community & First Responders (3)' },
            { id: 'academic', label: 'Academic & Research (3)' },
          ].map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as PartnerCategory)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#CFF4A7] text-[#11201D] font-bold shadow-md shadow-[#CFF4A7]/10'
                    : 'bg-[#162A27] text-[#D6E3DE] hover:bg-[#1D3531] hover:text-white border border-[#2B4543]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPartners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <Reveal key={partner.name} delay={idx * 0.06}>
                <Card className="p-6 sm:p-7 rounded-3xl bg-[#142623] border-[#2B4543] text-white flex flex-col justify-between hover:border-[#CFF4A7]/40 transition-all duration-300 shadow-lg hover:shadow-xl h-full group">
                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-[#1A312D] border border-[#2B4543] flex items-center justify-center text-[#CFF4A7] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className={`text-[10px] font-mono uppercase tracking-wider py-0.5 px-2.5 ${partner.badgeColor}`}>
                        {partner.categoryLabel}
                      </Badge>
                    </div>

                    {/* Title & Role */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#CFF4A7] transition-colors">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-mono text-[#38BDF8] font-semibold mb-3">
                      {partner.role}
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#D6E3DE] leading-relaxed mb-5">
                      {partner.summary}
                    </p>
                  </div>

                  {/* Footer Details */}
                  <div className="pt-4 border-t border-[#233A38] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#A4B8B2]">Base</span>
                      <span className="text-white font-medium">{partner.location}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0F1D1B] border border-[#233A38] text-[11px] text-[#A4B8B2] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#CFF4A7] shrink-0 mt-0.5" />
                      <span className="leading-tight text-[#D6E3DE]">
                        <strong className="text-white font-medium">Initiative:</strong> {partner.initiative}
                      </span>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Partnership Invitation Banner */}
        <Reveal>
          <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-[#162A27] via-[#142623] to-[#101F1D] border border-[#2B4543] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <Badge variant="outline" className="bg-[#CFF4A7]/10 text-[#CFF4A7] border-[#CFF4A7]/30 text-xs font-mono uppercase mb-3 py-1 px-3">
                Collaborate With TerraSat
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                Interested in piloting or integrating our intelligence models?
              </h3>
              <p className="text-sm text-[#D6E3DE] leading-relaxed">
                Whether you represent an agricultural cooperative preparing for EUDR export compliance, a county disaster management directorate, a humanitarian agency, or a space research initiative — our engineering team is ready to collaborate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Button
                type="button"
                variant="default"
                size="lg"
                onClick={onRequestDemo}
                className="rounded-full font-headline font-bold text-sm shadow-md hover:shadow-lg gap-2"
              >
                <span>Initiate Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
