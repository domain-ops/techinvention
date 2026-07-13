"use client";

import React, { useEffect, useLayoutEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Common/ScrollToTop';
import CustomCursor from '../components/CustomCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider } from '../context/LanguageContext';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
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

    useLayoutEffect(() => {
        ScrollTrigger.getAll().forEach(t => t.kill());

        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);

        ScrollTrigger.clearScrollMemory();
        ScrollTrigger.refresh();
    }, [pathname]);

    return (
        <LanguageProvider>
            <CustomCursor />
            <Navbar />
            <div id="content-smooth" className="relative z-10 pt-9">
                {children}
                <Footer />
            </div>
            <ScrollToTop lenisRef={lenisRef} />
        </LanguageProvider>
    );
}
