import React, { useState } from 'react';
import { Layers, AlertTriangle, CheckCircle, Radio, MapPin, Calendar, ArrowUpRight, Satellite } from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/src/components/ui/tabs';

interface PortfolioData {
  id: string;
  name: string;
  location: string;
  crop: string;
  totalParcels: number;
  monitoredArea: string;
  farmerCount: string;
  savings: string;
  currentParcel: {
    code: string;
    farmer: string;
    area: string;
    coords: string;
    baselineNdvi: number;
    currentNdvi: number;
    anomalyPercent: number;
    soilMoisture: string;
    eudrStatus: 'VERIFIED' | 'FLAGGED';
    anomalyReason: string;
    fieldAction: string;
    officer: string;
    verificationTimestamp: string;
  };
}

export const MrvConsolePreview: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<number>(0);
  const [activeLayer, setActiveLayer] = useState<'ndvi' | 'eudr' | 'iot'>('ndvi');
  const [selectedMonth, setSelectedMonth] = useState<number>(3); // 0..4 (Jan, Mar, May, Jul, Sep)

  const portfolios: PortfolioData[] = [
    {
      id: 'nyeri-coffee',
      name: 'Nyeri Central Coffee Union',
      location: 'Central Highlands, Kenya',
      crop: 'SL28 Arabica Coffee',
      totalParcels: 1240,
      monitoredArea: '4,850 ha',
      farmerCount: '1,240 Smallholders Protected',
      savings: '$186,000 Audit Costs Saved',
      currentParcel: {
        code: 'TF-KE-NYE-0842',
        farmer: 'Gikuyu Farmers Cooperative · Plot 18',
        area: '3.4 ha',
        coords: '0.4281° S, 36.9512° E',
        baselineNdvi: 0.76,
        currentNdvi: 0.54,
        anomalyPercent: -28.9,
        soilMoisture: '18.2% VWC (Stress Alert)',
        eudrStatus: 'VERIFIED',
        anomalyReason: 'Canopy moisture deficit detected in terraced coffee block',
        fieldAction: 'Extension agronomist dispatched; drip line repaired & organic mulch applied',
        officer: 'E. Kariuki (Field Agronomist)',
        verificationTimestamp: '2026-08-28 · Verified & Signed',
      },
    },
    {
      id: 'mt-kenya-veg',
      name: 'Mt. Kenya Outgrowers Scheme',
      location: 'Meru County, Kenya',
      crop: 'Hass Avocado & French Beans',
      totalParcels: 820,
      monitoredArea: '2,400 ha',
      farmerCount: '820 Outgrowers Pre-Cleared',
      savings: '$123,000 Direct Savings',
      currentParcel: {
        code: 'TF-KE-MRU-0319',
        farmer: 'Katheri Smallholder Outgrower Cluster',
        area: '4.8 ha',
        coords: '0.0467° N, 37.6521° E',
        baselineNdvi: 0.81,
        currentNdvi: 0.79,
        anomalyPercent: -2.4,
        soilMoisture: '26.8% VWC (Optimal)',
        eudrStatus: 'VERIFIED',
        anomalyReason: 'Nominal canopy trajectory; 0.00 ha forest disturbance detected',
        fieldAction: 'Automated satellite clearance; no physical inspection needed',
        officer: 'Satellite Pass Pre-Clearance',
        verificationTimestamp: '2026-08-29 · Export Ready',
      },
    },
    {
      id: 'kericho-tea',
      name: 'Mau Basin Tea Producer Estate',
      location: 'Rift Valley, Kenya',
      crop: 'Highland Clonal Tea',
      totalParcels: 450,
      monitoredArea: '3,800 ha',
      farmerCount: '450 Producer Families',
      savings: '$67,500 Audit Savings',
      currentParcel: {
        code: 'TF-KE-KRC-1102',
        farmer: 'Cheymen Division Outgrowers Block 04',
        area: '5.2 ha',
        coords: '0.3678° S, 35.2839° E',
        baselineNdvi: 0.84,
        currentNdvi: 0.61,
        anomalyPercent: -27.3,
        soilMoisture: '21.0% VWC (Moisture Low)',
        eudrStatus: 'FLAGGED',
        anomalyReason: 'Edge disturbance flagged within 50m of indigenous riparian buffer',
        fieldAction: 'Ground agent dispatched for GPS contour check & shade hedge verification',
        officer: 'D. Kiprono (Extension Officer)',
        verificationTimestamp: '2026-08-30 · Field Review Active',
      },
    },
  ];

  const current = portfolios[selectedPortfolio];
  const timelineMonths = ['Jan', 'Mar', 'May', 'Jul', 'Sep'];

  return (
    <div className="bg-[#152522] border border-[#2B4543] rounded-sm shadow-2xl overflow-hidden text-white font-body">
      {/* Top Console Navigation Bar */}
      <div className="bg-[#1D3130] border-b border-[#2B4543] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <Badge variant="default" className="flex items-center gap-2 py-1 px-3">
            <span className="w-2 h-2 rounded-full bg-[#4C8B5C] animate-pulse" />
            <span className="font-mono uppercase text-[#CFF4A7] font-semibold tracking-wider">
              MRV Console Live
            </span>
          </Badge>
          <span className="hidden sm:inline text-[#2B4543]">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-[#E7EFE5]/80 font-mono">
            <Satellite className="w-3.5 h-3.5 text-[#CFF4A7]" />
            <span>Sentinel-2 Revisit: 3d ago</span>
          </div>
        </div>

        {/* Portfolio Tabs using shadcn Button group */}
        <div className="flex items-center gap-1 bg-[#152522] p-1 rounded-xl border border-[#2B4543]">
          {portfolios.map((p, idx) => (
            <Button
              key={p.id}
              type="button"
              variant={selectedPortfolio === idx ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedPortfolio(idx)}
              className={`h-7 px-3 text-[11px] rounded-lg transition-all ${
                selectedPortfolio === idx
                  ? 'bg-[#CFF4A7] text-[#11201D] font-bold shadow-xs'
                  : 'text-[#A4B8B2] hover:text-white hover:bg-[#1D3130]'
              }`}
            >
              {p.id === 'nyeri-coffee' ? 'Nyeri Coffee' : p.id === 'mt-kenya-veg' ? 'Mt. Kenya Veg' : 'Kericho Tea'}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Console Layout: GIS Map Surface + Real-time Telemetry Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Visual GIS Inspection Canvas (7 cols) */}
        <div className="lg:col-span-7 relative bg-[#0E1B19] min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-4 sm:p-6 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#2B4543]">
          {/* Background Aerial Farmland with Geospatial Grid */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1600&q=80"
              alt="Geospatial satellite view of agricultural parcel contours and crop fields"
              className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.2]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#152522]/50 mix-blend-multiply" />
            {/* Coordinate Grid Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#CFF4A7_1px,transparent_1px),linear-gradient(to_bottom,#CFF4A7_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          {/* Canvas Top Bar: Active Parcel Badge & Layer Controls */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
            <div className="bg-[#152522]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#2B4543] text-xs flex items-center">
              <Badge variant="default" className="font-mono text-xs py-0.5 px-2">
                {current.currentParcel.code}
              </Badge>
              <span className="text-[#A4B8B2] mx-2">·</span>
              <span className="text-[#E7EFE5] font-medium">{current.currentParcel.area}</span>
              <span className="text-[#A4B8B2] mx-2">·</span>
              <span className="font-mono text-[10px] text-[#D6E3DE]">{current.currentParcel.coords}</span>
            </div>

            {/* Layer Toggles */}
            <div className="flex items-center gap-1 bg-[#152522]/90 backdrop-blur-md p-1 rounded-xl border border-[#2B4543] text-[11px]">
              <Button
                type="button"
                variant={activeLayer === 'ndvi' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveLayer('ndvi')}
                className={`h-6 px-2.5 rounded text-[11px] ${
                  activeLayer === 'ndvi' ? 'bg-[#CFF4A7] text-[#1D3130] font-bold' : 'text-[#A4B8B2] hover:text-white'
                }`}
              >
                NDVI Health
              </Button>
              <Button
                type="button"
                variant={activeLayer === 'eudr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveLayer('eudr')}
                className={`h-6 px-2.5 rounded text-[11px] ${
                  activeLayer === 'eudr' ? 'bg-[#CFF4A7] text-[#1D3130] font-bold' : 'text-[#A4B8B2] hover:text-white'
                }`}
              >
                EUDR Baseline
              </Button>
              <Button
                type="button"
                variant={activeLayer === 'iot' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveLayer('iot')}
                className={`h-6 px-2.5 rounded text-[11px] ${
                  activeLayer === 'iot' ? 'bg-[#CFF4A7] text-[#1D3130] font-bold' : 'text-[#A4B8B2] hover:text-white'
                }`}
              >
                IoT In-Situ
              </Button>
            </div>
          </div>

          {/* Center Graphic: Realistic Parcel Polygon with Spectral Heatmap Overlay */}
          <div className="relative z-10 my-auto py-6 flex items-center justify-center">
            <div className="relative w-72 sm:w-88 aspect-[4/3]">
              {/* Dynamic SVG Polygon boundary */}
              <svg viewBox="0 0 300 220" className="w-full h-full drop-shadow-xl">
                <defs>
                  {/* NDVI Gradient Texture */}
                  <linearGradient id="ndviGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4C8B5C" stopOpacity="0.75" />
                    <stop offset="55%" stopColor={current.currentParcel.anomalyPercent < -10 ? '#D97706' : '#65A30D'} stopOpacity="0.7" />
                    <stop offset="100%" stopColor={current.currentParcel.anomalyPercent < -20 ? '#DC2626' : '#4C8B5C'} stopOpacity="0.65" />
                  </linearGradient>
                  {/* Forest Buffer Safe Zone */}
                  <pattern id="safeBuffer" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 0 10 L 10 0 M 0 0 L 10 10" stroke="#CFF4A7" strokeWidth="0.75" opacity="0.3" />
                  </pattern>
                </defs>

                {/* Neighboring Reference Parcels */}
                <polygon points="10,20 110,15 95,80 15,75" fill="none" stroke="#2B4543" strokeWidth="1" strokeDasharray="3 3" />
                <polygon points="190,130 290,120 280,200 185,195" fill="none" stroke="#2B4543" strokeWidth="1" strokeDasharray="3 3" />

                {/* Primary Farm Polygon Under Observation */}
                <polygon
                  points="45,40 230,25 260,160 190,200 65,185 30,110"
                  fill={activeLayer === 'eudr' ? 'url(#safeBuffer)' : 'url(#ndviGradient)'}
                  stroke={activeLayer === 'eudr' ? '#CFF4A7' : '#CFF4A7'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* Verified Vertices */}
                {[[45, 40], [230, 25], [260, 160], [190, 200], [65, 185], [30, 110]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="#CFF4A7" stroke="#152522" strokeWidth="1.5" />
                ))}

                {/* EUDR 2020 Forest Baseline Demarcation Line */}
                {activeLayer === 'eudr' && (
                  <path
                    d="M 230,15 Q 275,100 295,210"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                    fill="none"
                  />
                )}
              </svg>

              {/* In-situ IoT Sensor Node Callout */}
              <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#152522]/95 border border-[#CFF4A7] text-[10px] font-mono text-[#CFF4A7] shadow-lg">
                  <Radio className="w-3 h-3 text-[#CFF4A7] animate-pulse" />
                  <span>IoT-02 · VWC 18.2%</span>
                </div>
              </div>

              {/* Anomaly Detection Marker */}
              {current.currentParcel.anomalyPercent < -10 && (
                <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 pointer-events-none animate-bounce">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#DC2626]/90 border border-white text-[10px] font-bold text-white shadow-xl">
                    <AlertTriangle className="w-3 h-3" />
                    <span>ANOMALY FLAGGED</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Canvas Bottom Bar: Timeline Scrubber & Spectral Legend */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-[#2B4543]/80 text-xs">
            {/* Spectral Health Legend */}
            <div className="flex items-center gap-2 text-[11px] text-[#D6E3DE]">
              <span className="font-mono text-[#A4B8B2]">NDVI Scale:</span>
              <div className="flex items-center gap-1">
                <span className="w-3 h-2 rounded-sm bg-[#DC2626]" />
                <span className="text-[10px] font-mono">0.3</span>
              </div>
              <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#DC2626] via-[#D97706] to-[#4C8B5C]" />
              <div className="flex items-center gap-1">
                <span className="w-3 h-2 rounded-sm bg-[#4C8B5C]" />
                <span className="text-[10px] font-mono">0.85</span>
              </div>
            </div>

            {/* Timeline Scrubber */}
            <div className="flex items-center gap-1 bg-[#152522] p-1 rounded border border-[#2B4543]">
              <Calendar className="w-3 h-3 text-[#CFF4A7] ml-1 mr-0.5" />
              {timelineMonths.map((m, idx) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(idx)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                    selectedMonth === idx
                      ? 'bg-[#CFF4A7] text-[#1D3130] font-bold'
                      : 'text-[#A4B8B2] hover:text-white'
                  }`}
                >
                  {m.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Audit Ledger & Agronomic Telemetry (5 cols) */}
        <div className="lg:col-span-5 p-6 bg-[#152522] flex flex-col justify-between">
          <div>
            {/* Header: Organization & Farm Summary */}
            <div className="border-b border-[#2B4543] pb-4 mb-4">
              <div className="text-[11px] font-mono uppercase text-[#A4B8B2] mb-1">
                {current.name}
              </div>
              <div className="text-sm font-semibold text-white">
                {current.currentParcel.farmer}
              </div>
              <div className="text-xs text-[#CFF4A7] mt-0.5 font-mono">
                {current.crop} · Total Portfolio: {current.monitoredArea} ({current.totalParcels} farms)
              </div>
            </div>

            {/* Clean Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#1D3130] p-3 rounded border border-[#2B4543]">
                <div className="text-[10px] font-mono uppercase text-[#A4B8B2] mb-1">
                  Vegetative Health (NDVI)
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold font-headline tabular-nums text-white">
                    {current.currentParcel.currentNdvi.toFixed(2)}
                  </span>
                  <span className="text-xs font-mono text-[#A4B8B2]">
                    / {current.currentParcel.baselineNdvi.toFixed(2)}
                  </span>
                </div>
                <div className={`text-[11px] font-mono mt-1 ${current.currentParcel.anomalyPercent < -10 ? 'text-[#DC2626]' : 'text-[#4C8B5C]'}`}>
                  {current.currentParcel.anomalyPercent > 0 ? '+' : ''}{current.currentParcel.anomalyPercent}% vs baseline
                </div>
              </div>

              <div className="bg-[#1D3130] p-3 rounded border border-[#2B4543]">
                <div className="text-[10px] font-mono uppercase text-[#A4B8B2] mb-1">
                  Deforestation Check
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  {current.currentParcel.eudrStatus === 'VERIFIED' ? (
                    <Badge variant="verified" className="py-0.5 px-2 text-xs font-bold font-headline">
                      <CheckCircle className="w-3.5 h-3.5 text-[#4C8B5C]" />
                      <span>EUDR Cleared</span>
                    </Badge>
                  ) : (
                    <Badge variant="warning" className="py-0.5 px-2 text-xs font-bold font-headline">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>Buffer Review</span>
                    </Badge>
                  )}
                </div>
                <div className="text-[10px] font-mono text-[#A4B8B2] mt-1.5">
                  0.00 ha Encroachment
                </div>
              </div>
            </div>

            {/* Targeted Ground Action & Audit Record */}
            <div className="bg-[#1D3130] p-3.5 rounded border border-[#2B4543] mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono uppercase text-[#CFF4A7]">
                  Targeted Agronomic Action
                </span>
                <Badge variant="verified" className="text-[10px] font-mono py-0 px-1.5">
                  <CheckCircle className="w-3 h-3 text-[#4C8B5C]" />
                  Verified
                </Badge>
              </div>
              <p className="text-xs text-[#E7EFE5] leading-relaxed mb-2">
                {current.currentParcel.fieldAction}
              </p>
              <div className="text-[10px] font-mono text-[#A4B8B2] flex items-center justify-between pt-2 border-t border-[#253E3D]">
                <span>Officer: <span className="text-white">{current.currentParcel.officer}</span></span>
                <span className="text-[#CFF4A7]">{current.currentParcel.verificationTimestamp}</span>
              </div>
            </div>

            {/* Direct Impact Badge */}
            <div className="bg-[#1D3130]/70 p-3 rounded border border-[#2B4543] mb-2 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#A4B8B2]">Smallholder Impact</div>
                <div className="text-xs font-semibold text-white mt-0.5">{current.farmerCount}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono uppercase text-[#4C8B5C]">Cooperative Value</div>
                <div className="text-xs font-bold font-mono text-[#CFF4A7] mt-0.5">{current.savings}</div>
              </div>
            </div>
          </div>

          {/* Bottom Audit Export CTA */}
          <div className="mt-3 pt-3 border-t border-[#2B4543] flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#A4B8B2]">
              Dossier: <span className="text-white">DDS-KE-2026-0842</span>
            </span>
            <div className="inline-flex items-center gap-1 text-xs font-mono text-[#CFF4A7] hover:underline cursor-pointer">
              <span>View Audit Packet</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
