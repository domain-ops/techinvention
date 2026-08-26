import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { useLanguage } from '../../../../context/LanguageContext';
import { MagneticText } from '../../../../components/ui/morphing-cursor';

import banner1 from '../../../../../public/banner-1.webp';
import banner2 from '../../../../../public/banner-2.webp';

const bgImages = [banner1, banner2];

// Sliding Word Rotator Component
const SlidingWord = ({ words, activeIndex }: { words: string[], activeIndex: number }) => {
    const activeWord = words[activeIndex] || "";
    return (
        <span className="relative inline-flex overflow-hidden h-[1.3em] py-0.5 items-center justify-center">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={activeIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1] // smooth, snappy bezier curve
                    }}
                    style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                    className="inline-block whitespace-nowrap font-bold"
                >
                    {activeWord}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const Hero = () => {
    const { t } = useLanguage();
    const [activeWordIndex, setActiveWordIndex] = useState(0);

    const brandName = (typeof t('megaMenu.vaccines') === 'string' && t('megaMenu.vaccines') !== 'megaMenu.vaccines')
        ? t('megaMenu.vaccines')
        : "Vaccines";

    const rotatingWords = [
        (typeof t('megaMenu.manufacturing') === 'string' && t('megaMenu.manufacturing') !== 'megaMenu.manufacturing')
            ? t('megaMenu.manufacturing')
            : "Manufacturing",
        (typeof t('common.rd') === 'string' && t('common.rd') !== 'common.rd')
            ? t('common.rd')
            : "R&D",
        (typeof t('common.licensing') === 'string' && t('common.licensing') !== 'common.licensing')
            ? t('common.licensing')
            : "Licensing",
        (typeof t('common.advisory') === 'string' && t('common.advisory') !== 'common.advisory')
            ? t('common.advisory')
            : "Advisory"
    ];

    // Unified timer to rotate background and words in sync
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [rotatingWords.length]);

    return (
        <section id="hero" className="py-16 md:py-20 relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Dynamic Background Images */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={activeWordIndex}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image 
                            src={bgImages[activeWordIndex % bgImages.length]}
                            alt="Background"
                            fill
                            sizes="100vw"
                            priority
                            className="object-cover object-top opacity-100"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Hero Main Content */}
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-12 flex flex-col justify-center items-center text-center pt-24 pb-16"
            >
                {/* Main Headline (Perfect horizontal centering and baseline alignment) */}
                <h1 className="w-full mb-3 drop-shadow-2xl flex flex-col sm:flex-row justify-center items-center gap-x-3 gap-y-0.5 sm:gap-y-0 leading-tight text-center">
                    <div className="inline-flex items-center justify-center">
                        <MagneticText
                            text={brandName}
                            hoverText={brandName}
                            textClassName="text-[30px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-light tracking-widest text-white uppercase drop-shadow-xl inline-block"
                            hoverTextClassName="text-[30px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold tracking-widest text-white uppercase"
                        />
                    </div>
                    <span 
                        className="hidden sm:inline-block text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-thin opacity-50 text-white select-none px-0.5"
                        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                    >
                        |
                    </span>
                    <div className="inline-flex items-center justify-center text-white text-[30px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold tracking-tight drop-shadow-xl">
                        <SlidingWord words={rotatingWords} activeIndex={activeWordIndex} />
                    </div>
                </h1>

                {/* Tagline */}
                <p
                    style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                    className="mt-2 md:mt-3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal tracking-wide text-white/95 text-center max-w-2xl mx-auto drop-shadow-lg"
                >
                    {typeof t('oneHealth.title') === 'string' && t('oneHealth.title') !== 'oneHealth.title'
                        ? t('oneHealth.title').replace('{bioInnovation}', (typeof t('oneHealth.bioInnovation') === 'string' && t('oneHealth.bioInnovation') !== 'oneHealth.bioInnovation') ? t('oneHealth.bioInnovation') : 'Bio-Innovation.')
                        : "Enabling One Health through Bio-Innovation."}
                </p>
            </motion.div>

        </section>
    );
};

export default Hero;

