import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { ArrowUpRight } from 'lucide-react';

import imgBio from '../../../assets/images/spotlight/biotherapeutics_lab.png';
import imgPartners from '../../../assets/images/spotlight/global_partnerships.png';
import imgEco from '../../../assets/images/spotlight/sustainable_manufacturing.png';
import imgFacility from '../../../assets/images/spotlight/research_facility.png';

const SPOTLIGHT_ITEMS = [
    {
        id: 1,
        title: "Pioneering Next-Gen Biotherapeutics",
        tag: "Latest Innovation",
        desc: "Our newest research initiative focuses on highly accessible platforms to address global health needs.",
        image: imgBio,
        colSpan: "lg:col-span-7",
        type: "image-heavy"
    },
    {
        id: 2,
        title: "Strategic Global Partnerships",
        tag: "Collaboration",
        desc: "Forging alliances with global health organizations to expand our reach and impact in emerging markets.",
        image: imgPartners,
        colSpan: "lg:col-span-5",
        type: "solid-dark"
    },
    {
        id: 3,
        title: "Sustainable Manufacturing",
        tag: "Environment",
        desc: "Implementing green technologies across our GMP facilities to significantly reduce carbon footprint.",
        image: imgEco,
        colSpan: "lg:col-span-5",
        type: "solid-light"
    },
    {
        id: 4,
        title: "Next-Gen Research Facility",
        tag: "Expansion",
        desc: "Opening our new state-of-the-art research and development facility to accelerate vaccine pipelines.",
        image: imgFacility,
        colSpan: "lg:col-span-7",
        type: "image-heavy"
    }
];

const Spotlight = () => {
    return (
        <section className="py-24 bg-brand-background relative overflow-hidden font-sans">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal direction="up">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="text-left flex-1">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                In The Spotlight
                            </span>
                            <div className="mb-4">
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left text-brand-primary">
                                    <SplitTitle title="Featured Initiatives" />
                                </h2>
                            </div>
                        </div>
                        <p className="text-[#475569] text-[16px] md:text-[18px] font-medium max-w-lg leading-relaxed text-left">
                            Discover our curated collection of key moments, groundbreaking projects, and significant milestones shaping our future.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Premium Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {SPOTLIGHT_ITEMS.map((item, idx) => {
                        const isImageHeavy = item.type === 'image-heavy';
                        const isSolidDark = item.type === 'solid-dark';
                        
                        return (
                            <ScrollReveal 
                                key={item.id} 
                                direction="up" 
                                delay={idx * 0.1}
                                className={`${item.colSpan} h-[400px] md:h-[450px]`}
                            >
                                <motion.div 
                                    className={`relative w-full h-full rounded-none overflow-hidden group cursor-pointer ${
                                        isSolidDark 
                                            ? 'bg-brand-primary text-white' 
                                            : !isImageHeavy 
                                                ? 'bg-white border border-slate-200/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]' 
                                                : ''
                                    }`}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    {/* Image Background for Image Heavy Cards */}
                                    {isImageHeavy && (
                                        <>
                                            <div className="absolute inset-0 z-0">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                        </>
                                    )}

                                    {/* Subtle Image Background for Solid Dark */}
                                    {isSolidDark && (
                                        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
                                            />
                                        </div>
                                    )}

                                    {/* Content Container */}
                                    <div className={`relative z-20 flex flex-col h-full p-8 md:p-10 ${
                                        isImageHeavy ? 'justify-end text-white' : 'justify-between'
                                    }`}>
                                        
                                        {/* Tag */}
                                        <div className={`self-start px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase backdrop-blur-md mb-6 ${
                                            isImageHeavy 
                                                ? 'bg-white/20 text-white' 
                                                : isSolidDark 
                                                    ? 'bg-white/10 text-white' 
                                                    : 'bg-brand-primary/10 text-brand-primary'
                                        }`}>
                                            {item.tag}
                                        </div>

                                        {/* Title & Desc */}
                                        <div className="mt-auto">
                                            <h3 className={`text-2xl md:text-3xl font-semibold leading-tight mb-4 ${
                                                isImageHeavy || isSolidDark ? 'text-white' : 'text-slate-900'
                                            }`}>
                                                {item.title}
                                            </h3>
                                            <p className={`text-base md:text-lg leading-relaxed line-clamp-2 md:line-clamp-3 mb-6 ${
                                                isImageHeavy 
                                                    ? 'text-slate-200' 
                                                    : isSolidDark 
                                                        ? 'text-white/80' 
                                                        : 'text-slate-600'
                                            }`}>
                                                {item.desc}
                                            </p>

                                            {/* Read More Link (Hidden by default, reveals on hover) */}
                                            <div className="overflow-hidden">
                                                <div className="flex items-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                    <span className={`font-semibold text-sm uppercase tracking-wider ${
                                                        isImageHeavy || isSolidDark ? 'text-white' : 'text-brand-primary'
                                                    }`}>
                                                        Read Story
                                                    </span>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                        isImageHeavy || isSolidDark ? 'bg-white/20 text-white' : 'bg-brand-primary/10 text-brand-primary'
                                                    }`}>
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
