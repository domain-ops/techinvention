import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SplitTitle } from '../../components/Common/SplitTitle';
import AwardsShowcase from './sections/AwardsShowcase';

const AwardsPage = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-brand-background pt-32 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <span className="text-[13px] font-medium tracking-[0.2em] text-brand-primary uppercase mb-4 block">
                        {t('awards.tag') || 'Recognition'}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-normal tracking-tight leading-[1.1]">
                        <SplitTitle 
                            title={t('awards.title').replace('{latestNews}', 'Latest News') || "Awards & Accolades"}
                        />
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-gray-600 w-full leading-relaxed text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            
            <AwardsShowcase />
        </div>
    );
};

export default AwardsPage;
