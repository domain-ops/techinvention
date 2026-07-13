import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const LOGOS = [
    '/techinvention/consulting-page-images/Asian_Development_Bank_logo.svg.png',
    '/techinvention/consulting-page-images/BVI.jpg',
    '/techinvention/consulting-page-images/CII.jpg',
    '/techinvention/consulting-page-images/MOH-Ethiopia.jpg',
    '/techinvention/consulting-page-images/pradan-logo-1.png',
    '/techinvention/consulting-page-images/TCSB.png',
    '/techinvention/consulting-page-images/unopsv1-01.jpg',
    '/techinvention/consulting-page-images/WHO.jpg',
];

const ClientsSection = () => {
    return (
        <section className="py-24 bg-white font-sans border-t border-slate-100 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 mb-16 text-center">
                <ScrollReveal direction="up">
                    <h2 className="text-[36px] md:text-[42px] font-medium tracking-wide leading-tight">
                        <SplitTitle title="Trusted by Global Partners" />
                    </h2>
                </ScrollReveal>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                {/* Grid layout with no borders or background boxes */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {LOGOS.map((src, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-center h-[90px] md:h-[110px]"
                        >
                            <img 
                                src={src} 
                                alt="Client Logo" 
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
