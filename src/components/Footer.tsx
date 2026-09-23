import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowUpRight, CheckCircle, Mail, MapPin, Send, ShieldCheck, Award } from 'lucide-react';
import { Reveal } from './Reveal';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';

interface FooterProps {
  onRequestDemo?: () => void;
  onNavigate?: (view: 'home' | 'terrafarm' | 'newis') => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestDemo, onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    solution: 'Terra Farm (Agricultural MRV)',
    organization: '',
  });

  const handleNav = (view: 'home' | 'terrafarm' | 'newis', anchor?: string) => {
    if (onNavigate) {
      onNavigate(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (anchor) {
        setTimeout(() => {
          const el = document.querySelector(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-[#0E1A18] text-white border-t border-[#253D3A]">
      {/* Closing CTA & Contact Section */}
      <div className="py-16 sm:py-20 border-b border-[#253D3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <Reveal className="lg:col-span-6">
              <div className="mb-4">
                <Badge variant="default" className="text-xs font-mono uppercase tracking-wider py-1 px-3 gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CFF4A7] animate-pulse" />
                  <span>Early Warning &amp; Continuous Compliance</span>
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                Cultivating Africa's future with space technology.
              </h2>
              <p className="text-sm sm:text-base text-[#D6E3DE] leading-relaxed mb-6 font-normal">
                Schedule a technical walkthrough with our geospatial and agronomic intelligence team in Nairobi. We assess your coordinates, flood exposure, and compliance timelines.
              </p>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#253E3D]">
                <Badge variant="outline" className="text-xs font-mono py-1 px-3 bg-[#162926] border-[#2B4543] text-[#E7EFE5] gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#CFF4A7]" />
                  <span>Nairobi, Kenya</span>
                </Badge>
                <Badge variant="outline" className="text-xs font-mono py-1 px-3 bg-[#162926] border-[#2B4543] text-[#E7EFE5] gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#CFF4A7]" />
                  <a href="mailto:terrasat.impact@gmail.com" className="hover:text-[#CFF4A7] transition-colors">
                    terrasat.impact@gmail.com
                  </a>
                </Badge>
              </div>
            </Reveal>

            {/* Right Column: Inquiry Form Card with Clear Distinguishable Boundaries */}
            <Reveal delay={0.15} className="lg:col-span-6 bg-[#152724] border-2 border-[#2B4543] p-6 sm:p-8 md:p-9 rounded-3xl shadow-2xl">
              {formSubmitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#CFF4A7]/20 border border-[#CFF4A7] flex items-center justify-center mx-auto mb-3 text-[#CFF4A7]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Inquiry Confirmed
                  </h3>
                  <p className="text-sm text-[#E7EFE5]/90 max-w-sm mx-auto leading-relaxed mb-5">
                    Thank you, {formData.name || 'Partner'}. The TerraSat Impact team will contact you at <span className="text-[#CFF4A7] font-mono font-semibold">{formData.email}</span> within 24 hours.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-[#CFF4A7] hover:text-[#CFF4A7] rounded-full bg-[#11201D] border-[#2B4543]"
                  >
                    ← Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Request Technical Briefing
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9BB1A9]">
                      Confidential assessment for cooperatives, municipalities, insurers, and NGOs.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="solution-select" className="block text-xs font-mono uppercase text-[#E7EFE5]/90 mb-1.5 font-medium">
                      Solution Focus
                    </label>
                    <select
                      id="solution-select"
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-[#0F1E1B] border border-[#2F4F4B] text-sm text-white focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                    >
                      <option value="Terra Farm (Agricultural MRV)">Terra Farm · Agricultural MRV &amp; EUDR Compliance</option>
                      <option value="NEWIS (Flood Early Warning)">NEWIS · Flood Early Warning &amp; Safe Routing</option>
                      <option value="Both / Platform Partnership">TerraSat Enterprise Platform (Both)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-[#E7EFE5]/90 mb-1.5 font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="David Mwangi"
                        className="w-full px-3.5 py-3 rounded-xl bg-[#0F1E1B] border border-[#2F4F4B] text-sm text-white placeholder-[#759087] focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-xs font-mono uppercase text-[#E7EFE5]/90 mb-1.5 font-medium">
                        Organization
                      </label>
                      <input
                        id="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Organization / Union"
                        className="w-full px-3.5 py-3 rounded-xl bg-[#0F1E1B] border border-[#2F4F4B] text-sm text-white placeholder-[#759087] focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-[#E7EFE5]/90 mb-1.5 font-medium">
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@organization.org"
                      className="w-full px-3.5 py-3 rounded-xl bg-[#0F1E1B] border border-[#2F4F4B] text-sm text-white placeholder-[#759087] focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full py-3.5 rounded-full font-headline font-bold text-sm shadow-md hover:shadow-lg gap-2 cursor-pointer transition-all"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>

      {/* Comprehensive Multi-Column Navigation Footer */}
      <div className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <button
                type="button"
                onClick={() => handleNav('home')}
                className="inline-block mb-4 text-left cursor-pointer"
              >
                <Logo size={28} wordmarkColor="white" productSubtitle="Impact Co. · Climate Intelligence" />
              </button>
              <p className="text-sm text-[#D6E3DE] leading-relaxed max-w-sm mb-4">
                Cultivating Africa's future using space technology. Terraxat (operating as Terrasat Impact) transforms satellite Earth observation and ground truth into continuous MRV and early warning.
              </p>
              <div className="flex flex-col gap-1 text-xs font-mono text-[#A4B8B2]">
                <span>Headquarters: Nairobi, Kenya</span>
                <span className="text-[#CFF4A7]">ACT in Space Kenya 2026 Winner</span>
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#CFF4A7] font-semibold mb-4">
                Our Solutions
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D6E3DE] font-medium">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('terrafarm')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    Terra Farm (Agri MRV) →
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('newis')}
                    className="hover:text-[#38BDF8] transition-colors cursor-pointer text-left"
                  >
                    NEWIS (Flood Warning) →
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('terrafarm', '#audit-ledger-3d')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left text-xs text-[#A4B8B2]"
                  >
                    3D Audit Ledger
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('terrafarm', '#deliverables')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left text-xs text-[#A4B8B2]"
                  >
                    DDS &amp; TRACES Outputs
                  </button>
                </li>
              </ul>
            </div>

            {/* Focus & Architecture Column */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#CFF4A7] font-semibold mb-4">
                Domains &amp; Architecture
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D6E3DE] font-medium">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('home', '#focus-areas')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    6 African Risk Domains
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('home', '#solutions')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    Core Solutions (Terra Farm &amp; NEWIS)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('terrafarm')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    Terra Farm Platform
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('terrafarm', '#how-it-works')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    EUDR Radar &amp; Optical MRV
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('newis', '#operational-cycle')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    Disaster Early Warning System
                  </button>
                </li>
              </ul>
            </div>

            {/* Company & Contact Column */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#CFF4A7] font-semibold mb-4">
                Company &amp; Team
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#E7EFE5]/80 font-medium">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('home', '#about')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    Who We Are
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('home', '#about')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    Leadership Team
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('home', '#hero-partners-carousel')}
                    className="hover:text-[#CFF4A7] transition-colors cursor-pointer text-left"
                  >
                    Partners &amp; Alliances
                  </button>
                </li>
                <li>
                  <a href="mailto:terrasat.impact@gmail.com" className="hover:text-[#CFF4A7] transition-colors">
                    terrasat.impact@gmail.com
                  </a>
                </li>
                {onRequestDemo && (
                  <li>
                    <button
                      type="button"
                      onClick={onRequestDemo}
                      className="text-left text-[#CFF4A7] hover:underline cursor-pointer flex items-center gap-1 font-mono text-xs"
                    >
                      <span>Request a Demo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-[#1C332F] bg-[#0A1412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A4B8B2]">
          <p>© {new Date().getFullYear()} Terraxat Impact Co. Ltd. (operating as Terrasat Impact). All rights reserved.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="https://terraxat.com" className="text-[#CFF4A7] hover:underline">terraxat.com</a>
            <span className="text-[#A4B8B2]">Nairobi, Kenya</span>
            <span className="text-[#CFF4A7]">Space Technology for Resilience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
