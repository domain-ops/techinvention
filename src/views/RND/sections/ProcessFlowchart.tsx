import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FlaskConical, ShieldCheck, Factory, ArrowRight } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const steps = [
    {
        title: "Ideate",
        description: "Target identification, antigen discovery, AI/ML-enabled vaccine design, and platform selection.",
        icon: Lightbulb,
        color: "bg-[#1955A6]"
    },
    {
        title: "Develop",
        description: "Process and formulation development, analytical assay development, characterization, and proof-of-concept studies.",
        icon: FlaskConical,
        color: "bg-[#7EAB43]"
    },
    {
        title: "Evaluate",
        description: "Preclinical efficacy, safety and toxicology studies, with regulatory documentation and compliance.",
        icon: ShieldCheck,
        color: "bg-[#1955A6]"
    },
    {
        title: "Scale",
        description: "Process scale-up, technology transfer, GMP manufacturing readiness, and commercial translation.",
        icon: Factory,
        color: "bg-[#7EAB43]"
    }
];

export default function ProcessFlowchart() {
    return (
        <section className="py-24 bg-slate-50 font-sans overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6">
                
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <h2 className="text-[36px] font-medium tracking-wide text-[#13325B] mb-12">
                            <SplitTitle title="End-to-End R&D Process" />
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Flowchart Container */}
                <div className="relative mt-12">
                    
                    {/* Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-slate-200 z-0">
                        <motion.div 
                            className="h-full bg-gradient-to-r from-[#1955A6] to-[#7EAB43]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                                    className="flex flex-col items-center lg:items-start relative group"
                                >
                                    {/* Icon Node */}
                                    <div className={`w-[120px] h-[120px] rounded-full ${step.color} shadow-xl flex items-center justify-center text-white mb-8 border-4 border-white shrink-0 mx-auto lg:mx-0 relative z-10 transition-transform duration-300 group-hover:scale-105`}>
                                        <Icon className="w-12 h-12 stroke-[1.5]" />
                                        
                                        {/* Mobile connector line */}
                                        {idx !== steps.length - 1 && (
                                            <div className="block lg:hidden absolute top-[116px] left-1/2 -translate-x-1/2 w-1 h-12 bg-slate-200 -z-10" />
                                        )}
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="text-center lg:text-left">
                                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                            <span className="text-sm font-bold text-slate-400">0{idx + 1}</span>
                                            <h3 className="text-2xl font-bold text-[#13325B]">{step.title}</h3>
                                        </div>
                                        <p className="text-slate-600 font-medium leading-relaxed text-[15px] max-w-sm mx-auto lg:mx-0">
                                            {step.description}
                                        </p>
                                    </div>
                                    
                                    {/* Arrow pointing to next step on Desktop */}
                                    {idx !== steps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-[44px] -right-8 items-center justify-center w-8 h-8 text-slate-300">
                                            <ArrowRight className="w-8 h-8" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
