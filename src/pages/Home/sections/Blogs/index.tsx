import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { useLanguage } from '../../../../context/LanguageContext';

import vaccineImg from '../../../../assets/images/case-study/vaccine_lab.png';
import diagnosticImg from '../../../../assets/images/case-study/diagnostic_test.png';
import biotechImg from '../../../../assets/images/case-study/biotech_research.png';

const IMAGES = [vaccineImg, diagnosticImg, biotechImg];
const logoDNA = "/techinvention/TechInvention-gif.gif";

const Blogs = () => {
    const { t } = useLanguage();

    return (
        <section className="py-16 md:py-20 relative w-full bg-brand-primary/5 border-t border-brand-primary/10">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-7xl mx-auto mb-16">
                    <ScrollReveal direction="up" delay={0.1} className="text-center md:text-left max-w-3xl">
                        <h2 className="text-[36px] font-medium tracking-tighter text-brand-primary mb-5">
                            {t('blogs.titlePrefix')} <span className="text-brand-secondary">{t('blogs.titleHighlight')}</span>
                        </h2>
                        <p className="text-gray-600 text-[18px] ">
                            {t('blogs.desc')}
                        </p>
                    </ScrollReveal>
                    {/* Animated Inline Logo aligned with title */}
                    <div className="hidden md:flex flex-shrink-0 justify-end w-28 sm:w-32 lg:w-44 mr-8 lg:mr-16">
                        <motion.img 
                            src={logoDNA}
                            alt="TechInvention Logo"
                            className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] mix-blend-multiply"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                opacity: { duration: 1.2, ease: "easeOut" },
                                scale: { duration: 1.2, ease: "easeOut" }
                            }}
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {IMAGES.map((img, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={0.2 + idx * 0.1}>
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 will-change-transform"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50">
                                    <img 
                                        src={img} 
                                        alt={t(`blogs.items.${idx}.title`)} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        loading="lazy"
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
                                            to="/blog" 
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

                {/* Custom CTA matching the site */}
                <ScrollReveal direction="up" delay={0.5} className="mt-16 flex justify-center">
                    <Link to="/blogs" className="block w-fit">
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
