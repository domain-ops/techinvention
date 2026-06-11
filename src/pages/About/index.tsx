import AboutHeader from './sections/AboutBanner';
import CompanyStory from './sections/CompanyStory';
import OfficeEnvironment from './sections/OfficeEnvironment';
import VisionMissionValues from './sections/VisionMissionValues';
import TeamSection from './sections/TeamSection';
import CertificationList from '../Certification/sections/CertificationList';
import AwardsShowcase from '../Awards/sections/AwardsShowcase';
import Responsibility from './sections/Responsibility';
import Spotlight from './sections/Spotlight';
import MediaCentre from '../Home/sections/Blogs';
import CTASection from '../../components/CTASection';
import { useSEO } from '../../lib/useSEO';

const AboutPage = () => {
    useSEO(
        'About TechInvention | Our Journey & Vision',
        "Learn about TechInvention's journey, vision, mission, and leadership team dedicated to global health innovation and biotechnology solutions."
    );

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

            {/* 7. Media Centre */}
            <MediaCentre />

            <CTASection />
        </div>
    );
};

export default AboutPage;
