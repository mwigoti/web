import React from 'react';
import { ArrowLeft, ArrowRight, Waves, Sprout, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface ProductCrossLinkProps {
  currentProduct: 'terrafarm' | 'newis';
  onNavigate: (view: 'home' | 'terrafarm' | 'newis') => void;
  onRequestDemo?: () => void;
}

export const ProductCrossLink: React.FC<ProductCrossLinkProps> = ({
  currentProduct,
  onNavigate,
  onRequestDemo,
}) => {
  const isTerraFarm = currentProduct === 'terrafarm';

  return (
    <section className="py-16 sm:py-20 bg-[#0E1A18] border-t border-[#253D3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="p-8 sm:p-10 rounded-3xl bg-[#162A27] border border-[#2B4543] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#CFF4A7] font-semibold mb-2 flex items-center gap-2">
              <span>TerraSat Climate Intelligence Suite</span>
              <span className="text-[#A4B8B2]">·</span>
              <span>Also Available</span>
            </div>
            {isTerraFarm ? (
              <>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  <Waves className="w-6 h-6 text-[#38BDF8]" />
                  <span>Looking for Urban Flood Early Warning?</span>
                </h3>
                <p className="text-sm text-[#D6E3DE] leading-relaxed font-normal">
                  Explore <strong className="text-white">NEWIS</strong> (Nairobi Early Warning &amp; Intervention System) — turning satellite rainfall, hydraulic models, and IoT stream gauges into ward-level SMS/USSD alerts and safe evacuation routing.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  <Sprout className="w-6 h-6 text-[#CFF4A7]" />
                  <span>Looking for Agricultural MRV &amp; EUDR Compliance?</span>
                </h3>
                <p className="text-sm text-[#D6E3DE] leading-relaxed font-normal">
                  Explore <strong className="text-white">Terra Farm</strong> — satellite and IoT MRV that eliminates $140/farm manual audits and generates automated TRACES-ready Due Diligence Statements for European Union customs.
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => {
                onNavigate(isTerraFarm ? 'newis' : 'terrafarm');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#CFF4A7] text-[#1D3130] font-headline font-bold text-sm hover:bg-[#bce68f] active:scale-[0.98] transition-all cursor-pointer shadow-md"
            >
              <span>{isTerraFarm ? 'Explore NEWIS System' : 'Explore Terra Farm'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#11201D] border border-[#2B4543] text-xs font-mono text-[#E7EFE5] hover:text-white hover:border-[#CFF4A7]/40 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#CFF4A7]" />
              <span>Back to Overview</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
