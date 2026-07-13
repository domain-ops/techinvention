import React from 'react';
import { motion } from 'framer-motion';
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
                    <h2 className="text-[24px] md:text-[42px] font-medium tracking-wide leading-tight">
                        <SplitTitle title="Trusted by Global Partners" />
                    </h2>
                </ScrollReveal>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:block max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-4 gap-x-16 gap-y-12">
                    {LOGOS.map((src, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-center h-[75px]"
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

            {/* Mobile Auto Slider (Marquee) */}
            <div className="block md:hidden w-full overflow-hidden">
                <motion.div
                    className="flex items-center gap-12 whitespace-nowrap min-w-max pr-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                >
                    {[...LOGOS, ...LOGOS].map((src, index) => (
                        <div 
                            key={index} 
                            className="w-[150px] h-[60px] flex items-center justify-center p-2 flex-shrink-0"
                        >
                            <img 
                                src={src} 
                                alt="Client Logo" 
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;
