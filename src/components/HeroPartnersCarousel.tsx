import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ksaLogo from '../assets/partners/KENYA-SPACE-AGENCY.webp';
import uonLogo from '../assets/partners/University-of-Nairobi-logo-350x250.webp';
import c4dLogo from '../assets/partners/c4-head.webp';
import aiDevLogo from '../assets/partners/AI_for_sustainable_development.webp';
import efLogo from '../assets/partners/expertise-france.svg';

export interface PartnerLogo {
  id: string;
  name: string;
  role: string;
  src: string;
  alt: string;
}

const basePartners: PartnerLogo[] = [
  {
    id: 'ksa',
    name: 'Kenya Space Agency',
    role: 'National Space Authority · Earth Observation AI Payload',
    src: ksaLogo,
    alt: 'Kenya Space Agency',
  },
  {
    id: 'uon',
    name: 'University of Nairobi',
    role: 'Geospatial & Space Technology · Academic Validation',
    src: uonLogo,
    alt: 'University of Nairobi',
  },
  {
    id: 'c4d',
    name: 'C4DLab / 4D Innovation Centre',
    role: 'University Innovation Lab · Hydro-Telemetry Acceleration',
    src: c4dLogo,
    alt: 'C4DLab Innovation Centre',
  },
  {
    id: 'ai4sd',
    name: 'AI for Sustainable Development',
    role: 'AI Global Alliance · Climate & Environmental Intelligence',
    src: aiDevLogo,
    alt: 'AI for Sustainable Development',
  },
  {
    id: 'ef',
    name: 'Expertise France',
    role: 'Groupe AFD · International Climate Resilience Cooperation',
    src: efLogo,
    alt: 'Expertise France (Groupe AFD)',
  },
];

// Quadrupled partners array to guarantee continuous, infinite, jitter-free revolving across all screens
const partners: PartnerLogo[] = [
  ...basePartners.map((p) => ({ ...p, id: `${p.id}-1` })),
  ...basePartners.map((p) => ({ ...p, id: `${p.id}-2` })),
  ...basePartners.map((p) => ({ ...p, id: `${p.id}-3` })),
  ...basePartners.map((p) => ({ ...p, id: `${p.id}-4` })),
  ...basePartners.map((p) => ({ ...p, id: `${p.id}-5` })),
];

export const HeroPartnersCarousel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      skipSnaps: true,
    },
    [
      AutoScroll({
        speed: 1.25,
        startDelay: 200,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    const onAutoScrollPlay = () => setIsPlaying(true);
    const onAutoScrollStop = () => setIsPlaying(false);

    emblaApi.on('autoScroll:play', onAutoScrollPlay);
    emblaApi.on('autoScroll:stop', onAutoScrollStop);

    return () => {
      emblaApi.off('autoScroll:play', onAutoScrollPlay);
      emblaApi.off('autoScroll:stop', onAutoScrollStop);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [emblaApi]);

  return (
    <section
      id="hero-partners-carousel"
      aria-label="Strategic Partners & Ecosystem Alliances"
      className="relative z-20 w-full bg-[#F7F9F5] border-b border-[#D8DFD5] py-8 sm:py-10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle, harmonious micro-header matching page typography */}
        <div className="text-center mb-6">
          <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] font-bold text-[#1A532E]">
            Strategic Partners &amp; Ecosystem Alliances
          </p>
          <p className="text-xs sm:text-sm text-[#475B55] mt-1 font-normal">
            Supported &amp; co-developed with leading institutions
          </p>
        </div>

        {/* Continuously Revolving Floating Logos with Smooth Mask Gradients */}
        <div className="relative max-w-5xl mx-auto group/carousel">
          <div
            className="overflow-hidden py-2 cursor-grab active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
            ref={emblaRef}
          >
            <div className="flex items-center gap-10 sm:gap-14 md:gap-16 will-change-transform">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-none flex items-center justify-center py-1 transition-all duration-300 hover:scale-105"
                  title={`${partner.name} — ${partner.role}`}
                >
                  {/* Floating logo naturally integrated on the site canvas */}
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    loading="lazy"
                    className="h-12 sm:h-14 md:h-15 w-auto max-w-[190px] sm:max-w-[210px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 pointer-events-none filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.04)]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Minimal Navigation Arrows - subtly revealed on hover */}
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-[#D8DFD5] text-[#475B55] hover:text-[#11201D] hover:bg-white hover:border-[#1A532E]/40 transition-all cursor-pointer z-10 shadow-xs opacity-75 group-hover/carousel:opacity-100"
            aria-label="Previous partners"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-[#D8DFD5] text-[#475B55] hover:text-[#11201D] hover:bg-white hover:border-[#1A532E]/40 transition-all cursor-pointer z-10 shadow-xs opacity-75 group-hover/carousel:opacity-100"
            aria-label="Next partners"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroPartnersCarousel;
