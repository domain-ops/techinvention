"use client";
import React, { useEffect } from 'react';
import LandingHero from './sections/LandingHero';
import FacilityFeatures from './sections/FacilityFeatures';
import AboutVideo from '../About/sections/AboutVideo';
import ProcessFlowchart from './sections/ProcessFlowchart';
import InfectiousDiseasesPipeline from './sections/InfectiousDiseasesPipeline';
import Collaborations from './sections/Collaborations';
import CTASection from '../../components/CTASection';

const RNDPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* 1. R&D Landing Hero */}
            <LandingHero />

            {/* 1.5. Facility Features (Icons Grid) */}
            <FacilityFeatures />

            {/* 1.75. Horizon Video Placeholder (Removed as requested) */}
            {/* <AboutVideo /> */}

            {/* 1.8. R&D Process Flowchart */}
            <ProcessFlowchart />

            {/* 1.9. Infectious Diseases Pipeline Table */}
            <InfectiousDiseasesPipeline />

            {/* 1.95. Collaborations */}
            <Collaborations />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default RNDPage;
