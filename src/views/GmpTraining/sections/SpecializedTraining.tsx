import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Activity, GitMerge } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const specializedPrograms = [
    {
        title: "UNOPS Biosafety & Biosecurity Training",
        desc: "Advancing safer laboratory ecosystems through structured training in biosafety, biosecurity and containment practices. The program blends technical understanding with practical risk-management approaches for modern biomedical laboratories. It helps build institutional capability for safe, compliant and responsible scientific operations.",
        icon: ShieldAlert,
        color: '#1955A6',
        bg: 'bg-[#1955A6]/5'
    },
    {
        title: "UNOPS Vaccine Analytics Training",
        desc: "Enhancing vaccine development capability through focused training in analytical science and product evaluation. The program supports understanding of critical quality attributes, analytical methods, assay relevance and data interpretation. It strengthens the technical foundation required for vaccine quality, regulatory readiness and development success.",
        icon: Activity,
        color: '#5C7625',
        bg: 'bg-[#5C7625]/5'
    },
    {
        title: "Bioprocessing Training at RCB",
        desc: "TechInvention conducted focused training programs at the Regional Centre for Biotechnology, Faridabad, covering the fundamentals of upstream and downstream processing, Quality Control, Quality Assurance and Good Manufacturing Practices. The sessions also included hands-on exposure to streaking and shake-flask techniques, fermentation operations, vaccine production workflows, QC laboratory practices and BSL-2 fermentation facilities, helping participants connect core bioprocessing concepts with real-world industry applications.",
        icon: GitMerge,
        color: '#1955A6',
        bg: 'bg-[#1955A6]/5'
    }
];

export default function SpecializedTraining() {
    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <ScrollReveal direction="up">
                        
                        <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide mb-6">
                            <SplitTitle title="Specialized Training Programs" />
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {specializedPrograms.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 text-left relative flex flex-col group hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-500"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/50 ${section.bg} shadow-sm group-hover:scale-105 transition-transform shrink-0`}>
                                    <Icon className="w-6 h-6" style={{ color: section.color }} />
                                </div>
                                <h3 className="text-[19px] font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors leading-snug">
                                    {section.title}
                                </h3>
                                <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
                                    {section.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
