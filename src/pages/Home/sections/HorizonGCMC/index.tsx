import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';

import gcmcImg from '../../../../assets/images/GCMC.jpg.jpeg';
const logoDNA = "/techinvention/TechInvention-gif.gif";

export default function HorizonGCMC() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Hook into scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // 2. Add spring for cinematic, step-by-step smooth feel
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  // 3. Image starts as a perfectly centered card (e.g. 50vw width, 60vh height)
  // As the user scrolls through the 300vh container, it zooms exactly to 100vw/100vh
  const width = useTransform(smoothProgress, [0, 0.7], ['50vw', '100vw']);
  const height = useTransform(smoothProgress, [0, 0.7], ['60vh', '100vh']);
  const borderRadius = useTransform(smoothProgress, [0, 0.7], ['2rem', '0rem']);
  
  // 4. Header fades out naturally as we scroll
  const headerOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  // 5. Overlay text ONLY appears at the very end when the image is fully zoomed
  const overlayOpacity = useTransform(smoothProgress, [0.75, 1], [0, 1]);
  const textY = useTransform(smoothProgress, [0.75, 1], [40, 0]);

  const horizonTitle = (t('horizon.title') as string) || 'HORIZON & GCMC';
  const horizonSubtitle = (t('horizon.subtitle') as string) || 'High-impact One-health Research & Innovation ZONE';

  return (
    <div className="bg-white">
        {/* ── Normal Section Header (Sits above the animation and scrolls normally) ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <ScrollReveal direction="up" className="w-full">
                    <span className="text-[11px] font-medium tracking-[0.4em] text-brand-primary uppercase block mb-4">
                        Our World-Class Facilities
                    </span>
                    <div className="mt-4">
                        <h2 className="text-[36px] font-medium tracking-tight leading-tight tracking-tighter animate-fade-in lg:whitespace-nowrap">
                            <SplitTitle title="Where Science Meets Scale" />
                        </h2>
                    </div>
                </ScrollReveal>
                
                <div className="hidden md:flex flex-shrink-0 justify-end w-28 sm:w-32 lg:w-44 mr-8 lg:mr-16">
                    <motion.img 
                        src={logoDNA}
                        alt="TechInvention Logo"
                        className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] mix-blend-multiply"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ opacity: { duration: 1.2 }, scale: { duration: 1.2 } }}
                    />
                </div>
            </div>
        </div>

        {/* ── Cinematic Scroll Container ── */}
        <section ref={containerRef} id="horizon-gcmc" className="relative h-[400vh]">
        
        {/* STICKY LOCK: This is the magic that locks the screen in place and prevents white space below! */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white">

            {/* ── Center Fixed Expanding Image ── */}
            <motion.div
                style={{ 
                    width, 
                    height, 
                    borderRadius 
                }}
                className="relative overflow-hidden shadow-2xl z-10" 
            >
                <img
                    src={gcmcImg}
                    alt={horizonTitle}
                    className="w-full h-full object-cover"
                />

                {/* Content Overlay */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-8 md:p-16 text-center"
                >
                    <motion.div style={{ y: textY }} className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tighter text-white drop-shadow-xl">
                            {horizonTitle}
                        </h1>
                        <h3 className="text-lg md:text-2xl text-white font-semibold tracking-widest uppercase drop-shadow-md">
                            {horizonSubtitle}
                        </h3>
                    </motion.div>
                </motion.div>

            </motion.div>

        </div>
        </section>
    </div>
  );
}
