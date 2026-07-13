import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Microscope, RefreshCw, FileSpreadsheet, Settings } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { useLanguage } from '../../../context/LanguageContext';

const icons = [Award, ShieldCheck, Microscope, RefreshCw, FileSpreadsheet, Settings];

export default function GmpSubjects() {
    const { t } = useLanguage();
    const modules = Array.isArray(t('training.modules')) ? t('training.modules') : [];

    if (!modules.length) return null;

    return (
        <section id="gmp-subjects-section" className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            {/* Ambient Background Circles */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#1955A6]/3 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#5C7625]/3 blur-[120px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <ScrollReveal direction="up">
                        
                        <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide mb-6">
                            <SplitTitle title="Training Programs & Subjects" />
                        </h2>
                        <p className="text-slate-600 font-medium text-[16px] md:text-[18px] leading-relaxed">
                            Browse our carefully structured topics covering regulatory compliance, cleanroom processes, validation cycles, and quality guidelines.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((subj: any, index: number) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[#F8FAFC] border border-slate-200/50 hover:border-slate-300 rounded-none p-8 text-left relative flex flex-col justify-between group hover:bg-white hover:shadow-2xl transition-all duration-500"
                            >
                                <div>
                                    {/* Icon with primary/secondary alternating vibe */}
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-300`}>
                                        <Icon className="w-5 h-5 text-[#1955A6]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#1955A6] transition-colors leading-snug">
                                        {subj.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 text-sm font-semibold leading-relaxed mb-6">
                                        {subj.desc}
                                    </p>
                                </div>

                                {/* Checklist details for premium card browse experience */}
                                <div className="border-t border-slate-100 pt-6 mt-2">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Focus Areas</h4>
                                    <ul className="space-y-2">
                                        {subj.focusAreas.map((topic: string, tIdx: number) => (
                                            <li key={tIdx} className="flex items-start gap-2.5 text-[13px] font-semibold text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#5C7625] mt-1.5 shrink-0" />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
