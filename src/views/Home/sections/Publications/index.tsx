"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';

const publications = [
    {
        name: "pcv",
        image: "/techinvention/articales/pcv.jpg",
        pdf: "/techinvention/articales/Streptococcus-pneumoniae-serotype-distribution-in-low-and-middle-income-countries-of-South-Asia-Do-we-need-to-revisit-the-pneumococcal-vaccine-strat.pdf"
    },
    {
        name: "Overcoming-barriers",
        image: "/techinvention/articales/Overcoming-barriers.jpg",
        pdf: "/techinvention/articales/Overcoming-barriers-to-medical-countermeasures-Strengthening-global-biosecurity-1.pdf"
    },
    {
        name: "Lancet Euvichol",
        image: "/techinvention/articales/1Lancet_Euvichol-pdf.jpg"
    },
    {
        name: "Frontiers",
        image: "/techinvention/articales/2forntiers-pdf.jpg"
    },
    {
        name: "Taylor Capacity Building",
        image: "/techinvention/articales/3Taylor_Capacity_Building-pdf.jpg"
    },
    {
        name: "Vaccine COVID-19",
        image: "/techinvention/articales/4Vaccine_COVID-19-pdf.jpg"
    }
];

export default function Publications() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, publications.length - visibleCards);

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
    };

    return (
        <section className="py-16 md:py-20 relative w-full bg-brand-primary/5 border-t border-brand-primary/10 overflow-hidden">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/3 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                {/* Header and Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="text-left max-w-3xl">
                        <ScrollReveal direction="up">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-tight text-brand-primary">
                                Our <span className="text-brand-secondary">Publications</span>
                            </h2>
                        </ScrollReveal>
                    </div>
                    
                    {/* Navigation Controls */}
                    <div className="flex gap-3 shrink-0 self-start md:self-end">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`p-3 rounded-full border transition-all duration-300 ${
                                currentIndex === 0 
                                    ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-transparent' 
                                    : 'border-[#1955A6] bg-[#1955A6] text-white hover:bg-[#1955A6]/90 shadow-md hover:shadow-lg'
                            }`}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            className={`p-3 rounded-full border transition-all duration-300 ${
                                currentIndex >= maxIndex 
                                    ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-transparent' 
                                    : 'border-[#1955A6] bg-[#1955A6] text-white hover:bg-[#1955A6]/90 shadow-md hover:shadow-lg'
                            }`}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="w-full relative overflow-visible">
                    <div className="w-full">
                         <motion.div
                            animate={{ x: `calc(-${currentIndex} * (260px + 1.5rem))` }}
                            transition={{ type: "spring", stiffness: 120, damping: 18 }}
                            className="flex gap-6 w-max"
                        >
                            {publications.map((item, idx) => (
                                <a 
                                    key={idx}
                                    href={item.pdf || item.image} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group block w-[260px] shrink-0"
                                >
                                    <motion.div 
                                        whileHover={{ y: -8 }}
                                        className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/65 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer p-4"
                                    >
                                        {/* Image wrapper: smaller size, completely uncropped! */}
                                        <div className="w-full bg-slate-50 rounded-2xl overflow-hidden mb-4 flex items-center justify-center border border-slate-100/60 h-[280px]">
                                            <img 
                                                loading="lazy" 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                            />
                                        </div>

                                        {/* CTA Button */}
                                        <div className="mt-auto w-full flex justify-center">
                                            <div className="flex items-center gap-2 bg-[#1955A6] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                Know More
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
