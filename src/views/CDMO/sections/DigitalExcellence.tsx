import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { Cpu, Check } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const DigitalExcellence = () => {
    const { t } = useLanguage();
    
    const points = Array.isArray(t('cdmo.digitalManufacturing.points')) 
        ? t('cdmo.digitalManufacturing.points') 
        : [];

    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-primary/5 pattern-grid-lg opacity-20" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <ScrollReveal direction="right">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold tracking-[0.2em] text-[11px] uppercase mb-6 border border-white/20">
                                <Cpu size={14} /> Technology Driven
                            </div>
                            <h2 className="text-[24px] md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                                <SplitTitle title={typeof t('cdmo.digitalManufacturing.title') === 'string' ? t('cdmo.digitalManufacturing.title') : "Digital Excellence"} />
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-10">
                                {t('cdmo.digitalManufacturing.desc')}
                            </p>
                        </ScrollReveal>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {points.map((point: any, idx: number) => (
                                <ScrollReveal key={idx} direction="up" delay={0.1 * idx} className="h-full">
                                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 h-full">
                                        <Check className="text-brand-secondary shrink-0 mt-1" size={18} />
                                        <span className="text-gray-200 text-sm leading-relaxed">{point}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DigitalExcellence;
