import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import teamWorkshop from '../../../assets/images/team_gallery/team_workshop.png';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import { useLanguage } from '../../../context/LanguageContext';

export default function GmpHero() {
    const { t } = useLanguage();

    const scrollToEnquiry = () => {
        const ctaSection = document.getElementById('gmp-enquiry-section');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative flex flex-col justify-center overflow-hidden bg-white pt-32 pb-0 lg:pt-40 lg:pb-0 font-sans">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none" />

            {/* Text Content Container */}
            <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full mb-16 lg:mb-20">
                <div className="w-full text-left max-w-5xl">
                    <ScrollReveal direction="up">
                        <span className="text-[#1955A6] font-bold tracking-[0.4em] text-[11px] mb-4 block uppercase">
                            Academy of Excellence
                        </span>
                        <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[48px] font-medium tracking-wide mb-6 leading-[1.15]">
                            <SplitTitle title={t('training.title') as string} />
                        </h1>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-8 font-medium">
                            {t('training.desc')}
                        </p>
                    </ScrollReveal>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button 
                            onClick={scrollToEnquiry}
                            className="px-8 py-4 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm"
                        >
                            <BookOpen className="w-4 h-4" />
                            Register Now
                        </button>
                        <button 
                            onClick={() => document.getElementById('training-modules')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-full hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm"
                        >
                            View Modules
                            <ArrowRight className="w-4 h-4 text-[#5C7625]" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Full Width Image Section (No borders, matching container width) */}
            <div className="max-w-[1300px] mx-auto px-6 w-full relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <img 
                        src={teamWorkshop} 
                        alt="GMP Training session in classroom" 
                        className="w-full h-auto max-h-[70vh] object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
