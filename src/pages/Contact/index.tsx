import React, { useEffect } from 'react';
import ContactHero from './sections/ContactHero';
import ContactSection from './sections/ContactSection';
import { useSEO } from '../../lib/useSEO';

const ContactPage = () => {
    useSEO(
        'Contact TechInvention | Global Offices & Inquiries',
        'Get in touch with TechInvention. Contact our global headquarters and offices for partnerships, advisory inquiries, and product information.'
    );

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
