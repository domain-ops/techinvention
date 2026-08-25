"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AboutHeader from '../About/sections/AboutBanner';
import AwardsShowcase from './sections/AwardsShowcase';
import CTASection from '../../components/CTASection';

const AwardsPage = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <AboutHeader 
                title={t('navbar.awardsCertifications') || t('megaMenu.awards') || "Awards & Accolades"} 
                subtitle={t('awards.heroDesc') || t('about.scientificAdvisory.desc') || "Celebrating our milestones, global recognitions, and achievements in advancing biotechnology and health equity."} 
            />
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
                <AwardsShowcase />
            </div>
            <CTASection />
        </div>
    );
};

export default AwardsPage;
