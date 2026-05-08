import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// We can use a relevant image from the assets
import heroImage from '../../../../src/assets/images/about_manufacturing.png';

const AdvisoryHeader = () => {
    const { t } = useLanguage();
    
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] flex items-center overflow-hidden">
            {/* Full-bleed Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImage} 
                    alt="Strategic Advisory" 
                    className="w-full h-full object-cover object-center" 
                />
            </div>

            {/* Gradient Overlay for Text Legibility (Dark on left, fading to right) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>

            {/* Content Container */}
            <div className="w-full max-w-7xl mx-auto px-6 relative z-20 pt-24 md:pt-32">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl flex flex-col items-start"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] mb-6 drop-shadow-lg max-w-2xl">
                        {t('strategicAdvisory.title') || "Strategic Technical Advisory"}
                    </h1>

                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-slate-300 text-sm md:text-base font-medium mb-6 drop-shadow-md">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <span className="cursor-default">Services</span>
                        <span>›</span>
                        <span className="text-white">{t('strategicAdvisory.title') || "Strategic Technical Advisory"}</span>
                    </div>

                    <Link 
                        to="/contact-us"
                        className="group relative flex items-center justify-center bg-white text-[#1755A6] hover:bg-slate-50 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-[13px] sm:text-[14px] font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden w-auto border border-transparent"
                    >
                        <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">CONSULT WITH US</span>
                        
                        <div className="relative overflow-hidden w-5 h-5 ml-3 flex items-center">
                            <ArrowRight className="absolute w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] text-[#1755A6]" strokeWidth={2.5} />
                            <ArrowRight className="absolute w-5 h-5 -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 text-[#1755A6]" strokeWidth={2.5} />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AdvisoryHeader;
