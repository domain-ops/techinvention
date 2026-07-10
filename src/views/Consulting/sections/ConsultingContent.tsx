import React from 'react';
import ConsultingHero from './ConsultingHero';
import ServiceGrid from './ServiceGrid';
import ClientsSection from './ClientsSection';
import CaseStudy from '../../Home/sections/CaseStudy';
import CTASection from '../../../components/CTASection';

const ConsultingContent = () => {
    return (
        <div className="bg-white relative overflow-hidden">
            <ConsultingHero />
            <ServiceGrid />
            <ClientsSection />
            {/* <CaseStudy /> */}
            <CTASection />
        </div>
    );
};

export default ConsultingContent;
