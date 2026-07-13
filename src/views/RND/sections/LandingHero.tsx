import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import techInventionVideo from '../../../assets/videos/TechInvention-Video.mp4';

export default function LandingHero() {
    const { t } = useLanguage();

    const handleScroll = () => {
        const target = document.getElementById('overview-band');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 font-sans">
            {/* Ambient background decoration - subtle light glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full">
                
                {/* Text Section - Left-aligned at the top */}
                <div className="w-full text-left mb-12 lg:mb-16">
                    <ScrollReveal direction="up">
                        <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-medium tracking-wide mb-6 leading-[1.15] text-[#13325B]">
                            <SplitTitle title="Our R&D Ecosystem" />
                        </h1>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-8 w-full font-medium">
                            TechInvention's state-of-the-art R&D facility, the High-impact One Health Research & Innovation ZONe (HORIZON), is designed to accelerate vaccine innovation by supporting end-to-end research from proof-of-concept development through preclinical advancement for priority infectious diseases and antimicrobial resistance (AMR)-associated pathogens.
                        </p>
                    </ScrollReveal>


                </div>

                {/* Visual Section - Large stacked image below */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-full"
                >
                    <div className="relative rounded-none overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-slate-50 p-2 md:p-3">
                        <div className="absolute inset-0 bg-[#1955A6]/2 z-10 pointer-events-none rounded-none" />
                        <video 
                            src={techInventionVideo} 
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="w-full h-auto min-h-[300px] md:min-h-[480px] lg:max-h-[640px] object-cover rounded-none"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
