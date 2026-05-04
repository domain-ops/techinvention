import React, { useEffect } from 'react';
import AboutBanner from '../About/sections/AboutBanner';
import StrategicAdvisoryContent from './sections/StrategicAdvisoryContent';
import { useLanguage } from '../../context/LanguageContext';

const StrategicTechnicalAdvisoryPage = () => {
    const { t } = useLanguage();

    useEffect(() => {
        document.title = `${t('strategicAdvisory.title')} | TechInvention`;
    }, [t]);

    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <AboutBanner title={t('strategicAdvisory.title')} parentMenu={t('navbar.solutions')} parentMenuLink="/" />
            <StrategicAdvisoryContent />
        </div>
    );
};

export default StrategicTechnicalAdvisoryPage;
