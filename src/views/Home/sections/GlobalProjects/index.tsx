import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { WorldMap } from '../../../../components/ui/world-map';
import { motion } from 'framer-motion';

import { MagicText } from '../../../../components/ui/magic-text';
import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
const logoDNA = "/techinvention/TechInvention-gif.gif";


const GlobalProjects = () => {
    const { t } = useLanguage();

    return (
        <section id="global-projects" className="py-16 md:py-20 relative bg-white">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Header Content */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
                    <div className="flex flex-col items-start gap-4">
                        <div className="max-w-3xl">
                            <h2 className="text-[36px] font-medium tracking-wide">
                                <SplitTitle title={t('globalProjects.title').replace('{partners}', t('globalProjects.partners'))} />
                            </h2>
                        </div>

                        <div className="max-w-2xl">
                            <MagicText
                                text={t('globalProjects.desc')}
                                className="font-medium tracking-tight text-brand-content text-[18px] leading-relaxed text-left lg:text-justify"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Map Image with entry animation */}
            <ScrollReveal direction="up" delay={0.2}>
                <div className="w-full relative z-10 py-2 md:py-10 flex justify-center">
                    <motion.img
                        src="/techinvention/location-map.png"
                        alt="Global Projects Map"
                        className="w-full h-auto object-contain"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>
            </ScrollReveal>
        </section>
    );
};

export default GlobalProjects;
