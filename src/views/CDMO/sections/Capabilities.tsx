import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { Settings, Droplet, Package, Shield, BookOpen } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const icons = [Settings, Droplet, Package, Shield, BookOpen];

const Capabilities = () => {
    const { t } = useLanguage();
    
    const capabilities = Array.isArray(t('cdmo.integratedCapabilities.capabilities')) 
        ? t('cdmo.integratedCapabilities.capabilities') 
        : [];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-[24px] md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                            <SplitTitle title={typeof t('cdmo.integratedCapabilities.title') === 'string' ? t('cdmo.integratedCapabilities.title') : "Integrated Capabilities"} />
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-6">
                    {capabilities.map((cap: any, idx: number) => {
                        const Icon = icons[idx % icons.length];
                        return (
                            <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                                <div className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                                    <div className="bg-brand-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-secondary shrink-0">
                                        <Icon size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{cap.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {cap.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Capabilities;
