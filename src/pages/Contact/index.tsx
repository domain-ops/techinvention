import React, { useEffect } from 'react';
import ContactHero from './sections/ContactHero';
import ContactSection from './sections/ContactSection';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-background min-h-screen">
            <ContactHero />

            <ContactSection />
        </div>
    );
};

export default ContactPage;
