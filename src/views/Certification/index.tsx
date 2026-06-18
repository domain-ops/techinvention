import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AboutHeader from '../About/sections/AboutBanner';
import CertificationList from './sections/CertificationList';
import CTASection from '../../components/CTASection';
import certBannerImg from '../../assets/images/banner-imge-1.jpg';

import { useSEO } from '../../lib/useSEO';

const CertificationPage = () => {
    const { t } = useLanguage();
    useSEO(
        'Certifications & Compliance | TechInvention',
        "Discover TechInvention's regulatory certifications, quality standards, and compliance framework ensuring safe and effective biotech development."
    );
    return (
        <div className="min-h-screen bg-brand-background text-brand-content">
            <AboutHeader title="Certification" image={certBannerImg} />
            <CertificationList />
            <CTASection />
        </div>
    );
};

export default CertificationPage;
