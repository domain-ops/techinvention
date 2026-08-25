"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import LandingHero from './sections/LandingHero';

// Dynamically import below the fold components
const GCMCFeature = dynamic(() => import('./sections/GCMCFeature'));
const GCMCBridge = dynamic(() => import('./sections/GCMCBridge'));
const HorizonGCMC = dynamic(() => import('../Home/sections/HorizonGCMC'));
const WhyPartner = dynamic(() => import('./sections/WhyPartner'));
const Capabilities = dynamic(() => import('./sections/Capabilities'));
const DigitalExcellence = dynamic(() => import('./sections/DigitalExcellence'));
const Sustainability = dynamic(() => import('./sections/Sustainability'));
const CTASection = dynamic(() => import('../../components/CTASection'));

import { useLanguage } from '../../context/LanguageContext';

const CDMOPage = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-background min-h-screen font-sans">
            <LandingHero />
            <GCMCFeature />
            <GCMCBridge />
            <HorizonGCMC hideHeading={true} />
            <Capabilities />
            <DigitalExcellence />
            <Sustainability />
            <WhyPartner />
            <CTASection description={t('cdmo.ctaDescription') || t('home.cta.desc') || "Connect with us to explore manufacturing partnerships in vaccines and biotherapeutics."} />
        </div>
    );
};

export default CDMOPage;
