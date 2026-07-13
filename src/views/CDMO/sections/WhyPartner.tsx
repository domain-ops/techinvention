import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const WhyPartner = () => {
    const { t } = useLanguage();
    
    const features = [
        {
            title: "End-to-End Capability",
            desc: "Integrated expertise supporting every stage of vaccine development—from process development and manufacturing scale-up to fill-finish, regulatory readiness, and technology transfer."
        },
        {
            title: "International Quality Standards",
            desc: "Manufacturing infrastructure designed in alignment with global GMP expectations, supported by robust quality systems, comprehensive documentation, and regulatory compliance."
        },
        {
            title: "Flexible Manufacturing",
            desc: "Advanced manufacturing technologies capable of supporting multiple vaccine and biologics platforms, enabling efficient development and scalable production."
        },
        {
            title: "Faster Development Pathways",
            desc: "Optimized scientific and manufacturing workflows designed to accelerate technology translation, reduce development risk, and shorten time to market."
        },
        {
            title: "Collaborative Innovation",
            desc: "A global ecosystem connecting biotechnology companies, pharmaceutical manufacturers, research institutions, governments, international organizations, and public health partners to advance vaccine innovation."
        },
        {
            title: "Sustainable Manufacturing",
            desc: "Energy-efficient infrastructure and intelligent facility management systems designed to reduce environmental impact while maintaining manufacturing excellence."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                            <SplitTitle title={typeof t('cdmo.whyPartner.title') === 'string' ? t('cdmo.whyPartner.title') : "Why Partner With Us?"} />
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature: any, idx: number) => (
                        <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                            <motion.div 
                                whileHover={{ y: -4 }}
                                className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 transition-all duration-300"
                            >
                                <div className="bg-brand-primary/10 w-11 h-11 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                                    <CheckCircle2 size={22} />
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 leading-snug">{feature.title}</h3>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default WhyPartner;
