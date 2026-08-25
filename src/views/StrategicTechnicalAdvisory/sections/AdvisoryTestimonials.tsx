import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';

const AdvisoryTestimonials = () => {
    const { t } = useLanguage();
    const testimonials = Array.isArray(t('strategicAdvisory.testimonials')) 
        ? t('strategicAdvisory.testimonials') 
        : [];

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className="py-24 bg-brand-primary/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-[24px] md:text-4xl lg:text-5xl font-medium tracking-tight text-brand-content mb-6">
                            {t('testimonials.title') || "Trusted by Global Partners"}
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((test: any, idx: number) => (
                        <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all h-full border border-brand-primary/10 flex flex-col justify-between relative"
                            >
                                <Quote className="absolute top-6 right-6 text-brand-primary/10 w-12 h-12" />
                                <p className="text-gray-600 leading-relaxed text-lg italic mb-8 relative z-10">
                                    "{test.feedback}"
                                </p>
                                <div className="border-t border-gray-100 pt-4 mt-auto">
                                    <h4 className="font-bold text-brand-content">{test.client}</h4>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvisoryTestimonials;
