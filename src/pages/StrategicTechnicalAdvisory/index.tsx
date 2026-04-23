import React from 'react';
import AboutBanner from '../About/sections/AboutBanner';
import StrategicAdvisoryContent from './sections/StrategicAdvisoryContent';
import CTASection from '../../components/CTASection';
import { useLanguage } from '../../context/LanguageContext';

const StrategicTechnicalAdvisoryPage = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <AboutBanner title={t('strategicAdvisory.title')} parentMenu={t('navbar.solutions')} parentMenuLink="/" />
            <StrategicAdvisoryContent />
            <CTASection />
        </div>
    );
};

export default StrategicTechnicalAdvisoryPage;
