import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Award, Globe, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import teamLab from '../../../assets/images/team_gallery/team_lab.png';
import teamMeeting from '../../../assets/images/team_gallery/team_meeting.png';
import teamCelebration from '../../../assets/images/team_gallery/team_celebration.png';
import teamWorkshop from '../../../assets/images/team_gallery/team_workshop.png';

const pillars = [
    {
        icon: Microscope,
        title: 'Cutting-Edge R&D',
        desc: 'Work in world-class laboratories equipped with modern diagnostic and vaccine development infrastructure.',
        color: '#1955A6',
        bg: 'bg-[#1955A6]/8 border-[#1955A6]/15'
    },
    {
        icon: Globe,
        title: 'Global Health Impact',
        desc: 'Help formulate and transfer technologies for life-saving vaccines and diagnostics used worldwide.',
        color: '#5C7625',
        bg: 'bg-[#5C7625]/8 border-[#5C7625]/15'
    },
    {
        icon: Award,
        title: 'Continuous Learning',
        desc: 'We support scientific publications, patent applications, global conferences, and higher education.',
        color: '#5C7625',
        bg: 'bg-brand-secondary/8 border-brand-secondary/15'
    },
    {
        icon: Heart,
        title: 'Wellness & Balance',
        desc: 'Comprehensive medical benefits, collaborative working hours, and regular team celebrations.',
        color: '#1955A6',
        bg: 'bg-[#1955A6]/8 border-[#1955A6]/15'
    }
];

const galleryItems = [
    {
        image: teamLab,
        title: 'Scientific Innovation',
        category: 'R&D Labs',
        width: 'w-[260px] md:w-[320px]',
        height: 'h-[300px] md:h-[360px]',
        offset: 'translate-y-6 md:translate-y-8'
    },
    {
        image: teamMeeting,
        title: 'Collaborative Planning',
        category: 'Strategy Sessions',
        width: 'w-[300px] md:w-[380px]',
        height: 'h-[260px] md:h-[320px]',
        offset: '-translate-y-4 md:-translate-y-6'
    },
    {
        image: teamCelebration,
        title: 'Milestone Celebrations',
        category: 'Team Life',
        width: 'w-[240px] md:w-[300px]',
        height: 'h-[320px] md:h-[400px]',
        offset: 'translate-y-8 md:translate-y-12'
    },
    {
        image: teamWorkshop,
        title: 'Hands-on Workshops',
        category: 'GMP Training',
        width: 'w-[280px] md:w-[350px]',
        height: 'h-[280px] md:h-[340px]',
        offset: '-translate-y-6 md:-translate-y-8'
    }
];

export default function LifeAtTechInvention() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % galleryItems.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    };

    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;
    
    // Dynamic xOffset based on responsive width
    const xOffset = isMobile ? 80 : isTablet ? 180 : 320;

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/3 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-secondary/4 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl text-left">
                            <ScrollReveal direction="up">
                                <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                    Our Culture
                                </span>
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6">
                                    <SplitTitle title="Life at TechInvention" />
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="max-w-md text-left">
                            <ScrollReveal direction="up" delay={0.2}>
                                <p className="text-black font-medium text-[16px] md:text-[18px] leading-relaxed">
                                    We foster an environment of scientific curiosity, technical excellence, and mutual respect. Here, you are encouraged to push boundaries.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Cultural Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative bg-white border border-slate-200/60 rounded-none p-7 text-left shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon Container */}
                                    <div className={`w-14 h-14 rounded-none flex items-center justify-center mb-6 border ${pillar.bg} transition-all duration-300 group-hover:scale-105`}>
                                        <Icon className="w-6 h-6" style={{ color: pillar.color }} strokeWidth={1.75} />
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm font-semibold leading-relaxed mb-6">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Team Gallery Section */}
                <div className="mt-24 relative w-full flex flex-col items-center">
                    <ScrollReveal direction="up">
                        <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-center mb-12 max-w-2xl mx-auto leading-tight text-slate-900">
                            <SplitTitle title="A Glimpse into Life at TechInvention" />
                        </h2>
                    </ScrollReveal>

                    {/* 3D Perspective Gallery Viewport */}
                    <div className="relative w-full max-w-[1100px] h-[380px] sm:h-[480px] md:h-[600px] flex items-center justify-center select-none py-10" style={{ perspective: '1200px' }}>
                        
                        {/* Navigation Buttons */}
                        <button 
                            onClick={handlePrev}
                            className="absolute left-0 sm:left-2 md:left-4 z-30 p-2.5 sm:p-3 bg-white/80 hover:bg-white border border-slate-200 shadow-lg rounded-full backdrop-blur-md transition-all text-slate-800 hover:scale-105 active:scale-95"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button 
                            onClick={handleNext}
                            className="absolute right-0 sm:right-2 md:right-4 z-30 p-2.5 sm:p-3 bg-white/80 hover:bg-white border border-slate-200 shadow-lg rounded-full backdrop-blur-md transition-all text-slate-800 hover:scale-105 active:scale-95"
                            aria-label="Next Slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Slide Deck */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {galleryItems.map((item, index) => {
                                const total = galleryItems.length;
                                let diff = index - activeIndex;
                                
                                // Wrap diff around circular list
                                if (diff < -1) diff += total;
                                if (diff > 2) diff -= total;
                                
                                if (diff === 2) {
                                    return <div key={index} className="absolute hidden opacity-0" />;
                                }

                                const isActive = diff === 0;
                                const isRight = diff === 1;
                                const isLeft = diff === -1;

                                return (
                                    <motion.div
                                        key={index}
                                        style={{ transformStyle: 'preserve-3d' }}
                                        animate={{
                                            x: isActive ? 0 : isRight ? xOffset : -xOffset,
                                            scale: isActive ? 1 : 0.82,
                                            rotateY: isActive ? 0 : isRight ? -25 : 25,
                                            opacity: isActive ? 1 : 0.55,
                                            zIndex: isActive ? 20 : 10,
                                        }}
                                        transition={{ 
                                            type: 'spring', 
                                            stiffness: 260, 
                                            damping: 25 
                                        }}
                                        onClick={() => {
                                            if (!isActive) {
                                                setActiveIndex(index);
                                            }
                                        }}
                                        className="absolute w-[260px] sm:w-[360px] md:w-[480px] h-[320px] sm:h-[420px] md:h-[540px] rounded-none overflow-hidden shadow-2xl bg-white border border-slate-200/50 cursor-pointer group"
                                    >
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dots indicators */}
                    <div className="flex gap-2.5 mt-4 mb-8">
                        {galleryItems.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    index === activeIndex ? 'w-8 bg-[#1955A6]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Culture highlights panel */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 bg-[#FAFAFA] border border-slate-200/60 rounded-none p-8 md:p-12 text-left"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                                Interested in publishing research or filing patents?
                            </h3>
                            <p className="text-slate-600 font-semibold text-sm md:text-base leading-relaxed max-w-3xl">
                                We believe the best scientific achievements are shared. Our R&D division has a dedicated framework to assist scientists in intellectual property filing and getting research papers published in indexed international journals.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex lg:justify-end">
                            <button 
                                onClick={() => document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3.5 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2 shadow-md w-fit"
                            >
                                Explore Careers
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
