import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { useLanguage } from '../../../../context/LanguageContext';

import vaccineImg from '../../../../assets/images/case-study/vaccine_lab.png';
import diagnosticImg from '../../../../assets/images/case-study/diagnostic_test.png';
import biotechImg from '../../../../assets/images/case-study/biotech_research.png';

const IMAGES = [vaccineImg, diagnosticImg, biotechImg];
const logoDNA = "/techinvention/TechInvention-gif.gif";

const Blogs = () => {
    const { t } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.82;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 md:py-20 relative w-full bg-brand-primary/5 border-t border-brand-primary/10">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-7xl mx-auto mb-16">
                    <ScrollReveal direction="up" delay={0.1} className="text-center md:text-left max-w-3xl">
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-tighter text-brand-primary mb-5">
                            {t('blogs.titlePrefix')} <span className="text-brand-secondary">{t('blogs.titleHighlight')}</span>
                        </h2>
                        <p className="text-gray-600 text-[18px] ">
                            {t('blogs.desc')}
                        </p>
                    </ScrollReveal>
                </div>

                {/* Grid */}
                <div 
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible pb-8 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {IMAGES.map((img, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={0.2 + idx * 0.1} className="min-w-[80vw] sm:min-w-[340px] md:min-w-0 snap-center">
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 will-change-transform w-full"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50">
                                    <img loading="lazy" 
                                        src={img} 
                                        alt={t(`blogs.items.${idx}.title`)} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-primary text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase shadow-sm">
                                        {t(`blogs.items.${idx}.category`)}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="flex items-center gap-4 text-gray-400 text-xs mb-4 font-medium tracking-wide uppercase">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {t(`blogs.items.${idx}.date`)}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300 line-clamp-3 leading-snug">
                                        {t(`blogs.items.${idx}.title`)}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-[18px] leading-relaxed mb-8 line-clamp-3">
                                        {t(`blogs.items.${idx}.excerpt`)}
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <Link 
                                            href="/blog" 
                                            className="inline-flex items-center gap-2 text-brand-primary font-semibold text-base hover:text-brand-secondary transition-colors group/link"
                                        >
                                            {t('blogs.readMore')}
                                            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Mobile Slider Controls */}
                <div className="flex md:hidden justify-center items-center gap-4 mt-6">
                    <button 
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-slate-600 active:scale-95 transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-slate-600 active:scale-95 transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Custom CTA matching the site */}
                <ScrollReveal direction="up" delay={0.5} className="mt-16 flex justify-center">
                    <Link href="/blogs" className="block w-fit">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center gap-4 bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-brand-primary/90 hover:shadow-xl overflow-hidden shadow-xl"
                        >
                            <span className="relative z-10 tracking-widest text-[10px] uppercase">
                                {t('blogs.viewAll')}
                            </span>
                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-full">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-full transition-transform duration-300 group-hover:translate-x-full">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.button>
                    </Link>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default Blogs;

