import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    FlaskConical,
    ShieldCheck,
    Globe2,
    FileText,
    Microscope,
    TrendingUp,
} from 'lucide-react';

import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const SERVICES = [
    {
        icon: FlaskConical,
        title: 'Lorem Ipsum Dolor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tag: 'Lorem Tag',
        accent: '#1955A6',
        bg: 'from-[#1955A6]/8 to-[#1955A6]/3',
        hoverBg: '#1955A6',
    },
    {
        icon: FileText,
        title: 'Adipiscing Elit Strategy',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tag: 'Consectetur',
        accent: '#5C7625',
        bg: 'from-[#5C7625]/8 to-[#5C7625]/3',
        hoverBg: '#5C7625',
    },
    {
        icon: ShieldCheck,
        title: 'Tempor Incididunt QMS',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        tag: 'Tempor',
        accent: '#1955A6',
        bg: 'from-[#1955A6]/8 to-[#1955A6]/3',
        hoverBg: '#1955A6',
    },
    {
        icon: Globe2,
        title: 'Labore Et Dolore Transfer',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tag: 'Dolore',
        accent: '#5C7625',
        bg: 'from-[#5C7625]/8 to-[#5C7625]/3',
        hoverBg: '#5C7625',
    },
    {
        icon: Microscope,
        title: 'Magna Aliqua Diagnostics',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        tag: 'Aliqua',
        accent: '#1955A6',
        bg: 'from-[#1955A6]/8 to-[#1955A6]/3',
        hoverBg: '#1955A6',
    },
    {
        icon: TrendingUp,
        title: 'Nostrud Exercitation Strategy',
        desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        tag: 'Nostrud',
        accent: '#5C7625',
        bg: 'from-[#5C7625]/8 to-[#5C7625]/3',
        hoverBg: '#5C7625',
    },
];

const ServiceCard = ({ service, index }: { service: typeof SERVICES[0]; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const Icon = service.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[2rem] border border-slate-100 bg-white overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
        >
            {/* Gradient Fill on Hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `linear-gradient(135deg, ${service.hoverBg}08, ${service.hoverBg}18)`,
                }}
            />

            {/* Top Accent Bar */}
            <div
                className="absolute top-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500 rounded-t-[2rem]"
                style={{ backgroundColor: service.accent }}
            />

            <div className="relative z-10 p-8 flex flex-col h-full min-h-[280px]">
                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                    <span
                        className="text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full"
                        style={{
                            color: service.accent,
                            backgroundColor: `${service.accent}15`,
                        }}
                    >
                        {service.tag}
                    </span>
                </div>

                {/* Icon */}
                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                        backgroundColor: `${service.accent}12`,
                        boxShadow: `0 0 0 0 ${service.accent}40`,
                    }}
                >
                    <Icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: service.accent }}
                        strokeWidth={1.75}
                    />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight tracking-tight group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-black font-medium text-[15px] leading-relaxed flex-1">
                    {service.desc}
                </p>

                {/* Bottom CTA */}
                <div className="mt-6 flex items-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[12px] font-bold uppercase tracking-wider" style={{ color: service.accent }}>
                        Learn More
                    </span>
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${service.accent}20` }}
                    >
                        <svg className="w-3 h-3" fill="none" stroke={service.accent} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ServiceGrid = () => {
    return (
        <section id="services" className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden font-sans">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-primary/3 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-secondary/4 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <ScrollReveal direction="up">
                                <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                    What We Offer
                                </span>
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6">
                                    <SplitTitle title="Consulting Services Tailored For You" />
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="max-w-md">
                            <ScrollReveal direction="up" delay={0.2}>
                                <p className="text-black font-medium text-[16px] md:text-[18px] leading-relaxed text-left">
                                    Six specialised advisory tracks aligned to every stage of your biotech journey.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* 2x3 Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
