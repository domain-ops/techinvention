import React from 'react';
import StrategicAdvisoryContent from './sections/StrategicAdvisoryContent';
import { useLanguage } from '../../context/LanguageContext';
import { useSEO } from '../../lib/useSEO';

const StrategicTechnicalAdvisoryPage = () => {
    const { t } = useLanguage();

    useSEO(
        'Strategic & Technical Advisory | TechInvention',
        'TechInvention provides strategic, regulatory, and technical advisory services for biotechnology and pharmaceutical manufacturing operations globally.'
    );

    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <StrategicAdvisoryContent />
        </div>
    );
};

export default StrategicTechnicalAdvisoryPage;
