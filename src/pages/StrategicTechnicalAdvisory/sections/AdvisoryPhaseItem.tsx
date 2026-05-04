import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SplitTitle } from '../../../components/Common/SplitTitle';

interface AdvisoryPhaseItemProps {
    phase: any;
    idx: number;
    Icon: any;
}

const AdvisoryPhaseItem: React.FC<AdvisoryPhaseItemProps> = ({ phase, idx, Icon }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            id={`phase-${idx}`}
            className="relative flex flex-col gap-6 lg:gap-8 border-t border-slate-200 pt-16 first:border-0 first:pt-0"
        >
            {/* Title Area */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center border border-brand-primary/10">
                        <Icon className="w-6 h-6 text-brand-primary" strokeWidth={1.5} />
                    </div>
                    <div className="text-[11px] font-medium tracking-[0.4em] text-brand-primary uppercase">
                        Phase 0{idx + 1}
                    </div>
                </div>
                <h4 className="text-[36px] font-medium tracking-tighter leading-tight text-slate-900">
                    <SplitTitle title={phase.title} />
                </h4>
            </div>

            {/* Content Area */}
            <div className="flex flex-col mt-2 w-full">
                <div className="space-y-6 text-[18px] text-slate-500 font-medium leading-relaxed mb-12 w-full text-justify">
                    {phase.content.split('\n\n').map((p: string, i: number) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>

                {/* Deliverables */}
                {phase.deliverables && (
                    <div className="bg-[#F8F9FA] rounded-[2rem] p-8 md:p-10 border border-slate-100">
                        <h5 className="text-xs font-bold text-slate-900 tracking-[0.15em] uppercase mb-8 flex items-center gap-4">
                            <span className="w-10 h-[2px] bg-brand-primary rounded-full" />
                            {phase.deliverablesTitle}
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                            {phase.deliverables.map((item: string, dIdx: number) => (
                                <div key={dIdx} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                        <ArrowRight className="w-3 h-3 text-brand-primary" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-base text-slate-700 font-medium leading-relaxed">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default AdvisoryPhaseItem;
