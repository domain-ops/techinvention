import React from 'react';
import { motion } from 'framer-motion';
import { SplitTitle } from '../../../components/Common/SplitTitle';

interface AdvisoryPhaseItemProps {
    phase: any;
    idx: number;
    Icon: any;
    image: string;
}

const AdvisoryPhaseItem: React.FC<AdvisoryPhaseItemProps> = ({ phase, idx, Icon, image }) => {
    // We will take only the first paragraph to limit the content size.
    const firstParagraph = phase.content.split('\n\n')[0];

    return (
        <div 
            className="sticky w-full"
            style={{ top: `calc(120px + ${idx * 40}px)` }}
        >
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-12 lg:p-16 mb-40 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden"
            >
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 -right-10 text-[240px] font-black text-slate-50 leading-none select-none pointer-events-none z-0">
                    0{idx + 1}
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[55%] flex flex-col relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl flex items-center justify-center border border-brand-primary/10 shadow-inner">
                            <Icon className="w-7 h-7 text-brand-primary" />
                        </div>
                        <span className="text-sm font-bold tracking-[0.3em] text-brand-secondary uppercase">
                            Phase 0{idx + 1}
                        </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        <SplitTitle title={phase.title} />
                    </h3>
                    
                    <p className="text-[17px] text-slate-500 leading-relaxed mb-10 max-w-xl font-medium">
                        {firstParagraph}
                    </p>

                    {/* Deliverables as sleek tags */}
                    {phase.deliverables && (
                        <div>
                            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-brand-primary"></span>
                                {phase.deliverablesTitle}
                            </h5>
                            <div className="flex flex-wrap gap-3">
                                {phase.deliverables.slice(0, 5).map((item: string, dIdx: number) => (
                                    <span 
                                        key={dIdx} 
                                        className="px-4 py-2 bg-[#F8F9FA] hover:bg-white hover:shadow-md border border-slate-200/60 rounded-xl text-[13px] font-semibold text-slate-700 transition-all duration-300 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                                {phase.deliverables.length > 5 && (
                                    <span className="px-4 py-2 bg-brand-primary/5 border border-brand-primary/10 rounded-xl text-[13px] font-bold text-brand-primary">
                                        +{phase.deliverables.length - 5} more
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-[45%] relative z-10 h-full">
                    <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden group">
                        <img 
                            src={image} 
                            alt={phase.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" 
                        />
                        <div className="absolute inset-0 bg-brand-primary mix-blend-color opacity-20 group-hover:opacity-0 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Glassmorphism Badge */}
                        <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-white text-sm font-medium leading-snug">
                                Empowering local manufacturing through expert {phase.title.toLowerCase()}.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdvisoryPhaseItem;
