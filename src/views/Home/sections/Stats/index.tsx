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
                className="max-h-[180px] max-w-full object-contain p-2"
            />
        </motion.div>
    );
};

const Stats = () => {
    const { language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <div ref={containerRef} className="py-16 bg-white relative z-20 w-full mt-12 md:mt-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full flex flex-col items-center">
                
                {/* 1. Heading (Rendered outside/before the background image container) */}
                <div className="w-full mb-10 text-left">
                    <h2 className="text-[36px] md:text-[42px] font-medium tracking-wide uppercase">
                        <span className="text-[#1955A6]">Our</span> <span className="text-[#5C7625]">Impact</span>
                    </h2>
                </div>
                
                {/* 2. Image Card Container (Acts as background for logos, centered with space on left/right) */}
                <div className="w-full relative min-h-[420px] sm:min-h-[500px] md:min-h-[600px] rounded-none overflow-hidden shadow-xl border border-slate-100 flex items-center justify-center p-6 sm:p-12">
                    
                    {/* Background Building Image */}
                    <div className="absolute inset-0 z-0">
                        <motion.img 
                            loading="lazy" 
                            src={(gcmcImg as any).src ? (gcmcImg as any).src : gcmcImg} 
                            alt="Facility Building" 
                            className="w-full h-full object-cover"
                            initial={{ filter: "blur(0px) brightness(1)", scale: 1 }}
                            animate={isInView ? { filter: "blur(8px) brightness(1)", scale: 1.05 } : {}}
                            transition={{ delay: 1.0, duration: 1.2, ease: "easeInOut" }}
                        />
                        {/* Soft White Blur Overlay */}
                        <motion.div 
                            className="absolute inset-0 bg-transparent"
                            animate={isInView ? { backgroundColor: "rgba(255, 255, 255, 0.75)" } : {}}
                            transition={{ delay: 1.0, duration: 1.2 }}
                        />
                    </div>
                    
                    {/* 3. Logos Grid (Fades in over the white-blurred building background after 1s) */}
                    <motion.div 
                        className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-center max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    >
                        <LogoWrapper logoSrc="/techinvention/great-place.png" label="Great Place to Work" delay={1.4} />
                        <LogoWrapper logoSrc="/techinvention/dun.png" label="Dun & Bradstreet" delay={1.5} />
                        <LogoWrapper logoSrc="/techinvention/forbes.png" label="Forbes DGEMS 200" delay={1.6} />
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Stats;
