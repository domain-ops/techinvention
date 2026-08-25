"use client";
import React, { useEffect } from 'react';
import LandingHero from './sections/LandingHero';
import GCMCFeature from './sections/GCMCFeature';
import GCMCBridge from './sections/GCMCBridge';
import HorizonGCMC from '../Home/sections/HorizonGCMC';
import WhyPartner from './sections/WhyPartner';
import Capabilities from './sections/Capabilities';
import DigitalExcellence from './sections/DigitalExcellence';
import Sustainability from './sections/Sustainability';
import CTASection from '../../components/CTASection';

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
