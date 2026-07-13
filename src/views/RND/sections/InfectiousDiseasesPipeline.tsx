import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const SyringeIcon = ({ color = "currentColor", className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="m18 2 4 4" />
        <path d="m17 7 3-3" />
        <path d="M19 9 9 19a1 1 0 0 1-.7.3H6v-2.3a1 1 0 0 1 .3-.7L15 9" />
        <path d="M9 11 6.5 8.5" />
        <path d="m13 15-2.5-2.5" />
        <path d="m6 20-4 4" />
    </svg>
);

const pipelineData = [
    { name: "Pneumococcal Conjugate Vaccine (16-valent)", progress: 75, color: "#2068C6" },
    { name: "Hexavalent Meningococcal Vaccine (ABCYWX)", progress: 50, color: "#0E8B94" },
    { name: "Pan-Salmonella Vaccine", progress: 50, color: "#0E8B94" },
    { name: "Shigella Vaccine", progress: 50, color: "#0E8B94" },
    { name: "Meningococcal B Vaccine", progress: 50, color: "#0E8B94" },
    { name: "Malaria Vaccine", progress: 50, color: "#0E8B94" },
    { name: "Tuberculosis Vaccine", progress: 50, color: "#0E8B94" }
];

export default function InfectiousDiseasesPipeline() {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="max-w-[1200px] mx-auto px-6">
                
                <ScrollReveal direction="up">
                    <h2 className="text-[36px] font-medium tracking-wide mb-12 text-center md:text-left">
                        <SplitTitle title="Infectious Diseases and AMR-Associated Pathogen Portfolio" />
                    </h2>
                </ScrollReveal>

                {/* DESKTOP LAYOUT (Horizontal Timeline) */}
                <div className="hidden lg:block w-full pb-8">
                    <div className="w-full">
                        {/* Table Header (Phases) */}
                        <div className="grid grid-cols-[300px_1fr] gap-0 text-[12px] font-semibold text-black tracking-wide pb-4 border-b border-slate-300">
                            <div>{/* Empty for row label */}</div>
                            
                            {/* Phase Columns Container */}
                            <div className="grid grid-cols-4 w-full">
                                <div className="text-center font-bold">Discovery</div>
                                <div className="text-center font-bold">Proof-of-Concept</div>
                                <div className="text-center font-bold">Pre-clinical</div>
                                <div className="text-center font-bold">Phase 1/2</div>
                            </div>
                        </div>

                        {/* Table Rows Container with vertical guides */}
                        <div className="relative mt-8">
                            
                            {/* Vertical Dotted Guide Lines (Background Layer) */}
                            <div className="absolute inset-0 grid grid-cols-[300px_1fr] gap-0 pointer-events-none pb-8 h-full z-0">
                                <div></div>
                                <div className="grid grid-cols-4 w-full h-full">
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                </div>
                            </div>

                            {/* Data Rows Container */}
                            <div className="relative z-10 flex flex-col gap-0 w-full border-b border-slate-100">
                                {pipelineData.map((item, idx) => {
                                    const lineWidthPercent = `${item.progress}%`;
                                    const isAlternate = idx % 2 !== 0;

                                    return (
                                        <div 
                                            key={idx} 
                                            className={`grid grid-cols-[300px_1fr] items-stretch min-h-[120px] w-full ${isAlternate ? 'bg-slate-50' : 'bg-transparent'}`}
                                        >
                                            {/* Left Text Label */}
                                            <div className="pr-6 flex items-center justify-start text-left text-[15px] font-medium text-black py-4 border-r border-transparent">
                                                {item.name}
                                            </div>

                                            {/* Tracking Line Area */}
                                            <div className="relative flex items-center py-6 w-full pl-0 pointer-events-none">
                                                <div className="relative w-full h-24 flex items-center">
                                                    
                                                    {/* Central tracking line */}
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: lineWidthPercent }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                        className="h-1.5 z-10 rounded-full"
                                                        style={{ backgroundColor: item.color }}
                                                    />

                                                    {/* End Node Vial */}
                                                    <motion.div 
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: 1.6 }}
                                                        className="absolute z-20"
                                                        style={{ left: lineWidthPercent, transform: 'translateX(-50%)' }}
                                                    >
                                                        <div className="bg-white rounded-full drop-shadow-sm p-1">
                                                            <SyringeIcon className="w-6 h-6" color={item.color} />
                                                        </div>
                                                    </motion.div>
                                                </div>
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
                                className="bg-slate-50 rounded-none p-6 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col gap-6"
                            >
                                {/* Header: VAX Name */}
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm border-[3px] border-slate-50 z-20 shrink-0">
                                        <SyringeIcon className="w-8 h-8" color={item.color} />
                                    </div>
                                    <div className="flex flex-col justify-center pt-1">
                                        <h3 className="text-[18px] font-medium text-black leading-tight">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Tracking Bar */}
                                <div className="w-full relative mt-2 mb-2">
                                    <div className="flex justify-between text-[13px] text-slate-500 font-bold mb-3 px-1">
                                        <span>Discovery</span>
                                        <span>Pre-clinical</span>
                                        <span className="text-black">Phase 1/2</span>
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
                                            style={{ left: lineWidthPercent, transform: 'translate(-50%, -50%)' }}
                                        >
                                            <div className="bg-white rounded-full shadow-sm p-1">
                                                <SyringeIcon className="w-4 h-4" color={item.color} />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
