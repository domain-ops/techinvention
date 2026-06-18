import React, { useEffect, useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import AboutPage from './pages/About';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider } from './context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

import MembershipPage from './pages/Membership';
import CertificationPage from './pages/Certification';
import SearchPage from './pages/Search';
import StrategicTechnicalAdvisoryPage from './pages/StrategicTechnicalAdvisory';
import ContactPage from './pages/Contact';
import AwardsPage from './pages/Awards';

import RNDPage from './pages/RND';
import VaccinesPage from './pages/Vaccines';
import DiagnosticsPage from './pages/Diagnostics';
import CDMOPage from './pages/CDMO';
import ConsultingPage from './pages/Consulting';
import ProductsPage from './pages/Products';
import CareersPage from './pages/Careers';
import GmpTrainingPage from './pages/GmpTraining';

function AppContent() {
    const { pathname } = useLocation();
    const lenisRef = React.useRef<Lenis | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.history.scrollRestoration = 'manual';
        }

        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.1,
            infinite: false,
        });

        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        // Sync Lenis with GSAP ScrollTrigger ticker
        const updatePhysics = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(updatePhysics);

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(updatePhysics);
            lenis.destroy();
        };
    }, []);

    // Handle scroll to top on route change
    useLayoutEffect(() => {
        // Kill existing scroll triggers to prevent layout shifts & callback fires during transition
        ScrollTrigger.getAll().forEach(t => t.kill());

        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);

        // Clear ScrollTrigger cache & memory for the fresh page
        ScrollTrigger.clearScrollMemory();
        ScrollTrigger.refresh();
    }, [pathname]);

    return (
        <main className="relative min-h-screen bg-brand-background font-inter">
            <CustomCursor />
            <Navbar />

            <div id="content-smooth" className="relative z-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/membership" element={<MembershipPage />} />
                    <Route path="/certification" element={<CertificationPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/strategic-technical-advisory" element={<StrategicTechnicalAdvisoryPage />} />
                    <Route path="/contact-us" element={<ContactPage />} />
                    <Route path="/awards" element={<AwardsPage />} />
                    
                    <Route path="/rnd" element={<RNDPage />} />
                    <Route path="/rnd/vaccines" element={<VaccinesPage />} />
                    <Route path="/rnd/diagnostics" element={<DiagnosticsPage />} />
                    <Route path="/cdmo" element={<CDMOPage />} />
                    <Route path="/consulting" element={<ConsultingPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/gmp-training" element={<GmpTrainingPage />} />
                </Routes>
                <Footer />
            </div>

            <ScrollToTop lenisRef={lenisRef} />
        </main>
    );
}

function App() {
    return (
        <LanguageProvider>
            <Router basename="/techinvention/">
                <AppContent />
            </Router>
        </LanguageProvider>
    );
}

export default App;
