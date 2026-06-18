import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { Users, Shield, Factory, ArrowDown } from "lucide-react";

import gcmcImg from '../../../../assets/images/GCMC.jpg.jpeg';
const logoDNA = "/techinvention/TechInvention-gif.gif";

// Framer motion variants for sequential popup
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.1 // Starts animating children as the blur transition finishes
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14
    }
  }
};

export default function HorizonGCMC() {
  const { t } = useLanguage();

  const horizonTitle = (t('horizon.title') as string) || 'HORIZON & GCMC';

  return (
    <div className="bg-white">
        {/* ── Normal Section Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-12">
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

        {/* ── Direct Image with Diagram Overlay (No Zoom, No Border Radius) ── */}
        <div id="horizon-gcmc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="relative w-full h-auto lg:h-[520px] overflow-hidden bg-white border border-slate-100 shadow-2xl z-10 flex flex-col justify-center p-4 lg:p-8">
                
                {/* Background Image with animated blur and overlay after 0.8s delay */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={gcmcImg}
                        alt={horizonTitle}
                        className="w-full h-full object-cover"
                        initial={{ filter: "blur(0px)", opacity: 1 }}
                        whileInView={{ filter: "blur(6px)", opacity: 0.95 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                    />
                    <motion.div 
                        className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                    />
                </div>

                {/* ── Desktop Layout (Hidden on Mobile/Tablet) ── */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden lg:flex flex-col justify-center h-full relative z-10 w-full animate-fade-in"
                >
                    {/* Upper Flow Diagram Grid */}
                    <div className="grid grid-cols-11 gap-4 items-center w-full px-2">
                        
                        {/* 1. Left Input Cards */}
                        <div className="col-span-3 flex flex-col gap-4">
                            <motion.div 
                                variants={cardVariants}
                                className="bg-brand-primary text-white p-5 rounded-none shadow-xl border border-white/10 flex items-start gap-3"
                            >
                                <Users className="w-6 h-6 text-emerald-300 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-sm tracking-wide leading-snug !text-white">Startups, MSMEs, Academia & R&D Organisations</h4>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                variants={cardVariants}
                                className="flex justify-center my-1"
                            >
                                <ArrowDown className="w-5 h-5 text-brand-primary animate-bounce" />
                            </motion.div>

                            <motion.div 
                                variants={cardVariants}
                                className="bg-white/95 text-slate-800 p-5 rounded-none shadow-xl border border-slate-200/80"
                            >
                                <ul className="space-y-2 text-[13px] font-bold text-slate-700 list-disc list-inside">
                                    <li>Vaccines</li>
                                    <li>Biotherapeutics</li>
                                    <li>Proteins for IVD</li>
                                    <li>DIVA Biomarkers</li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* 2. Left to Center Connector */}
                        <div className="col-span-1">
                            <motion.div variants={cardVariants} className="flex flex-col items-center justify-center text-center px-1">
                                <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest leading-tight">PoC - Early stage</span>
                                <div className="relative w-full flex items-center justify-center my-2">
                                    <div className="w-full h-0.5 bg-brand-primary relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-brand-primary rotate-45" />
                                    </div>
                                </div>
                                <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest leading-tight">Tech transfer</span>
                            </motion.div>
                        </div>

                        {/* 3. Center Hub */}
                        <div className="col-span-3 flex items-center justify-center">
                            <motion.div variants={cardVariants} className="relative flex flex-col items-center justify-center h-full py-6">
                                <div className="absolute w-44 h-44 rounded-full border border-brand-primary/20 animate-ping opacity-60 pointer-events-none" />
                                <div className="absolute w-36 h-36 rounded-full border border-brand-primary/40 animate-pulse pointer-events-none" />
                                <div className="z-10 bg-brand-primary text-white rounded-full w-28 h-28 flex flex-col items-center justify-center p-4 text-center shadow-2xl border border-brand-primary/10">
                                    <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-emerald-300 mb-1">Central Engine</span>
                                    <span className="text-sm font-black text-white leading-tight">GCMC HUB</span>
                                    <span className="text-[8px] text-blue-200 font-medium mt-1">TechInvention</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* 4. Center to Right Connectors */}
                        <div className="col-span-1 flex flex-col justify-around h-full py-4 min-h-[300px]">
                            <motion.div variants={cardVariants} className="flex flex-col items-center justify-center text-center">
                                <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest leading-tight">Small batches (PCT/CT)</span>
                                <div className="relative w-full flex items-center justify-center my-2">
                                    <div className="w-full h-0.5 bg-brand-primary relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-brand-primary rotate-45" />
                                    </div>
                                </div>
                                <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest leading-tight">With EU/WHO-PQ</span>
                            </motion.div>

                            <motion.div variants={cardVariants} className="flex flex-col items-center justify-center text-center mt-8">
                                <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest leading-tight">Tech transfer & Training</span>
                                <div className="relative w-full flex items-center justify-center my-2">
                                    <div className="w-full h-0.5 bg-brand-primary relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-brand-primary rotate-45" />
                                    </div>
                                </div>
                                <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest leading-tight">Commercial manufacturing</span>
                            </motion.div>
                        </div>

                        {/* 5. Right Output Cards */}
                        <div className="col-span-3 flex flex-col gap-6">
                            <motion.div 
                                variants={cardVariants}
                                className="bg-brand-primary text-white p-5 rounded-none shadow-xl border border-white/10 flex items-start gap-3"
                            >
                                <Shield className="w-6 h-6 text-emerald-300 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-sm tracking-wide mb-1 !text-white">Biosecurity</h4>
                                    <p className="text-[12px] text-slate-100 leading-relaxed font-semibold">Stockpile for emergency outbreak and pandemic preparedness</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={cardVariants}
                                className="bg-white/95 text-slate-800 p-5 rounded-none shadow-xl border border-slate-200/80 flex items-start gap-3"
                            >
                                <Factory className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-sm tracking-wide mb-1 !text-brand-primary">Industry</h4>
                                    <p className="text-[12px] text-slate-600 leading-relaxed font-semibold">Optimised tech packs for seamless transfer and rapid commercialisation</p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>

                {/* ── Mobile & Tablet Layout (Visible on lg and below) ── */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="lg:hidden flex flex-col gap-6 relative z-10 w-full px-2 py-4"
                >
                    {/* Step 1: Startups & Focus */}
                    <motion.div variants={cardVariants} className="bg-white/95 text-slate-800 p-5 rounded-none shadow-xl border border-slate-200">
                        <div className="flex items-start gap-3 mb-4">
                            <Users className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                            <h4 className="font-bold text-sm tracking-wide !text-brand-primary">Startups, MSMEs, Academia & R&D</h4>
                        </div>
                        <div className="pl-8 border-l border-brand-primary/30 space-y-2">
                            <span className="text-[11px] font-bold text-brand-primary uppercase tracking-widest block">Focus Areas:</span>
                            <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 list-disc list-inside">
                                <li>Vaccines</li>
                                <li>Biotherapeutics</li>
                                <li>Proteins for IVD</li>
                                <li>DIVA Biomarkers</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Connector Arrow */}
                    <motion.div 
                        variants={cardVariants}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest">PoC - Early stage / Tech transfer</span>
                        <ArrowDown className="w-5 h-5 text-brand-primary animate-bounce mt-1" />
                    </motion.div>

                    {/* Step 2: Center Hub */}
                    <motion.div variants={cardVariants} className="bg-brand-primary text-white p-5 rounded-none shadow-xl border border-brand-primary/10 text-center relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full border border-brand-primary/20 animate-pulse" />
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-emerald-300 mb-1 block">Central Engine</span>
                        <h4 className="text-base font-black tracking-wider !text-white">GCMC FACILITY HUB</h4>
                    </motion.div>

                    {/* Branching outputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div 
                            variants={cardVariants}
                            className="bg-brand-primary text-white p-4 rounded-none shadow-xl border border-white/10 flex flex-col justify-between"
                        >
                            <div className="flex items-start gap-2 mb-3">
                                <Shield className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                                <h5 className="font-bold text-xs uppercase tracking-wider !text-emerald-300">Biosecurity</h5>
                            </div>
                            <p className="text-xs text-slate-100 font-semibold leading-relaxed mb-4">Stockpile for emergency outbreak and pandemic preparedness</p>
                            <div className="border-t border-white/20 pt-2 text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                                Small batches (PCT/CT) &bull; EU/WHO-PQ
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            className="bg-white/95 text-slate-800 p-4 rounded-none shadow-xl border border-slate-200 flex flex-col justify-between"
                        >
                            <div className="flex items-start gap-2 mb-3">
                                <Factory className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                                <h5 className="font-bold text-xs uppercase tracking-wider !text-brand-primary">Industry</h5>
                            </div>
                            <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">Optimised tech packs for seamless transfer and rapid commercialisation</p>
                            <div className="border-t border-slate-200 pt-2 text-[10px] text-brand-primary font-bold uppercase tracking-wider">
                                Tech transfer, Training &amp; Manufacturing
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    </div>
  );
}
