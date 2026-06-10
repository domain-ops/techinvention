import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '../../../../context/LanguageContext';
import { Typewriter } from '../../../../components/ui/typewriter-text';
import { MagneticText } from '../../../../components/ui/morphing-cursor';

import banner1 from '../../../../assets/images/banner-imge-1.jpg';
import banner2 from '../../../../assets/images/banner-imge-2.jpg';
import banner3 from '../../../../assets/images/banner-imge-3.jpeg';

const bgImages = [banner1, banner2, banner3];

// Reusable Staggered Text Reveal Component with Hover
const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
    const words = text ? text.split(" ") : [];
    return (
        <motion.div 
            className={`flex flex-wrap justify-center ${className}`}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em] origin-bottom">
                    <motion.span
                        className="inline-block cursor-default"
                        initial={{ y: "120%", opacity: 0, rotateX: -45 }}
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
                    <div className="flex justify-center md:justify-end text-[30px] md:text-[36px] font-light tracking-widest text-white uppercase drop-shadow-xl w-full">
                        <MagneticText 
                            text={<RevealText text={brandName} delay={0.2} />}
                            hoverText={brandName}
                            hoverTextClassName="text-[30px] md:text-[36px] font-bold tracking-widest text-white uppercase"
                        />
                    </div>
                    <span className="hidden md:flex justify-center text-[36px] font-thin opacity-60 text-white drop-shadow-md">
                        |
                    </span>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex justify-center md:justify-start text-white text-[36px] font-bold tracking-tight w-full drop-shadow-xl"
                    >
                        <Typewriter text={rotatingWords} delay={1500} deleteSpeed={30} speed={60} loop cursor="" onWordChange={(idx) => setActiveWordIndex(idx)} />
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
