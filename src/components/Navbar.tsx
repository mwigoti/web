import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, ArrowLeft, Sprout, Waves, ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Badge } from '@/src/components/ui/badge';

interface NavbarProps {
  onRequestDemo: () => void;
  activeView: 'home' | 'terrafarm' | 'newis';
  onNavigate: (view: 'home' | 'terrafarm' | 'newis') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo, activeView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Focus Areas', href: '#focus-areas' },
    { label: 'Who We Are', href: '#about' },
    { label: 'Partners', href: '#hero-partners-carousel' },
    { label: 'Contact', href: '#contact' },
  ];

  const terraFarmLinks = [
    { label: 'Compliance Ledger', href: '#compliance-dashboard' },
    { label: 'Smallholder Impact', href: '#impact' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Deliverables', href: '#deliverables' },
  ];

  const newisLinks = [
    { label: 'The Problem', href: '#the-problem' },
    { label: 'Operational Cycle', href: '#operational-cycle' },
    { label: 'Coverage & Roadmap', href: '#coverage' },
  ];

  const currentLinks = activeView === 'terrafarm'
    ? terraFarmLinks
    : activeView === 'newis'
      ? newisLinks
      : homeLinks;

  const currentSubtitle = activeView === 'terrafarm'
    ? 'Terra Farm · Agricultural MRV'
    : activeView === 'newis'
      ? 'NEWIS · Flood Warning'
      : 'Impact Co. · Climate Intelligence';

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#11201D]/95 backdrop-blur-md border-b border-[#2B4543] py-3.5 shadow-sm'
          : 'bg-[#11201D]/90 backdrop-blur-md border-b border-[#2B4543]/80 py-4 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CFF4A7] rounded-sm cursor-pointer text-left"
          aria-label="TerraSat Impact Home"
        >
          <Logo size={32} wordmarkColor="white" productSubtitle="" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {currentLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-[#E7EFE5]/85 hover:text-[#CFF4A7] transition-colors py-1 focus:outline-none focus-visible:text-[#CFF4A7]"
            >
              {link.label}
            </a>
          ))}

          {/* Solution Switching Pills in Home Nav */}
          {activeView === 'home' && (
            <div className="flex items-center gap-2 pl-2 border-l border-[#2B4543]">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  onNavigate('terrafarm');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="gap-1.5 rounded-full bg-[#182C29] border-[#2B4543] text-xs font-mono text-[#E7EFE5] hover:text-[#CFF4A7] hover:border-[#CFF4A7]/50 h-7 px-3"
              >
                <Sprout className="w-3 h-3 text-[#CFF4A7]" />
                <span>Terra Farm</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  onNavigate('newis');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="gap-1.5 rounded-full bg-[#182C29] border-[#2B4543] text-xs font-mono text-[#E7EFE5] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 h-7 px-3"
              >
                <Waves className="w-3 h-3 text-[#38BDF8]" />
                <span>NEWIS</span>
              </Button>
            </div>
          )}

          {/* Sibling Switcher in Product Views */}
          {activeView === 'terrafarm' && (
            <button
              type="button"
              onClick={() => {
                onNavigate('newis');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#38BDF8] hover:underline pl-2 border-l border-[#2B4543] cursor-pointer"
            >
              <span>View NEWIS</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}

          {activeView === 'newis' && (
            <button
              type="button"
              onClick={() => {
                onNavigate('terrafarm');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#CFF4A7] hover:underline pl-2 border-l border-[#2B4543] cursor-pointer"
            >
              <span>View Terra Farm</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </nav>

        {/* Desktop Action */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            id="nav-request-demo-btn"
            type="button"
            variant="default"
            size="sm"
            onClick={onRequestDemo}
            className="rounded-full shadow-sm text-xs xl:text-sm font-bold gap-2 px-5 py-2.5 h-10"
          >
            <span>Request a demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E7EFE5] hover:text-[#CFF4A7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CFF4A7]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#152522] border-b border-[#2B4543] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {activeView !== 'home' && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#11201D] border border-[#2B4543] text-xs font-mono text-[#CFF4A7] mb-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to TerraSat Platform Overview</span>
            </button>
          )}

          {/* Product Switchers for Mobile */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#253E3D]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('terrafarm');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono ${
                activeView === 'terrafarm'
                  ? 'bg-[#CFF4A7] text-[#1D3130] font-bold'
                  : 'bg-[#182C29] border border-[#2B4543] text-[#E7EFE5]'
              }`}
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>Terra Farm</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('newis');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono ${
                activeView === 'newis'
                  ? 'bg-[#38BDF8] text-[#11201D] font-bold'
                  : 'bg-[#182C29] border border-[#2B4543] text-[#E7EFE5]'
              }`}
            >
              <Waves className="w-3.5 h-3.5" />
              <span>NEWIS</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-3">
            {currentLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#E7EFE5] hover:text-[#CFF4A7] py-2 border-b border-[#253E3D]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <Button
              id="mobile-drawer-demo-btn"
              type="button"
              variant="default"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDemo();
              }}
              className="w-full rounded-full font-bold text-base gap-2"
            >
              <span>Request a demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
