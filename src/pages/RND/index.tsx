import React, { useEffect } from 'react';
import LandingHero from './sections/LandingHero';
import OverviewBand from './sections/OverviewBand';
import SubPagePreview from './sections/SubPagePreview';
import CTASection from '../../components/CTASection';
import { useSEO } from '../../lib/useSEO';

const RNDPage = () => {
    useSEO(
        'Research & Development (R&D) | TechInvention',
        "Explore TechInvention's research and development initiatives, biotechnology platforms, and scientific innovations for global health."
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* 1. R&D Landing Hero */}
            <LandingHero />

            {/* 2. Overview Band (Focus Areas & HORIZON) */}
            <OverviewBand />

            {/* 3 & 4. Vaccines & Diagnostics Preview Links */}
            <SubPagePreview />

            {/* 5. CTA */}
            <CTASection />
        </div>
    );
};

export default RNDPage;
