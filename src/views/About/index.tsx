"use client";
import AboutHeader from './sections/AboutBanner';
import CompanyStory from './sections/CompanyStory';
import OfficeEnvironment from './sections/OfficeEnvironment';
import VisionMissionValues from './sections/VisionMissionValues';
import TeamSection from './sections/TeamSection';
import CertificationList from '../Certification/sections/CertificationList';
import AwardsShowcase from '../Awards/sections/AwardsShowcase';
import Responsibility from './sections/Responsibility';
import Spotlight from './sections/Spotlight';
import CTASection from '../../components/CTASection';

const AboutPage = () => {
    
    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            {/* 1. Company Landing Hero */}
            <AboutHeader title="About Techinvention" />

            {/* 2. About Section */}
            <CompanyStory />
            <OfficeEnvironment />
            <VisionMissionValues />

            {/* 3. Leadership / Team Section */}
            <TeamSection />

            {/* 4. Certifications & Awards */}
            <CertificationList />
            <AwardsShowcase />

            {/* 5. Responsibility / CSR */}
            <Responsibility />

            {/* 6. Spotlight (Hidden for now as requested) */}
            {/* <Spotlight /> */}

            {/* 7. Media Centre (Removed) */}

            <CTASection />
        </div>
    );
};

export default AboutPage;
