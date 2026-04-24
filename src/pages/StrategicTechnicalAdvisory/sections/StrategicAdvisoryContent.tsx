import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { MagicText } from '../../../components/ui/magic-text';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { Microscope, FileSearch, Network, PenTool, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PHASE_ICONS = [
    Microscope,
    FileSearch,
    Network,
    PenTool,
    ShieldCheck
];

const StrategicAdvisoryContent = () => {
    const { t } = useLanguage();
    const sections: any[] = t('strategicAdvisory.sections') || [];

    if (!sections || sections.length < 5) return null;

    return (
        <div className="bg-slate-50 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-primary/5 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/5 blur-[120px]" />
                <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-brand-primary/5 blur-[150px]" />
            </div>

            {/* Intro Section */}
            <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal direction="up">
                    <div className="max-w-5xl mx-auto text-center">
                        <MagicText
                            text={t('strategicAdvisory.intro')}
                            className="font-sans font-medium text-[18px] text-slate-600 leading-relaxed"
                        />
                        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-12 rounded-full opacity-50" />
                    </div>
                </ScrollReveal>
            </section>

            {/* Phases Timeline */}
            <section className="pb-32 max-w-7xl mx-auto px-6 relative z-10">
                {/* Central Line (Desktop) */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent -translate-x-1/2" />

                <div className="space-y-24 lg:space-y-40">
                    {sections.map((phase, idx) => {
                        const Icon = PHASE_ICONS[idx % PHASE_ICONS.length];
                        const isEven = idx % 2 === 0;

                        return (
                            <div key={idx} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                
                                {/* Center Node (Desktop) */}
                                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-xl items-center justify-center z-20 rotate-45 group hover:rotate-0 transition-transform duration-500">
                                    <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                        <Icon className="w-6 h-6 text-brand-primary" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 relative">
                                    <ScrollReveal direction={isEven ? "right" : "left"}>
                                        <div className={`flex flex-col ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                            {/* Phase Number Watermark */}
                                            <div className="absolute -top-20 -left-10 lg:-left-20 text-[180px] font-bold text-slate-900/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                                                0{idx + 1}
                                            </div>
                                            
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-lg">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="text-brand-primary font-bold tracking-[0.3em] text-[12px] uppercase">
                                                        Phase 0{idx + 1}
                                                    </span>
                                                </div>
                                                
                                                <h3 className="text-[36px] font-medium mb-8 leading-[1.1] text-slate-900">
                                                    <SplitTitle title={phase.title} />
                                                </h3>
                                                
                                                <div className="space-y-6 text-[18px] text-slate-600 font-medium leading-relaxed">
                                                    {phase.content.split('\n\n').map((p: string, i: number) => (
                                                        <p key={i}>{p}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>

                                {/* Deliverables / Visual Side */}
                                <div className="w-full lg:w-1/2">
                                    <ScrollReveal direction={isEven ? "left" : "right"} delay={0.2}>
                                        <div className="relative w-full rounded-[2rem] bg-white border border-white/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] p-8 lg:p-12 overflow-hidden group">
                                            {/* Decorative Background for Card */}
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110" />
                                            
                                            {/* Mobile Icon (since center node is hidden) */}
                                            <div className="lg:hidden mb-8 w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center">
                                                <Icon className="w-8 h-8 text-brand-primary" />
                                            </div>

                                            {phase.deliverables && (
                                                <div className="relative z-10">
                                                    <h4 className="text-[14px] font-bold text-slate-900 tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
                                                        <span className="w-8 h-px bg-brand-primary/30" />
                                                        {phase.deliverablesTitle}
                                                    </h4>
                                                    <div className="grid grid-cols-1 gap-4">
                                                        {phase.deliverables.map((item: string, dIdx: number) => (
                                                            <div key={dIdx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                                                                <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                                                                <span className="text-[18px] text-slate-700 font-medium leading-snug">
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </ScrollReveal>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default StrategicAdvisoryContent;
