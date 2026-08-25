import React from 'react';
import { motion } from 'framer-motion';
import buildingImg from '../../../assets/images/GCMC.jpg.jpeg';

import { useLanguage } from '../../../context/LanguageContext';

const ContactHero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="relative w-full overflow-hidden font-sans">

            {/* The image sits naturally - no cropping */}
            <div className="relative w-full">
                <img
                    src={buildingImg}
                    alt="TechInvention Office Building"
                    className="w-full object-cover object-center max-h-[500px] md:max-h-[580px]"
                />

                {/* Gradient overlay - left side for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#c8e4f8]/90 via-[#ddeeff]/70 to-transparent" />

                {/* Molecular SVG decoration */}
                <div className="absolute left-0 top-0 h-full w-1/3 pointer-events-none opacity-25">
                    <svg viewBox="0 0 300 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="120" r="8" fill="#1955A6" opacity="0.5"/>
                        <circle cx="120" cy="80" r="5" fill="#1955A6" opacity="0.4"/>
                        <circle cx="40" cy="220" r="6" fill="#1955A6" opacity="0.4"/>
                        <circle cx="100" cy="200" r="9" fill="#5C7625" opacity="0.4"/>
                        <circle cx="160" cy="150" r="5" fill="#1955A6" opacity="0.3"/>
                        <circle cx="80" cy="330" r="7" fill="#1955A6" opacity="0.4"/>
                        <circle cx="150" cy="310" r="5" fill="#5C7625" opacity="0.3"/>
                        <circle cx="30" cy="400" r="6" fill="#1955A6" opacity="0.4"/>
                        <circle cx="110" cy="420" r="8" fill="#5C7625" opacity="0.3"/>
                        <line x1="60" y1="120" x2="120" y2="80" stroke="#1955A6" strokeWidth="1" opacity="0.4"/>
                        <line x1="60" y1="120" x2="40" y2="220" stroke="#1955A6" strokeWidth="1" opacity="0.4"/>
                        <line x1="40" y1="220" x2="100" y2="200" stroke="#1955A6" strokeWidth="1" opacity="0.4"/>
                        <line x1="100" y1="200" x2="160" y2="150" stroke="#1955A6" strokeWidth="1" opacity="0.3"/>
                        <line x1="100" y1="200" x2="80" y2="330" stroke="#1955A6" strokeWidth="1" opacity="0.4"/>
                        <line x1="80" y1="330" x2="150" y2="310" stroke="#5C7625" strokeWidth="1" opacity="0.3"/>
                        <line x1="80" y1="330" x2="30" y2="400" stroke="#1955A6" strokeWidth="1" opacity="0.4"/>
                        <line x1="30" y1="400" x2="110" y2="420" stroke="#1955A6" strokeWidth="1" opacity="0.4"/>
                        <path d="M0 350 Q60 320 120 360 Q180 400 240 370" stroke="#1955A6" strokeWidth="1.5" opacity="0.2" fill="none"/>
                        <path d="M0 380 Q70 350 140 385 Q200 415 260 390" stroke="#1955A6" strokeWidth="1" opacity="0.15" fill="none"/>
                    </svg>
                </div>

                {/* Text overlaid on top of image */}
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12">
                        <div className="w-full lg:w-[42%] text-left">
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="text-[36px] md:text-[52px] lg:text-[62px] font-bold text-[#0d2a55] leading-tight mb-4"
                            >
                                {t('navbar.contactUs') || t('contact.title') || "Contact Us"}
                            </motion.h1>

                            {/* Blue underline accent */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 56 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="h-[3px] bg-[#1955A6] mb-5 rounded-full"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="text-[#3a5575] text-base md:text-lg font-normal leading-relaxed"
                            >
                                {t('contact.subtitle') || "Let's connect to create impact."}
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Top padding for navbar */}
                <div className="absolute top-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default ContactHero;
