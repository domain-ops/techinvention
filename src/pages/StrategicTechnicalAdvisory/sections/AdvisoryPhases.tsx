import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Microscope, FileSearch, Network, PenTool, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import img1 from '../../../../src/assets/images/about_corporate.png';
import img2 from '../../../../src/assets/images/about_lab.png';
import img3 from '../../../../src/assets/images/about_manufacturing.png';

const PHASE_ICONS = [
    FileSearch,
    PenTool,
    Network,
    Microscope,
    ShieldCheck
];

const PHASE_IMAGES = [img1, img2, img3, img1, img2];

const AdvisoryPhases = () => {
    const { t } = useLanguage();
    const sections: any[] = t('strategicAdvisory.sections') || [];

    if (!sections || sections.length === 0) return null;

    // Helper to create the brand-aligned two-tone title effect
    const renderSplitTitle = (title: string) => {
        const words = title.split(' ');
        if (words.length <= 1) return <span className="text-brand-primary">{title}</span>;
        const mid = Math.ceil(words.length / 2);
        const firstHalf = words.slice(0, mid).join(' ');
        const secondHalf = words.slice(mid).join(' ');
        
        return (
            <>
                <span className="text-brand-primary">{firstHalf} </span>
                <span className="text-brand-secondary">{secondHalf}</span>
            </>
        );
    };

    return (
        <div className="w-full bg-white py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                
                {/* Minimalist Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-center">The Methodology</h2>
                    <h3 className="text-[28px] md:text-[36px] font-medium tracking-wide text-slate-900">Strategic Process</h3>
                </div>

                {/* Vertical Phases List */}
                <div className="flex flex-col gap-16 md:gap-24">
                    {sections.map((phase, idx) => {
                        const Icon = PHASE_ICONS[idx % PHASE_ICONS.length];
                        const image = PHASE_IMAGES[idx % PHASE_IMAGES.length];

                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="flex flex-col w-full"
                            >
                                {/* Header & Info Section (Full Width) */}
                                <div className="flex flex-col w-full mb-12">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary border border-brand-primary/10">
                                            <Icon className="w-6 h-6 md:w-7 md:h-7" />
                                        </div>
                                        <div>
                                            <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-brand-primary block mb-1">Phase 0{idx + 1}</span>
                                            <div className="w-10 h-1 bg-brand-secondary rounded-full"></div>
                                        </div>
                                    </div>

                                    <h3 className="text-[28px] md:text-[36px] font-medium tracking-wide w-full mb-4">
                                        {renderSplitTitle(phase.title)}
                                    </h3>

                                    <p className="text-[#475569] text-[16px] md:text-[18px] font-medium leading-relaxed w-full text-justify">
                                        {phase.content}
                                    </p>
                                </div>

                                {/* Image Section (Full Width Banner) */}
                                <div className="w-full relative group mb-10">
                                    <div className="absolute inset-0 bg-brand-primary/5 rounded-[2rem] transform translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-y-4"></div>
                                    <div className="relative w-full h-[220px] md:h-[280px] lg:h-[360px] rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 z-10 border border-slate-100 bg-white">
                                        <img 
                                            src={image} 
                                            alt={phase.title} 
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                                        />
                                        <div className="absolute inset-0 bg-brand-primary/5 mix-blend-overlay pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* Deliverables List (Full Width Grid) */}
                                {phase.deliverables && (
                                    <div className="w-full bg-slate-50 rounded-[1.5rem] p-6 md:p-8 border border-slate-100">
                                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                            <span className="w-8 h-px bg-brand-secondary"></span>
                                            Key Deliverables
                                        </h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                                            {phase.deliverables.map((item: string, dIdx: number) => (
                                                <div key={dIdx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm md:text-base font-medium text-slate-700 leading-snug">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AdvisoryPhases;
