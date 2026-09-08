import React from 'react';
import { Mail, Linkedin, Compass, Eye, ShieldCheck, Satellite } from 'lucide-react';
import { Reveal } from './Reveal';

export const WhoWeAre: React.FC = () => {
  const teamMembers = [
    {
      name: 'Brian Gillo',
      role: 'Co-Founder · Project Lead',
      bio: 'Product developer and software engineer with a background in human-centered research, working at the intersection of artificial intelligence, climate research, and Earth observation. Brian is a climate researcher focused on applying AI to environmental monitoring, climate resilience, and inclusive decision-making across African contexts. He has completed Nanosatellite CubeSat training in Malindi, delivered in collaboration with the Italian Space Agency (ASI) and the Kenya Space Agency (KSA).',
      email: 'gillobrian750@gmail.com',
      linkedin: 'https://www.linkedin.com/company/terrasatlive/',
    },
    {
      name: 'Henry Mwoha',
      role: 'Co-Founder · CTO',
      bio: 'Geospatial engineer and remote sensing specialist working at the intersection of Earth observation, artificial intelligence, and spatial decision support systems. Henry leads the design and implementation of TerraSat’s geospatial intelligence platforms — integrating remote sensing, GIS, and spatial data infrastructure. He has contributed to an AI spaceborne project collaboration between the Kenya Space Agency (KSA) and STAR.VISION.',
      email: 'mwoha@students.uonbi.ac.ke',
      linkedin: '',
    },
    {
      name: 'Vivian Muchire',
      role: 'Co-Founder · COO',
      bio: 'Software engineering professional specializing in building high-performance, user-friendly applications that simplify complex workflows, with technical expertise spanning Python (Django), Go, and Flutter. As COO, she bridges technical execution and operational delivery, translating space-data solutions into accessible tools. She holds a BSc in Software Engineering from the University of Eastern Africa, Baraton.',
      email: 'vivianmuchire@gmail.com',
      linkedin: 'https://linkedin.com/in/vivian-muchire',
    },
    {
      name: 'Salome Wanjiru',
      role: 'Co-Founder · CMO',
      bio: 'Geospatial Engineer specializing in spatial intelligence for environmental monitoring and disaster resilience. Salome transforms spaceborne data into decision-ready insights that strengthen climate risk awareness. She has collaborated in international geospatial spaces such as Geopalooza, serves as Vice Chair of the Women in Engineering Student Summit (WIESS), and is an active member of the Red Cross.',
      email: 'sallywain@students.uonbi.ac.ke',
      linkedin: '',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-28 bg-[#11201D] text-white border-b border-[#253D3A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFF4A7]/15 text-[#CFF4A7] border border-[#CFF4A7]/30 text-xs font-semibold font-mono uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFF4A7]" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              The people building TerraSat.
            </h2>
            <p className="text-base sm:text-lg text-[#D6E3DE] leading-relaxed font-normal">
              TerraSat Impact Co. Limited is a Kenyan climate risk intelligence company built by engineers, geospatial specialists, and researchers who believe early warning should mean early action — not just early information. We work from the satellite down to the last mile, because that's where climate risk is actually lived.
            </p>
          </Reveal>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Reveal className="p-8 rounded-3xl bg-[#162A27] border border-[#2B4543] relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#CFF4A7]/15 border border-[#CFF4A7]/30 flex items-center justify-center text-[#CFF4A7] mb-5">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-[#D6E3DE] leading-relaxed">
              To turn Earth observation and IoT data into practical, community-ready action — giving households, cooperatives, and institutions across Africa the risk intelligence they need before disaster strikes, not after.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="p-8 rounded-3xl bg-[#162A27] border border-[#2B4543] relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mb-5">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-[#D6E3DE] leading-relaxed">
              A future where every flood-prone community and every farm has access to verifiable, satellite-powered intelligence — starting in Kenya and Rwanda, and built to scale across the continent.
            </p>
          </Reveal>
        </div>

        {/* Team Grid */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CFF4A7] mb-2 font-semibold">
            Leadership &amp; Engineering Team
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-10">
            Pioneering space tech for African resilience
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, idx) => (
            <Reveal key={member.name} delay={idx * 0.1} className="p-8 rounded-3xl bg-[#162926] border border-[#2B4543] flex flex-col justify-between hover:border-[#CFF4A7]/40 transition-all shadow-md">
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <div className="text-xs font-mono text-[#CFF4A7] font-semibold mt-0.5">
                      {member.role}
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#1A312D] border border-[#2B4543] flex items-center justify-center text-[#CFF4A7]">
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
                    className="inline-flex items-center gap-1.5 text-[#D6E3DE] hover:text-[#CFF4A7] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#CFF4A7]" />
                    <span>{member.email}</span>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#D6E3DE] hover:text-[#38BDF8] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
