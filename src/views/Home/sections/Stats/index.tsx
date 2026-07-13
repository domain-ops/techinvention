import React, { useRef } from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import gcmcImg from '../../../../assets/images/GCMC.jpg.jpeg';
import { motion, useInView } from 'framer-motion';

// Clean, borderless Logo Wrapper Component
const LogoWrapper = ({ logoSrc, label, delay, className = "" }: any) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.08 }}
            className={`flex items-center justify-center p-4 transition-transform duration-500 ease-out min-h-[220px] ${className}`}
        >
            <img 
                src={logoSrc} 
                alt={label} 
                className="max-h-[180px] max-w-full object-contain p-2 [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]"
            />
        </motion.div>
    );
};

const Stats = () => {
    const { language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <div ref={containerRef} className="py-16 bg-white relative z-20 w-full mt-12 md:mt-16 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Company Photo (Crisp, with subtle hover/entrance scale animation) */}
                    <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                        <motion.img 
                            loading="lazy" 
                            src={(gcmcImg as any).src ? (gcmcImg as any).src : gcmcImg} 
                            alt="Facility Building" 
                            className="w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            animate={isInView ? { scale: 1.05 } : {}}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>

                    {/* Right Column: Heading & Logos Grid */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        {/* Heading */}
                        <div className="w-full mb-6 text-left">
                            <h2 className="text-[36px] md:text-[42px] font-medium tracking-wide uppercase">
                                <span className="text-[#1955A6]">Our</span> <span className="text-[#5C7625]">Impact</span>
                            </h2>
                        </div>
                        
                        {/* 3 Logos in a Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center w-full">
                            <LogoWrapper logoSrc="/techinvention/great-place.png" label="Great Place to Work" delay={0.2} />
                            <LogoWrapper logoSrc="/techinvention/dun.png" label="Dun & Bradstreet" delay={0.3} />
                            <LogoWrapper logoSrc="/techinvention/forbes.png" label="Forbes DGEMS 200" delay={0.4} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;
