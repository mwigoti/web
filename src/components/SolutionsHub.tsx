import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  summary: string;
  highlight: string;
  onExplore: () => void;
}

interface SolutionsHubProps {
  onExploreTerraFarm: () => void;
  onExploreNewis: () => void;
  onRequestDemo?: () => void;
}

export const SolutionsHub: React.FC<SolutionsHubProps> = ({
  onExploreTerraFarm,
  onExploreNewis,
}) => {
  // Scalable product list: Easily add product 3, 4, etc. without layout breakdown
  const products: ProductItem[] = [
    {
      id: 'terrafarm',
      name: 'Terra Farm',
      category: 'Agriculture & Forest Monitoring',
      summary:
        'Continuous satellite verification for tea, coffee, and agricultural supply chains. Enables cooperatives and exporters to confirm farm boundaries and guarantee deforestation-free compliance.',
      highlight: 'Guaranteed compliance documentation with verified farm mapping',
      onExplore: onExploreTerraFarm,
    },
    {
      id: 'newis',
      name: 'NEWIS',
      category: 'Early Warning & Flood Response',
      summary:
        'Real-time flood alerts designed for vulnerable communities and river settlements. Translates satellite weather and river sensor readings into straightforward text messages and safe evacuation guidance.',
      highlight: 'Delivers accessible phone alerts without needing mobile data or smartphones',
      onExplore: onExploreNewis,
    },
  ];

  return (
    <section
      id="solutions"
      aria-label="Solutions"
      className="py-20 sm:py-28 bg-[#F7F9F5] text-[#11201D] border-b border-[#D8DFD5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Human-Centered Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1A532E] mb-3">
              Our Products
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#11201D] leading-tight">
              Actionable insights, built for Africa.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475B55] leading-relaxed">
              We translate satellite observation and ground sensors into reliable tools that protect communities, secure agricultural trade, and build climate resilience.
            </p>
          </Reveal>
        </div>

        {/* Scalable, Defined Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.08} className="h-full">
              <div
                onClick={product.onExplore}
                className="group h-full bg-white rounded-3xl border border-[#CBD5E1] hover:border-[#1A532E] p-6 sm:p-8 lg:p-10 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-0.5"
              >
                <div>
                  {/* Category Label */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8ECE4] mb-6 text-xs text-[#697D76]">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F2F5EF] border border-[#D8DFD5] font-semibold uppercase tracking-wider text-[#1A532E] text-[11px]">
                      {product.category}
                    </span>
                    <span className="text-[#899C94] font-medium group-hover:text-[#11201D] transition-colors flex items-center gap-1">
                      Explore Product →
                    </span>
                  </div>

                  {/* Title & Human Summary */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#11201D] mb-3 group-hover:text-[#1A532E] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#475B55] leading-relaxed mb-8">
                    {product.summary}
                  </p>
                </div>

                {/* Bottom Highlight & Simple CTA */}
                <div className="pt-6 border-t border-[#E8ECE4]">
                  <p className="text-xs sm:text-sm font-medium text-[#11201D] mb-4 bg-[#F8FAF6] p-3 rounded-xl border border-[#E5ECE3]">
                    {product.highlight}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A532E] group-hover:translate-x-0.5 transition-transform">
                    <span>Learn more about {product.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
