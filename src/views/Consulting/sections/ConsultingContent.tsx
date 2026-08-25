"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import ConsultingHero from './ConsultingHero';

// Dynamically import below the fold components
const ServiceGrid = dynamic(() => import('./ServiceGrid'));
const ClientsSection = dynamic(() => import('./ClientsSection'));
const ClientFeedback = dynamic(() => import('./ClientFeedback'));
const CTASection = dynamic(() => import('../../../components/CTASection'));

const ConsultingContent = () => {
    return (
        <div className="bg-white relative overflow-hidden">
            <ConsultingHero />
            <ServiceGrid />
            <ClientsSection />
            <ClientFeedback />
            {/* <CaseStudy /> */}
            <CTASection />
        </div>
    );
};

export default ConsultingContent;
