"use client";
import React, { useEffect } from 'react';
import ContactHero from './sections/ContactHero';
import ContactIntro from './sections/ContactIntro';
import OfficeSlider from './sections/OfficeSlider';
import ContactSection from './sections/ContactSection';

const ContactPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-background min-h-screen">
            <ContactHero />

            <ContactIntro />

            <OfficeSlider />

            <ContactSection />
        </div>
    );
};

export default ContactPage;
