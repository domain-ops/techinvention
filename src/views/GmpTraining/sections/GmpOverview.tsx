import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Laptop, Cpu, BookOpen } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const pillars = [
    {
        icon: Laptop,
        title: 'Interactive Classrooms',
        desc: 'Advanced training rooms designed for interactive learning, case-study discussions, and video-based process walk-throughs.',
        color: '#1955A6',
        bg: 'bg-[#1955A6]/8 border-[#1955A6]/15'
    },
    {
        icon: Cpu,
        title: 'GMP Simulations',
        desc: 'Simulated environments mirroring real-world cleanrooms, aseptic behaviors, and air-lock protocols for hands-on expertise.',
        color: '#5C7625',
        bg: 'bg-[#5C7625]/8 border-[#5C7625]/15'
    },
    {
        icon: ShieldCheck,
        title: 'Regulatory Alignment',
        desc: 'Curriculum designed in strict alignment with guidelines from EU-GMP, US-FDA, and WHO, keeping teams update-to-date.',
        color: '#5C7625',
        bg: 'bg-brand-secondary/8 border-brand-secondary/15'
    },
    {
        icon: BookOpen,
        title: 'Expert Led Curriculum',
        desc: 'Delivered by senior consultants and validation experts who bring decades of global bio-pharmaceutical experience.',
        color: '#1955A6',
        bg: 'bg-[#1955A6]/8 border-[#1955A6]/15'
    }
];

const stats = [
    { value: '500+', label: 'Trainees Empowered' },
    { value: '98%', label: 'Satisfaction Rating' },
    { value: '12+', label: 'Core Modules' },
    { value: '100%', label: 'Compliance Focus' }
];

export default function GmpOverview() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/3 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-secondary/4 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <div className="mb-16 md:mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl text-left">
                            <ScrollReveal direction="up">
                                <span className="text-[#1955A6] font-bold tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                    Training Purpose
                                </span>
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6">
                                    <SplitTitle title="Bridging Knowledge & Practice" />
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="max-w-md text-left">
                            <ScrollReveal direction="up" delay={0.2}>
                                <p className="text-black font-medium text-[16px] md:text-[18px] leading-relaxed">
                                    We believe that understanding GMP compliance goes beyond reading guidelines. It requires interactive engagement, practical simulations, and contextual application.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Cultural Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative bg-white border border-slate-200/60 rounded-2xl p-7 text-left shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon Container */}
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${pillar.bg} transition-all duration-300 group-hover:scale-105`}>
                                        <Icon className="w-6 h-6" style={{ color: pillar.color }} strokeWidth={1.75} />
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-sm"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y-0 divide-x-0 md:divide-x md:divide-slate-100">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center text-center p-4">
                                <span className="text-4xl md:text-5xl font-bold text-[#1955A6] mb-2">{stat.value}</span>
                                <span className="text-slate-500 font-semibold text-xs uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
