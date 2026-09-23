import React from 'react';
import { Sprout, Activity, Wifi, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface MobileFieldBarProps {
  onRequestDemo: () => void;
  activeView: 'home' | 'terrafarm' | 'newis';
  onNavigate: (view: 'home' | 'terrafarm' | 'newis') => void;
}

export const MobileFieldBar: React.FC<MobileFieldBarProps> = ({
  onRequestDemo,
  activeView,
  onNavigate,
}) => {
  return (
    <div
      id="mobile-field-quick-bar"
      aria-label="Mobile Quick Field Bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#11201D]/95 backdrop-blur-md border-t border-[#2B4543] py-2.5 px-4 shadow-2xl"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Quick Nav Button: Switch or View Active Field */}
        <button
          type="button"
          onClick={() => onNavigate(activeView === 'terrafarm' ? 'home' : 'terrafarm')}
          className="flex-1 py-2 px-3 rounded-xl bg-[#182B27] border border-[#2B4543] text-white flex items-center justify-center gap-1.5 text-xs font-medium cursor-pointer"
        >
          <Sprout className="w-3.5 h-3.5 text-[#CFF4A7]" />
          <span>{activeView === 'terrafarm' ? 'Main View' : 'TerraFarm App'}</span>
        </button>

        {/* Offline Status Badge */}
        <div className="px-2.5 py-2 rounded-xl bg-[#162623] border border-[#2B4543] flex items-center gap-1 text-[11px] font-mono text-[#CFF4A7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
          <span>Online</span>
        </div>

        {/* Primary High-Contrast Conversion CTA in Thumb-Zone */}
        <button
          type="button"
          onClick={onRequestDemo}
          className="flex-1 py-2 px-3 rounded-xl bg-[#CFF4A7] text-[#11201D] hover:bg-[#bce68f] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-transform active:scale-95"
        >
          <span>Start Cultivating</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
export default MobileFieldBar;
