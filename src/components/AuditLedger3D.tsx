import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';
import { ShieldCheck, Satellite, MapPin, Activity, CheckCircle, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';

interface LedgerLayer {
  id: string;
  level: number;
  name: string;
  tag: string;
  tagColor: string;
  icon: React.ElementType;
  description: string;
  telemetry: {
    label: string;
    value: string;
    status: 'good' | 'verified' | 'active';
  }[];
  accentColor: string;
  glowColor: string;
  previewGraphic: 'boundary' | 'baseline' | 'ndvi' | 'crypto';
}

export const AuditLedger3D: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Reactively detects when the user scrolls into the section or scrolls away
  const isInView = useInView(sectionRef, {
    amount: 0.3,
  });

  const [activeLayerId, setActiveLayerId] = useState<string>('layer-4');

  // Interactive 3D Orbit State for subtle cursor responsiveness
  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for buttery smooth mouse tilt
  const springConfig = { damping: 25, stiffness: 200, mass: 0.6 };
  
  // Clean, fixed isometric perspective angles
  const baseAngleX = 54;
  const baseAngleZ = -34;

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [baseAngleX - 8, baseAngleX + 8]), springConfig);
  const rotateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [baseAngleZ - 10, baseAngleZ + 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const layers: LedgerLayer[] = [
    {
      id: 'layer-1',
      level: 1,
      name: 'Ground Cadastral Polygon',
      tag: 'CADASTRAL BASE',
      tagColor: 'bg-emerald-950/80 text-[#CFF4A7] border-emerald-700/50',
      icon: MapPin,
      description: 'Physical smallholder boundary coordinates validated against land tenure registries and ground truth GPS surveys.',
      telemetry: [
        { label: 'Parcel ID', value: 'KE-NYR-8842', status: 'good' },
        { label: 'Registered Acreage', value: '1.42 ha (Coffee/Tea)', status: 'good' },
        { label: 'GPS Vertices', value: '14 Polygons (RTK ±2cm)', status: 'verified' },
      ],
      accentColor: '#4C8B5C',
      glowColor: 'rgba(76, 139, 92, 0.25)',
      previewGraphic: 'boundary',
    },
    {
      id: 'layer-2',
      level: 2,
      name: 'Dec 2020 Cutoff Baseline',
      tag: 'HISTORICAL ARCHIVE',
      tagColor: 'bg-teal-950/80 text-teal-300 border-teal-700/50',
      icon: Satellite,
      description: 'Historical multi-spectral radar and optical satellite synthesis verifying zero deforestation post-December 31, 2020.',
      telemetry: [
        { label: 'EUDR Cutoff Date', value: '31-Dec-2020', status: 'verified' },
        { label: 'Canopy Loss Since 2020', value: '0.00 ha (0%)', status: 'verified' },
        { label: 'Baseline Reference', value: 'Copernicus Sentinel-2 L2A', status: 'good' },
      ],
      accentColor: '#14B8A6',
      glowColor: 'rgba(20, 184, 166, 0.25)',
      previewGraphic: 'baseline',
    },
    {
      id: 'layer-3',
      level: 3,
      name: '5-Day Multi-Spectral IoT',
      tag: 'ACTIVE MONITORING',
      tagColor: 'bg-amber-950/80 text-amber-300 border-amber-700/50',
      icon: Activity,
      description: 'Continuous satellite passes calculating NDVI crop vigor and micro-climate stress paired with LoRaWAN ground sensors.',
      telemetry: [
        { label: 'Current NDVI Vigor', value: '0.76 (Healthy Canopy)', status: 'active' },
        { label: 'Last Satellite Pass', value: '2 hours ago (Sentinel-2B)', status: 'good' },
        { label: 'In-Situ Moisture', value: '28.4% Volumetric', status: 'active' },
      ],
      accentColor: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.25)',
      previewGraphic: 'ndvi',
    },
    {
      id: 'layer-4',
      level: 4,
      name: 'EUDR Customs Clearance',
      tag: 'CRYPTOGRAPHIC CERT',
      tagColor: 'bg-lime-950/80 text-[#CFF4A7] border-[#CFF4A7]/60',
      icon: ShieldCheck,
      description: 'Audit-ready Due Diligence Statement (DDS) compliant with EUDR Articles 9 & 10 with immutable SHA-256 cryptographic seal.',
      telemetry: [
        { label: 'Customs Clearance', value: 'VALIDATED FOR EXPORT', status: 'verified' },
        { label: 'Cryptographic Hash', value: '9f8a...3b21 (SHA-256)', status: 'verified' },
        { label: 'EU TRACES Upload', value: 'Automated Dossier Ready', status: 'good' },
      ],
      accentColor: '#CFF4A7',
      glowColor: 'rgba(207, 244, 167, 0.35)',
      previewGraphic: 'crypto',
    },
  ];

  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[3];

  // Elevation math: when in viewport -> exploded to 82px; when scrolled away -> condensed to 12px
  const getElevation = (level: number) => {
    if (!isInView) {
      return (level - 1) * 12; // condensed compact stack
    }
    return (level - 1) * 82; // expanded 3D exploded view
  };

  return (
    <section
      ref={sectionRef}
      id="audit-ledger-3d"
      className="py-20 sm:py-24 bg-[#11201D] text-white border-b border-[#253D3A] relative overflow-hidden"
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#CFF4A7]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#14B8A6]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title and Scroll Status Indicator */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-3xl">
            <div className="mb-4">
              <Badge variant="default" className="text-xs font-mono uppercase tracking-wider py-1 px-3 gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#CFF4A7]" />
                <span>Interactive 3D Multi-Layer Ledger</span>
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Inspect the 4-Layer Verification Slice.
            </h2>
            <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
              Every smallholder coffee or tea parcel is resolved through four synchronized spatial strata—from ground GPS coordinates to legal European customs clearance.
            </p>
          </Reveal>

          {/* Dynamic Scroll State Indicator */}
          <Reveal delay={0.15} className="flex items-center">
            <Badge variant="outline" className="text-xs font-mono py-1.5 px-4 bg-[#182C29] border-[#2B4543] text-[#D6E3DE] gap-2.5">
              <span
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  isInView
                    ? 'bg-[#CFF4A7] shadow-[0_0_10px_#CFF4A7]'
                    : 'bg-[#A4B8B2]'
                }`}
              />
              <span>{isInView ? 'Strata Exploded' : 'Strata Condensed'}</span>
            </Badge>
          </Reveal>
        </div>

        {/* 3D Stage & Interactive Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Clean Perspective Stage (no visual guides or grid clutter) */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 h-[460px] sm:h-[540px] rounded-3xl bg-[#162926]/90 border border-[#2B4543] relative overflow-hidden flex items-center justify-center p-6 select-none shadow-2xl"
            style={{ perspective: 1200 }}
          >
            {/* 3D Transform Root Assembly */}
            <motion.div
              style={{
                rotateX,
                rotateZ,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-[280px] sm:w-[360px] h-[240px] sm:h-[290px] flex items-center justify-center"
            >
              {/* 4 Multi-Layer Planes */}
              {layers.map((layer) => {
                const isSelected = layer.id === activeLayerId;
                const elevation = getElevation(layer.level);
                const LayerIcon = layer.icon;

                return (
                  <motion.div
                    key={layer.id}
                    onClick={() => setActiveLayerId(layer.id)}
                    animate={{
                      z: isSelected ? elevation + (isInView ? 16 : 4) : elevation,
                      scale: isSelected ? (isInView ? 1.03 : 1.01) : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 180, damping: 24, mass: 0.7 }}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: isSelected
                        ? `0 20px 40px -10px ${layer.glowColor}, 0 0 0 2px ${layer.accentColor}`
                        : '0 10px 25px -5px rgba(0,0,0,0.5)',
                    }}
                    className={`absolute inset-0 rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#1D3431]/95 border-[#CFF4A7] ring-2 ring-[#CFF4A7]/30'
                        : 'bg-[#182C29]/85 border-[#2A4744] hover:border-[#CFF4A7]/50 hover:bg-[#1C3330]'
                    }`}
                  >
                    {/* Layer Header Inside 3D Plane */}
                    <div className="flex items-center justify-between" style={{ transform: 'translateZ(10px)' }}>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/40 border border-white/10 text-[#E7EFE5]">
                          L0{layer.level}
                        </span>
                        <span className="text-xs font-bold text-white tracking-wide">
                          {layer.name}
                        </span>
                      </div>
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[#11201D] shadow-sm"
                        style={{ backgroundColor: layer.accentColor }}
                      >
                        <LayerIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Graphic Visualization Representation */}
                    <div
                      className="my-auto py-2 relative flex items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-black/25"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      {layer.previewGraphic === 'boundary' && (
                        <div className="w-full h-16 relative flex items-center justify-center">
                          <svg viewBox="0 0 200 80" className="w-full h-full text-[#4C8B5C]">
                            <polygon
                              points="30,20 85,15 170,30 150,70 60,65"
                              fill="rgba(76, 139, 92, 0.2)"
                              stroke="#CFF4A7"
                              strokeWidth="2"
                              strokeDasharray="4 2"
                            />
                            <circle cx="30" cy="20" r="4" fill="#CFF4A7" />
                            <circle cx="85" cy="15" r="4" fill="#CFF4A7" />
                            <circle cx="170" cy="30" r="4" fill="#CFF4A7" />
                            <circle cx="150" cy="70" r="4" fill="#CFF4A7" />
                            <circle cx="60" cy="65" r="4" fill="#CFF4A7" />
                          </svg>
                          <span className="absolute bottom-1 right-2 text-[9px] font-mono text-[#CFF4A7]">
                            14 Vertices · 1.42 ha
                          </span>
                        </div>
                      )}

                      {layer.previewGraphic === 'baseline' && (
                        <div className="w-full h-16 relative flex items-center justify-center px-4">
                          <div className="w-full h-10 rounded-lg bg-gradient-to-r from-emerald-900/60 via-teal-800/50 to-emerald-950/60 border border-teal-500/30 flex items-center justify-between px-3">
                            <span className="text-[10px] font-mono text-teal-300">Dec 31, 2020</span>
                            <span className="text-[10px] font-mono font-bold text-[#CFF4A7] bg-black/40 px-2 py-0.5 rounded-full">
                              0.00 ha Loss
                            </span>
                          </div>
                        </div>
                      )}

                      {layer.previewGraphic === 'ndvi' && (
                        <div className="w-full h-16 relative flex items-center justify-center px-3">
                          <div className="w-full flex flex-col gap-1">
                            <div className="flex justify-between text-[10px] font-mono text-amber-200">
                              <span>Sentinel-2 NDVI</span>
                              <span className="font-bold text-[#CFF4A7]">0.76 Vigor</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden p-0.5 border border-amber-500/20">
                              <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-[#CFF4A7] w-[76%]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {layer.previewGraphic === 'crypto' && (
                        <div className="w-full h-16 relative flex items-center justify-between px-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#CFF4A7]" />
                            <span className="text-[10px] font-mono font-bold text-white">
                              EUDR ART. 9 &amp; 10
                            </span>
                          </div>
                          <span className="text-[9px] font-mono bg-[#CFF4A7] text-[#11201D] font-bold px-2 py-0.5 rounded-full">
                            CUSTOMS SEALED
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Layer Footer Tag */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10" style={{ transform: 'translateZ(10px)' }}>
                      <span className="text-[10px] font-mono text-[#D6E3DE]">
                        {layer.telemetry[0].label}: <strong className="text-white">{layer.telemetry[0].value}</strong>
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-[#CFF4A7]">
                        Click to Inspect →
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Layer Inspector & Detailed Telemetry Panel */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Quick Layer Switcher Pills */}
            <div className="grid grid-cols-4 gap-2">
              {layers.map((l) => {
                const isSelected = l.id === activeLayerId;
                return (
                  <Button
                    key={l.id}
                    type="button"
                    variant={isSelected ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveLayerId(l.id)}
                    className={`h-auto py-2 px-2 flex-col rounded-xl text-center border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#CFF4A7] text-[#11201D] border-[#CFF4A7] hover:bg-[#bce68f]'
                        : 'bg-[#192E2B] text-[#D6E3DE] border-[#2B4543] hover:border-[#CFF4A7]/50 hover:bg-[#203834]'
                    }`}
                  >
                    <span className="block text-[10px] font-mono opacity-80 uppercase">Layer {l.level}</span>
                    <span className="block text-xs font-headline truncate font-semibold">
                      {l.level === 1 ? 'Cadastre' : l.level === 2 ? 'Baseline' : l.level === 3 ? 'NDVI' : 'EUDR Cert'}
                    </span>
                  </Button>
                );
              })}
            </div>

            {/* Main Inspection Card */}
            <Card className="bg-[#182C29] border-[#2B4543] rounded-3xl p-6 sm:p-7 shadow-xl text-white">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className={`text-[11px] font-mono font-bold uppercase tracking-wider py-1 px-3 ${activeLayer.tagColor}`}>
                  {activeLayer.tag}
                </Badge>
                <span className="text-xs font-mono text-[#A4B8B2]">
                  Stratum 0{activeLayer.level} of 04
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 font-headline">
                {activeLayer.name}
              </h3>

              <p className="text-sm text-[#D6E3DE] leading-relaxed mb-6 font-normal">
                {activeLayer.description}
              </p>

              {/* Telemetry Metrics Table */}
              <div className="space-y-3 mb-6">
                {activeLayer.telemetry.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#122220] border border-[#253E3B]"
                  >
                    <span className="text-xs font-mono text-[#D6E3DE]">
                      {t.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#CFF4A7] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CFF4A7] inline-block" />
                      {t.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action / Explanation Footer */}
              <div className="pt-4 border-t border-[#253E3B] flex items-center justify-between text-xs text-[#A4B8B2] font-mono">
                <span>Verification Engine: TerraFarm MRV-v2.4</span>
                <span className="text-[#CFF4A7] font-semibold flex items-center gap-1">
                  Ready for Port Customs <CheckCircle className="w-3.5 h-3.5" />
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
