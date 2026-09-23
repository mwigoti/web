import React, { useState } from 'react';
import { HeartHandshake, TreePine, TrendingUp, Users } from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';
import { Card } from '@/src/components/ui/card';

export const SocialImpactSection: React.FC = () => {
  const [activeStory, setActiveStory] = useState<'inclusion' | 'resilience' | 'forests'>('inclusion');

  const impactMetrics = [
    {
      metric: '100%',
      label: 'Smallholder Export Inclusion',
      desc: 'Ensuring zero smallholder families are dropped by European buyers due to compliance barriers.',
    },
    {
      metric: '$120+',
      label: 'Saved Per Farm in Audit Costs',
      desc: 'Replaces exorbitant $150 third-party manual surveys with continuous digital satellite coverage.',
    },
    {
      metric: '35%',
      label: 'Potential Harvest Loss Averted',
      desc: 'Early satellite moisture stress flags allow agronomists to intervene before crop failure.',
    },
    {
      metric: '0.00 ha',
      label: 'Indigenous Forest Disturbance',
      desc: 'Continuous satellite verification guarantees agricultural boundaries do not encroach on forests.',
    },
  ];

  return (
    <section id="social-impact" className="py-24 bg-[#152522] text-[#E7EFE5] border-b border-[#253E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-3">
            <Badge variant="default" className="text-xs font-semibold uppercase tracking-wider py-1 px-3 gap-2">
              <span className="w-2 h-2 rounded-full bg-[#11201D]" />
              <span>Social &amp; Environmental Impact</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
            Technology designed to protect farmers, not displace them.
          </h2>
          <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
            New global environmental mandates like the EU Deforestation Regulation (EUDR) were written to heal the planet. 
            Yet without accessible digital tools, they risk disenfranchising the very people who nurture the land: 
            Africa&apos;s smallholder farming families. TerraFarm turns compliance from a penalty into an economic shield.
          </p>
        </div>

        {/* 4 Key Social Impact Metrics (Editorial Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {impactMetrics.map((item) => (
            <Card
              key={item.label}
              className="bg-[#1D3130] border-2 border-[#2B4543] hover:border-[#CFF4A7]/50 p-6 rounded-2xl flex flex-col justify-between text-white shadow-md hover:shadow-xl transition-all duration-200"
            >
              <div>
                <span className="font-headline text-3xl sm:text-4xl font-bold tabular-nums text-[#CFF4A7] block mb-2">
                  {item.metric}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-[#A4B8B2] leading-relaxed pt-3 border-t border-[#253E3D]">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* Interactive Impact Dimensions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: 3 Pillar Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <button
              type="button"
              onClick={() => setActiveStory('inclusion')}
              className={`text-left p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                activeStory === 'inclusion'
                  ? 'bg-[#1D3130] border-[#CFF4A7] shadow-lg ring-1 ring-[#CFF4A7]/50'
                  : 'bg-[#152522] border-[#2B4543] hover:border-[#CFF4A7]/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#CFF4A7]" />
                <h3 className="font-headline text-lg font-bold text-white">
                  Smallholder Market Inclusion
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#D6E3DE] leading-relaxed">
                Preventing international buyers from cutting smallholders out of supply chains in favor of large corporate plantations.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveStory('resilience')}
              className={`text-left p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                activeStory === 'resilience'
                  ? 'bg-[#1D3130] border-[#CFF4A7] shadow-lg ring-1 ring-[#CFF4A7]/50'
                  : 'bg-[#152522] border-[#2B4543] hover:border-[#CFF4A7]/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-[#CFF4A7]" />
                <h3 className="font-headline text-lg font-bold text-white">
                  Farmer Livelihood Resilience
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#D6E3DE] leading-relaxed">
                Catching soil drought and vegetative anomalies early, empowering local agronomists to safeguard household harvest yields.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveStory('forests')}
              className={`text-left p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                activeStory === 'forests'
                  ? 'bg-[#1D3130] border-[#CFF4A7] shadow-lg ring-1 ring-[#CFF4A7]/50'
                  : 'bg-[#152522] border-[#2B4543] hover:border-[#CFF4A7]/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <TreePine className="w-5 h-5 text-[#CFF4A7]" />
                <h3 className="font-headline text-lg font-bold text-white">
                  Biodiversity &amp; Forest Stewardship
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#D6E3DE] leading-relaxed">
                Safeguarding indigenous forest perimeters and river corridors without burdening smallholders with expensive paperwork.
              </p>
            </button>
          </div>

          {/* Right Column: Case Story Card with Authentic Photo */}
          <Card className="lg:col-span-7 bg-[#1D3130] border-2 border-[#2B4543] rounded-2xl overflow-hidden flex flex-col justify-between text-white p-0 shadow-xl">
            {activeStory === 'inclusion' && (
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
                    alt="African agricultural community members and smallholder coffee growers"
                    className="w-full h-full object-cover filter brightness-[0.85]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D3130] via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant="outline" className="px-3 py-1 bg-[#152522]/90 border-[#2B4543] text-xs font-mono text-[#CFF4A7]">
                      Nyeri County Coffee Cooperative
                    </Badge>
                    <span className="text-xs text-white/90 font-mono">1,240 Farming Households</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <Badge variant="outline" className="text-xs font-mono uppercase text-[#CFF4A7] border-[#CFF4A7]/40 tracking-wider mb-2">
                    Social Equity in Global Trade
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                    Defending smallholders against unfair market lockout
                  </h3>
                  <p className="text-sm text-[#D6E3DE] leading-relaxed mb-6 font-normal">
                    When European buyers announced zero-deforestation mandates, smallholder coffee societies faced an existential crisis: hiring manual surveyors at $150 per farm would consume up to 40% of their annual operating budget. TerraFarm mapped all 1,240 parcels via satellite, producing cryptographically sealed proof of zero deforestation and securing their long-term supply contracts.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#253E3D] text-xs">
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Farmer Retention</span>
                      <span className="font-semibold text-white">100% Retained in Export</span>
                    </div>
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Survey Savings</span>
                      <span className="font-semibold text-[#CFF4A7]">$186,000 Saved</span>
                    </div>
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Audit Readiness</span>
                      <span className="font-semibold text-white">EU Traces-NT Validated</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStory === 'resilience' && (
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80"
                    alt="Lush agricultural contour terraces under regenerative smallholder management"
                    className="w-full h-full object-cover filter brightness-[0.85]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D3130] via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant="outline" className="px-3 py-1 bg-[#152522]/90 border-[#2B4543] text-xs font-mono text-[#CFF4A7]">
                      Mount Kenya Outgrowers
                    </Badge>
                    <span className="text-xs text-white/90 font-mono">Horticultural Smallholders</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <Badge variant="outline" className="text-xs font-mono uppercase text-[#CFF4A7] border-[#CFF4A7]/40 tracking-wider mb-2">
                    Climate Adaptation &amp; Food Security
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                    Preventing crop failure before wilting begins
                  </h3>
                  <p className="text-sm text-[#D6E3DE] leading-relaxed mb-6 font-normal">
                    Smallholders often recognize drought damage only when foliage is dry and brittle — by which time harvest yields are already permanently halved. TerraFarm&apos;s multi-spectral satellite passes calculate vegetative water stress weeks before the human eye can notice it, allowing cooperative extension agents to intervene with mulching, irrigation scheduling, and soil amendments in time.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#253E3D] text-xs">
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Early Warning</span>
                      <span className="font-semibold text-white">18 Days Lead Time</span>
                    </div>
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Yield Protection</span>
                      <span className="font-semibold text-[#CFF4A7]">+32% Average Recovery</span>
                    </div>
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Field Dispatches</span>
                      <span className="font-semibold text-white">Zero Wasted Trips</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStory === 'forests' && (
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80"
                    alt="Forested buffer zone and tea plantation border in East Africa"
                    className="w-full h-full object-cover filter brightness-[0.85]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D3130] via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant="outline" className="px-3 py-1 bg-[#152522]/90 border-[#2B4543] text-xs font-mono text-[#CFF4A7]">
                      Mau Forest Ecosystem Buffer
                    </Badge>
                    <span className="text-xs text-white/90 font-mono">Riparian Corridor Protection</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <Badge variant="outline" className="text-xs font-mono uppercase text-[#CFF4A7] border-[#CFF4A7]/40 tracking-wider mb-2">
                    Environmental Protection
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                    Verifying regenerative agriculture and zero deforestation
                  </h3>
                  <p className="text-sm text-[#D6E3DE] leading-relaxed mb-6 font-normal">
                    Agriculture should regenerate landscapes rather than erode them. TerraFarm monitors canopy cover density, shade tree retention, and riparian river buffers in real time. Because the satellite record preserves historical continuity dating back to 2020, sustainable cooperatives can definitively prove zero encroachment to international certifiers and carbon markets.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#253E3D] text-xs">
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Forest Buffer</span>
                      <span className="font-semibold text-[#CFF4A7]">100% Intact</span>
                    </div>
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Shade Tree Cover</span>
                      <span className="font-semibold text-white">34.2% Verified</span>
                    </div>
                    <div>
                      <span className="text-[#A4B8B2] block mb-0.5 font-mono">Certification</span>
                      <span className="font-semibold text-white">Rainforest Alliance Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Commitment Statement Footer */}
        <div className="mt-12 p-6 rounded-xl bg-[#1D3130] border border-[#2B4543] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-5 h-5 text-[#CFF4A7] shrink-0" />
            <p className="text-xs sm:text-sm text-[#E7EFE5]">
              <span className="font-semibold text-white">TerraSat Impact Commitment:</span> We ensure digital MRV remains affordable for farmer producer organizations and smallholder cooperatives across Kenya, Uganda, Rwanda, and Tanzania.
            </p>
          </div>
          <Badge variant="outline" className="text-xs font-mono text-[#CFF4A7] border-[#CFF4A7]/30 uppercase tracking-wider shrink-0 py-1 px-3">
            Fair Agri-Tech Principles
          </Badge>
        </div>
      </div>
    </section>
  );
};
