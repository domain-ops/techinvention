import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import { AnimatedTestimonials } from '../../../../components/ui/animated-testimonials';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';

const logoDNA = "/techinvention/TechInvention-gif.gif";

import testimonial1 from '../../../../assets/images/testimonial_1.png';
import testimonial2 from '../../../../assets/images/testimonial_2.png';
import testimonial3 from '../../../../assets/images/testimonial_3.png';

const testimonialImages: Record<string, string> = {
    testimonial_1: testimonial1,
    testimonial_2: testimonial2,
    testimonial_3: testimonial3,
};

const TestimonialsAnimated = () => {
    const { t } = useLanguage();
    const testimonialsData = t('testimonials.items') as any[] || [];

    const formattedTestimonials = testimonialsData.map((item) => ({
        quote: item.content,
        name: item.name,
        designation: item.role,
        src: testimonialImages[item.image] || item.image,
    }));

    if (!formattedTestimonials.length) return null;

    return (
        <section id="testimonials" className="py-16 md:py-20 relative bg-brand-primary/5 border-y border-brand-primary/10">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-primary/[0.03] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8 md:mb-20 z-20 relative">
                    <div className="text-center md:text-left">
                        <ScrollReveal direction="up">
                            <span className="text-[11px] font-medium tracking-tight  tracking-[0.4em] text-brand-primary mb-4 block">
                                {t('common.testimonials') || "PARTNERSHIPS & TESTIMONIALS"}
                            </span>
                        </ScrollReveal>
                        <ScrollReveal direction="up" delay={0.1}>
                            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight tracking-tighter mb-6">
                                <SplitTitle title={t('testimonials.title') as string} />
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal direction="up" delay={0.2}>
                            <p className="text-black max-w-2xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed font-medium tracking-tight">
                                {t('testimonials.subtitle')}
                            </p>
                        </ScrollReveal>
                    </div>
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

                <div className="mt-4 md:mt-10">
                    <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={true} />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsAnimated;
