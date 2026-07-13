import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Activity, ArrowRight } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import molecularDiagnosticKitsImg from '../../../assets/images/products/molecular_diagnostic_kits.png';

const mdxProducts = [
    {
        id: 1,
        title: "Real-Time PCR Kits",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        features: ["High Sensitivity", "Multiplexing", "Fast Turnaround"],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "RNA/DNA Extraction Kits",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        features: ["High Purity", "Scalable", "Automation Compatible"],
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Isothermal Amplification",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        features: ["No Thermal Cycler", "Rapid Results", "Field Deployable"],
        image: molecularDiagnosticKitsImg
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

export default function MolecularDiagnosticKits() {
    return (
        <section className="py-24 bg-slate-50/50 relative font-sans border-t border-b border-slate-200/60">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                <div className="text-left max-w-3xl mb-16">
                    <ScrollReveal direction="up">
                        
                        <div className="mb-4">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide text-left">
                                <SplitTitle title="Molecular Diagnostic Kits (MDx)" />
                            </h2>
                        </div>
                        <p className="text-black text-[16px] md:text-[18px] font-medium leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
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
                    {mdxProducts.map((product) => (
                        <motion.div 
                            key={product.id}
                            variants={cardVariants}
                            className="bg-white rounded-none overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col border border-slate-200/60 h-full text-left"
                        >
                            <div className="h-52 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[#5C7625]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img loading="lazy" 
                                    src={product.image} 
                                    alt={product.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur p-3 rounded-none shadow-sm text-brand-secondary">
                                    <Activity className="w-5 h-5 text-[#5C7625]" />
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-secondary transition-colors">
                                    {product.title}
                                </h4>
                                
                                <p className="mb-6 flex-grow text-black text-[14px] leading-relaxed font-medium">
                                    {product.description}
                                </p>

                                <div className="pt-5 border-t border-slate-100 mt-auto">
                                    <div className="flex flex-col gap-2.5">
                                        {product.features.map((feat, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-[#5C7625]" />
                                                <span className="text-slate-800 font-bold text-sm">{feat}</span>
                                            </div>
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
