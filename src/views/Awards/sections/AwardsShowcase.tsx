import React, { useState, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import awardIvlc2025 from '../../../assets/awards/India-Vaccine-Leaders-Conclave-2025.jpg';
import awardFortune2024 from '../../../assets/awards/Fortune-Leadership-Awards-2024-Excellence.jpg';
import awardExemplars2024 from '../../../assets/awards/Exemplars-of-Excellence-2024-Biopharma.jpg';
import awardForbes2024 from '../../../assets/awards/Forbes-2024.jpg';
import awardDunBradstreet from '../../../assets/awards/Dun-Bradstreet.jpg';
import awardSummitStar from '../../../assets/awards/Summit-Star.jpg';
import awardSmeExcellence from '../../../assets/awards/India-SME-Excellence.png';
import awardNsa2021 from '../../../assets/awards/Finalist-NSA-2021-honorable-PM.jpg';
import awardSwiftNlift from '../../../assets/awards/SwiftNLift-Magazine.jpg';
import awardStartupCity from '../../../assets/awards/Startup-City-Magazine-Best.jpg';
import awardTime2Leap from '../../../assets/awards/Time2Leap-Awards.jpg';

// Map string keys from translations to actual images
const imageMap: Record<string, string> = {
    'award_ivlc_2025': awardIvlc2025,
    'award_fortune_2024': awardFortune2024,
    'award_exemplars_2024': awardExemplars2024,
    'award_forbes_2024': awardForbes2024,
    'award_dun_bradstreet': awardDunBradstreet,
    'award_summit_star': awardSummitStar,
    'award_sme_excellence': awardSmeExcellence,
    'award_nsa_2021': awardNsa2021,
    'award_swiftnlift_2020': awardSwiftNlift,
    'award_startup_city_2019': awardStartupCity,
    'award_time2leap_2019': awardTime2Leap,
    'award_healthcare': 'https://images.unsplash.com/photo-1574169208507-84376144848a?q=80&w=800&auto=format&fit=crop',
    'award_inno': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    'award_cso': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop'
};

const AwardsShowcase = () => {
    const { t } = useLanguage();
    const awardsData = t('awards.items') || [];
    
    // Ensure we have an array to map over
    const awards = Array.isArray(awardsData) ? awardsData : [
        {
            year: "2025",
            title: "SME Biopharma Company of the Year",
            desc: "India Vaccine Leaders Conclave 2025",
            image: "award_ivlc_2025",
        },
        {
            year: "2024",
            title: "Excellence in Bio-innovation",
            desc: "Fortune Leadership Awards 2024",
            image: "award_fortune_2024",
        },
        {
            year: "2024",
            title: "Health Entrepreneur Award",
            desc: "Exemplars of Excellence 2024 Biopharma Edition",
            image: "award_exemplars_2024",
        },
        {
            year: "2024",
            title: "Forbes ‘Select 200’",
            desc: "We have earned a coveted spot in the Forbes India SELECT 200, a prestigious recognition of companies with game-changing global business potential!",
            image: "award_forbes_2024",
        },
        {
            year: "2024",
            title: "Startup 50 Trailblazers",
            desc: "Dun & Bradstreet Startup 50 Trailblazers 2024",
            image: "award_dun_bradstreet",
        },
        {
            year: "2023",
            title: "Summit Star",
            desc: "Summit Star 2023",
            image: "award_summit_star",
        },
        {
            year: "2022",
            title: "SME of the Year Award",
            desc: "India SME Excellence Awards in the Healthcare Sector",
            image: "award_sme_excellence",
        },
        {
            year: "2022",
            title: "Finalist NSA 2021",
            desc: "Policy Advocacy to the honorable PM of India",
            image: "award_nsa_2021",
        },
        {
            year: "2020",
            title: "Top 10 Best Biotechnology Companies",
            desc: "SwiftNLift Magazine 2020",
            image: "award_swiftnlift_2020",
        },
        {
            year: "2019",
            title: "Best Company of the Year",
            desc: "Startup City Magazine in Biotech Sector 2019",
            image: "award_startup_city_2019",
        },
        {
            year: "2019",
            title: "Time2Leap Awards (MSME Edition)",
            desc: "Ministry of MSME Leading Single Specialty Services Company of the Year",
            image: "award_time2leap_2019",
        }
    ];

    const [activeAward, setActiveAward] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for floating image
    const mouseX = useSpring(0, { stiffness: 500, damping: 50, mass: 0.5 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 50, mass: 0.5 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section className="px-4 md:px-8 max-w-[1440px] mx-auto w-full mb-8">
            <div 
                ref={containerRef}
                className="relative w-full text-black py-16 md:py-24"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setActiveAward(null)}
            >
                {/* Background ambient lighting */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary opacity-[0.08] blur-[120px] pointer-events-none rounded-full" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />
                
                <div className="relative z-10 flex flex-col w-full">
                    {/* Header for mobile since floating image won't work well */}
                    <div className="px-8 md:px-16 mb-16 lg:hidden">
                        <h2 className="text-3xl font-light text-gray-500 tracking-tight">Swipe to discover our <span className="text-brand-primary font-medium">Accolades</span></h2>
                    </div>

                    <div className="flex flex-col border-t border-gray-100">
                        {(showAll ? awards : awards.slice(0, 4)).map((award: any, idx: number) => {
                            const isActive = activeAward === idx;
                            return (
                                <div 
                                    key={idx}
                                    className="group relative w-full border-b border-gray-100 hover:border-brand-primary/20 transition-colors duration-500 cursor-pointer px-8 md:px-16"
                                    onMouseEnter={() => setActiveAward(idx)}
                                >
                                    <div className="py-12 md:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-16 relative z-10">
                                        
                                        {/* Left Side: Title & Year */}
                                        <div className="flex items-start lg:items-center gap-6 lg:gap-12 flex-1">
                                            <div className="overflow-hidden">
                                                <motion.span 
                                                    className="inline-block text-sm md:text-lg text-brand-primary font-mono tracking-widest font-bold"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 * (idx % 4) }}
                                                    viewport={{ once: true }}
                                                >
                                                    {award.year}
                                                </motion.span>
                                            </div>
                                            <div className="overflow-hidden flex-1">
                                                <motion.h2 
                                                    className={`text-xl md:text-2xl lg:text-3xl font-light tracking-tight transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                                        isActive ? 'translate-x-4 lg:translate-x-8 text-brand-primary' : 'text-gray-400 group-hover:text-gray-600'
                                                    }`}
                                                    initial={{ y: 40, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.15 * (idx % 4), duration: 0.8 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {award.title}
                                                </motion.h2>
                                            </div>
                                        </div>

                                        {/* Right Side: Desc */}
                                        <div className="lg:w-1/4 xl:w-1/3 flex justify-start lg:justify-end overflow-hidden">
                                            <motion.p 
                                                className={`text-lg md:text-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-sm lg:text-right ${
                                                    isActive ? 'text-gray-800 lg:-translate-x-4' : 'text-gray-400 group-hover:text-gray-600'
                                                }`}
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 * (idx % 4), duration: 0.8 }}
                                                viewport={{ once: true }}
                                            >
                                                {award.desc}
                                            </motion.p>
                                        </div>
                                    </div>

                                    {/* Mobile inline image reveal */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="lg:hidden w-full overflow-hidden mb-12"
                                            >
                                                <div className="w-full flex items-center justify-center drop-shadow-xl mt-4">
                                                    <img loading="lazy" 
                                                        src={imageMap[award.image] || awardIvlc2025} 
                                                        alt={award.title}
                                                        className="max-w-full h-auto max-h-[300px] object-contain"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Subtle active background glow per row */}
                                    <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary/0 via-brand-primary/[0.05] to-transparent pointer-events-none transition-opacity duration-700 ${
                                        isActive ? 'opacity-100' : 'opacity-0'
                                    }`} />
                                </div>
                            );
                        })}
                    </div>

                    {/* Show More / Show Less Button */}
                    {awards.length > 4 && (
                        <div className="flex justify-center mt-12 relative z-10">
                            <button 
                                onClick={() => setShowAll(!showAll)}
                                className="group flex items-center gap-2 px-8 py-3 rounded-full border border-gray-200 text-brand-primary font-medium hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300"
                            >
                                {showAll ? 'Show Less Accolades' : 'Show More Accolades'}
                                <svg className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180 group-hover:-translate-y-1' : 'group-hover:translate-y-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Desktop Floating Image Follower */}
                <motion.div
                    className="pointer-events-none absolute left-0 top-0 w-[450px] aspect-[4/3] z-20 hidden lg:block drop-shadow-2xl"
                    style={{
                        x: mouseX,
                        y: mouseY,
                        translateX: "-20%",
                        translateY: "-50%",
                    }}
                    animate={{
                        opacity: activeAward !== null ? 1 : 0,
                        scale: activeAward !== null ? 1 : 0.8,
                    }}
                    transition={{ opacity: { duration: 0.4 }, scale: { duration: 0.4, ease: "easeOut" } }}
                >
                    {awards.map((award: any, idx: number) => (
                        <img loading="lazy" 
                            key={idx}
                            src={imageMap[award.image] || awardIvlc2025}
                            alt={award.title}
                            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                activeAward === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                            }`}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AwardsShowcase;
