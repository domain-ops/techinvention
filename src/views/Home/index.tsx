"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './sections/Hero';
import OneHealth from './sections/OneHealth';
import LazyViewportSection from '../../components/Common/LazyViewportSection';

// Dynamically import below the fold components
const About = dynamic(() => import('./sections/About'));
const VaccinePipeline = dynamic(() => import('./sections/VaccinePipeline'));
const ClientLogos = dynamic(() => import('../About/sections/ClientLogos'));
const GlobalProjects = dynamic(() => import('./sections/GlobalProjects'));
const Testimonials = dynamic(() => import('./sections/Testimonials/TestimonialsAnimated'));
const FAQSection = dynamic(() => import('./sections/FAQ'));
const Publications = dynamic(() => import('./sections/Publications'));

const Home = () => {
    return (
        <div className="relative">
            <Hero />
            
            <LazyViewportSection minHeight="500px">
                <OneHealth />
            </LazyViewportSection>

            <LazyViewportSection minHeight="500px">
                <About />
            </LazyViewportSection>

            <LazyViewportSection minHeight="600px">
                <VaccinePipeline />
            </LazyViewportSection>

            <LazyViewportSection minHeight="200px">
                <ClientLogos />
            </LazyViewportSection>

            <LazyViewportSection minHeight="600px">
                <GlobalProjects />
            </LazyViewportSection>

            <LazyViewportSection minHeight="500px">
                <Testimonials />
            </LazyViewportSection>

            <LazyViewportSection minHeight="400px">
                <Publications />
            </LazyViewportSection>

            <LazyViewportSection minHeight="500px">
                <FAQSection />
            </LazyViewportSection>
        </div>
    );
};

export default Home;
