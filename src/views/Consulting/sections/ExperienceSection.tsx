import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Award, CheckCircle, TrendingUp } from 'lucide-react';

import img1 from '../../../assets/images/advisory/advisory_feasibility.png';
import img2 from '../../../assets/images/advisory/advisory_planning.png';
import img3 from '../../../assets/images/advisory/advisory_tech_tieup.png';

import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const EXPERIENCES = [
    {
        title: 'Lorem Ipsum Dolor Roadmap',
        client: 'Consectetur Adipiscing',
        year: '2023',
        outcome: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        tags: ['Lorem', 'Ipsum', 'Dolor'],
        image: img1,
        metrics: [
            { value: '10+', label: 'Lorem' },
            { value: '5', label: 'Ipsum' },
            { value: '100%', label: 'Consectetur' },
        ],
    },
    {
        title: 'Adipiscing Elit Facility',
        client: 'Tempor Incididunt Client',
        year: '2022',
        outcome: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        tags: ['Adipiscing', 'Elit', 'Tempor'],
        image: img2,
        metrics: [
            { value: 'Aute', label: 'Reprehenderit' },
            { value: 'Velit', label: 'Cillum' },
            { value: '12mo', label: 'Tempor' },
        ],
    },
    {
        title: 'Labore Et Dolore Transfer',
        client: 'Magna Aliqua Institute',
        year: '2023',
        outcome: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
        tags: ['Labore', 'Dolore', 'Magna'],
        image: img3,
        metrics: [
            { value: '1st', label: 'Excepteur' },
            { value: '8', label: 'Occaecat' },
            { value: '98%', label: 'Proident' },
        ],
    },
];

const ExperienceSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeExp = EXPERIENCES[activeIndex];

    return (
        <section className="py-24 md:py-32 bg-[#F8F9FA] overflow-hidden relative font-sans">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-primary/3 blur-3xl pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <ScrollReveal direction="up">
                                
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6">
                                    <SplitTitle title="Selected Experience & Impact" />
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="max-w-md">
                            <ScrollReveal direction="up" delay={0.2}>
                                <p className="text-black font-medium text-[16px] md:text-[18px] leading-relaxed text-left">
                                    Real-world advisory outcomes that transformed organisations across the bioscience value chain.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Split Interactive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left side: Timeline / Stepper selector */}
                    <div className="lg:col-span-5 flex flex-col gap-4 relative w-full">
                        {/* Mobile view horizontal tabs */}
                        <div className="flex lg:hidden gap-3 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-none snap-x">
                            {EXPERIENCES.map((exp, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`flex-shrink-0 snap-center px-6 py-4 rounded-2xl border transition-all duration-300 flex flex-col items-start gap-1 text-left min-w-[240px] ${
                                        activeIndex === idx
                                            ? 'bg-white border-brand-primary shadow-md'
                                            : 'bg-white/60 border-slate-200 hover:border-slate-300'
                                    }`}
                                >
                                    <span className={`text-[10px] font-bold tracking-widest ${activeIndex === idx ? 'text-brand-primary' : 'text-slate-400'}`}>
                                        CASE 0{idx + 1} • {exp.year}
                                    </span>
                                    <span className="font-semibold text-slate-800 text-sm line-clamp-1">
                                        {exp.title}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Desktop view vertical list */}
                        <div className="hidden lg:flex flex-col gap-3 relative pl-6 border-l border-slate-200">
                            {/* Vertical timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
                            
                            {EXPERIENCES.map((exp, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`group relative pl-6 py-5 cursor-pointer rounded-2xl transition-all duration-300 flex flex-col gap-2 ${
                                            isActive
                                                ? 'bg-white shadow-[0_10px_30px_rgba(25,85,166,0.04)] border border-slate-100'
                                                : 'hover:bg-slate-50/50'
                                        }`}
                                    >
                                        {/* Left Active Line Marker */}
                                        <div
                                            className={`absolute left-[-1px] top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${
                                                isActive ? 'bg-brand-primary scale-y-100' : 'bg-transparent scale-y-0 group-hover:scale-y-50 group-hover:bg-slate-300'
                                            }`}
                                        />

                                        <div className="flex items-center gap-3">
                                            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isActive ? 'text-brand-primary' : 'text-slate-400'}`}>
                                                CASE 0{idx + 1}
                                            </span>
                                            <span className="text-[10px] text-slate-400 font-bold">•</span>
                                            <span className={`text-[10px] font-bold ${isActive ? 'text-brand-secondary' : 'text-slate-400'}`}>
                                                {exp.year}
                                            </span>
                                        </div>

                                        <h4 className={`text-[15px] font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                                            {exp.title}
                                        </h4>
                                        <p className="text-[12px] text-slate-400 font-medium line-clamp-1">
                                            {exp.client}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side: Detailed Case Showcase */}
                    <div className="lg:col-span-7 w-full min-h-[550px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col h-full"
                            >
                                {/* Showcase Image */}
                                <div className="relative h-64 md:h-80 overflow-hidden w-full group/img">
                                    <img loading="lazy"
                                        src={activeExp.image}
                                        alt={activeExp.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                                    
                                    {/* Floating Tag Badges */}
                                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                                        {activeExp.tags.map((tag, i) => (
                                            <span key={i} className="bg-white/90 backdrop-blur-sm text-[#1955A6] px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Showcase Content */}
                                <div className="p-8 md:p-10 flex flex-col flex-grow justify-between gap-8">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="text-[11px] text-brand-primary font-bold uppercase tracking-widest block mb-1">
                                                    {activeExp.client}
                                                </span>
                                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                                                    {activeExp.title}
                                                </h3>
                                            </div>
                                            <div className="text-[12px] bg-slate-50 text-slate-500 font-bold px-3 py-1 rounded-lg border border-slate-100">
                                                {activeExp.year}
                                            </div>
                                        </div>

                                        {/* Premium Quote Block */}
                                        <div className="relative pl-6 border-l-2 border-brand-primary py-1 mt-6">
                                            <Quote className="w-8 h-8 text-brand-primary/10 absolute -left-2 -top-4 -z-10 transform scale-x-[-1]" />
                                            <p className="text-slate-700 text-[15px] md:text-[16px] leading-relaxed font-medium italic relative z-10">
                                                "{activeExp.outcome}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 items-end">
                                        {activeExp.metrics.map((metric, i) => {
                                            const getIcon = (idx: number) => {
                                                if (idx === 0) return <TrendingUp className="w-4 h-4 text-brand-primary" />;
                                                if (idx === 1) return <Award className="w-4 h-4 text-brand-secondary" />;
                                                return <CheckCircle className="w-4 h-4 text-emerald-600" />;
                                            };

                                            return (
                                                <div key={i} className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-1.5">
                                                        {getIcon(i)}
                                                        <span className="text-xl sm:text-2xl font-bold text-slate-800 leading-none">
                                                            {metric.value}
                                                        </span>
                                                    </div>
                                                    <span className="text-slate-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest line-clamp-1">
                                                        {metric.label}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
