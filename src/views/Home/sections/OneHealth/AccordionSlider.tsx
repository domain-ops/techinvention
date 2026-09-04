import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { useLanguage } from '../../../../context/LanguageContext';

interface Slide {
    title: string;
    desc: string;
    tag: string;
    image: string;
}

interface AccordionSliderProps {
    slides: Slide[];
}

const AccordionSlider: React.FC<AccordionSliderProps> = ({ slides }) => {
  const getLink = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('consult')) return '/consulting';
    if (lower.includes('r&d') || lower.includes('rnd') || lower.includes('research')) return '/rnd';
    if (lower.includes('licens')) return '/products';
    if (lower.includes('manufactur') || lower.includes('commercial')) return '/cdmo';
    return '#';
  };
    const { t } = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    return (
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[560px] xl:h-[580px] w-full min-h-[500px] lg:min-h-[560px] opacity-100">
            {slides.map((slide, index) => (
                <motion.div
                    key={index}
                    initial={false}
                    animate={{
                        flex: expandedIndex === index ? 5 : 1,
                        height: expandedIndex === index ? 'auto' : '90px',
                        minHeight: expandedIndex === index ? '450px' : '90px',
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.23, 1, 0.32, 1]
                    }}
                    className="relative overflow-hidden cursor-pointer group lg:h-full lg:!h-full flex flex-col"
                    onClick={() => setExpandedIndex(index)}
                    onMouseEnter={() => setExpandedIndex(index)}
                >
                    {/* Background Image */}
                    <motion.div
                        className="absolute top-0 left-0 h-full w-[115%] z-0"
                        initial={false}
                        animate={{
                            x: expandedIndex === index ? '-10%' : '0%'
                        }}
                        transition={{
                            x: { 
                                duration: 15, 
                                ease: "easeInOut", 
                                repeat: expandedIndex === index ? Infinity : 0, 
                                repeatType: "reverse" 
                            }
                        }}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 25vw"
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Content Overlay (The "Blue Color") */}
                    <motion.div
                        className="relative z-10 w-full flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-10"
                        animate={{
                            backgroundColor: expandedIndex === index 
                                ? index % 2 === 0 ? 'rgba(25, 85, 166, 0.92)' : 'rgba(92, 118, 37, 0.92)'
                                : 'rgba(0,0,0,0.4)'
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatePresence mode="wait">
                            {expandedIndex === index ? (
                                <motion.div
                                    key="expanded"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="max-w-xl"
                                >

                                    <h4 className="text-white text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px] font-medium tracking-tight leading-snug mb-3 md:mb-4">
                                        {slide.title}
                                    </h4>
                                    <p className="text-white/95 text-[14px] sm:text-[15px] md:text-[16px] xl:text-[17px] font-normal leading-relaxed mb-5 md:mb-6 max-w-xl">
                                        {slide.desc}
                                    </p>
                                    <Link href={getLink(slide.tag)} className="inline-block">
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group/btn relative flex origin-left items-center gap-4 bg-white text-brand-primary px-6 py-2.5 md:px-7 md:py-3 rounded-full text-sm md:text-[15px] font-semibold tracking-tight transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl overflow-hidden w-fit pointer-events-auto shadow-md"
                                        >
                                            <span>{t('oneHealth.knowMore') || 'Know More'}</span>
                                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                                <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-full" size={16} />
                                                <ArrowRight className="absolute -left-full transition-transform duration-300 group-hover/btn:translate-x-full" size={16} />
                                            </div>
                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="collapsed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex items-center lg:items-end lg:justify-start"
                                >
                                    <div className="lg:-rotate-90 lg:whitespace-nowrap lg:origin-left font-medium tracking-tight text-white drop-shadow-lg tracking-[0.4em] text-lg lg:translate-x-6 lg:-translate-y-8 transition-all duration-500 group-hover:scale-105">
                                        {slide.title}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Decorative bottom line for active state on mobile */}
                    {expandedIndex === index && (
                        <motion.div
                            layoutId="activeLine"
                            className="absolute bottom-0 left-0 h-1 bg-white w-full z-20 lg:hidden"
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default AccordionSlider;
