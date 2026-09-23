import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  AlertTriangle,
  Phone,
  CheckCircle2,
  ShieldCheck,
  School,
  Droplets,
  Building2,
  Layers,
  RefreshCw,
  Smartphone,
  Info,
  Clock,
  Send,
  Radio,
  Map as MapIcon,
  CheckSquare,
} from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Logo } from './Logo';

export const NewisSystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'alerts' | 'tasks' | 'ussd'>('map');
  const [selectedWard, setSelectedWard] = useState<'kiamaiko' | 'ngei' | 'huruma'>('kiamaiko');
  const [ussdStep, setUssdStep] = useState<1 | 2 | 3>(1);
  const [ussdLanguage, setUssdLanguage] = useState<'English' | 'Kiswahili' | 'Sheng'>('Kiswahili');
  const [ussdInput, setUssdInput] = useState('');

  const wardData = {
    kiamaiko: {
      name: 'Kiamaiko ward',
      color: '#10B981',
      bgFill: 'rgba(16, 185, 129, 0.45)',
      borderColor: '#EF4444',
      borderStyle: 'dashed',
      avgUfn: '0.1346',
      polygons: '796/866 polygons (70 excluded, no data)',
      schools: 42,
      totalPois: 866,
      roads: '1205 (144.56 km)',
      waterways: '814 (97.65 km)',
      buildings: '2114',
      registeredUsers: 2,
      pois: [
        { label: 'school', count: 42 },
        { label: 'drinking_water', count: 28 },
        { label: 'toilet', count: 21 },
        { label: 'playground', count: 18 },
        { label: 'butcher', count: 9 },
        { label: 'clothes', count: 6 },
        { label: 'pharmacy', count: 6 },
        { label: 'kindergarten', count: 5 },
        { label: 'kiosk', count: 4 },
        { label: 'theatre', count: 3 },
        { label: 'convenience', count: 2 },
        { label: 'recycling_glass', count: 1 },
      ],
    },
    ngei: {
      name: 'Ngei ward',
      color: '#6366F1',
      bgFill: 'rgba(99, 102, 241, 0.4)',
      borderColor: '#6366F1',
      borderStyle: 'solid',
      avgUfn: '0.1180',
      polygons: '640/720 polygons',
      schools: 28,
      totalPois: 590,
      roads: '890 (98.2 km)',
      waterways: '410 (45.1 km)',
      buildings: '1680',
      registeredUsers: 5,
      pois: [
        { label: 'school', count: 28 },
        { label: 'drinking_water', count: 34 },
        { label: 'toilet', count: 18 },
        { label: 'pharmacy', count: 8 },
        { label: 'kiosk', count: 12 },
        { label: 'convenience', count: 4 },
      ],
    },
    huruma: {
      name: 'Huruma ward',
      color: '#F59E0B',
      bgFill: 'rgba(245, 158, 11, 0.45)',
      borderColor: '#F59E0B',
      borderStyle: 'solid',
      avgUfn: '0.1420',
      polygons: '810/890 polygons',
      schools: 36,
      totalPois: 740,
      roads: '1040 (122.4 km)',
      waterways: '690 (81.0 km)',
      buildings: '1940',
      registeredUsers: 3,
      pois: [
        { label: 'school', count: 36 },
        { label: 'drinking_water', count: 45 },
        { label: 'toilet', count: 26 },
        { label: 'pharmacy', count: 7 },
        { label: 'kiosk', count: 15 },
        { label: 'playground', count: 12 },
      ],
    },
  };

  const handleUssdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ussdStep === 1) {
      if (ussdInput === '1') setUssdLanguage('English');
      else if (ussdInput === '2') setUssdLanguage('Kiswahili');
      else if (ussdInput === '3') setUssdLanguage('Sheng');
      setUssdStep(2);
      setUssdInput('');
    } else if (ussdStep === 2) {
      if (ussdInput === '1') {
        setUssdStep(3);
      } else {
        setUssdStep(1);
      }
      setUssdInput('');
    } else if (ussdStep === 3) {
      setUssdStep(1);
      setUssdInput('');
    }
  };

  return (
    <div className="w-full mb-20">
      {/* Header for Screenshot & System Showcase */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <Badge
          variant="outline"
          className="bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/35 text-xs font-mono uppercase tracking-wider py-1 px-3 mb-3 inline-flex items-center gap-2"
        >
          <Radio className="w-3 h-3 text-[#38BDF8] animate-pulse" />
          <span>NEWIS Operational Platform Interface</span>
        </Badge>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Field Telemetry, Alert Dispatch &amp; USSD Live Screens
        </h3>
        <p className="text-sm sm:text-base text-[#A4B8B2] leading-relaxed">
          Integrated directly from our operational deployment in Mathare: real-time ward hydrology risk mapping, automated shelter routing advisories, maintenance triage, and feature-phone USSD emergency workflows.
        </p>
      </div>

      {/* Screen Selector Tabs with smooth horizontal scroll on mobile */}
      <div className="flex items-center justify-start sm:justify-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none max-w-full">
        {[
          { id: 'map', label: 'Mathare Ward Flood Risk (UFN)', icon: MapIcon },
          { id: 'alerts', label: 'Ward Alert & Shelter Dispatch', icon: AlertTriangle },
          { id: 'tasks', label: 'Maintenance Task Dashboard', icon: CheckSquare },
          { id: 'ussd', label: 'Zero-App USSD Feature Phone', icon: Smartphone },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#38BDF8] text-[#11201D] font-bold shadow-md shadow-[#38BDF8]/20'
                  : 'bg-[#182C29] text-[#D6E3DE] hover:bg-[#203935] hover:text-white border border-[#2B4543]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#11201D]' : 'text-[#38BDF8]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Showcase Display Area */}
      <div className="bg-[#0E1A18] rounded-3xl border-2 border-[#2B4543] p-3.5 sm:p-6 lg:p-8 shadow-2xl overflow-hidden">
        {/* ================= TAB 1: MATHARE WARD FLOOD RISK (UFN) MAP ================= */}
        {activeTab === 'map' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Top Bar matching screenshot */}
            <div className="bg-white text-[#11201D] p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#11201D] flex items-center justify-center p-1.5 shrink-0 shadow-xs">
                  <Logo size={20} showWordmark={false} emblemClassName="text-[#CFF4A7]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase font-bold">
                    TERRASAT
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    Mathare Ward-Level Flood Risk (UFN)
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-4xl">
                Click a ward polygon on the map to inspect localized geospatial metrics, key POI density, and infrastructure risk data. Terrasat supports early flood prediction, rapid response, and preventive action by linking risk insights with maintenance tasks that help reduce flood severity and protect critical infrastructure.
              </p>
            </div>

            {/* Main Interactive Map & Inspector Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Map Canvas + Ward Inspector */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-[#CBD5E1] p-4 relative overflow-hidden shadow-xs flex flex-col md:flex-row gap-4 min-h-[500px]">
                {/* SVG/Interactive Map Area */}
                <div className="flex-1 relative bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] overflow-hidden min-h-[360px] flex items-center justify-center">
                  {/* Street grid background lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="street-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#CBD5E1" strokeWidth="1" />
                        <path d="M 30 0 L 30 60 M 0 30 L 60 30" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#street-grid)" />
                  </svg>

                  {/* Street Labels */}
                  <div className="absolute top-4 left-6 text-[10px] font-mono text-[#94A3B8] select-none">
                    Mathare N Road
                  </div>
                  <div className="absolute top-8 left-1/3 text-[10px] font-mono text-[#94A3B8] select-none">
                    Raila Odinga Road
                  </div>
                  <div className="absolute top-1/2 left-2 text-[10px] font-mono text-[#94A3B8] -rotate-45 select-none">
                    Huruma Road
                  </div>
                  <div className="absolute bottom-12 right-12 text-[10px] font-mono text-[#94A3B8] rotate-90 select-none">
                    Outer Ring Road
                  </div>
                  <div className="absolute top-16 right-16 text-[10px] font-mono text-[#94A3B8] select-none">
                    Kamunde Road
                  </div>

                  {/* Watermark API Key Required backdrop texture */}
                  <div className="absolute inset-0 pointer-events-none opacity-10 flex flex-wrap gap-8 items-center justify-center select-none text-xs font-mono font-bold text-[#64748B] -rotate-12">
                    <span>API KEY REQUIRED</span>
                    <span>API KEY REQUIRED</span>
                    <span>API KEY REQUIRED</span>
                    <span>API KEY REQUIRED</span>
                  </div>

                  {/* Top Map Controls */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                    <button
                      type="button"
                      className="px-2.5 py-1 text-[11px] font-medium bg-white/90 border border-[#CBD5E1] rounded shadow-2xs text-[#1E293B] hover:bg-[#F1F5F9]"
                    >
                      ↶ Back to full view
                    </button>
                    <div className="flex flex-col bg-white/90 border border-[#CBD5E1] rounded shadow-2xs text-[12px] font-bold text-[#1E293B]">
                      <button type="button" className="px-2 py-0.5 hover:bg-[#F1F5F9] border-b border-[#E2E8F0]">+</button>
                      <button type="button" className="px-2 py-0.5 hover:bg-[#F1F5F9]">-</button>
                    </div>
                  </div>

                  {/* Interactive Ward Polygons (SVG) */}
                  <svg
                    viewBox="0 0 500 400"
                    className="w-full h-full max-w-[500px] z-10 cursor-pointer"
                  >
                    {/* Huruma Ward (Amber) */}
                    <g onClick={() => setSelectedWard('huruma')}>
                      <polygon
                        points="20,240 100,240 140,290 80,360 20,320"
                        fill="rgba(245, 158, 11, 0.45)"
                        stroke="#F59E0B"
                        strokeWidth={selectedWard === 'huruma' ? '3' : '1.5'}
                        className="transition-all hover:opacity-90"
                      />
                      <rect x="35" y="275" width="76" height="20" rx="10" fill="#EF4444" />
                      <text x="73" y="289" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">
                        Huruma ward
                      </text>
                    </g>

                    {/* Ngei Ward (Blue) */}
                    <g onClick={() => setSelectedWard('ngei')}>
                      <polygon
                        points="80,180 220,140 240,280 140,290 100,240"
                        fill="rgba(99, 102, 241, 0.45)"
                        stroke="#6366F1"
                        strokeWidth={selectedWard === 'ngei' ? '3' : '1.5'}
                        className="transition-all hover:opacity-90"
                      />
                      <rect x="145" y="240" width="68" height="20" rx="10" fill="#EF4444" />
                      <text x="179" y="254" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">
                        Ngei ward
                      </text>
                    </g>

                    {/* Kiamaiko Ward (Green with Dashed Red Perimeter) */}
                    <g onClick={() => setSelectedWard('kiamaiko')}>
                      <polygon
                        points="220,140 370,140 380,300 240,280"
                        fill="rgba(16, 185, 129, 0.45)"
                        stroke="#EF4444"
                        strokeWidth="3"
                        strokeDasharray="6 4"
                        className="transition-all hover:opacity-90"
                      />
                      <rect x="270" y="200" width="78" height="20" rx="10" fill="#EF4444" />
                      <text x="309" y="214" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">
                        Kiamaiko ward
                      </text>
                    </g>
                  </svg>

                  {/* Bottom Map Legend & Summary */}
                  <div className="absolute bottom-3 left-3 z-20 flex flex-col gap-1.5">
                    <div className="bg-white/95 backdrop-blur-xs border border-[#CBD5E1] rounded-xl p-2.5 shadow-xs flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-[#FEE2E2] text-[#EF4444] flex items-center justify-center font-bold text-xs">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-[#1E293B]">Risk summary</div>
                        <div className="text-[10px] text-[#64748B]">Review wards flagged for flood alerts.</div>
                        <div className="text-[11px] font-extrabold text-[#0F172A]">6 flagged wards</div>
                      </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-xs border border-[#CBD5E1] rounded-full px-3 py-1 text-[10px] font-medium text-[#334155] flex items-center gap-1.5 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                      <span>High-risk ward (UFN &gt; 0.13 in one or more grids)</span>
                    </div>
                  </div>
                </div>

                {/* Selected Ward Inspector Panel (Right side of Map) */}
                <div className="w-full md:w-64 bg-white border border-[#E2E8F0] rounded-xl p-3.5 flex flex-col text-[#0F172A] shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2 mb-2.5">
                    <h5 className="font-extrabold text-sm text-[#0F172A]">
                      {wardData[selectedWard].name}
                    </h5>
                    <span className="text-xs text-[#94A3B8] font-mono cursor-pointer">✕</span>
                  </div>

                  <div className="space-y-1.5 text-[11px] text-[#334155] mb-3">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Avg UFN (interim-weighted)</span>
                      <span className="font-bold font-mono text-[#0F172A]">{wardData[selectedWard].avgUfn}</span>
                    </div>
                    <div className="text-[10px] text-[#94A3B8]">
                      Based on {wardData[selectedWard].polygons}
                    </div>
                    <div className="flex justify-between pt-1 border-t border-[#F8FAFC]">
                      <span className="text-[#64748B]">Schools</span>
                      <span className="font-bold font-mono text-[#0F172A]">{wardData[selectedWard].schools}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Total POIs</span>
                      <span className="font-bold font-mono text-[#0F172A]">{wardData[selectedWard].totalPois}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Roads</span>
                      <span className="font-mono text-[#0F172A]">{wardData[selectedWard].roads}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Waterways</span>
                      <span className="font-mono text-[#0F172A]">{wardData[selectedWard].waterways}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Buildings</span>
                      <span className="font-mono text-[#0F172A]">{wardData[selectedWard].buildings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Registered users</span>
                      <span className="font-bold font-mono text-[#0F172A]">{wardData[selectedWard].registeredUsers}</span>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono uppercase font-bold text-[#64748B] mb-1.5">
                    POI breakdown
                  </div>
                  <div className="flex-1 overflow-y-auto max-h-40 space-y-1 pr-1 text-[11px] font-mono">
                    {wardData[selectedWard].pois.map((poi, idx) => (
                      <div key={idx} className="flex justify-between py-0.5 border-b border-[#F8FAFC]">
                        <span className="text-[#64748B]">{poi.label}</span>
                        <span className="font-bold text-[#0F172A]">{poi.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: "WHAT TERRASAT DOES" Card */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-[#CBD5E1] p-6 text-[#0F172A] shadow-xs flex flex-col justify-between">
                <div>
                  <Badge variant="outline" className="bg-[#DCFCE7] text-[#15803D] border-[#86EFAC] text-[10px] font-mono uppercase font-bold mb-3">
                    WHAT TERRASAT DOES
                  </Badge>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-2 leading-tight">
                    Prediction, action, and prevention in one workflow
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                    Terrasat helps Mathare anticipate flood risk early, coordinate response quickly, and support preventive work that reduces damage to homes, roads, and drainage systems.
                  </p>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-xs font-bold text-[#0F172A] mb-1">Prediction</div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Uses ward-level flood indicators and geospatial data to flag areas that may become vulnerable.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-xs font-bold text-[#0F172A] mb-1">Action</div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Turns those insights into maintenance tasks and operational follow-up so teams can respond faster.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-xs font-bold text-[#0F172A] mb-1">Prevention</div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Supports drainage clearing, infrastructure protection, and long-term resilience before severity increases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= TAB 2: WARD ALERT & SHELTER DISPATCH ================= */}
        {activeTab === 'alerts' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Intro description */}
            <div className="bg-[#162926] p-4 sm:p-5 rounded-2xl border border-[#2B4543] flex items-center justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
                  Automated Ward Early Warning Dispatch
                </div>
                <div className="text-xs text-[#D6E3DE] mt-1">
                  Connecting satellite hydrology warnings with safe-space amenity routing and waterborne contamination health alerts.
                </div>
              </div>
              <Badge variant="outline" className="bg-[#14B8A6]/20 text-[#14B8A6] border-[#14B8A6]/40 text-xs font-mono">
                Real-Time Dispatch Feed
              </Badge>
            </div>

            {/* Card 1: Mlango Kubwa ward */}
            <div className="bg-white rounded-2xl border-l-4 border-l-[#EF4444] border-y border-r border-[#E2E8F0] p-6 text-[#0F172A] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Mlango Kubwa ward
                </h4>
                <span className="text-xs font-mono text-[#64748B]">
                  455 high-risk grid(s) · 68 safe grid(s) nearby
                </span>
              </div>

              {/* Status Chips */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#FEF2F2] border border-[#FCA5A5] text-[#DC2626]">
                  0 registered users to notify
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#FFFBEB] border border-[#FCD34D] text-[#D97706]">
                  41 water points at risk
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#ECFDF5] border border-[#6EE7B7] text-[#059669]">
                  3 shelters proposed
                </span>
              </div>

              {/* Proposed Shelters */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                  <span className="font-bold text-[#1E293B]">Destiny Community School</span>{' '}
                  <span className="text-[10px] font-mono text-[#64748B] ml-1">SCHOOL</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                  <span className="font-bold text-[#1E293B]">St Teresas girls primary and secondary school</span>{' '}
                  <span className="text-[10px] font-mono text-[#64748B] ml-1">SCHOOL</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                  <span className="font-bold text-[#1E293B]">Muradi Social Hall</span>{' '}
                  <span className="text-[10px] font-mono text-[#64748B] ml-1">COMMUNITY_CENTRE</span>
                </div>
              </div>

              {/* Warning Alert Box */}
              <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E] leading-relaxed mb-4 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  <strong>41 water point(s)</strong> in this ward's high-risk grids may face flood contamination. SMS will include a cholera-prevention warning; full point list available for the inspection team on request.
                </span>
              </div>

              {/* Action Button */}
              <Button
                disabled
                variant="outline"
                className="rounded-lg bg-[#E2E8F0] text-[#64748B] border-[#CBD5E1] text-xs cursor-not-allowed"
              >
                Send alert to 0 user(s)
              </Button>
            </div>

            {/* Card 2: Hospital ward */}
            <div className="bg-white rounded-2xl border-l-4 border-l-[#EF4444] border-y border-r border-[#E2E8F0] p-6 text-[#0F172A] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Hospital ward
                </h4>
                <span className="text-xs font-mono text-[#64748B]">
                  375 high-risk grid(s) · 522 safe grid(s) nearby
                </span>
              </div>

              {/* Status Chips */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#FEF2F2] border border-[#FCA5A5] text-[#DC2626]">
                  1 registered users to notify
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#FFFBEB] border border-[#FCD34D] text-[#D97706]">
                  80 water points at risk
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#ECFDF5] border border-[#6EE7B7] text-[#059669]">
                  3 shelters proposed
                </span>
              </div>

              {/* Proposed Shelters */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                  <span className="font-bold text-[#1E293B]">Marhari Primary School</span>{' '}
                  <span className="text-[10px] font-mono text-[#64748B] ml-1">SCHOOL</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                  <span className="font-bold text-[#1E293B]">St Teresa'S Girls ECDE</span>{' '}
                  <span className="text-[10px] font-mono text-[#64748B] ml-1">KINDERGARTEN</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                  <span className="font-bold text-[#1E293B]">Edie Nursery School</span>{' '}
                  <span className="text-[10px] font-mono text-[#64748B] ml-1">KINDERGARTEN</span>
                </div>
              </div>

              {/* Warning Alert Box */}
              <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E] leading-relaxed mb-4 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  <strong>80 water point(s)</strong> in this ward's high-risk grids may face flood contamination. SMS will include a cholera-prevention warning; full point list available for the inspection team on request.
                </span>
              </div>

              {/* Action Button */}
              <Button
                variant="default"
                className="rounded-lg bg-[#38BDF8] hover:bg-[#0284C7] text-[#11201D] font-bold text-xs"
              >
                Send alert to 1 registered user
              </Button>
            </div>
          </motion.div>
        )}

        {/* ================= TAB 3: MAINTENANCE TASK DASHBOARD (KANBAN) ================= */}
        {activeTab === 'tasks' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-[#CBD5E1] p-5 sm:p-6 text-[#0F172A] shadow-xs"
          >
            {/* Top Bar matching screenshot */}
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#11201D] flex items-center justify-center p-1 shrink-0 shadow-xs">
                  <Logo size={18} showWordmark={false} emblemClassName="text-[#CFF4A7]" />
                </div>
                <span className="text-sm font-bold text-[#0F172A]">Terrasat</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-[#64748B]">
                <span className="hover:text-[#0F172A] cursor-pointer">Map View</span>
                <span className="hover:text-[#0F172A] cursor-pointer">Risk Dashboard</span>
                <span className="bg-[#0F172A] text-white px-3 py-1 rounded-full font-bold">Tasks</span>
              </div>
            </div>

            {/* Dashboard Title & Meta */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <Badge variant="outline" className="bg-[#E6F4EA] text-[#137333] border-[#CEEAD6] text-[10px] font-mono uppercase font-bold mb-1.5">
                  OPERATIONS
                </Badge>
                <h4 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Maintenance Task Dashboard
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                  Community-reported issues (blocked drainage, water hazards, etc.), triaged here. Marking a task Resolved sends an SMS back to whoever reported it.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-mono text-[#94A3B8]">Updated 3:27:51 PM</span>
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-xs font-medium text-[#334155] shadow-2xs"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* 5-Column Kanban Board */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
              {/* Column 1: REPORTED */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3 flex flex-col min-h-[300px]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#D97706] mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                    REPORTED
                  </span>
                  <span>0</span>
                </div>
                <div className="flex-1 flex items-center justify-center border border-dashed border-[#CBD5E1] rounded-lg text-xs text-[#94A3B8] p-4 text-center">
                  Nothing here
                </div>
              </div>

              {/* Column 2: VERIFIED */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3 flex flex-col min-h-[300px]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#2563EB] mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    VERIFIED
                  </span>
                  <span>0</span>
                </div>
                <div className="flex-1 flex items-center justify-center border border-dashed border-[#CBD5E1] rounded-lg text-xs text-[#94A3B8] p-4 text-center">
                  Nothing here
                </div>
              </div>

              {/* Column 3: IN PROGRESS */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3 flex flex-col min-h-[300px]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#7C3AED] mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    IN PROGRESS
                  </span>
                  <span>0</span>
                </div>
                <div className="flex-1 flex items-center justify-center border border-dashed border-[#CBD5E1] rounded-lg text-xs text-[#94A3B8] p-4 text-center">
                  Nothing here
                </div>
              </div>

              {/* Column 4: RESOLVED (7) */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3 flex flex-col min-h-[300px] space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#059669] mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                    RESOLVED
                  </span>
                  <span>7</span>
                </div>

                {/* Card 1 */}
                <div className="bg-white rounded-xl border border-[#CBD5E1] p-3 shadow-2xs text-left">
                  <span className="inline-block text-[9px] font-mono uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#475569] mb-1.5">
                    BROKEN/CONTAMINATED WATER POINT
                  </span>
                  <div className="font-bold text-xs text-[#0F172A]">Hospital ward</div>
                  <div className="text-[11px] text-[#475569] italic bg-[#F8FAFC] p-1.5 rounded mt-1 mb-2">
                    Near Blue Star shop
                  </div>
                  <div className="text-[9px] font-mono text-[#94A3B8] space-y-0.5">
                    <div>Reported 2026-08-13 07:23</div>
                    <div>Resolved 2026-08-13 07:28</div>
                    <div className="text-[#059669] font-bold">📞 +254794629179</div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border border-[#CBD5E1] p-3 shadow-2xs text-left">
                  <span className="inline-block text-[9px] font-mono uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#475569] mb-1.5">
                    OTHER
                  </span>
                  <div className="font-bold text-xs text-[#0F172A]">Kiamaiko ward</div>
                  <div className="text-[11px] text-[#475569] italic bg-[#F8FAFC] p-1.5 rounded mt-1 mb-2">
                    Burst drainage past kamukunji
                  </div>
                  <div className="text-[9px] font-mono text-[#94A3B8] space-y-0.5">
                    <div>Reported 2026-08-13 05:37</div>
                    <div>Resolved 2026-08-13 05:38</div>
                    <div className="text-[#059669] font-bold">📞 +254711514180</div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl border border-[#CBD5E1] p-3 shadow-2xs text-left">
                  <span className="inline-block text-[9px] font-mono uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#475569] mb-1.5">
                    BROKEN/CONTAMINATED WATER POINT
                  </span>
                  <div className="font-bold text-xs text-[#0F172A]">Mabatini ward</div>
                  <div className="text-[11px] text-[#475569] italic bg-[#F8FAFC] p-1.5 rounded mt-1 mb-2">
                    The Shofco water point is contaminated near mama...
                  </div>
                </div>
              </div>

              {/* Column 5: REJECTED */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3 flex flex-col min-h-[300px]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#64748B] mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#64748B]" />
                    REJECTED
                  </span>
                  <span>0</span>
                </div>
                <div className="flex-1 flex items-center justify-center border border-dashed border-[#CBD5E1] rounded-lg text-xs text-[#94A3B8] p-4 text-center">
                  Nothing here
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= TAB 4: ZERO-SMARTPHONE USSD FEATURE PHONE ================= */}
        {activeTab === 'ussd' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4"
          >
            {/* Left Explanation Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <Badge variant="outline" className="bg-[#CFF4A7]/15 text-[#CFF4A7] border-[#CFF4A7]/30 text-xs font-mono uppercase">
                Zero Smartphone Dependency
              </Badge>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Basic Phone USSD Gateway in Swahili, Sheng &amp; English
              </h4>
              <p className="text-sm sm:text-base text-[#D6E3DE] leading-relaxed">
                Informal settlement residents in Mathare do not require high-end smartphones, mobile data, or app store downloads. USSD flash dialogs execute instantaneously over GSM cellular networks at zero cost to the resident.
              </p>

              {/* Interactive Step Navigator */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase text-[#A4B8B2]">Click step to preview dialog:</div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setUssdStep(1)}
                    className={`p-3 rounded-xl border text-left text-xs font-mono cursor-pointer transition-all ${
                      ussdStep === 1
                        ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white font-bold'
                        : 'bg-[#162926] border-[#2B4543] text-[#A4B8B2] hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] text-[#38BDF8]">Step 01</div>
                    Language Select
                  </button>
                  <button
                    type="button"
                    onClick={() => setUssdStep(2)}
                    className={`p-3 rounded-xl border text-left text-xs font-mono cursor-pointer transition-all ${
                      ussdStep === 2
                        ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white font-bold'
                        : 'bg-[#162926] border-[#2B4543] text-[#A4B8B2] hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] text-[#38BDF8]">Step 02</div>
                    Karibu Main Menu
                  </button>
                  <button
                    type="button"
                    onClick={() => setUssdStep(3)}
                    className={`p-3 rounded-xl border text-left text-xs font-mono cursor-pointer transition-all ${
                      ussdStep === 3
                        ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white font-bold'
                        : 'bg-[#162926] border-[#2B4543] text-[#A4B8B2] hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] text-[#38BDF8]">Step 03</div>
                    Ward Selection
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#142623] border border-[#2B4543] text-xs text-[#CFF4A7] font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CFF4A7] shrink-0" />
                <span>Active Language: {ussdLanguage} · Verified across all 6 Mathare wards</span>
              </div>
            </div>

            {/* Right Phone Mockup matching screenshots 4, 5, 6 */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-[280px] sm:w-[320px] h-[580px] sm:h-[620px] bg-[#1E293B] rounded-[40px] border-[6px] border-[#334155] p-2 relative shadow-2xl flex flex-col justify-between overflow-hidden">
                {/* Phone Speaker & Camera Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-[#0F172A] rounded-full z-30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1E293B]" />
                </div>

                {/* Dialpad Backdrop (Dimmed like screenshot) */}
                <div className="absolute inset-0 bg-[#8894A0]/60 z-0 flex flex-col justify-end p-6 pb-12 select-none pointer-events-none">
                  <div className="grid grid-cols-3 gap-6 text-center text-white/50 text-xl font-bold mb-6">
                    <div>*</div>
                    <div>0<br /><span className="text-[9px]">+</span></div>
                    <div>#</div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#16A34A] flex items-center justify-center text-white">
                      <Phone className="w-5 h-5 fill-white" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-4 h-4 rounded bg-white/40" />
                  </div>
                </div>

                {/* USSD Modal Dialog Box (Exact match to Screenshots 4, 5, 6) */}
                <div className="relative z-10 my-auto bg-white rounded-2xl p-5 shadow-2xl text-[#1E293B] text-left">
                  {ussdStep === 1 && (
                    <div>
                      <div className="text-sm font-medium text-[#1E293B] leading-relaxed mb-3">
                        Choose language / Chagua lugha:<br />
                        1. English<br />
                        2. Kiswahili<br />
                        3. Sheng
                      </div>
                      <form onSubmit={handleUssdSubmit}>
                        <input
                          type="text"
                          value={ussdInput}
                          onChange={(e) => setUssdInput(e.target.value)}
                          placeholder="Type 1, 2, or 3..."
                          className="w-full border-b-2 border-[#94A3B8] pb-1 text-sm font-mono focus:outline-none focus:border-[#0284C7] mb-5 text-[#0F172A]"
                          autoFocus
                        />
                        <div className="flex items-center justify-end gap-5 text-xs font-bold text-[#EA580C]">
                          <button
                            type="button"
                            onClick={() => setUssdStep(1)}
                            className="hover:opacity-80 uppercase cursor-pointer"
                          >
                            CANCEL
                          </button>
                          <button
                            type="submit"
                            className="hover:opacity-80 uppercase cursor-pointer text-[#EA580C]"
                          >
                            SEND
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {ussdStep === 2 && (
                    <div>
                      <div className="text-sm font-medium text-[#1E293B] leading-relaxed mb-3">
                        Karibu TerraSat.<br />
                        1. Sajili/badilisha wodi yangu<br />
                        2. Jiondoe<br />
                        3. Ripoti tatizo
                      </div>
                      <form onSubmit={handleUssdSubmit}>
                        <input
                          type="text"
                          value={ussdInput}
                          onChange={(e) => setUssdInput(e.target.value)}
                          placeholder="Type 1 to register ward..."
                          className="w-full border-b-2 border-[#94A3B8] pb-1 text-sm font-mono focus:outline-none focus:border-[#0284C7] mb-5 text-[#0F172A]"
                          autoFocus
                        />
                        <div className="flex items-center justify-end gap-5 text-xs font-bold text-[#EA580C]">
                          <button
                            type="button"
                            onClick={() => setUssdStep(1)}
                            className="hover:opacity-80 uppercase cursor-pointer"
                          >
                            CANCEL
                          </button>
                          <button
                            type="submit"
                            className="hover:opacity-80 uppercase cursor-pointer text-[#EA580C]"
                          >
                            SEND
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {ussdStep === 3 && (
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-[#1E293B] leading-relaxed mb-3">
                        Chagua wodi yako (hii itabadilisha eneo lako lililohifadhiwa):<br />
                        1. Hospital ward<br />
                        2. Huruma ward<br />
                        3. Kiamaiko ward<br />
                        4. Mabatini ward<br />
                        5. Mlango Kubwa ward<br />
                        6. Ngei ward
                      </div>
                      <form onSubmit={handleUssdSubmit}>
                        <input
                          type="text"
                          value={ussdInput}
                          onChange={(e) => setUssdInput(e.target.value)}
                          placeholder="Type ward number (1-6)..."
                          className="w-full border-b-2 border-[#94A3B8] pb-1 text-sm font-mono focus:outline-none focus:border-[#0284C7] mb-5 text-[#0F172A]"
                          autoFocus
                        />
                        <div className="flex items-center justify-end gap-5 text-xs font-bold text-[#EA580C]">
                          <button
                            type="button"
                            onClick={() => setUssdStep(2)}
                            className="hover:opacity-80 uppercase cursor-pointer"
                          >
                            CANCEL
                          </button>
                          <button
                            type="submit"
                            className="hover:opacity-80 uppercase cursor-pointer text-[#EA580C]"
                          >
                            SEND
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
