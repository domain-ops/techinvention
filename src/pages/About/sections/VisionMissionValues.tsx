import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { Lightbulb, ShieldCheck, Users, Target, Globe2, Heart, Zap, Rocket } from 'lucide-react';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import visionImg from '../../../../src/assets/images/about_corporate.png';

// Quote Icon SVG
const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="44" height="44" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21L16.417 14.5C16.417 14.5 17.5 14.5 17.5 11.5C17.5 8.5 15.5 8.5 15.5 8.5C15.5 8.5 15.5 6 18.5 6C21.5 6 22 9.5 22 11.5C22 13.5 19.417 21 19.417 21H14.017ZM5.01697 21L7.41697 14.5C7.41697 14.5 8.5 14.5 8.5 11.5C8.5 8.5 6.5 8.5 6.5 8.5C6.5 8.5 6.5 6 9.5 6C12.5 6 13 9.5 13 11.5C13 13.5 10.417 21 10.417 21H5.01697Z"/>
    </svg>
);

const VisionMissionValues = () => {
    const { t } = useLanguage();
    
    // Safely type cast the values to handle both array and object formats during translation transition
    const rawValues = t('about.values.items');
    const values = Array.isArray(rawValues) ? rawValues : [];

    // Map icons to the values array based on index
    const valueIcons = [Lightbulb, ShieldCheck, Users, Globe2, Target, Heart, Zap, Rocket];

    return (
        <section className="py-20 md:py-32 bg-[#FAFAFA] relative overflow-hidden font-sans">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-primary/[0.02] to-transparent pointer-events-none" />
            <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-brand-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="text-left flex-1">
                        <ScrollReveal direction="up">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                Our Purpose
                            </span>
                            <div className="mb-4">
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                    <SplitTitle title="Purpose & Principles" />
                                </h2>
                            </div>
                            <p className="text-[#475569] text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed text-left">
                                The foundation of our organization is built on a clear vision for the future, a driving mission for today, and the core values that guide our every step.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    
                    {/* VISION BENTO BOX */}
                    <div className="lg:col-span-7 bg-white rounded-[2rem] p-10 md:p-14 border border-slate-200/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                        
                        {/* Decorative Background Image */}
                        <div className="absolute inset-0 w-full h-full hidden sm:block opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
                            <img src={visionImg} alt="Vision Background" className="w-full h-full object-cover object-right grayscale mix-blend-multiply" />
                        </div>

                        {/* Huge Watermark */}
                        <div className="absolute -bottom-16 -right-12 text-[200px] md:text-[280px] font-bold text-slate-50 leading-none group-hover:scale-105 transition-transform duration-1000 ease-out select-none pointer-events-none z-0">
                            V
                        </div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div>
                                <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
                                    {t('about.vision.title') || "Our Vision"}
                                </span>
                                
                                <h3 className="text-3xl md:text-[40px] lg:text-[46px] font-medium leading-[1.15] text-slate-900 mb-8 max-w-[95%]">
                                    {t('about.vision.headline')?.replace('{future}', t('about.vision.future') as string) || "Shaping the Future of Global Health"}
                                </h3>
                            </div>
                            
                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mt-auto">
                                {t('about.vision.desc')}
                            </p>
                        </div>
                    </div>

                    {/* MISSION BENTO BOX */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-brand-primary to-[#104085] rounded-[2rem] p-10 md:p-14 text-white relative overflow-hidden group shadow-xl">
                        {/* Background Element */}
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 ease-out select-none pointer-events-none">
                            <QuoteIcon className="w-32 h-32 md:w-40 md:h-40" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div>
                                <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
                                    {t('about.mission.title') || "Our Mission"}
                                </span>
                                
                                <h3 className="text-3xl md:text-[34px] lg:text-[40px] font-medium leading-[1.2] mb-6 pr-8 text-white">
                                    {t('about.mission.headline')?.replace('{equityGap}', t('about.mission.equityGap') as string) || "Bridging the equity gap"}
                                </h3>
                            </div>
                            
                            <p className="text-white/85 text-lg leading-relaxed mt-auto pt-8">
                                {t('about.mission.desc')}
                            </p>
                        </div>
                    </div>

                    {/* VALUES SECTION (Spans full width) */}
                    <div className="lg:col-span-12 mt-8 md:mt-12">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
                            <div>
                                <h3 className="text-3xl font-medium text-slate-900">
                                    {t('about.values.title') || "Our Core Values"}
                                </h3>
                                <p className="text-slate-500 mt-2 text-lg">The principles that drive our innovation</p>
                            </div>
                        </div>

                        {values && values.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {values.map((val: any, idx: number) => {
                                    const Icon = valueIcons[idx % valueIcons.length];
                                    return (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            whileHover={{ y: -8 }}
                                            className="bg-white rounded-[1.5rem] p-8 md:p-10 border border-slate-200/60 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
                                        >
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-[#87A840] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                            
                                            <div className="w-14 h-14 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            
                                            <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors shrink-0">
                                                {val.title}
                                            </h4>
                                            
                                            <p className="text-slate-600 text-[15px] leading-relaxed mt-auto">
                                                {val.desc}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                        
                        {/* Footer text */}
                        <div className="mt-12 flex justify-center">
                            <p className="text-slate-400 text-xs tracking-widest uppercase font-bold bg-white py-2 px-6 rounded-full border border-slate-200 shadow-sm">
                                {t('about.values.footer') || "Innovation • Integrity • Impact"}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMissionValues;
