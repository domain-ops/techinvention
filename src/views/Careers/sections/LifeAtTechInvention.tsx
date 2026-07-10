import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Microscope, Award, Globe, Heart, ArrowRight, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { useLanguage } from '../../../context/LanguageContext';

import teamLab from '../../../assets/images/team_gallery/team_lab.png';
import teamMeeting from '../../../assets/images/team_gallery/team_meeting.png';
import teamCelebration from '../../../assets/images/team_gallery/team_celebration.png';
import teamWorkshop from '../../../assets/images/team_gallery/team_workshop.png';

const icons = [Microscope, Globe, Award, Heart, UserCheck];
const colors = ['#1955A6', '#5C7625', '#5C7625', '#1955A6', '#1955A6'];
const bgs = ['bg-[#1955A6]/8 border-[#1955A6]/15', 'bg-[#5C7625]/8 border-[#5C7625]/15', 'bg-[#5C7625]/8 border-[#5C7625]/15', 'bg-[#1955A6]/8 border-[#1955A6]/15', 'bg-[#1955A6]/8 border-[#1955A6]/15'];

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
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    const pillars = Array.isArray(t('careers.whyJoinUs')) ? t('careers.whyJoinUs') : [];
    const whoWeLookFor = t('careers.whoWeLookFor') as any;

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
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative mt-8"
                >
                    <img 
                        src="/techinvention/team-techinvention.jpg" 
                        alt="Life at TechInvention Team" 
                        className="w-full h-auto object-cover rounded-md shadow-md"
                    />
                </motion.div>

            </div>
        </section>
    );
}
