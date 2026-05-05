import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AboutHeader from '../About/sections/AboutBanner';
import CertificationList from './sections/CertificationList';
import CTASection from '../../components/CTASection';
import certBannerImg from '../../assets/images/banner-imge-1.jpg';

const CertificationPage = () => {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <AboutHeader title="Certification" image={certBannerImg} />
            <CertificationList />
            <CTASection />
        </div>
    );
};

export default CertificationPage;
