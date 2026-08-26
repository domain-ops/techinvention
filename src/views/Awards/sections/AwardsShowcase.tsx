import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SplitTitle } from '../../../components/Common/SplitTitle';
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

    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="px-4 md:px-8 max-w-[1440px] mx-auto w-full mb-8">
            <div 
                ref={containerRef}
                className="relative w-full text-black py-16 md:py-24"
            >
                {/* Background ambient lighting */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary opacity-[0.08] blur-[120px] pointer-events-none rounded-full" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />
                
                <div className="relative z-10 flex flex-col w-full max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="px-4 md:px-8 mb-10 text-left">
                        <h2 className="text-[24px] md:text-[42px] font-medium tracking-wide">
                            <SplitTitle title={t('awards.sectionTitle') || "Awards And Accolades"} />
                        </h2>
                    </div>

                    {/* List Layout Container */}
                    <div className="flex flex-col border-t border-gray-100 px-4 md:px-8">
                        {(showAll ? awards : awards.slice(0, 4)).map((award: any, idx: number) => {
                            return (
                                <div 
                                    key={idx}
                                    className="group relative w-full border-b border-gray-100 hover:border-brand-primary/20 transition-colors duration-300 px-2 md:px-4"
                                >
                                    <div className="py-8 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                                        
                                        {/* Left Side: Year, Title, Description */}
                                        <div className="flex items-start gap-6 lg:gap-12 flex-1">
                                            {/* Year */}
                                            <div className="min-w-[60px] pt-1">
                                                <span className="inline-block text-sm md:text-lg text-brand-primary font-mono tracking-widest font-bold">
                                                    {award.year}
                                                </span>
                                            </div>

                                            {/* Title & Description Stacked */}
                                            <div className="flex flex-col gap-2 flex-1 text-left">
                                                <h2 className="text-xl md:text-2xl font-semibold text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-brand-primary">
                                                    {award.title}
                                                </h2>
                                                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                                    {award.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right Side: Image container (Direct image, no box border/background) */}
                                        <div 
                                            className="hidden lg:flex w-[320px] md:w-[360px] h-[200px] md:h-[240px] shrink-0 items-center justify-center p-0 overflow-hidden cursor-pointer"
                                            onClick={() => setSelectedImage(imageMap[award.image] || awardIvlc2025)}
                                        >
                                            <img 
                                                src={imageMap[award.image] || awardIvlc2025}
                                                alt={award.title}
                                                className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-[1.05]"
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile inline image (Direct image, no box border/background) */}
                                    <div 
                                        className="lg:hidden w-full overflow-hidden mb-6 cursor-pointer"
                                        onClick={() => setSelectedImage(imageMap[award.image] || awardIvlc2025)}
                                    >
                                        <div className="w-full flex items-center justify-center p-0">
                                            <img loading="lazy" 
                                                src={imageMap[award.image] || awardIvlc2025} 
                                                alt={award.title}
                                                className="max-w-full h-auto max-h-[220px] object-contain rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                                            />
                                        </div>
                                    </div>

                                    {/* Subtle active background glow per row on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/0 via-brand-primary/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                {showAll ? (t('common.showLess') || 'Show Less Accolades') : (t('common.showMore') || 'Show More Accolades')}
                                <svg className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180 group-hover:-translate-y-1' : 'group-hover:translate-y-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox Modal Popup */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center backdrop-blur-md cursor-zoom-out"
                    >
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                            aria-label="Close image popup"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-[90vw] max-h-[85vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedImage} 
                                alt="Enlarged Award/Certificate" 
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AwardsShowcase;
