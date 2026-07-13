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

const CDMOPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-background min-h-screen">
            <LandingHero />
            <GCMCFeature />
            <GCMCBridge />
            <HorizonGCMC hideHeading={true} />
            <Capabilities />
            <DigitalExcellence />
            <Sustainability />
            <WhyPartner />
            <CTASection />
        </div>
    );
};

export default CDMOPage;
