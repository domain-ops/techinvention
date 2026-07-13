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
                <div className="mb-12">
                    <ScrollReveal direction="up" delay={0.1}>
                        <h2 className="text-[36px] font-medium tracking-tight leading-tight tracking-tighter mb-4">
                            <SplitTitle title={t('testimonials.title') as string} />
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="text-black max-w-2xl mx-auto text-[18px] leading-relaxed font-medium tracking-tight">
                            {t('testimonials.subtitle')}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="relative min-h-[220px] flex flex-col justify-center items-center py-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full flex flex-col items-center"
                        >
                            <p className="text-xl md:text-2xl lg:text-[24px] text-slate-800 leading-relaxed font-light italic max-w-3xl mb-8">
                                "{testimonialsData[active].content}"
                            </p>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                    {testimonialsData[active].name}
                                </h3>
                                <p className="text-xs md:text-sm text-brand-primary font-medium tracking-widest uppercase mt-1">
                                    {testimonialsData[active].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex gap-4 justify-center items-center mt-8">
                    <button
                        onClick={handlePrev}
                        className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm border border-slate-100 text-slate-700"
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
                                    idx === active ? 'w-6 bg-brand-primary' : 'w-1.5 bg-slate-300'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm border border-slate-100 text-slate-700"
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
