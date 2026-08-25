"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import LandingHero from './sections/LandingHero';

// Dynamically import below the fold components
const FacilityFeatures = dynamic(() => import('./sections/FacilityFeatures'));
const ProcessFlowchart = dynamic(() => import('./sections/ProcessFlowchart'));
const InfectiousDiseasesPipeline = dynamic(() => import('./sections/InfectiousDiseasesPipeline'));
const Grants = dynamic(() => import('./sections/Grants'));
const Collaborations = dynamic(() => import('./sections/Collaborations'));
const CTASection = dynamic(() => import('../../components/CTASection'));

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

            {/* 1.92. Grants & Funding Support */}
            <Grants />

            {/* 1.95. Collaborations */}
            <Collaborations />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default RNDPage;
