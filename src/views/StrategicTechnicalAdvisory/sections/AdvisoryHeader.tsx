import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// We can use a relevant image from the assets
import heroImage from '../../../../src/assets/images/indian_biotech_advisory.png';

const AdvisoryHeader = () => {
    const { t } = useLanguage();
    
    // Staggered text variants
    const title = t('strategicAdvisory.title') || "Strategic Technical Advisory";
    const words = title.split(' ');
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3
            }
        }
    };
    
    const childVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -20 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }
        }
    } as const;

    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Images Layered */}
            <div className="absolute inset-0 z-0">
                <img src={heroImage}
                    alt="Strategic Advisory"
                    className="w-full h-full object-cover object-center"
                />
                {/* Dark Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center justify-center pt-20 md:pt-16">
                    
                {/* Staggered Animated Title */}
                <motion.h1 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] mb-4 md:mb-6 drop-shadow-lg flex flex-wrap justify-center gap-x-2 md:gap-x-3 gap-y-1 md:gap-y-2 text-center"
                    style={{ perspective: "1000px" }}
                >
                    {words.map((word: string, index: number) => (
                        <motion.span key={index} variants={childVariants} className="inline-block">
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Breadcrumbs - Fade In */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white/80 text-[10px] sm:text-xs md:text-sm font-medium mb-8 md:mb-12 drop-shadow-md uppercase tracking-[0.15em] md:tracking-widest text-center"
                >
                    <Link href="/" className="hover:text-white transition-colors">{t('navbar.home') || "Home"}</Link>
                    <span className="text-white/60">/</span>
                    <span className="text-white/80">{t('megaMenu.services') || "Services"}</span>
                    <span className="text-white/60">/</span>
                    <span className="text-white">{title}</span>
                </motion.div>

                {/* Consult Button - Fade Up */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link 
                        href="/contact-us"
                        className="group relative flex items-center justify-center bg-brand-primary text-white hover:bg-[#1755A6] px-6 py-3 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-[12px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase transition-colors duration-300 shadow-xl shadow-brand-primary/20 w-auto"
                    >
                        <span className="relative z-10">{t('strategicAdvisory.hero.cta') || t('navbar.contactUs') || "CONSULT WITH US"}</span>
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300 text-white flex-shrink-0" strokeWidth={2.5} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AdvisoryHeader;

