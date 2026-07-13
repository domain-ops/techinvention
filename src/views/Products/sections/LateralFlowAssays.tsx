import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Target, TestTube2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import lateralFlowAssaysImg from '../../../assets/images/products/lateral_flow_assays.png';

const lfaProducts = [
    {
        id: 1,
        title: "Malaria Pf/Pv Ag Rapid Test",
        useCase: "Infectious Disease",
        sampleType: "Whole Blood",
        applications: ["Point-of-Care", "Field Clinics", "Hospitals"],
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Dengue NS1 Ag Rapid Test",
        useCase: "Tropical Medicine",
        sampleType: "Serum / Plasma",
        applications: ["Diagnostic Labs", "Emergency Rooms"],
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "HIV 1/2 Ab Rapid Test",
        useCase: "Sexually Transmitted",
        sampleType: "Whole Blood / Serum",
        applications: ["Voluntary Testing Centers", "Clinics"],
        image: lateralFlowAssaysImg
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} as const;

export default function LateralFlowAssays() {
    return (
        <section className="py-24 bg-white relative font-sans">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                <div className="text-left max-w-3xl mb-16">
                    <ScrollReveal direction="up">
                        
                        <div className="mb-4">
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left">
                                <SplitTitle title="Lateral Flow Assays (LFA)" />
                            </h2>
                        </div>
                        <p className="text-black text-[16px] md:text-[18px] font-medium leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </ScrollReveal>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {lfaProducts.map((product) => (
                        <motion.div 
                            key={product.id}
                            variants={cardVariants}
                            className="bg-white rounded-none overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group border border-slate-200/60 flex flex-col h-full text-left"
                        >
                            <div className="h-52 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[#1955A6]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img loading="lazy" 
                                    src={product.image} 
                                    alt={product.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">
                                    {product.title}
                                </h4>
                                
                                <div className="space-y-3.5 mb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#5C7625]/10 p-2 rounded-lg">
                                            <Target className="w-5 h-5 text-[#5C7625]" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Use Case</span>
                                            <span className="text-slate-900 font-bold text-sm">{product.useCase}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-50 p-2 rounded-lg">
                                            <Droplet className="w-5 h-5 text-red-500" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Sample Type</span>
                                            <span className="text-slate-900 font-bold text-sm">{product.sampleType}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5 border-t border-slate-100 mt-auto">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2.5">Applications</span>
                                    <div className="flex flex-wrap gap-2">
                                        {product.applications.map((app, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-bold rounded-md border border-slate-200/60">
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
