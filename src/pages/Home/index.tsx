import React from 'react';
import Hero from './sections/Hero';
import OneHealth from './sections/OneHealth';
import HorizonGCMC from './sections/HorizonGCMC';
import About from './sections/About';
import Facilities from './sections/Facilities';


import GlobalProjects from './sections/GlobalProjects';
import Testimonials from './sections/Testimonials/TestimonialsAnimated';
import ProductSlider from './sections/ProductSlider';
import VaccinePipeline from './sections/VaccinePipeline';
import ClientLogos from '../About/sections/ClientLogos';
import FAQSection from './sections/FAQ';
import Blogs from './sections/Blogs';
import CTASection from '../../components/CTASection';
import FloatingDNA from '../../components/FloatingDNA';

import { useSEO } from '../../lib/useSEO';

const Home = () => {
    useSEO(
        'TechInvention | Advancing Global Health Through Biotechnology',
        'Global biotech company focused on vaccines, diagnostics, and biotherapeutics. Innovation that protects tomorrow.'
    );

    return (
        <div className="relative">
            {/* <FloatingDNA /> temporrily removed by request */}
            <Hero />
            <OneHealth />
            <HorizonGCMC />
            <About />
            <VaccinePipeline />
            {/* <ProductSlider /> temporrily removed by request */}


            <ClientLogos />
            <GlobalProjects />
            <Testimonials />
            <FAQSection />
            <Blogs />
            {/* <CTASection /> */}
        </div>
    );
};

export default Home;
