"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import { cn } from "@/lib/utils";

import { useLanguage } from "../../context/LanguageContext";
import ScrollReveal from "../../components/Common/ScrollReveal";

const Dithering = lazy(() =>
    import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

const CTASection = () => {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="cta" className="py-20 w-full flex justify-center items-center px-4 md:px-6 bg-white relative">

            <div
                className="w-full max-w-5xl relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden rounded-[48px] border border-brand-border bg-slate-50 shadow-sm py-16 md:py-24 flex flex-col items-center justify-center duration-500">
                    <Suspense fallback={<div className="absolute inset-0 bg-slate-50" />}>
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply transition-opacity duration-500">
                            <Dithering
                                colorBack="#00000000" // Transparent
                                colorFront="#1955A6"  // brand-primary
                                shape="warp"
                                type="4x4"
                                speed={isHovered ? 0.6 : 0.2}
                                className="w-full h-full absolute inset-0"
                                minPixelRatio={1}
                            />
                        </div>
                    </Suspense>
                    
                    <ScrollReveal direction="up" className="relative z-10 px-6 max-w-3xl mx-auto text-center flex flex-col items-center">

                        {/* Headline */}
                        <h2 className="text-[36px] font-medium tracking-wide mb-4 leading-tight text-center">
                            <span className="text-brand-primary text-[#1955A6]">{t('cta.title')}</span>{' '}
                            <span className="text-brand-secondary text-[#5C7625]">{t('cta.titleHighlight')}</span>
                        </h2>



                        {/* Premium Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center gap-3 bg-brand-primary text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-brand-primary/90 hover:shadow-xl overflow-hidden"
                        >
                            <span className="relative z-10 text-[13px] font-bold uppercase tracking-widest">
                                {t('cta.startPartnership')}
                            </span>
                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform duration-300 group-hover:translate-x-full"
                                >
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="absolute -left-full transition-transform duration-300 group-hover:translate-x-full"
                                >
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.button>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
