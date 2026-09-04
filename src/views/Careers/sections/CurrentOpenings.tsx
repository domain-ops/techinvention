import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clipboard, ChevronRight, Briefcase, ChevronDown } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

interface Job {
    id: string;
    title: string;
    category: string;
    location: string;
    experience: string;
    type: string;
    desc: string;
    requirements: string[];
    formulaCode: string;
}

// Currently no openings, empty array
const jobs: Job[] = [];

const categories = [
    { id: 'rnd', label: 'VACCINE R&D' },
    { id: 'qa', label: 'QUALITY ASSURANCE & CONTROL' },
    { id: 'regulatory', label: 'REGULATORY & CLINICAL AFFAIRS' }
];

interface CurrentOpeningsProps {
    onSelectJob: (jobTitle: string) => void;
}

import { useLanguage } from '../../../context/LanguageContext';

export default function CurrentOpenings({ onSelectJob }: CurrentOpeningsProps) {
    const { t } = useLanguage();
    const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

    return (
        <section id="current-openings" className="py-20 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60 scroll-mt-20">
            {/* background ambient light */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#1955A6]/3 blur-[120px] pointer-events-none" />
            
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                <div className="text-left mb-16 max-w-4xl">
                    <ScrollReveal direction="up">
                        {/* Header for Open Positions */}
                        <div className="mb-10">
                            <h2 className="text-[24px] md:text-[40px] font-medium tracking-wide mb-3">
                                <SplitTitle title={t('careers.openPositions.title') || "Open Positions"} />
                            </h2>
                            {t('careers.openPositions.subtitle') && (
                                <h3 className="text-[#5C7625] font-semibold text-[18px] md:text-[20px] mb-4">
                                    {t('careers.openPositions.subtitle')}
                                </h3>
                            )}
                            <p className="text-slate-600 font-medium text-[16px] md:text-[18px] leading-relaxed max-w-4xl">
                                {t('careers.openPositions.intro') || (typeof t('careers.openPositions') === 'string' 
                                    ? t('careers.openPositions') 
                                    : "TechInvention offers roles across Business Consultancy, Licensing, Vaccine R&D, Production, Quality Control, Quality Assurance, Regulatory Affairs, Legal and IP, Finance, HR and corporate affairs.")}
                            </p>
                        </div>

                    </ScrollReveal>
                </div>

                {/* Grouped Jobs Table / No Openings State */}
                <div className="space-y-12">
                    {jobs.length === 0 ? (
                        <div className="mt-4 text-center max-w-2xl mx-auto p-10 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                            <Briefcase className="w-12 h-12 text-[#1955A6] mb-4" />
                            {t('careers.openPositions.noPositionsTitle') && (
                                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                                    {t('careers.openPositions.noPositionsTitle')}
                                </h4>
                            )}
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-6 font-medium">
                                {t('careers.openPositions.noPositions') || "We currently do not have any open positions. However, we are always looking for exceptional talent to join our team. You can submit your resume below, and we will get in touch when a suitable opportunity arises."}
                            </p>
                            <button
                                onClick={() => {
                                    const formSection = document.getElementById('apply-form-section');
                                    if (formSection) {
                                        formSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="px-6 py-3 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold rounded-full transition-all duration-300 text-sm shadow-md"
                            >
                                {t('careers.openPositions.spontaneous') || "Submit General Application"}
                            </button>
                        </div>
                    ) : (
                        categories.map(cat => {
                            const catJobs = jobs.filter(job => job.category === cat.id);
                            if (catJobs.length === 0) return null;

                            return (
                                <div key={cat.id} className="text-left">
                                    <h3 className="text-base md:text-lg font-bold text-brand-primary tracking-wider mb-4">
                                        {cat.label}
                                    </h3>

                                    <div className="border-t border-brand-border" />

                                    <div className="divide-y divide-brand-border">
                                        {catJobs.map(job => {
                                            const isExpanded = expandedJobId === job.id;
                                            return (
                                                <div key={job.id} className="w-full">
                                                    <button
                                                        onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                                                        className="w-full text-left py-5 flex justify-between items-center group transition-all duration-300"
                                                    >
                                                        <span className="font-semibold text-slate-900 group-hover:text-[#1955A6] transition-colors text-[14px] md:text-[16px] tracking-wide underline decoration-slate-900/20 group-hover:decoration-[#1955A6] underline-offset-4">
                                                            {job.title}
                                                        </span>
                                                        <span className="text-xs md:text-sm text-slate-600 font-bold whitespace-nowrap ml-6 transition-all duration-300 group-hover:translate-x-1">
                                                            {job.location}
                                                        </span>
                                                    </button>

                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.25 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pb-6 pt-2 px-5 md:px-7 bg-white/60 backdrop-blur-md rounded-none border border-brand-border my-3 shadow-sm text-left">
                                                                    <div className="flex flex-wrap gap-2.5 mb-4 text-[10px] uppercase tracking-wider text-slate-700 font-bold">
                                                                        <span className="bg-[#1955A6]/8 px-2.5 py-1 rounded-full text-[#1955A6]">
                                                                            Code: {job.formulaCode}
                                                                        </span>
                                                                        <span className="bg-[#5C7625]/8 px-2.5 py-1 rounded-full text-[#5C7625]">
                                                                            Exp: {job.experience}
                                                                        </span>
                                                                        <span className="bg-slate-900/5 px-2.5 py-1 rounded-full text-slate-800">
                                                                            {job.type}
                                                                        </span>
                                                                    </div>

                                                                    <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold mb-6 max-w-2xl">
                                                                        {job.desc}
                                                                    </p>

                                                                    <div className="mb-6">
                                                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                                                                            Requirements
                                                                        </span>
                                                                        <ul className="space-y-2">
                                                                            {job.requirements.map((req, idx) => (
                                                                                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1955A6] mt-2 flex-shrink-0" />
                                                                                    <span>{req}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>

                                                                    <button
                                                                        onClick={() => onSelectJob(job.title)}
                                                                        className="px-5 py-3 bg-slate-900 hover:bg-[#1955A6] text-white font-bold rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 hover:shadow-md"
                                                                    >
                                                                        Apply for this Role
                                                                        <ChevronRight className="w-3.5 h-3.5" />
                                                                    </button>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
}
