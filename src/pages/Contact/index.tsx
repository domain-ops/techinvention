import React from 'react';
import AboutBanner from '../About/sections/AboutBanner';
import ContactSection from './sections/ContactSection';

const ContactPage = () => {
    return (
        <div className="bg-brand-background min-h-screen">
            <AboutBanner 
                title="Contact Us" 
            />

            <ContactSection />
        </div>
    );
};

export default ContactPage;
