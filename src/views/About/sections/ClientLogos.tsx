import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

// Row 1 Static Paths
const ROW_1 = [
    '/techinvention/consulting-page-images/Asian_Development_Bank_logo.svg.png',
    '/techinvention/consulting-page-images/BVI.jpg',
    '/techinvention/consulting-page-images/CII.jpg',
    '/techinvention/consulting-page-images/MOH-Ethiopia.jpg',
];

// Row 2 Static Paths
const ROW_2 = [
    '/techinvention/consulting-page-images/pradan-logo-1.png',
    '/techinvention/consulting-page-images/TCSB.png',
    '/techinvention/consulting-page-images/unopsv1-01.jpg',
    '/techinvention/consulting-page-images/WHO.jpg',
];

const ClientLogos = () => {
    return (
        <section className="py-24 bg-white font-sans border-t border-slate-100 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 mb-16 text-center">
                <ScrollReveal direction="up">
                    <h2 className="text-[24px] md:text-[42px] font-medium tracking-wide leading-tight">
                        <SplitTitle title="Trusted by Global Partners" />
                    </h2>
                </ScrollReveal>
            </div>

            <div className="w-full relative flex flex-col gap-10">
                {/* Marquee Row 1 (Moves Left) */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-10 md:gap-16 whitespace-nowrap min-w-max pr-10 md:pr-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        {/* Duplicate the array to create a seamless loop */}
                        {[...ROW_1, ...ROW_1].map((src, index) => (
                            <div 
                                key={`row1-${index}`} 
                                className="w-[140px] h-[70px] md:w-[190px] md:h-[95px] flex items-center justify-center p-2"
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

                {/* Marquee Row 2 (Moves Right) */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-10 md:gap-16 whitespace-nowrap min-w-max pr-10 md:pr-16"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        {/* Duplicate the array to create a seamless loop */}
                        {[...ROW_2, ...ROW_2].map((src, index) => (
                            <div 
                                key={`row2-${index}`} 
                                className="w-[140px] h-[70px] md:w-[190px] md:h-[95px] flex items-center justify-center p-2"
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

            </div>
        </section>
    );
};

export default ClientLogos;
