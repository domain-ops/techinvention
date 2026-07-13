import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import awardIvlc from '../../assets/awards/India-Vaccine-Leaders-Conclave-2025.jpg';
import awardFortune from '../../assets/awards/Fortune-Leadership-Awards-2024-Excellence.jpg';
import awardExemplars from '../../assets/awards/Exemplars-of-Excellence-2024-Biopharma.jpg';
import awardForbes from '../../assets/awards/Forbes-2024.jpg';

const SPOTLIGHT_ITEMS = [
    {
        id: 1,
        title: "India Vaccine Leaders Conclave 2025",
        description: "Recognized for vaccine innovation and excellence in vaccine manufacturing scaling.",
        image: awardIvlc,
        tag: "Award & Event"
    },
    {
        id: 2,
        title: "Fortune Leadership Awards 24",
        description: "Awarded for exceptional organizational performance and biotech contribution.",
        image: awardFortune,
        tag: "Leadership Award"
    },
    {
        id: 3,
        title: "Exemplars of Excellence 2024",
        description: "Celebrated as a key industry leader driving vaccine security and scientific excellence.",
        image: awardExemplars,
        tag: "Biopharma Accolade"
    },
    {
        id: 4,
        title: "Forbes India Spotlight 2024",
        description: "Recognized among high-potential global business models with healthcare impact.",
        image: awardForbes,
        tag: "Forbes Highlight"
    }
];

const AwardSpotlightPopup = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    // Initial delay before showing the popup, then start rotation
    useEffect(() => {
        if (isDismissed) return;

        const showTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 1500); // Appear after 1.5 seconds

        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % SPOTLIGHT_ITEMS.length);
                setIsVisible(true);
            }, 500); // 500ms transition delay
        }, 5500); // Rotate every 5.5 seconds

        return () => {
            clearTimeout(showTimeout);
            clearInterval(interval);
        };
    }, [isDismissed]);

    if (isDismissed) return null;

    const item = SPOTLIGHT_ITEMS[currentIndex];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    className="fixed bottom-6 left-6 z-[6000] max-w-[340px] sm:max-w-[380px] bg-white/95 backdrop-blur-md border border-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-2xl p-4 flex gap-4 pr-10 items-start group select-none pointer-events-auto"
                >
                    {/* Award Label Icon Tag */}
                    <div className="absolute top-3 right-10 flex items-center gap-1 bg-[#1955A6]/5 px-2 py-0.5 rounded-full">
                        <Award className="w-3 h-3 text-[#1955A6]" />
                        <span className="text-[9px] font-bold text-[#1955A6] uppercase tracking-wider">{item.tag}</span>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={() => {
                            setIsVisible(false);
                            setIsDismissed(true);
                        }}
                        className="absolute top-2.5 right-2.5 w-6 h-6 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>

                    {/* Image Block */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 relative group-hover:scale-105 transition-transform duration-300">
                        <img
                            src={(item.image as any).src ? (item.image as any).src : item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Info Block */}
                    <div className="flex flex-col gap-1 pt-4">
                        <h4 className="text-slate-900 font-semibold text-xs sm:text-[13px] leading-snug line-clamp-1">
                            {item.title}
                        </h4>
                        <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-2">
                            {item.description}
                        </p>
                        <Link 
                            href="/about" 
                            className="inline-flex items-center gap-0.5 text-[#1955A6] text-[10px] font-bold hover:underline mt-1 w-fit group/link"
                        >
                            Read More
                            <ChevronRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AwardSpotlightPopup;
