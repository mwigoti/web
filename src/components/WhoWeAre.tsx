import React from 'react';
import { Mail, Linkedin, Satellite, Quote } from 'lucide-react';
import { Reveal } from './Reveal';
import { Badge } from '@/src/components/ui/badge';
import { Card } from '@/src/components/ui/card';

export const WhoWeAre: React.FC = () => {
  const teamMembers = [
    {
      name: 'Brian Gillo',
      role: 'Co-Founder · Project Lead',
      bio: 'Product developer and systems engineer working at the convergence of artificial intelligence, climate intelligence, and satellite Earth observation. Brian leads platform strategy and user-centered design, dedicated to applying advanced machine learning and satellite pipelines to environmental monitoring, early action protocols, and inclusive decision-making across Africa.',
      email: 'briangillo.co@gmail.com',
      linkedin: 'https://www.linkedin.com/in/brian-gillo-571a4822a/',
    },
    {
      name: 'Henry Mwoha',
      role: 'Co-Founder · CTO',
      bio: 'Geospatial engineer and technology strategist specializing in human-centered design, technical project management, space technology, and tech entrepreneurship. Henry leads TerraSat’s technical execution and product development, turning satellite Earth observation and user research into intuitive, scalable digital platforms that solve critical ground-level challenges.',
      email: 'henrymwoha02@gmail.com',
      linkedin: 'https://www.linkedin.com/in/henry-mwoha/',
    },
    {
      name: 'Vivian Muchire',
      role: 'Co-Founder · COO',
      bio: 'Software engineer and operations leader operating at the vital intersection of operational management and software engineering. Vivian leads cross-functional workflows, product deployment, and institutional partnerships, ensuring TerraSat’s software architecture and field operations run with precision, resilience, and reliability across Africa.',
      email: 'vivianmuchire@gmail.com',
      linkedin: 'https://www.linkedin.com/in/vivian-muchire/',
    },
    {
      name: 'Salome Wanjiru',
      role: 'Co-Founder · CMO',
      bio: 'Geospatial engineer and data-driven governance advocate specializing in spatial intelligence, environmental monitoring, and youth civic engagement. Salome excels at transforming complex satellite Earth observation datasets into clear, decision-ready intelligence and leading community engagement initiatives that strengthen climate risk awareness across Africa.',
      email: 'salome.terrasat@gmail.com',
      linkedin: 'https://www.linkedin.com/in/salome-wanjiru-498252320/',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-28 bg-[#11201D] text-white border-b border-[#253D3A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="mb-4">
              <Badge variant="default" className="text-xs font-semibold font-mono uppercase tracking-wider py-1 px-3 gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11201D]" />
                <span>Who We Are</span>
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              The people building TerraSat.
            </h2>
            <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
              TerraSat Impact Co. Limited is a Kenyan climate risk intelligence company built by engineers, geospatial specialists, and researchers who believe early warning should mean early action — not just early information. We work from the satellite down to the last mile, because that's where climate risk is actually lived.
            </p>
          </Reveal>
        </div>

        {/* Mission & Vision: Shortened in One Sentence with Big Speechmarks */}
        <div className="mb-20">
          <Reveal>
            <div className="relative rounded-3xl bg-[#162A27] border border-[#2B4543] p-8 sm:p-12 md:p-14 overflow-hidden shadow-2xl">
              {/* Giant background speechmark watermark */}
              <div
                aria-hidden="true"
                className="absolute -top-6 -left-2 sm:left-4 text-[#CFF4A7]/10 font-serif text-[120px] sm:text-[160px] md:text-[200px] leading-none select-none pointer-events-none"
              >
                “
              </div>

              <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Pill Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <Badge variant="default" className="text-xs font-semibold font-mono uppercase tracking-wider py-1 px-3 bg-[#11201D] text-[#CFF4A7] border border-[#2B4543] shadow-sm">
                    <Quote className="w-3.5 h-3.5 text-[#CFF4A7]" />
                    <span>Mission &amp; Vision</span>
                  </Badge>
                </div>

                {/* Shortened single sentence in big quotation speechmarks */}
                <blockquote className="relative my-2 sm:my-4">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-relaxed">
                    <span className="text-[#CFF4A7] text-4xl sm:text-5xl md:text-6xl font-serif font-black align-top mr-1">“</span>
                    To turn satellite Earth observation and ground intelligence into community-ready action — powering sustainable livelihoods, food systems, and a thriving, climate-resilient economy across Africa.
                    <span className="text-[#CFF4A7] text-4xl sm:text-5xl md:text-6xl font-serif font-black align-bottom ml-1">”</span>
                  </p>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Team Grid */}
        <div className="mb-8">
          <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-[#CFF4A7] border-[#CFF4A7]/30 mb-3 py-1 px-3 font-semibold">
            Leadership &amp; Engineering Team
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-10">
            Pioneering space tech for African resilience
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <Reveal key={member.name} delay={idx * 0.1}>
              <Card className="p-6 sm:p-8 rounded-3xl bg-[#152724] border-2 border-[#2B4543] text-white flex flex-col justify-between hover:border-[#CFF4A7]/60 transition-all duration-300 shadow-lg hover:shadow-2xl h-full">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight">{member.name}</h4>
                      <div className="text-xs font-mono text-[#CFF4A7] font-semibold mt-1">
                        {member.role}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#1A312D] border border-[#375855] flex items-center justify-center text-[#CFF4A7] shrink-0 shadow-xs">
                      <Satellite className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D6E3DE] leading-relaxed mt-4 mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#253E3D] flex flex-wrap items-center gap-4 text-xs font-mono">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-[#D6E3DE] hover:text-[#CFF4A7] transition-colors break-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#CFF4A7] shrink-0" />
                      <span>{member.email}</span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#D6E3DE] hover:text-[#38BDF8] transition-colors shrink-0"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
