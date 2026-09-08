import React from 'react';
import { Satellite, Radio, MapPin, Eye } from 'lucide-react';

export const DataSources: React.FC = () => {
  const sources = [
    {
      name: 'Copernicus Sentinel-2',
      category: 'Primary Satellite Constellation',
      spec: '10m spatial resolution · 5-day global revisit · 13 spectral bands',
      role: 'Continuous vegetative trajectory, moisture indices (NDVI/EVI), and baseline history.',
      icon: Satellite,
    },
    {
      name: 'Planet Labs (Selective High-Res)',
      category: 'Targeted High-Resolution EO',
      spec: '3m spatial resolution · daily cadence · tasking capability',
      role: 'Detailed plot-level boundary verification and rapid confirmation of flagged canopy gaps.',
      icon: Eye,
    },
    {
      name: 'In-Situ IoT Field Sensors',
      category: 'Ground Microclimate Telemetry',
      spec: 'Continuous telemetry · calibrated soil moisture & ag-weather',
      role: 'Ground truth calibration for evapotranspiration models and localized drought triggers.',
      icon: Radio,
    },
    {
      name: 'Targeted Ground Truth',
      category: 'Extension Officer Mobile App',
      spec: 'GPS-stamped inspection · offline sync · photographic audit logs',
      role: 'Physical verification and corrective agronomic intervention logged directly to the ledger.',
      icon: MapPin,
    },
  ];

  return (
    <section id="data-sources" className="py-16 bg-[#152522] text-white border-b border-[#2B4543]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#2B4543]/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#CFF4A7] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFF4A7]" />
              <span>Multi-Source Observation Infrastructure</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Grounded in Real, Continuous Observation Feeds
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#A4B8B2] max-w-md font-normal leading-relaxed">
            TerraFarm does not synthesize proxy data or make unverifiable assumptions.
            Every score and risk alert correlates calibrated multi-sensor inputs.
          </p>
        </div>

        {/* 4-Column Technical Data Source Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {sources.map((src) => {
            const Icon = src.icon;
            return (
              <div
                key={src.name}
                className="p-5 rounded-sm bg-[#1D3130] border border-[#2B4543] flex flex-col justify-between hover:border-[#CFF4A7]/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase text-[#A4B8B2]">
                      {src.category}
                    </span>
                    <Icon className="w-4 h-4 text-[#CFF4A7]" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {src.name}
                  </h4>
                  <div className="text-xs font-mono text-[#CFF4A7]/80 mb-3 leading-tight">
                    {src.spec}
                  </div>
                  <p className="text-xs text-[#D6E3DE] leading-relaxed">
                    {src.role}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#253E3D] flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#A4B8B2]">
                    Status
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#4C8B5C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4C8B5C]" />
                    Active Pipeline
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
