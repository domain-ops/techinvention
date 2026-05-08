import React from 'react';
import Hero from './sections/Hero';
import OneHealth from './sections/OneHealth';
import About from './sections/About';
import Horizon from './sections/Horizon';
import Facilities from './sections/Facilities';
import AtAGlanceVideo from './sections/AtAGlanceVideo';
import CaseStudy from './sections/CaseStudy';

import GlobalProjects from './sections/GlobalProjects';
import Testimonials from './sections/Testimonials/TestimonialsAnimated';
import ProductSlider from './sections/ProductSlider';
import VaccinePipeline from './sections/VaccinePipeline';
import ClientLogos from '../About/sections/ClientLogos';
import FAQSection from './sections/FAQ';
import Blogs from './sections/Blogs';
import CTASection from '../../components/CTASection';
import FloatingDNA from '../../components/FloatingDNA';

const Home = () => {
    return (
        <div className="relative">
            {/* <FloatingDNA /> temporrily removed by request */}
            <Hero />
            <OneHealth />
            <About />
            <Horizon />
            <VaccinePipeline />
            <AtAGlanceVideo />
            {/* <ProductSlider /> temporrily removed by request */}


            <ClientLogos />
            <CaseStudy />
            <GlobalProjects />
            <Testimonials />
            <FAQSection />
            <Blogs />
            {/* <CTASection /> */}
        </div>
    );
};

export default Home;
