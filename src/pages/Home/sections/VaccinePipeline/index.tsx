import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';
const logoDNA = "/techinvention/TechInvention-gif.gif";

const VialIcon = ({ color = "currentColor", className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M 35,15 L 65,15" />
        <rect x="30" y="15" width="40" height="12" rx="3" />
        <path d="M 38,27 L 38,40" />
        <path d="M 62,27 L 62,40" />
        <path d="M 38,40 Q 25,40 25,55 L 25,85 Q 25,95 35,95 L 65,95 Q 75,95 75,85 L 75,55 Q 75,40 62,40" />
        <path d="M 25,60 C 45,55 55,75 75,65" />
        <line x1="42" y1="83" x2="45" y2="83" />
        <line x1="52" y1="83" x2="62" y2="83" />
    </svg>
);

interface PipelineItem {
    name: string;
    progress: number;
    color: string;
    note?: string;
}

const VaccinePipeline = () => {
    const { t } = useLanguage();

    const pipelineData = t('vaccinePipeline.items') as PipelineItem[] || [];
    const stages = t('vaccinePipeline.stages') as Record<string, string> || {};
    const stageLabels = Object.values(stages);

    if (!pipelineData.length) return null;

    const bioData = (t('biotherapeuticsPipeline.items') as any[]) || [
        { name: "Recombinant Human Erythropoietin", phase: "Phase 3", color: "#2065B3", desc: "For treatment of anemia" },
        { name: "Pegfilgrastim", phase: "Pre-clinical", color: "#87A840", desc: "For neutropenia treatment" }
    ];

    return (
        <section id="vaccine-pipeline" className="pt-16 md:pt-20 pb-4 md:pb-8 relative bg-brand-primary/5 overflow-hidden border-t border-brand-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* GLOBAL SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                    <div className="max-w-3xl">
                        <ScrollReveal direction="up">
                            <span className="text-[11px] font-medium tracking-[0.4em] text-brand-primary mb-4 block uppercase">
                                {t('vaccinePipeline.tag') || "R&D INNOVATION"}
                            </span>
                        </ScrollReveal>
                        <h2 className="text-[36px] font-medium tracking-wide mb-6">
                            <SplitTitle title={t('vaccinePipeline.title')?.replace('{pipeline}', t('vaccinePipeline.pipeline') as string) || "R&D Vaccine & Biotherapeutics Pipeline"} />
                        </h2>
                    </div>

                    {/* Animated Inline Logo aligned with title */}
                    <div className="hidden md:flex flex-shrink-0 justify-end w-28 sm:w-32 lg:w-44 mr-8">
                        <motion.img 
                            src={logoDNA}
                            alt="TechInvention Logo"
                            className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] mix-blend-multiply"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                opacity: { duration: 1.2, ease: "easeOut" },
                                scale: { duration: 1.2, ease: "easeOut" }
                            }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-8">
                    
                    {/* LEFT COLUMN: VACCINE PIPELINE */}
                    <div className="xl:col-span-8 flex flex-col pt-4">

                {/* DESKTOP LAYOUT (Horizontal Timeline) */}
                <div className="hidden lg:block w-full pb-8 pr-4">
                    <div className="w-full">
                        {/* Table Header (Phases) */}
                        <div className="grid grid-cols-[160px_400px_220px] xl:grid-cols-[180px_420px_240px] gap-0 text-[11px] xl:text-[12px] font-semibold text-black tracking-wide pb-4 border-b border-slate-300">
                            <div>{/* Empty for row label */}</div>
                            
                            {/* Phase Columns Container */}
                            <div className="grid grid-cols-5 w-full pr-12">
                                <div className="text-center font-bold">{t('vaccinePipeline.phases.preClinical') as string}</div>
                                <div className="text-center">{t('vaccinePipeline.phases.phase1') as string}</div>
                                <div className="text-center">{t('vaccinePipeline.phases.phase2') as string}</div>
                                <div className="text-center">{t('vaccinePipeline.phases.phase3') as string}</div>
                                <div className="text-center font-bold">{t('vaccinePipeline.phases.approved') as string}</div>
                            </div>
                            
                            <div className="text-left pl-8">{t('vaccinePipeline.milestonesTitle') as string}</div>
                        </div>

                        {/* Table Rows Container with vertical guides */}
                        <div className="relative mt-8">
                            
                            {/* Vertical Dotted Guide Lines (Background Layer) */}
                            <div className="absolute inset-0 grid grid-cols-[160px_400px_220px] xl:grid-cols-[180px_420px_240px] gap-0 pointer-events-none pb-8 h-full z-0">
                                <div></div>
                                <div className="grid grid-cols-5 w-full pr-12 h-full">
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                </div>
                                <div></div>
                            </div>

                            {/* Data Rows Container */}
                            <div className="relative z-10 flex flex-col gap-0 w-full border-b border-slate-100">
                                {pipelineData.map((item, idx) => {
                                    // 100% progress spans exactly the 5 columns (Pre-clinical to Approved).
                                    const lineWidthPercent = `${item.progress}%`;
                                    const isAlternate = idx % 2 !== 0;

                                    return (
                                        <div 
                                            key={idx} 
                                            className={`grid grid-cols-[160px_400px_220px] xl:grid-cols-[180px_420px_240px] items-stretch min-h-[120px] w-full ${isAlternate ? 'bg-slate-50' : 'bg-transparent'}`}
                                        >
                                            {/* Left Text Label */}
                                            <div className="pr-4 xl:pr-6 flex items-center justify-end text-right text-[14px] xl:text-[15px] font-medium text-black py-4 border-r border-transparent">
                                                {item.name}
                                            </div>

                                            {/* Tracking Line Area */}
                                            <div className="relative flex items-center py-6 w-full pr-12 pl-0 pointer-events-none">
                                                <div className="relative w-full h-24 flex items-center">
                                                    
                                                    {/* Central tracking line connecting nodes */}
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: lineWidthPercent }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                        className="h-1.5 z-10 rounded-full"
                                                        style={{ backgroundColor: item.color }}
                                                    />

                                                    {/* End Node Vial (Tip of progress) */}
                                                    <motion.div 
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: 1.6 }}
                                                        className="absolute z-20"
                                                        style={{ left: lineWidthPercent, transform: 'translateX(-25%)' }}
                                                    >
                                                        <VialIcon className="w-7 h-7" color={item.color} />
                                                    </motion.div>

                                                    {/* Sub-label next to end node */}
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 1.8 }}
                                                        className="absolute text-[12px] text-black font-semibold tracking-tight whitespace-nowrap z-30"
                                                        style={{ left: `calc(${lineWidthPercent} + 28px)` }}
                                                    >
                                                        {idx % 2 === 0 ? t('vaccinePipeline.targetAdults') as string : t('vaccinePipeline.targetInfants') as string}
                                                    </motion.div>

                                                </div>
                                            </div>

                                            {/* Right Milestones / Notes */}
                                            <div className="pl-8 py-6 text-[12px] font-medium tracking-tight text-black flex flex-col justify-center border-l border-slate-300">
                                                {item.note ? (
                                                    <div className="space-y-2">
                                                        <p className="font-medium text-black mb-2">{t('vaccinePipeline.announceSafety') as string}</p>
                                                        <ul className="list-disc pl-4 space-y-1">
                                                            <li>{item.note}</li>
                                                            {idx % 2 === 0 && <li>{t('vaccinePipeline.phase3Trials') as string}</li>}
                                                        </ul>
                                                    </div>
                                                ) : (
                                                    <span className="opacity-0">Placeholder</span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>

                {/* MOBILE / TABLET LAYOUT (Stacked Cards) */}
                <div className="flex lg:hidden flex-col gap-6 mt-4">
                    {pipelineData.map((item, idx) => {
                        const lineWidthPercent = `${item.progress}%`;
                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col gap-6"
                            >
                                {/* Header: VAX ID & Name */}
                                <div className="flex items-start gap-4">
                                    <div 
                                        className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm border-[3px] border-slate-50 z-20 shrink-0"
                                    >
                                        <VialIcon className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <div className="flex flex-col justify-center pt-1">
                                        <h3 className="text-[18px] font-medium text-black leading-tight">
                                            {item.name}
                                        </h3>
                                        <span className="text-base text-black font-medium tracking-tight mt-1">
                                            {t('vaccinePipeline.target') as string} {idx % 2 === 0 ? t('vaccinePipeline.targetAdults') as string : t('vaccinePipeline.targetInfants') as string}
                                        </span>
                                    </div>
                                </div>

                                {/* Tracking Bar */}
                                <div className="w-full relative mt-2 mb-2">
                                    <div className="flex justify-between text-[18px] text-black mb-3 px-1">
                                        <span>{t('vaccinePipeline.phases.preClinical') as string}</span>
                                        <span>{t('vaccinePipeline.phases.phase3') as string}</span>
                                        <span className="font-bold text-brand-primary">{t('vaccinePipeline.phases.approved') as string}</span>
                                    </div>
                                    <div className="relative w-full h-2 bg-slate-200 rounded-full">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: lineWidthPercent }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                            className="absolute top-0 left-0 h-full rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 1.6 }}
                                            className="absolute top-1/2 shadow-sm z-10"
                                            style={{ left: lineWidthPercent, transform: 'translate(-25%, -50%)' }}
                                        >
                                            <VialIcon className="w-5 h-5 bg-white rounded-full drop-shadow-sm" color={item.color} />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Milestones */}
                                {item.note && (
                                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                                        <p className="font-medium text-[11px] text-black mb-2">{t('vaccinePipeline.milestonesTitleShort') as string}</p>
                                        <ul className="text-[11px] font-medium tracking-tight text-black list-disc pl-4 space-y-1">
                                            <li>{item.note}</li>
                                            {idx % 2 === 0 && <li>{t('vaccinePipeline.phase3Trials') as string}</li>}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                    </div>
                </div>
                {/* End Left Column */}

                {/* RIGHT COLUMN: BIOTHERAPEUTICS PIPELINE */}
                <div className="xl:col-span-4 flex flex-col xl:border-l xl:border-slate-300/50 xl:pl-8">
                    <div className="flex-1 w-full flex justify-start items-center relative pt-4 pb-12 pl-0 sm:pl-8">
                        
                        {/* Syringe Graphic */}
                        <div className="w-24 h-[500px] flex flex-col items-center z-10 relative drop-shadow-xl shrink-0">
                            {/* Plunger Handle */}
                            <div className="w-12 h-6 border-4 border-slate-300 rounded-t-md bg-slate-50" />
                            <div className="w-4 h-10 bg-slate-200 border-x-4 border-slate-300" />
                            
                            {/* Syringe Barrel */}
                            <div className="w-full flex-1 border-4 border-slate-300 rounded-b-[40px] bg-white flex flex-col overflow-hidden relative">
                                <div className="w-full h-5 bg-[#333] shrink-0" />
                                
                                {/* Phase Sections */}
                                <div className="flex-1 w-full flex items-center justify-center text-white text-[11px] font-bold tracking-widest uppercase border-b border-white/20 text-center px-1 leading-tight" style={{backgroundColor: bioData[0]?.color || '#2065B3'}}>
                                    {bioData[0]?.phase || 'PHASE 3'}
                                </div>
                                <div className="flex-1 w-full flex items-center justify-center text-white text-[11px] font-bold tracking-widest uppercase text-center px-1 leading-tight" style={{backgroundColor: bioData[1]?.color || '#87A840'}}>
                                    {bioData[1]?.phase || 'PRE-CLINICAL'}
                                </div>
                            </div>
                            
                            {/* Needle */}
                            <div className="w-6 h-6 bg-slate-300 rounded-b-sm border-2 border-slate-400" />
                            <div className="w-1 h-16 bg-slate-400 rounded-b-full shadow-sm" />
                        </div>

                        {/* Labels Container - positioned relative to the right of the syringe */}
                        <div className="relative h-[500px] flex-1 ml-6 sm:ml-12 pointer-events-none">
                            
                            {/* Item 1 (Top Phase) */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="absolute top-[130px] left-0 w-full flex flex-col items-start"
                            >
                                <div className="w-8 sm:w-16 h-[2px] bg-slate-300 absolute -left-8 sm:-left-16 top-[14px]" />
                                <h3 className="font-bold text-lg leading-tight mb-1 text-slate-800 pr-4">{bioData[0]?.name}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed pr-4">{bioData[0]?.desc}</p>
                            </motion.div>

                            {/* Item 2 (Bottom Phase) */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute top-[320px] left-0 w-full flex flex-col items-start"
                            >
                                <div className="w-8 sm:w-16 h-[2px] bg-slate-300 absolute -left-8 sm:-left-16 top-[14px]" />
                                <h3 className="font-bold text-lg leading-tight mb-1 text-slate-800 pr-4">{bioData[1]?.name}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed pr-4">{bioData[1]?.desc}</p>
                            </motion.div>

                        </div>

                    </div>
                </div>
                {/* End Right Column */}

                </div> {/* End Grid */}
            </div>
        </section>
    );
};

export default VaccinePipeline;
