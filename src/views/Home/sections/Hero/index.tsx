import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { useLanguage } from '../../../../context/LanguageContext';
import { MagneticText } from '../../../../components/ui/morphing-cursor';

import banner1 from '../../../../../public/banner-1.webp';
import banner2 from '../../../../../public/banner-2.webp';

const bgImages = [banner1, banner2];

// Reusable Staggered Text Reveal Component with Mask (Overflow Hidden)
const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
    const words = text ? text.split(" ") : [];
    return (
        <motion.div
            className={`flex flex-wrap justify-center ${className}`}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em] origin-bottom overflow-hidden py-1">
                    <motion.span
                        className="inline-block cursor-default"
                        initial={{ y: "120%", opacity: 0, rotateX: -20 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.16, 1, 0.3, 1],
                            delay: delay + i * 0.1,
                        }}
                        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};

// Sliding Word Rotator Component
const SlidingWord = ({ words, activeIndex }: { words: string[], activeIndex: number }) => {
    const activeWord = words[activeIndex] || "";
    return (
        <span className="relative inline-flex overflow-hidden h-[1.3em] py-1 items-center justify-center w-full min-w-max">
            {/* Invisible layout guide to keep the container from collapsing */}
            <span className="opacity-0 select-none pointer-events-none invisible">
                {activeWord}
            </span>
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={activeIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1] // premium bezier curve for smooth slide up
                    }}
                    style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                    className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-bold"
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
        (typeof t('common.advisory') === 'string' && t('common.advisory') !== 'common.advisory')
            ? t('common.advisory')
            : "Advisory",
        (typeof t('common.licensing') === 'string' && t('common.licensing') !== 'common.licensing')
            ? t('common.licensing')
            : "Licensing"
    ];

    // Unified timer to rotate background and words in sync
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [rotatingWords.length]);

    return (
        <section id="hero" className="py-16 md:py-20 relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Dynamic Background Images */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeWordIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image 
                            src={bgImages[activeWordIndex % bgImages.length]}
                            alt="Background"
                            fill
                            sizes="100vw"
                            priority={activeWordIndex === 0}
                            className="object-cover object-top opacity-100"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Removed heavy dark overlays per user request */}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Brightness Overlay Removed */}

            {/* Animated medical orbs Removed to prevent blurriness */}

            {/* Hero Main Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col justify-center items-center text-center pt-24 pb-16">
                {/* Main Headline (Stacks vertically on mobile, horizontally centered on desktop) */}
                <h1 className="w-full mb-2 sm:mb-3 drop-shadow-2xl flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 leading-[1.2]">
                    <div className="flex justify-center text-[34px] md:text-[44px] lg:text-[48px] font-light tracking-widest text-white uppercase drop-shadow-xl">
                        <MagneticText
                            text={<RevealText text={brandName} delay={0.2} />}
                            hoverText={brandName}
                            hoverTextClassName="text-[34px] md:text-[44px] lg:text-[48px] font-bold tracking-widest text-white uppercase"
                        />
                    </div>
                    <span 
                        className="hidden md:flex justify-center text-[34px] md:text-[44px] lg:text-[48px] font-thin opacity-60 text-white drop-shadow-md"
                        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                    >
                        |
                    </span>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex justify-center text-white text-[34px] md:text-[44px] lg:text-[48px] font-bold tracking-tight drop-shadow-xl"
                    >
                        <SlidingWord words={rotatingWords} activeIndex={activeWordIndex} />
                    </motion.div>
                </h1>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                    className="mt-2 md:mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium tracking-wider inline-block text-white drop-shadow-lg"
                >
                    {typeof t('oneHealth.title') === 'string' && t('oneHealth.title') !== 'oneHealth.title'
                        ? t('oneHealth.title').replace('{bioInnovation}', (typeof t('oneHealth.bioInnovation') === 'string' && t('oneHealth.bioInnovation') !== 'oneHealth.bioInnovation') ? t('oneHealth.bioInnovation') : 'Bio-Innovation.')
                        : "Enabling One Health through Bio-Innovation."}
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
