import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock, AlertTriangle, ShieldCheck, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { NewisSystemShowcase } from './NewisSystemShowcase';

interface NewisSectionProps {
  onRequestDemo: () => void;
}

export const NewisSection: React.FC<NewisSectionProps> = ({ onRequestDemo }) => {
  const wards = [
    'Mabatini',
    'Mlango Kubwa',
    'Hospital',
    'Utalii',
    'Huruma',
    'Ngei',
    'Kiamaiko',
  ];

  return (
    <section id="newis" className="py-24 sm:py-28 bg-[#101D1B] text-white border-b border-[#253D3A] relative overflow-hidden">
      {/* Dynamic Water & River Corridor Ambient Accents */}
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#38BDF8]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#14B8A6]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Product Badge & Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <Reveal className="max-w-3xl">
            <div className="mb-4">
              <Badge variant="outline" className="bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30 text-xs font-mono uppercase tracking-wider py-1 px-3 gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>Product 02 of 02 · NEWIS</span>
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Turning flood warnings into action, ward by ward.
            </h2>
            <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
              NEWIS — the Nairobi Early Warning &amp; Intervention System — doesn't just tell residents that flooding is coming. It tells them exactly where to go, in their own language, on the basic feature phone they already have.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center gap-3">
            <Button
              type="button"
              variant="default"
              size="lg"
              onClick={onRequestDemo}
              className="rounded-full bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#11201D] font-headline font-bold text-xs gap-2 shadow-md"
            >
              <span>Request NEWIS Pilot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </Reveal>
        </div>

        {/* The Problem Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <Reveal className="lg:col-span-7 bg-[#162926] border border-[#2B4543] p-7 sm:p-9 rounded-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-3 font-semibold">
              The Real-World Context
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Flood warnings that don't answer the question that matters.
            </h3>
            <p className="text-sm sm:text-base text-[#D6E3DE] leading-relaxed mb-6 font-normal">
              Mathare's informal settlement wards sit along a steep river corridor with dense, low-lying construction and limited drainage. Most residents rely on simple feature phones with tight airtime budgets, which rules out heavy smartphone applications completely.
            </p>

            <div className="p-5 rounded-2xl bg-[#11201D] border-l-4 border-[#38BDF8] text-sm text-[#E7EFE5] leading-relaxed mb-6">
              <span className="font-semibold text-white">Economic &amp; Human Reality: </span>
              Climate disasters cost Kenya approximately <span className="text-[#F59E0B] font-mono font-semibold">KES 186 billion/year</span> (~3% of GDP). But that number doesn't capture a family evacuating at 2 AM through rushing water, carrying children and documents with no way of knowing which alley is blocked.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Is my neighborhood at risk?',
                'Where is the nearest safe place?',
                'Which route is still accessible?',
                'What should responders do first?',
              ].map((q, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1D3330] border border-[#2D4A47] text-xs text-[#E7EFE5]">
                  <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Quick Metrics / Why USSD */}
          <Reveal delay={0.15} className="lg:col-span-5 flex flex-col justify-between bg-[#162926] border border-[#2B4543] p-7 sm:p-9 rounded-3xl">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#CFF4A7] mb-3 font-semibold">
                Universal Accessibility
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Zero Smartphone Dependency
              </h3>
              <p className="text-sm text-[#D6E3DE] leading-relaxed mb-6">
                Broadcasts operate over USSD and SMS. Alerts are localized into <span className="text-[#CFF4A7] font-semibold">Swahili, Sheng, and English</span> with specific ward-level coordinates and direct routing.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#11201D] border border-[#2B4543]">
                  <span className="text-[#A4B8B2]">Delivery Protocol</span>
                  <span className="text-[#38BDF8] font-bold">SMS + USSD Flash Alerts</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#11201D] border border-[#2B4543]">
                  <span className="text-[#A4B8B2]">Latency Target</span>
                  <span className="text-[#CFF4A7] font-bold">&lt; 180 seconds</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#11201D] border border-[#2B4543]">
                  <span className="text-[#A4B8B2]">Community Partner</span>
                  <span className="text-white">Mathare River Adoption Initiative</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#253E3D] mt-6">
              <div className="text-[11px] font-mono text-[#A4B8B2] mb-2 uppercase">
                Active Corridor Wards (Mathare)
              </div>
              <div className="flex flex-wrap gap-1.5">
                {wards.map((ward) => (
                  <Badge key={ward} variant="default" className="text-[11px] font-mono py-0.5 px-2.5 bg-[#1A312D] border-[#2B4543] text-[#CFF4A7]">
                    {ward}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Real Operational System Showcase: Screenshots & Interactive Simulators */}
        <Reveal>
          <NewisSystemShowcase />
        </Reveal>

        {/* 4-Stage Operational Cycle with Blended Whitish Background */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#F8FAF5] text-[#12201D] border border-[#D8DFD5] shadow-sm">
          <div className="mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0284C7] mb-2 font-semibold">
              The 4-Stage Operational Cycle
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12201D]">
              Covering the full disaster lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Step 1: WARN */}
            <Reveal className="h-full">
              <Card className="h-full p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#CBD5E1] text-[#12201D] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#1A532E]/60 transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#1A532E] font-bold tracking-wider">STAGE 01</span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EAF5EC] border border-[#BCDDC3] text-[#1A532E]">
                      WARN
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#11201D] mb-2">Register &amp; Alert</h4>
                  <p className="text-xs sm:text-sm text-[#475B55] leading-relaxed">
                    Residents register by ward and preferred language via USSD/SMS keyword, or via Community Health Worker bulk onboarding. Geo-targeted alerts dispatch immediately.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8ECE4] text-[11px] font-mono text-[#1A532E] font-medium">
                  Ward &amp; Polygon Dispatch
                </div>
              </Card>
            </Reveal>

            {/* Step 2: GUIDE */}
            <Reveal delay={0.1} className="h-full">
              <Card className="h-full p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#CBD5E1] text-[#12201D] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#1A532E]/60 transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#1A532E] font-bold tracking-wider">STAGE 02</span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EAF5EC] border border-[#BCDDC3] text-[#1A532E]">
                      GUIDE
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#11201D] mb-2">Route to Safety</h4>
                  <p className="text-xs sm:text-sm text-[#475B55] leading-relaxed">
                    A satellite flood grid is joined with open amenity points (schools, churches, clinics). Each alert dynamically guides residents to the nearest confirmed safe venue.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8ECE4] text-[11px] font-mono text-[#1A532E] font-medium">
                  Amenity Safe-Space Routing
                </div>
              </Card>
            </Reveal>

            {/* Step 3: ACT */}
            <Reveal delay={0.2} className="h-full">
              <Card className="h-full p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#CBD5E1] text-[#12201D] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#1A532E]/60 transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#1A532E] font-bold tracking-wider">STAGE 03</span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EAF5EC] border border-[#BCDDC3] text-[#1A532E]">
                      ACT
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#11201D] mb-2">Coordinate Response</h4>
                  <p className="text-xs sm:text-sm text-[#475B55] leading-relaxed">
                    Drainage clearing and safe-space checks run through a unified task queue for Community Health Workers and youth groups, backed by before/after photo verification.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8ECE4] text-[11px] font-mono text-[#1A532E] font-medium">
                  Photo-Verified Task Queue
                </div>
              </Card>
            </Reveal>

            {/* Step 4: PROTECT */}
            <Reveal delay={0.3} className="h-full">
              <Card className="h-full p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#CBD5E1] text-[#12201D] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#1A532E]/60 transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#1A532E] font-bold tracking-wider">STAGE 04</span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EAF5EC] border border-[#BCDDC3] text-[#1A532E]">
                      PROTECT
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#11201D] mb-2">Guard Public Health</h4>
                  <p className="text-xs sm:text-sm text-[#475B55] leading-relaxed">
                    The Waterborne Disease Risk Index (WDRI) tracks contamination that peaks days after waters recede — sending preventive advisories for cholera and water sanitation.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8ECE4] text-[11px] font-mono text-[#1A532E] font-medium">
                  Post-Flood WDRI Monitoring
                </div>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* Live Now vs. Coming Next */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Live Now */}
          <Reveal className="p-7 rounded-3xl bg-[#162926] border border-[#14B8A6]/40">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="verified" className="text-xs font-mono uppercase tracking-wider font-bold py-1 px-3 gap-2">
                <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                <span>Platform Status · Live Now</span>
              </Badge>
            </div>
            <ul className="space-y-3 text-sm text-[#D6E3DE]">
              {[
                'Ward-based registration via USSD, SMS, and CHW bulk-registration',
                'Ward- and polygon-based alert dispatch',
                'Amenity-level safe-space routing from satellite flood-risk data',
                'Shared CHW/youth-group task queue with photo verification',
                'Alerts localized in Swahili, Sheng, and English',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Coming Next */}
          <Reveal delay={0.15} className="p-7 rounded-3xl bg-[#162926] border border-[#F59E0B]/40">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="warning" className="text-xs font-mono uppercase tracking-wider font-bold py-1 px-3 gap-2">
                <Clock className="w-4 h-4 text-[#F59E0B]" />
                <span>Platform Status · Coming Next</span>
              </Badge>
            </div>
            <ul className="space-y-3 text-sm text-[#D6E3DE]">
              {[
                'Waterborne Disease Risk Index (WDRI) — flood, sanitation, and water-point exposure combined',
                'Automatic post-flood health messaging by ward',
                'Drainage-task prioritization driven by disease risk',
                'Expansion beyond Mathare to additional high-risk Nairobi wards',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
