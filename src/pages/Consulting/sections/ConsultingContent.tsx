import React from 'react';
import ConsultingHero from './ConsultingHero';
import ServiceGrid from './ServiceGrid';
import MethodologySection from './MethodologySection';
import ExperienceSection from './ExperienceSection';
import SectorFocus from './SectorFocus';
import CaseStudy from '../../Home/sections/CaseStudy';
import CTASection from '../../../components/CTASection';

const ConsultingContent = () => {
    return (
        <div className="bg-white relative overflow-hidden">
            <ConsultingHero />
            <ServiceGrid />
            <MethodologySection />
            <ExperienceSection />
            <SectorFocus />
            <CaseStudy />
            <CTASection />
        </div>
    );
};

export default ConsultingContent;
