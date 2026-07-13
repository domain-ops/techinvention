import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Syringe, FlaskConical, Microscope, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const SECTORS = [
    {
        id: 'human-vaccines',
        icon: Syringe,
        title: 'Lorem Ipsum Dolor',
        subtitle: 'Consectetur Adipiscing Elit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        gradient: 'from-[#1955A6] to-[#0d3d87]',
        lightBg: 'from-[#EEF4FF] to-[#E8EFFC]',
        accentColor: '#1955A6',
        capabilities: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Sed do eiusmod tempor',
            'Incididunt ut labore',
            'Dolore magna aliqua',
            'Ut enim ad minim veniam',
        ],
        highlight: '100+ Lorem Ipsum Dolor Sit Amet',
    },
    {
        id: 'veterinary-vaccines',
        icon: FlaskConical,
        title: 'Tempor Incididunt Ut',
        subtitle: 'Labore Et Dolore Magna',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        gradient: 'from-[#5C7625] to-[#3d5018]',
        lightBg: 'from-[#F1F6E8] to-[#EAF2DB]',
        accentColor: '#5C7625',
        capabilities: [
            'Quis nostrud exercitation',
            'Ullamco laboris nisi',
            'Ut aliquip ex ea commodo',
            'Duis aute irure dolor',
            'Reprehenderit in voluptate',
            'Velit esse cillum dolore',
        ],
        highlight: 'Ut Enim Ad Minim Veniam',
    },
    {
        id: 'diagnostics-biologics',
        icon: Microscope,
        title: 'Duis Aute Irure Dolor',
        subtitle: 'Reprehenderit In Voluptate',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        gradient: 'from-[#1955A6] to-[#5C7625]',
        lightBg: 'from-[#EEF4FF] to-[#F1F6E8]',
        accentColor: '#1955A6',
        capabilities: [
            'Excepteur sint occaecat',
            'Cupidatat non proident',
            'Sunt in culpa qui officia',
            'Deserunt mollit anim',
            'Id est laborum',
            'Sed ut perspiciatis unde',
        ],
        highlight: 'Duis Aute Irure Dolor In',
    },
];

const SectorCard = ({ sector, isActive, onClick, index }: {
    sector: typeof SECTORS[0];
    isActive: boolean;
    onClick: () => void;
    index: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const Icon = sector.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClick}
            className="cursor-pointer group relative rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2"
            style={{
                boxShadow: isActive
                    ? `0 20px 60px ${sector.accentColor}25, 0 4px 16px ${sector.accentColor}15`
                    : '0 4px 24px rgba(0,0,0,0.06)',
            }}
        >
            {/* Background */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${isActive ? sector.gradient : sector.lightBg} transition-all duration-500`}
            />

            {/* Pattern overlay on active */}
            {isActive && (
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            )}

            <div className="relative z-10 p-7 md:p-8">
                {/* Icon + Number */}
                <div className="flex items-start justify-between mb-6">
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                        style={{
                            backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : `${sector.accentColor}15`,
                        }}
                    >
                        <Icon
                            className="w-6 h-6 transition-colors duration-300"
                            style={{ color: isActive ? 'white' : sector.accentColor }}
                            strokeWidth={1.75}
                        />
                    </div>
                </div>

                {/* Content */}
                <span
                    className="text-[10px] font-bold tracking-[0.3em] uppercase block mb-2 transition-colors duration-300"
                    style={{ color: isActive ? 'rgba(255,255,255,0.7)' : sector.accentColor + '99' }}
                >
                    {sector.subtitle}
                </span>
                <h3
                    className="text-xl md:text-2xl font-bold mb-3 leading-tight transition-colors duration-300"
                    style={{ color: isActive ? 'white' : '#0F172A' }}
                >
                    {sector.title}
                </h3>
                <p
                    className="text-[14px] leading-relaxed font-medium mb-4 transition-colors duration-300"
                    style={{ color: isActive ? 'rgba(255,255,255,0.8)' : '#000000' }}
                >
                    {sector.desc}
                </p>

                {/* Highlight Badge */}
                <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300"
                    style={{
                        backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : `${sector.accentColor}10`,
                        color: isActive ? 'white' : sector.accentColor,
                    }}
                >
                    <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: isActive ? 'white' : sector.accentColor }}
                    />
                    {sector.highlight}
                </div>

                {/* Capabilities - Show on Active */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="overflow-hidden"
                        >
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                                    Core Capabilities
                                </p>
                                <ul className="grid grid-cols-1 gap-2">
                                    {sector.capabilities.map((cap, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06, duration: 0.3 }}
                                            className="flex items-center gap-2.5"
                                        >
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                                            <span className="text-white/90 text-[13px] font-medium">{cap}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </motion.div>
    );
};

const SectorFocus = () => {
    const [activeSector, setActiveSector] = useState(0);

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden relative font-sans">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-primary/4 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-secondary/4 blur-3xl pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <ScrollReveal direction="up">
                                
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6">
                                    <SplitTitle title="Our Sector Focus" />
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="max-w-md">
                            <ScrollReveal direction="up" delay={0.2}>
                                <p className="text-black font-medium text-[16px] md:text-[18px] leading-relaxed text-left">
                                    Deep domain expertise across three critical pillars of bioscience. Click a card to explore.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Sector Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {SECTORS.map((sector, index) => (
                        <SectorCard
                            key={sector.id}
                            sector={sector}
                            isActive={activeSector === index}
                            onClick={() => setActiveSector(activeSector === index ? -1 : index)}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectorFocus;
