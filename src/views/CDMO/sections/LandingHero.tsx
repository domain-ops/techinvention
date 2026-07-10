import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../../assets/images/GCMC.jpg.jpeg';

const LandingHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden font-sans pt-24 pb-16 lg:pt-0 lg:pb-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={heroBg} alt="GCMC Facility" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
            </div>

            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 text-center text-white mt-16">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] font-medium tracking-wide mb-6 leading-[1.15] text-white">
                        Vaccine Manufacturing
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-relaxed max-w-4xl mx-auto font-medium text-white/90">
                        Global Collaborative Centre for Medical Countermeasures - GCMC
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default LandingHero;
