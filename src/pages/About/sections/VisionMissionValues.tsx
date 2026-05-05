import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const VisionMissionValues = () => {
    const { t } = useLanguage();

    const values = t('about.values.items') as { title: string; desc: string }[];

    return (
        <section className="py-12 md:py-24 bg-gradient-to-b from-brand-primary/5 via-white to-brand-primary/5 overflow-hidden font-sans">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
                
                {/* Initial Vertical Line */}
                <ScrollReveal direction="up">
                    <div className="w-px h-24 bg-brand-primary/20 mx-auto" />
                </ScrollReveal>

                {/* ================= VISION SECTION ================= */}
                <div className="w-full mb-10 md:mb-16 relative">
                    <ScrollReveal direction="up" delay={0.1}>
                        {/* Watermark Title */}
                        <div className="relative text-center flex justify-center items-center py-12 mb-8">
                            <h2 className="absolute text-[50px] md:text-[80px] lg:text-[140px] font-bold text-brand-primary/[0.03] tracking-tight select-none z-0 whitespace-nowrap">
                                Our vision
                            </h2>
                            <span className="relative z-10 text-[15px] font-bold tracking-[0.4em] uppercase">
                                <SplitTitle title={t('about.vision.title')} />
                            </span>
                        </div>

                        {/* Vision Content */}
                        <div className="max-w-4xl mx-auto text-center relative px-6">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[80px] md:text-[120px] text-brand-primary/20 font-serif leading-none select-none">
                                &ldquo;
                            </div>
                            <h3 className="text-[20px] md:text-[28px] font-medium text-brand-content leading-relaxed italic relative z-10 mb-6">
                                {t('about.vision.headline').replace('{future}', t('about.vision.future'))}
                            </h3>
                            <p className="text-[#475569] text-[18px] font-medium leading-relaxed max-w-3xl mx-auto">
                                {t('about.vision.desc')}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Vertical Divider */}
                <ScrollReveal direction="up">
                    <div className="w-px h-32 bg-brand-primary/20 mx-auto" />
                </ScrollReveal>

                {/* ================= MISSION SECTION ================= */}
                <div className="w-full mb-10 md:mb-16 relative">
                    <ScrollReveal direction="up" delay={0.1}>
                        {/* Watermark Title */}
                        <div className="relative text-center flex justify-center items-center py-12 mb-8">
                            <h2 className="absolute text-[50px] md:text-[80px] lg:text-[140px] font-bold text-brand-primary/[0.03] tracking-tight select-none z-0 whitespace-nowrap">
                                Our missions
                            </h2>
                            <span className="relative z-10 text-[15px] font-bold tracking-[0.4em] uppercase">
                                <SplitTitle title={t('about.mission.title')} />
                            </span>
                        </div>

                        {/* Mission Content */}
                        <div className="max-w-4xl mx-auto text-center relative px-6">
                            <h3 className="text-[20px] md:text-[24px] font-medium text-brand-content leading-relaxed mb-6">
                                {t('about.mission.headline').replace('{equityGap}', t('about.mission.equityGap'))}
                            </h3>
                            <p className="text-[#475569] text-[16px] md:text-[18px] font-medium leading-relaxed max-w-3xl mx-auto">
                                {t('about.mission.desc')}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Vertical Divider */}
                <ScrollReveal direction="up">
                    <div className="w-px h-32 bg-brand-primary/20 mx-auto" />
                </ScrollReveal>

                {/* ================= VALUES (CIRCLES) SECTION ================= */}
                <div className="w-full mb-10 md:mb-16 relative">
                    <ScrollReveal direction="up" delay={0.1}>
                        {/* Watermark Title */}
                        <div className="relative text-center flex justify-center items-center py-12 mb-8">
                            <h2 className="absolute text-[50px] md:text-[80px] lg:text-[140px] font-bold text-brand-primary/[0.03] tracking-tight select-none z-0 whitespace-nowrap">
                                Our values
                            </h2>
                            <span className="relative z-10 text-[15px] font-bold tracking-[0.4em] uppercase">
                                <SplitTitle title={t('about.values.title')} />
                            </span>
                        </div>

                        {/* Overlapping Circles Grid */}
                        <div className="flex flex-wrap justify-center items-center gap-y-8 md:space-x-[-30px] lg:space-x-[-40px] px-6 mt-10 md:mt-16 pb-12">
                            {values.map((val, idx) => {
                                const isLast = idx === values.length - 1;
                                return (
                                    <motion.div 
                                        key={idx}
                                        whileHover={{ scale: 1.05, zIndex: 30 }}
                                        className={`relative flex flex-col justify-center items-center text-center p-8 w-[240px] h-[240px] lg:w-[280px] lg:h-[280px] rounded-full backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                                            isLast 
                                            ? 'bg-brand-primary text-white border-none shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-10' 
                                            : 'bg-white/80 border border-brand-primary/20 text-brand-content hover:bg-white hover:shadow-xl hover:border-brand-primary/30 z-0'
                                        }`}
                                    >
                                        <h4 className={`text-[18px] lg:text-[20px] font-bold mb-3 ${isLast ? 'text-white' : 'text-brand-primary'}`}>
                                            {val.title}
                                        </h4>
                                        <p className={`text-[13px] lg:text-[14px] leading-relaxed line-clamp-4 px-2 ${isLast ? 'text-white/90' : 'text-slate-600'}`}>
                                            {val.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                        
                        {/* Footer text */}
                        <div className="mt-8 flex justify-center">
                            <p className="text-brand-content/60 text-sm tracking-widest uppercase font-medium">
                                {t('about.values.footer')}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Final Vertical Line */}
                <ScrollReveal direction="up">
                    <div className="w-px h-24 bg-brand-primary/20 mx-auto" />
                </ScrollReveal>

            </div>
        </section>
    );
};

export default VisionMissionValues;
