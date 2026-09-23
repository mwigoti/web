import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { TerraSatHero } from './components/TerraSatHero';
import { SolutionsHub } from './components/SolutionsHub';
import { ProductBanner } from './components/ProductBanner';
import { ProductCrossLink } from './components/ProductCrossLink';
import { Hero } from './components/Hero';
import { ImpactSection } from './components/ImpactSection';
import { HowItWorks } from './components/HowItWorks';
import { PlatformDeliverables } from './components/PlatformDeliverables';
import { NewisSection } from './components/NewisSection';
import { FocusAreas } from './components/FocusAreas';
import { WhoWeAre } from './components/WhoWeAre';
import { HeroPartnersCarousel } from './components/HeroPartnersCarousel';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { SectionTransition } from './components/SectionTransition';
import { FarmHealthDashboard } from './components/FarmHealthDashboard';
import { MobileFieldBar } from './components/MobileFieldBar';
import { AppView, getInitialView, updateRoute } from './lib/routeCookies';
import { updateDocumentSeo } from './lib/seo';

export default function App() {
  const [activeView, setActiveView] = useState<AppView>(() => getInitialView());
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Synchronize SEO document title, meta descriptions, and canonical tags whenever activeView changes
  useEffect(() => {
    updateDocumentSeo(activeView);
  }, [activeView]);

  useEffect(() => {
    const handleUrlSync = () => {
      const current = getInitialView();
      setActiveView(current);
    };

    window.addEventListener('hashchange', handleUrlSync);
    window.addEventListener('popstate', handleUrlSync);
    return () => {
      window.removeEventListener('hashchange', handleUrlSync);
      window.removeEventListener('popstate', handleUrlSync);
    };
  }, []);

  const navigateTo = (view: AppView, anchor?: string) => {
    setActiveView(view);
    updateRoute(view, anchor);
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor.startsWith('#') ? anchor : `#${anchor}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  return (
    <div id="top" className="min-h-screen bg-[#11201D] text-white selection:bg-[#CFF4A7] selection:text-[#1D3130] font-body flex flex-col">
      {/* 1. Universal Top Navigation with Active View Controls */}
      <Navbar
        onRequestDemo={handleOpenDemo}
        activeView={activeView}
        onNavigate={navigateTo}
      />

      {/* Main Content Rendered with Smooth AnimatePresence Transitions */}
      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait">
          {activeView === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {/* Unified Brand Hero: TerraSat Impact with Africa relief map */}
              <TerraSatHero
                onRequestDemo={handleOpenDemo}
                onExploreTerraFarm={() => navigateTo('terrafarm')}
                onExploreNewis={() => navigateTo('newis')}
              />

              {/* Strategic Partners & Ecosystem Alliances Floating Logo Carousel */}
              <HeroPartnersCarousel />

              {/* Section Transition Accent: Hero/Partners -> Solutions */}
              <SectionTransition variant="line" />

              {/* Solutions Hub */}
              <SolutionsHub
                onExploreTerraFarm={() => navigateTo('terrafarm')}
                onExploreNewis={() => navigateTo('newis')}
                onRequestDemo={handleOpenDemo}
              />

              {/* Section Transition Accent: Solutions -> Focus Areas */}
              <SectionTransition variant="line" />

              {/* The Focus Areas */}
              <FocusAreas />

              {/* Smooth Aesthetic Transition: Light Focus Areas -> Deep Charcoal WhoWeAre */}
              <div
                aria-hidden="true"
                className="w-full h-16 bg-gradient-to-b from-[#F2F5EF] to-[#11201D] pointer-events-none"
              />

              {/* Who We Are: Mission, Vision, and Leadership Team */}
              <WhoWeAre />
            </motion.div>
          )}

          {activeView === 'terrafarm' && (
            <motion.div
              key="terrafarm-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top Product Context Banner with Back button */}
              <ProductBanner currentProduct="terrafarm" onNavigate={navigateTo} />

              {/* Dedicated Terra Farm Product Deep Dive */}
              <Hero onRequestDemo={handleOpenDemo} />
              <SectionTransition variant="line" />

              {/* Real-Time Field Health Dashboard: KPI Cards & Progressive Disclosure */}
              <FarmHealthDashboard />
              <SectionTransition variant="line" />

              <ImpactSection />
              <SectionTransition variant="line" />
              <HowItWorks />
              <SectionTransition variant="line" />
              <PlatformDeliverables />

              {/* Sibling Cross-Link to NEWIS & Back trigger */}
              <ProductCrossLink
                currentProduct="terrafarm"
                onNavigate={navigateTo}
                onRequestDemo={handleOpenDemo}
              />
            </motion.div>
          )}

          {activeView === 'newis' && (
            <motion.div
              key="newis-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile-Friendly Thumb-Zone Field Navigation Bar */}
      <MobileFieldBar
        onRequestDemo={handleOpenDemo}
        activeView={activeView}
        onNavigate={navigateTo}
      />

      {/* 3. Universal TerraSat Impact Footer */}
      <Footer onNavigate={navigateTo} onRequestDemo={handleOpenDemo} />

      {/* Global Interactive Demo Modal Dialog */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
