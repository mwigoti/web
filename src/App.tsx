import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TerraSatHero } from './components/TerraSatHero';
import { SolutionsHub } from './components/SolutionsHub';
import { ProductBanner } from './components/ProductBanner';
import { ProductCrossLink } from './components/ProductCrossLink';
import { Hero } from './components/Hero';
import { ImpactSection } from './components/ImpactSection';
import { HowItWorks } from './components/HowItWorks';
import { PlatformDeliverables } from './components/PlatformDeliverables';
import { AuditLedger3D } from './components/AuditLedger3D';
import { NewisSection } from './components/NewisSection';
import { FocusAreas } from './components/FocusAreas';
import { WhoWeAre } from './components/WhoWeAre';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

type AppView = 'home' | 'terrafarm' | 'newis';

export default function App() {
  const [activeView, setActiveView] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('terra-farm') || hash.includes('terrafarm')) return 'terrafarm';
      if (hash.includes('newis')) return 'newis';
    }
    return 'home';
  });

  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('terra-farm') || hash.includes('terrafarm')) {
        setActiveView('terrafarm');
      } else if (hash.includes('newis')) {
        setActiveView('newis');
      } else if (hash === '' || hash === '#top' || hash === '#solutions' || hash === '#about' || hash === '#partners' || hash === '#focus-areas' || hash === '#contact') {
        setActiveView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: AppView, targetHash?: string) => {
    setActiveView(view);
    if (view === 'terrafarm') {
      window.history.pushState(null, '', targetHash || '#terra-farm');
    } else if (view === 'newis') {
      window.history.pushState(null, '', targetHash || '#newis');
    } else {
      window.history.pushState(null, '', targetHash || '#top');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div id="top" className="min-h-screen bg-[#11201D] text-white selection:bg-[#CFF4A7] selection:text-[#1D3130] font-body flex flex-col">
      {/* 1. Universal Top Navigation with Active View Controls */}
      <Navbar
        onRequestDemo={handleOpenDemo}
        activeView={activeView}
        onNavigate={navigateTo}
      />

      {/* Main Content Rendered Selectively Based on Active View */}
      <main id="main-content" className="flex-grow">
        {activeView === 'home' && (
          <>
            {/* Unified Brand Hero: TerraSat Impact */}
            <TerraSatHero
              onRequestDemo={handleOpenDemo}
              onExploreTerraFarm={() => navigateTo('terrafarm')}
              onExploreNewis={() => navigateTo('newis')}
            />

            {/* Solutions Hub: Two Frontlines of Climate Risk (Terra Farm + NEWIS with Explore triggers) */}
            <SolutionsHub
              onExploreTerraFarm={() => navigateTo('terrafarm')}
              onExploreNewis={() => navigateTo('newis')}
              onRequestDemo={handleOpenDemo}
            />

            {/* The 6 Focus Areas Across African Geographies */}
            <FocusAreas />

            {/* Who We Are: Mission, Vision, and Leadership Team */}
            <WhoWeAre />

            {/* Partners & Ecosystem Alliances */}
            <PartnersSection onRequestDemo={handleOpenDemo} />
          </>
        )}

        {activeView === 'terrafarm' && (
          <div className="animate-in fade-in duration-300">
            {/* Top Product Context Banner with Back button */}
            <ProductBanner currentProduct="terrafarm" onNavigate={navigateTo} />

            {/* Dedicated Terra Farm Product Deep Dive */}
            <Hero onRequestDemo={handleOpenDemo} />
            <ImpactSection />
            <HowItWorks />
            <PlatformDeliverables />
            <AuditLedger3D />

            {/* Sibling Cross-Link to NEWIS & Back trigger */}
            <ProductCrossLink
              currentProduct="terrafarm"
              onNavigate={navigateTo}
              onRequestDemo={handleOpenDemo}
            />
          </div>
        )}

        {activeView === 'newis' && (
          <div className="animate-in fade-in duration-300">
            {/* Top Product Context Banner with Back button */}
            <ProductBanner currentProduct="newis" onNavigate={navigateTo} />

            {/* Dedicated NEWIS Product Deep Dive */}
            <NewisSection onRequestDemo={handleOpenDemo} />

            {/* Sibling Cross-Link to Terra Farm & Back trigger */}
            <ProductCrossLink
              currentProduct="newis"
              onNavigate={navigateTo}
              onRequestDemo={handleOpenDemo}
            />
          </div>
        )}
      </main>

      {/* Comprehensive 5-Column Closing CTA & Footer */}
      <Footer onRequestDemo={handleOpenDemo} onNavigate={navigateTo} />

      {/* Unified Demo & Partnership Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
