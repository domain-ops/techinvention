import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { SplitTitle } from '../../../components/Common/SplitTitle';

interface AboutBannerProps {
    title?: string;
    parentMenu?: string;
    parentMenuLink?: string;
    image?: string;
    subtitle?: string;
}

const AboutBanner: React.FC<AboutBannerProps> = ({ title, parentMenu, parentMenuLink, image, subtitle }) => {
    const { t } = useLanguage();
    
    // Default page title for About Us if none is passed
    const pageTitle = title || t('navbar.company') || 'About TechInvention';
    
    return (
        <section className={`relative w-full h-[380px] md:h-[520px] flex items-center overflow-hidden pt-20 md:pt-28 ${
            image ? 'bg-slate-900' : 'bg-white'
        }`}>
            {/* Background Image or Career-style Ambient Glows */}
            {image ? (
                <div className="absolute inset-0 z-0">
                    <img
                        src={image}
                        alt={pageTitle}
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/45 z-10" />
                </div>
            ) : (
                <>
                    {/* Ambient background decoration - extremely subtle light glows matching careers page style */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none z-0" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none z-0" />
                </>
            )}

            {/* Content Container - Left Aligned to match Navbar Logo */}
            <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 md:px-8 text-left">
                {/* Page Title */}
                <h1 className={`text-4xl sm:text-5xl md:text-[56px] font-medium tracking-wide leading-[1.15] ${
                    image ? 'text-white' : 'text-slate-950 font-sans'
                }`}>
                    {image ? pageTitle : <SplitTitle title={pageTitle} />}
                </h1>
            </div>
        </section>
    );
};

export default AboutBanner;
