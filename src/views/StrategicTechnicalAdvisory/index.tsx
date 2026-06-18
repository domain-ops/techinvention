"use client";
import React from 'react';
import StrategicAdvisoryContent from './sections/StrategicAdvisoryContent';
import { useLanguage } from '../../context/LanguageContext';

const StrategicTechnicalAdvisoryPage = () => {
    const { t } = useLanguage();

    
    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <StrategicAdvisoryContent />
        </div>
    );
};

export default StrategicTechnicalAdvisoryPage;
