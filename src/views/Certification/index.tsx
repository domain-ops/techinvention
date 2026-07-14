"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AboutHeader from '../About/sections/AboutBanner';
import CertificationList from './sections/CertificationList';
import CTASection from '../../components/CTASection';

const CertificationPage = () => {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-brand-background text-brand-content">
            <AboutHeader title="Certification" subtitle={t('certifications.desc')} />
            <CertificationList />
            <CTASection />
        </div>
    );
};

export default CertificationPage;
