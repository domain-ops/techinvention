"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AboutHeader from '../About/sections/AboutBanner';
import CertificationList from '../Certification/sections/CertificationList';
import AwardsShowcase from '../Awards/sections/AwardsShowcase';
import CTASection from '../../components/CTASection';

const AwardsCertificationsView = () => {
    const { t } = useLanguage();
    
    // Combined description for awards and certifications
    const pageSubtitle = t('certifications.desc') || "Celebrating our milestones of excellence, environmental responsibility, safety, and innovation in biotechnology.";

    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden font-sans">
            {/* Header Banner */}
            <AboutHeader 
                title="Awards & Certifications" 
                subtitle={pageSubtitle}
            />

            {/* 1. Certifications Section */}
            <CertificationList />

            {/* 2. Awards Showcase Section */}
            <div className="bg-white py-12">
                <AwardsShowcase />
            </div>

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default AwardsCertificationsView;
