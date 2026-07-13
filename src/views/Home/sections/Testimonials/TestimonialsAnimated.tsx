import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const TestimonialsAnimated = () => {
    const { t } = useLanguage();
    const testimonialsData = t('testimonials.items') as any[] || [];
    const [active, setActive] = useState(0);

    const handleNext = () => {
        if (testimonialsData.length === 0) return;
        setActive((prev) => (prev + 1) % testimonialsData.length);
    };

    const handlePrev = () => {
        if (testimonialsData.length === 0) return;
        setActive((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    useEffect(() => {
        if (testimonialsData.length === 0) return;
        const interval = setInterval(handleNext, 6000);
        return () => clearInterval(interval);
    }, [testimonialsData.length]);

    if (!testimonialsData.length) return null;

    return (
        <section id="testimonials" className="py-16 md:py-24 relative bg-brand-primary/5 border-y border-brand-primary/10">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-primary/[0.03] to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                
                {/* 1. Header (Light background, dark/colored text) */}
                <div className="mb-10">
                    <ScrollReveal direction="up" delay={0.1}>
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-tight leading-tight tracking-tighter mb-4 text-[#1955A6]">
                            <SplitTitle title={t('testimonials.title') as string} />
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="text-slate-700 max-w-2xl mx-auto text-[18px] leading-relaxed font-medium tracking-tight">
                            {t('testimonials.subtitle')}
                        </p>
                    </ScrollReveal>
                </div>

                {/* 2. Testimonial Card Block (Blue background, white text) */}
                <div className="relative w-full max-w-3xl mx-auto bg-[#1955A6] rounded-2xl shadow-xl p-8 sm:p-12 min-h-[250px] flex flex-col justify-center items-center overflow-hidden border border-[#1955A6]/10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full flex flex-col items-center"
                        >
                            <p className="text-lg md:text-xl lg:text-[22px] text-white leading-relaxed font-light italic max-w-2xl mb-8">
                                "{testimonialsData[active].content}"
                            </p>
                             <div className="text-center w-full px-4">
                                 <h3 className="text-xs sm:text-sm md:text-lg font-bold text-white uppercase tracking-wide max-w-xl mx-auto">
                                     {testimonialsData[active].name}
                                 </h3>
                                 <p className="text-[11px] md:text-xs text-[#89b036] font-bold tracking-widest uppercase mt-1.5">
                                     {testimonialsData[active].role}
                                 </p>
                             </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 3. Navigation Controls (Styled for light background below the card) */}
                <div className="flex gap-4 justify-center items-center mt-8">
                    <button
                        onClick={handlePrev}
                        className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-[#1955A6] hover:text-white transition-all duration-300 shadow-sm border border-slate-100 text-slate-700"
                        aria-label="Previous testimonial"
                    >
                        <IconArrowLeft className="h-5 w-5" />
                    </button>
                    <div className="flex gap-2">
                        {testimonialsData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActive(idx)}
                                className={`h-1.5 transition-all duration-300 rounded-full ${
                                    idx === active ? 'w-6 bg-[#1955A6]' : 'w-1.5 bg-slate-300'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-[#1955A6] hover:text-white transition-all duration-300 shadow-sm border border-slate-100 text-slate-700"
                        aria-label="Next testimonial"
                    >
                        <IconArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsAnimated;
