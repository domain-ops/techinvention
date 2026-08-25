import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { Factory } from "lucide-react";
import { SplitTitle } from '../../../../components/Common/SplitTitle';

import gcmcImg from '../../../../assets/images/GCMC.jpg.jpeg';
import industryFactoryImg from '../../../../assets/images/industry_factory.png';

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 }
};

const popVariant = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, type: "spring", stiffness: 90, damping: 14 }
  }
});

const fadeVariant = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.5 } }
});

const drawHorizontal = (delay: number): Variants => ({
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { delay, duration: 0.6, ease: "easeInOut" } }
});

const drawVertical = (delay: number): Variants => ({
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { delay, duration: 0.6, ease: "easeInOut" } }
});

interface HorizonGCMCProps {
    hideHeading?: boolean;
}

export default function HorizonGCMC({ hideHeading = false }: HorizonGCMCProps) {
  const { t } = useLanguage();

  const rawPills = t('horizonGcmc.pills') as string[];
  const defaultPills = [
      "Process\noptimisation", 
      "Scale-ups", 
      "Consistency/\nValidation", 
      "Clinical trials", 
      "Regulatory\napprovals", 
      "IP & legal"
  ];
  const pills = Array.isArray(rawPills) && rawPills.length === 6 ? rawPills : defaultPills;

  return (
    <div className="bg-white">
        {!hideHeading && (
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-12">
                <div className="flex flex-col justify-between gap-8">
                    <ScrollReveal direction="up" className="w-full">
                        <div className="mt-4">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide leading-tight text-slate-900 animate-fade-in w-full">
                                <SplitTitle title={t('horizon.gcmcTitle') || "Global Collaborative centre for Medical Countermeasures"} />
                            </h2>
                            <p className="mt-5 text-slate-800 w-full text-[18px] leading-relaxed">
                                {t('horizon.gcmcDesc') || "A GMP-compliant facility (GCMC) purpose-built to enable seamless scale-up and accelerate the translation of vaccine candidates from the clinical development to full commercial scale manufacturing."}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        )}

        <div id="horizon-gcmc" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 ${hideHeading ? 'pt-12' : ''}`}>
            <div className="relative w-full h-auto lg:h-[650px] overflow-hidden bg-[#346c7a] border border-slate-100 shadow-2xl z-10 flex flex-col justify-center p-4 lg:p-8 rounded-sm">
                
                {/* Background Image with animated blur after 2s delay */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={gcmcImg}
                        alt="Background Facility"
                        className="w-full h-full object-cover"
                        initial={{ filter: "blur(0px)", scale: 1.05 }}
                        whileInView={{ filter: "blur(8px)", scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 2.0, duration: 0.6, ease: "easeInOut" }}
                    />
                    <motion.div 
                        className="absolute inset-0 bg-[#346c7a]/85 backdrop-blur-[2px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 2.0, duration: 0.6, ease: "easeInOut" }}
                    />
                </div>

                {/* ── Master Diagram Container ── */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full h-full relative z-10 flex flex-col justify-center"
                >
                    {/* Center Building Image (Pops up at 2.0s) */}
                    <div className="absolute left-1/2 top-[130px] lg:top-[42%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                        <motion.div 
                            variants={popVariant(2.0)}
                            className="relative w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,188,212,0.6)] border-[5px] border-[#00bcd4]"
                        >
                            <img src={gcmcImg} alt="GCMC Facility" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    {/* ── Desktop Layout (Hidden on Mobile/Tablet) ── */}
                    <div className="hidden lg:flex flex-col h-full relative z-10 w-full max-w-[1100px] xl:max-w-[1200px] mx-auto">
                        <div className="flex-1 relative w-full">
                            
                            {/* Left Box (Pops up at 2.2s) */}
                            <div className="absolute right-[calc(50%+280px)] xl:right-[calc(50%+330px)] top-[42%] -translate-y-1/2 w-[160px] xl:w-[180px]">
                                <motion.div variants={popVariant(2.2)} className="bg-white text-slate-800 p-4 xl:p-5 rounded-2xl shadow-xl text-center w-full">
                                    <h4 className="font-bold text-[13px] xl:text-[15px] text-[#1c52a0] leading-snug">
                                        {t('horizonGcmc.startupsLine1') || "Startups"}<br/>
                                        {t('horizonGcmc.startupsLine2') || "MSMEs"}<br/>
                                        {t('horizonGcmc.startupsLine3') || "Academia"}<br/>
                                        {t('horizonGcmc.startupsLine4') || "R&D organisations"}
                                    </h4>
                                </motion.div>
                            </div>

                            {/* Arrow Left to Center (Draws at 2.4s) */}
                            <div className="absolute right-[calc(50%+180px)] xl:right-[calc(50%+200px)] top-[42%] -translate-y-1/2 w-[90px] xl:w-[120px]">
                                <div className="flex flex-col items-center w-full text-center">
                                    <motion.span variants={fadeVariant(2.4)} className="text-white text-[10px] xl:text-[11px] font-bold mb-1">{t('horizonGcmc.pocEarly') || "PoC - Early stage"}</motion.span>
                                    <div className="w-full flex items-center relative h-[6px]">
                                        <motion.div variants={drawHorizontal(2.4)} className="h-[2px] w-full bg-white origin-left" />
                                        <motion.div variants={fadeVariant(2.8)} className="absolute right-0 translate-x-[4px] flex items-center justify-center">
                                            <svg width="8" height="10" viewBox="0 0 8 10"><polygon points="0,0 8,5 0,10" fill="white" /></svg>
                                        </motion.div>
                                    </div>
                                    <motion.span variants={fadeVariant(2.4)} className="text-white text-[10px] xl:text-[11px] font-bold mt-1">{t('horizonGcmc.techTransfer') || "Tech transfer"}</motion.span>
                                </div>
                            </div>

                            {/* Right Top Box (Pops up at 3.0s) */}
                            <div className="absolute left-[calc(50%+280px)] xl:left-[calc(50%+330px)] top-[20%] -translate-y-1/2 w-[220px] xl:w-[260px]">
                                <motion.div variants={popVariant(3.0)} className="bg-white text-slate-800 p-4 xl:p-5 rounded-xl shadow-xl w-full">
                                    <h4 className="font-bold text-[14px] xl:text-[16px] text-[#1c52a0] mb-2">{t('horizonGcmc.biosecurity') || "Biosecurity"}</h4>
                                    <p className="text-[11px] xl:text-[13px] text-slate-600 leading-tight">{t('horizonGcmc.biosecurityDesc') || "Stockpile for emergency outbreak and pandemic preparedness"}</p>
                                </motion.div>
                            </div>

                            {/* Arrow Center to Right Top (Draws at 3.2s) */}
                            <div className="absolute left-[calc(50%+180px)] xl:left-[calc(50%+200px)] top-[20%] -translate-y-1/2 w-[90px] xl:w-[120px]">
                                <div className="flex flex-col items-center w-full text-center">
                                    <motion.span variants={fadeVariant(3.2)} className="text-white text-[10px] xl:text-[11px] font-bold mb-1">{t('horizonGcmc.smallBatches') || "Small batches (PCT/CT)"}</motion.span>
                                    <div className="w-full flex items-center relative h-[6px]">
                                        <motion.div variants={drawHorizontal(3.2)} className="h-[2px] w-full bg-white origin-left" />
                                        <motion.div variants={fadeVariant(3.6)} className="absolute right-0 translate-x-[4px] flex items-center justify-center">
                                            <svg width="8" height="10" viewBox="0 0 8 10"><polygon points="0,0 8,5 0,10" fill="white" /></svg>
                                        </motion.div>
                                    </div>
                                    <motion.span variants={fadeVariant(3.2)} className="text-white text-[10px] xl:text-[11px] font-bold mt-1">{t('horizonGcmc.withEuWho') || "With EU/WHO-PQ"}</motion.span>
                                </div>
                            </div>

                            {/* Right Bottom Box (Pops up at 3.0s) */}
                            <div className="absolute left-[calc(50%+280px)] xl:left-[calc(50%+330px)] top-[64%] -translate-y-1/2 w-[220px] xl:w-[260px]">
                                <motion.div variants={popVariant(3.0)} className="flex flex-col items-center w-full">
                                    <div className="w-full flex justify-center">
                                        <img src={industryFactoryImg} alt="Industry Factory" className="w-full max-w-[160px] xl:max-w-[200px] h-auto object-contain" />
                                    </div>
                                    <h4 className="font-bold text-[16px] xl:text-[18px] text-white mb-2 -mt-6 xl:-mt-8">{t('horizonGcmc.industry') || "Industry"}</h4>
                                    <p className="text-[11px] xl:text-[13px] text-white/90 text-center leading-tight">{t('horizonGcmc.industryDesc') || "Optimised tech packs for seamless transfer and rapid commercialisation"}</p>
                                </motion.div>
                            </div>

                            {/* Arrow Center to Right Bottom (Draws at 3.2s) */}
                            <div className="absolute left-[calc(50%+180px)] xl:left-[calc(50%+200px)] top-[64%] -translate-y-1/2 w-[90px] xl:w-[120px]">
                                <div className="flex flex-col items-center w-full text-center">
                                    <motion.span variants={fadeVariant(3.2)} className="text-white text-[10px] xl:text-[11px] font-bold mb-1">{t('horizonGcmc.techTransferTraining') || "Tech transfer & Training"}</motion.span>
                                    <div className="w-full flex items-center relative h-[6px]">
                                        <motion.div variants={drawHorizontal(3.2)} className="h-[2px] w-full bg-white origin-left" />
                                        <motion.div variants={fadeVariant(3.6)} className="absolute right-0 translate-x-[4px] flex items-center justify-center">
                                            <svg width="8" height="10" viewBox="0 0 8 10"><polygon points="0,0 8,5 0,10" fill="white" /></svg>
                                        </motion.div>
                                    </div>
                                    <motion.span variants={fadeVariant(3.2)} className="text-white text-[10px] xl:text-[11px] font-bold mt-1">{t('horizonGcmc.commercialManufacturing') || "Commercial manufacturing"}</motion.span>
                                </div>
                            </div>

                            {/* Arrow Center to Bottom Row (Draws at 3.8s) */}
                            <div className="absolute left-1/2 top-[calc(50%+180px)] xl:top-[calc(50%+200px)] -translate-x-1/2">
                                <div className="flex flex-col items-center">
                                    <motion.div variants={drawVertical(3.8)} className="w-[2px] bg-white origin-top h-10 xl:h-12" />
                                    <motion.div variants={fadeVariant(4.2)} className="flex items-center justify-center -translate-y-[2px]">
                                        <svg width="10" height="8" viewBox="0 0 10 8"><polygon points="0,0 10,0 5,8" fill="white" /></svg>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row (Pops up at 4.5s sequentially) */}
                        <div className="w-full border-2 border-dashed border-white/60 p-3 xl:p-4 mt-6 xl:mt-8 flex justify-between gap-2 xl:gap-3 bg-white/5 relative z-20">
                            {pills.map((text, idx) => (
                                <motion.div 
                                    variants={popVariant(4.5 + idx * 0.1)} 
                                    key={idx} 
                                    className="flex-1 bg-white/95 text-[#1c52a0] text-center py-2 xl:py-3 px-1 text-[11px] xl:text-[13px] font-bold leading-snug shadow-sm flex items-center justify-center min-h-[40px] xl:min-h-[50px] whitespace-pre-line"
                                >
                                    {text}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Mobile & Tablet Layout (Visible on lg and below) ── */}
                    <div className="lg:hidden flex flex-col gap-6 relative z-10 w-full mt-[240px]">
                        <motion.div variants={popVariant(2.2)} className="bg-white text-[#1c52a0] p-4 rounded-xl shadow-xl text-center">
                            <h4 className="font-bold text-[15px]">{t('horizonGcmc.startups') || "Startups, MSMEs, Academia, R&D organisations"}</h4>
                        </motion.div>
                        
                        <motion.div variants={popVariant(2.6)} className="bg-white text-slate-800 p-4 rounded-xl shadow-xl text-center">
                            <h4 className="font-bold text-[16px] text-[#1c52a0] mb-1">{t('horizonGcmc.biosecurity') || "Biosecurity"}</h4>
                            <p className="text-[13px] text-slate-600">{t('horizonGcmc.biosecurityDesc') || "Stockpile for emergency outbreak and pandemic preparedness"}</p>
                        </motion.div>
                        
                        <motion.div variants={popVariant(3.0)} className="flex flex-col items-center mt-2">
                            <img src={industryFactoryImg} alt="Industry Factory" className="w-full max-w-[160px] sm:max-w-[180px] h-auto object-contain" />
                            <h4 className="font-bold text-[16px] text-white mb-1 -mt-6">{t('horizonGcmc.industry') || "Industry"}</h4>
                            <p className="text-[13px] text-white/90 text-center">{t('horizonGcmc.industryDesc') || "Optimised tech packs for seamless transfer and rapid commercialisation"}</p>
                        </motion.div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-2 border-dashed border-white/60 p-4 bg-white/5 mt-4">
                            {pills.map((text, idx) => (
                                <motion.div variants={popVariant(3.4 + idx * 0.1)} key={idx} className="bg-white/95 text-[#1c52a0] text-center py-3 px-2 text-[12px] font-bold shadow-sm flex items-center justify-center whitespace-pre-line">
                                    {text}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    </div>
  );
}
