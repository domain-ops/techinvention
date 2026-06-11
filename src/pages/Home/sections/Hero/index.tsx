import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '../../../../context/LanguageContext';
import { MagneticText } from '../../../../components/ui/morphing-cursor';

import banner1 from '../../../../assets/images/banner-imge-1.jpg';
import banner2 from '../../../../assets/images/banner-imge-2.jpg';
import banner3 from '../../../../assets/images/banner-imge-3.jpeg';

const bgImages = [banner1, banner2, banner3];

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
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                            delay: delay + i * 0.05,
                        }}
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
        <span className="relative inline-flex overflow-hidden h-[1.3em] py-1 items-center justify-center md:justify-start w-full">
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
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1] // premium bezier curve for smooth slide up
                    }}
                    className="absolute left-0 right-0 md:left-0 md:right-auto text-center md:text-left whitespace-nowrap font-bold"
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

    const brandName = t('common.brandName') as string || "TechInvention";

    const rotatingWords = Array.isArray(t('hero.rotatingWords')) ? t('hero.rotatingWords') as string[] : [
        "Bio-Innovation",
        "Technology",
        "Healthcare",
        "Research",
        "Excellence"
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
                        <img 
                            src={bgImages[activeWordIndex % bgImages.length]} 
                            alt="Background" 
                            className="w-full h-full object-cover opacity-100" 
                        />
                    </motion.div>
                </AnimatePresence>
                
                {/* Dark overlays for text visibility */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
            </div>

            {/* Brightness Overlay */}
            <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />
            
            {/* Animated medical orbs */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ y: [0, -30, 0], x: [0, 20, 0] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/15 rounded-full blur-[100px] mix-blend-multiply"
                />
                <motion.div 
                    animate={{ y: [0, 40, 0], x: [0, -20, 0] }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-multiply"
                />
            </div>

            {/* Hero Main Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col justify-center items-center text-center pt-24 pb-16">
                
                {/* Main Headline (Stacks vertically on mobile, perfectly centered Grid on desktop) */}
                <div className="w-full mb-8 sm:mb-10 drop-shadow-2xl flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 leading-[1.2]">
                    <div className="flex justify-center md:justify-end text-[34px] md:text-[44px] lg:text-[48px] font-light tracking-widest text-white uppercase drop-shadow-xl w-full">
                        <MagneticText 
                            text={<RevealText text={brandName} delay={0.2} />}
                            hoverText={brandName}
                            hoverTextClassName="text-[34px] md:text-[44px] lg:text-[48px] font-bold tracking-widest text-white uppercase"
                        />
                    </div>
                    <span className="hidden md:flex justify-center text-[34px] md:text-[44px] lg:text-[48px] font-thin opacity-60 text-white drop-shadow-md">
                        |
                    </span>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex justify-center md:justify-start text-white text-[34px] md:text-[44px] lg:text-[48px] font-bold tracking-tight w-full drop-shadow-xl"
                    >
                        <SlidingWord words={rotatingWords} activeIndex={activeWordIndex} />
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
