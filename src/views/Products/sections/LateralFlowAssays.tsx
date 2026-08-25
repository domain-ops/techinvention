import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Target, TestTube2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import lateralFlowAssaysImg from '../../../assets/images/products/lateral_flow_assays.png';
import { useLanguage } from '../../../context/LanguageContext';

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

const LateralFlowAssays = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <ScrollReveal direction="up">
                        <span className="text-[#5C7625] font-bold uppercase tracking-wider text-xs block mb-3">
                            {t('products.rapidDiagnostics') || "Rapid Diagnostics"}
                        </span>
                        <h2 className="text-[24px] md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
                            <SplitTitle title={t('products.lfaTitle') || "Lateral Flow Assays (LFA)"} />
                        </h2>
                        <p className="text-slate-600 font-medium text-base md:text-lg">
                            {t('products.lfaDesc') || "Point-of-care rapid diagnostic solutions providing reliable, real-time results for infectious and chronic conditions."}
                        </p>
                    </ScrollReveal>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {lfaProducts.map((product) => (
                        <motion.div 
                            key={product.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-none border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
                                    <span className="flex items-center gap-1.5 bg-[#1955A6]/80 backdrop-blur-md px-2.5 py-1 rounded-full">
                                        <TestTube2 className="w-3.5 h-3.5" />
                                        {t('products.rapidTest') || "Rapid Test"}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#1955A6] transition-colors">
                                    {product.title}
                                </h4>
                                
                                <div className="space-y-3.5 mb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#5C7625]/10 p-2 rounded-lg">
                                            <Target className="w-5 h-5 text-[#5C7625]" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">{t('products.useCase') || "Use Case"}</span>
                                            <span className="text-slate-900 font-bold text-sm">{product.useCase}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-50 p-2 rounded-lg">
                                            <Droplet className="w-5 h-5 text-red-500" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">{t('products.sampleType') || "Sample Type"}</span>
                                            <span className="text-slate-900 font-bold text-sm">{product.sampleType}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5 border-t border-slate-100 mt-auto">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2.5">{t('products.applications') || "Applications"}</span>
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
};

export default LateralFlowAssays;
