"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './sections/Hero';
import OneHealth from './sections/OneHealth';

// Dynamically import below the fold components
const About = dynamic(() => import('./sections/About'));
const VaccinePipeline = dynamic(() => import('./sections/VaccinePipeline'));
const ClientLogos = dynamic(() => import('../About/sections/ClientLogos'));
const GlobalProjects = dynamic(() => import('./sections/GlobalProjects'));
const Testimonials = dynamic(() => import('./sections/Testimonials/TestimonialsAnimated'));
const FAQSection = dynamic(() => import('./sections/FAQ'));
const Blogs = dynamic(() => import('./sections/Blogs'));

const Home = () => {
    return (
        <div className="relative">
            <Hero />
            <OneHealth />
            <About />
            <VaccinePipeline />
            <ClientLogos />
            <GlobalProjects />
            <Testimonials />
            <FAQSection />
            <Blogs />
        </div>
    );
};

export default Home;
