"use client";
import React, { useEffect } from 'react';
import LandingHero from './sections/LandingHero';
import GCMCFeature from './sections/GCMCFeature';
import DrugSubstance from './sections/DrugSubstance';
import DrugProduct from './sections/DrugProduct';
import QCLab from './sections/QCLab';
import TechTransfer from './sections/TechTransfer';
import CTASection from '../../components/CTASection';

const CDMOPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-background min-h-screen">
            <LandingHero />
            <GCMCFeature />
            <DrugSubstance />
            <DrugProduct />
            <QCLab />
            <TechTransfer />
            <CTASection />
        </div>
    );
};

export default CDMOPage;
