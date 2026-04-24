import React from 'react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { useLanguage } from '../../../../context/LanguageContext';
import { motion } from 'framer-motion';
import techInventionVideo from '../../../../assets/videos/TechInvention-Video.mp4';

const logoDNA = "/techinvention/TechInvention-gif.gif";

const AtAGlanceVideo = () => {
    const { t } = useLanguage();
    return (
        <section className="pt-4 md:pt-8 pb-16 md:pb-20 relative w-full bg-brand-primary/5 border-b border-brand-primary/10">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-6xl mx-auto">
                    <ScrollReveal direction="up" delay={0.2} className="text-center md:text-left">
                        <h2 className="text-[36px] font-medium tracking-tight text-brand-primary tracking-tighter mb-4">
                            {t('glanceVideo.titlePrefix')} <span className="text-brand-secondary">{t('glanceVideo.titleHighlight')}</span>
                        </h2>
                    </ScrollReveal>
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
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up" delay={0.4} className="relative aspect-video max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_25px_50px_rgba(23,85,166,0.15)] group border border-slate-100 bg-black/5">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={techInventionVideo}
                        controls
                        playsInline
                        preload="metadata"
                    />
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AtAGlanceVideo;
