import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';

interface SolutionsHubProps {
  onExploreTerraFarm: () => void;
  onExploreNewis: () => void;
  onRequestDemo?: () => void;
}

export const SolutionsHub: React.FC<SolutionsHubProps> = ({
  onExploreTerraFarm,
  onExploreNewis,
}) => {
  return (
    <section id="solutions" className="py-20 sm:py-24 bg-[#F7F9F5] text-[#11201D] border-b border-[#D8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Reveal>
            <div className="mb-4">
              <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider py-1 px-3 gap-2 bg-[#EAF5EC] text-[#1A532E] border-[#BCDDC3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A532E]" />
                <span>Our Solutions</span>
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#11201D] leading-tight mb-4">
              One platform. Two frontlines of climate risk.
            </h2>
            <p className="text-base sm:text-lg text-[#475B55] leading-relaxed font-normal">
              Whether guarding urban settlements from flash floods or verifying remote smallholder acreage for EU export compliance, TerraSat unites spaceborne remote sensing, hyper-local IoT ground truth, and AI.
            </p>
          </Reveal>
        </div>

        {/* Dual Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Solution 01: Terra Farm */}
          <Reveal className="h-full">
            <Card className="h-full flex flex-col justify-between p-8 rounded-3xl bg-white border-[#D8DFD5] relative overflow-hidden group hover:border-[#1A532E]/40 transition-all shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <Badge variant="outline" className="text-xs font-mono font-bold py-1 px-3 bg-[#EAF5EC] text-[#1A532E] border-[#BCDDC3]">
                    <span>Product 01 · Agricultural Verification</span>
                  </Badge>
                  <span className="text-xs font-mono text-[#475B55]">EUDR &amp; Smallholder MRV</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#11201D] mb-1">
                  Terra Farm
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#1A532E] font-semibold mb-4">
                  Satellite &amp; IoT Monitoring, Reporting &amp; Verification
                </p>
                <p className="text-sm sm:text-base text-[#475B55] leading-relaxed mb-6 font-normal">
                  Continuous satellite and ground truth MRV for climate-smart agriculture. Built first for Kenya's coffee and tea sectors, Terra Farm provides cooperatives and exporters with the verified polygon cadastre, December 2020 deforestation baselines, and automated dossiers required by EU customs.
                </p>

                {/* 4 Steps */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                  {['01 · Monitor', '02 · Analyse', '03 · Flag', '04 · Verify'].map((step, i) => (
                    <div key={i} className="px-3 py-2 rounded-xl bg-[#F7F9F5] border border-[#D8DFD5] text-[11px] font-mono font-semibold text-center text-[#1A532E]">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#E8ECE4] flex items-center justify-between">
                <span className="text-xs font-mono text-[#475B55] font-medium">82% Cost Reduction vs Manual</span>
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  onClick={onExploreTerraFarm}
                  className="rounded-full bg-[#EAF5EC] hover:bg-[#D8EBD9] border border-[#BCDDC3] text-[#1A532E] font-headline font-bold text-xs gap-2 shadow-xs cursor-pointer"
                >
                  <span>Explore Terra Farm</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1A532E]" />
                </Button>
              </div>
            </Card>
          </Reveal>

          {/* Solution 02: NEWIS */}
          <Reveal delay={0.15} className="h-full">
            <Card className="h-full flex flex-col justify-between p-8 rounded-3xl bg-white border-[#D8DFD5] relative overflow-hidden group hover:border-[#1A532E]/40 transition-all shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <Badge variant="outline" className="text-xs font-mono font-bold py-1 px-3 bg-[#EAF5EC] text-[#1A532E] border-[#BCDDC3]">
                    <span>Product 02 · Flood Early Warning</span>
                  </Badge>
                  <span className="text-xs font-mono text-[#475B55]">Informal Settlement Protection</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#11201D] mb-1">
                  NEWIS
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#1A532E] font-semibold mb-4">
                  Nairobi Early Warning &amp; Intervention System
                </p>
                <p className="text-sm sm:text-base text-[#475B55] leading-relaxed mb-6 font-normal">
                  Flood warnings that tell you not just that danger is coming, but exactly where to go. Built for informal settlements along the Mathare River corridor, NEWIS turns satellite flood data into ward-level SMS and USSD alerts, safe-space routing, and coordinated community responder queues.
                </p>

                {/* 4 Steps */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                  {['01 · Warn', '02 · Guide', '03 · Act', '04 · Protect'].map((step, i) => (
                    <div key={i} className="px-3 py-2 rounded-xl bg-[#F7F9F5] border border-[#D8DFD5] text-[11px] font-mono font-semibold text-center text-[#1A532E]">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#E8ECE4] flex items-center justify-between">
                <span className="text-xs font-mono text-[#475B55] font-medium">No Smartphone Required</span>
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  onClick={onExploreNewis}
                  className="rounded-full bg-[#EAF5EC] hover:bg-[#D8EBD9] border border-[#BCDDC3] text-[#1A532E] font-headline font-bold text-xs gap-2 shadow-xs cursor-pointer"
                >
                  <span>Explore NEWIS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1A532E]" />
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
