"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import AboutHeader from './sections/AboutBanner';
import abtBannerImg from '../../../public/abt-banner.jpeg';

// Dynamically import below the fold components
const CompanyStory = dynamic(() => import('./sections/CompanyStory'));
const BoardOfDirectors = dynamic(() => import('./sections/BoardOfDirectors'));
const VisionMissionValues = dynamic(() => import('./sections/VisionMissionValues'));
const CTASection = dynamic(() => import('../../components/CTASection'));

import { useLanguage } from '../../context/LanguageContext';

const AboutPage = () => {
    const { t } = useLanguage();
    
    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden font-sans">
            {/* 1. Company Landing Hero */}
            <AboutHeader 
                title={t('about.tag') || t('navbar.about') || "About TechInvention"} 
                subtitle={t('about.banner.subtitle') || t('about.desc')} 
            />

            {/* Banner Image */}
            <div className="w-full bg-white pt-4 pb-8 md:pt-6 md:pb-12">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <img 
                        src={abtBannerImg} 
                        alt="TechInvention About Banner" 
                        className="w-full h-auto block rounded-none"
                    />
                </div>
            </div>

            {/* 2. About Section */}
            <CompanyStory />
            {/* <OfficeEnvironment /> */}
            <BoardOfDirectors />
            {/* <ScientificAdvisoryBoard /> */}
            <VisionMissionValues />

            {/* 3. Leadership / Team Section (Removed as requested) */}
            {/* <TeamSection /> */}



            {/* 5. Responsibility / CSR (Removed as requested) */}
            {/* <Responsibility /> */}

            {/* 6. Spotlight (Hidden for now as requested) */}
            {/* <Spotlight /> */}

            {/* 7. Media Centre (Removed) */}

            <CTASection />
        </div>
    );
};

export default AboutPage;
