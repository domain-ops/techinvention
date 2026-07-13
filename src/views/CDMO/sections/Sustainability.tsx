import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { Leaf, Check } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const Sustainability = () => {
    const { t } = useLanguage();
    
    const points = Array.isArray(t('cdmo.sustainability.points')) 
        ? t('cdmo.sustainability.points') 
        : [];

    return (
        <section className="py-24 bg-[#EAF2EC] relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {points.map((point: any, idx: number) => (
                                <ScrollReveal key={idx} direction="up" delay={0.1 * idx} className="h-full">
                                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-green-100 shadow-sm h-full">
                                        <Check className="text-green-600 shrink-0 mt-1" size={18} />
                                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                        <ScrollReveal direction="left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold tracking-[0.2em] text-[11px] uppercase mb-6 border border-green-200">
                                <Leaf size={14} /> Green Operations
                            </div>
                            <h2 className="text-[24px] md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                                <SplitTitle title={typeof t('cdmo.sustainability.title') === 'string' ? t('cdmo.sustainability.title') : "Sustainability"} />
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-10">
                                {t('cdmo.sustainability.desc')}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Sustainability;
