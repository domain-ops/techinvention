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
                
                {/* 5 Pills Section */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                    {[
                        { icon: 'FlaskConical', text: 'Engaging Scientific & Technical Curriculum' },
                        { icon: 'Factory', text: 'Hands-On Training In GMP Production' },
                        { icon: 'Presentation', text: 'Industry Experts Led Curriculum' },
                        { icon: 'Globe', text: 'Global Regulatory Alignment' },
                        { icon: 'GraduationCap', text: 'Career & Industry Readiness Focus' }
                    ].map((pill, idx) => {
                        const Icon = require('lucide-react')[pill.icon];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-[#1955A6] rounded-[50px] md:rounded-[60px] p-3 pb-8 flex flex-col items-center w-[160px] md:w-[200px] shadow-lg hover:-translate-y-2 transition-transform duration-300 min-h-[260px] md:min-h-[300px]"
                            >
                                <div className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-full bg-[#5C7625] flex items-center justify-center border-2 border-white/20 mb-4 md:mb-6 shadow-inner relative overflow-hidden shrink-0 mt-2">
                                    {/* Inner decorative dashed ring */}
                                    <div className="absolute inset-2 md:inset-3 rounded-full border border-white/40 border-dashed" />
                                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-white relative z-10" strokeWidth={1.5} />
                                </div>
                                <p className="text-white text-center font-bold text-[13px] md:text-[15px] leading-snug px-3 flex-1 flex items-center justify-center">
                                    {pill.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
