import React from 'react';
import { ArrowLeft, ArrowRight, Sprout, Waves, Compass } from 'lucide-react';

interface ProductBannerProps {
  currentProduct: 'terrafarm' | 'newis';
  onNavigate: (view: 'home' | 'terrafarm' | 'newis') => void;
}

export const ProductBanner: React.FC<ProductBannerProps> = ({ currentProduct, onNavigate }) => {
  const isTerraFarm = currentProduct === 'terrafarm';

  return (
    <div className="pt-24 pb-3 bg-[#0D1816] border-b border-[#253D3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          {/* Back button */}
          <button
            type="button"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152724] border border-[#2B4543] text-[#E7EFE5] hover:text-[#CFF4A7] hover:border-[#CFF4A7]/50 transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#CFF4A7] group-hover:-translate-x-0.5 transition-transform" />
            <span className="font-medium">Back to TerraSat Platform Overview</span>
          </button>

          {/* Product indicator and sibling switcher */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11201D] border border-[#2B4543] text-[11px]">
              {isTerraFarm ? (
                <>
                  <Sprout className="w-3 h-3 text-[#CFF4A7]" />
                  <span className="text-[#CFF4A7] font-semibold">Terra Farm</span>
                  <span className="text-[#A4B8B2]">· Product 01/02</span>
                </>
              ) : (
                <>
                  <Waves className="w-3 h-3 text-[#38BDF8]" />
                  <span className="text-[#38BDF8] font-semibold">NEWIS</span>
                  <span className="text-[#A4B8B2]">· Product 02/02</span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                onNavigate(isTerraFarm ? 'newis' : 'terrafarm');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-[11px] text-[#A4B8B2] hover:text-white transition-colors cursor-pointer"
            >
              <span>{isTerraFarm ? 'View NEWIS' : 'View Terra Farm'}</span>
              <ArrowRight className="w-3 h-3 text-[#CFF4A7]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
