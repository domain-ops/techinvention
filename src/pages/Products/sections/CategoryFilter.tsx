import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestTube, Microscope, Stethoscope, HeartPulse, Activity, Dna } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

// Local product images
import recombinantVaccinesImg from '../../../assets/images/products/recombinant_vaccines.png';
import lateralFlowAssaysImg from '../../../assets/images/products/lateral_flow_assays.png';
import molecularDiagnosticKitsImg from '../../../assets/images/products/molecular_diagnostic_kits.png';
import livestockVaccinesImg from '../../../assets/images/products/livestock_vaccines.png';
import biosimilarsImg from '../../../assets/images/products/biosimilars.png';
import clinicalChemistryAnalyzersImg from '../../../assets/images/products/clinical_chemistry_analyzers.png';

const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'vaccines', label: 'Vaccines & Biologics' },
    { id: 'diagnostics', label: 'Diagnostics' },
    { id: 'veterinary', label: 'Veterinary' }
];

const products = [
    {
        id: 1,
        title: 'Recombinant Vaccines',
        category: 'vaccines',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <Dna className="w-6 h-6 text-brand-primary" />,
        image: recombinantVaccinesImg
    },
    {
        id: 2,
        title: 'Lateral Flow Assays',
        category: 'diagnostics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <Activity className="w-6 h-6 text-brand-primary" />,
        image: lateralFlowAssaysImg
    },
    {
        id: 3,
        title: 'Molecular Diagnostic Kits',
        category: 'diagnostics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <Microscope className="w-6 h-6 text-brand-primary" />,
        image: molecularDiagnosticKitsImg
    },
    {
        id: 4,
        title: 'Livestock Vaccines',
        category: 'veterinary',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <HeartPulse className="w-6 h-6 text-brand-primary" />,
        image: livestockVaccinesImg
    },
    {
        id: 5,
        title: 'Biosimilars',
        category: 'vaccines',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <TestTube className="w-6 h-6 text-brand-primary" />,
        image: biosimilarsImg
    },
    {
        id: 6,
        title: 'Clinical Chemistry Analyzers',
        category: 'diagnostics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <Stethoscope className="w-6 h-6 text-brand-primary" />,
        image: clinicalChemistryAnalyzersImg
    }
];

export default function CategoryFilter() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProducts = products.filter(product => 
        activeFilter === 'all' ? true : product.category === activeFilter
    );

    return (
        <section className="py-24 bg-[#FAFAFA] relative overflow-hidden font-sans">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                <div className="flex flex-col mb-16 gap-8">
                    <div className="max-w-2xl text-left">
                        <ScrollReveal direction="up">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                Portfolio
                            </span>
                            <div className="mb-4">
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left">
                                    <SplitTitle title="Explore Our Portfolio" />
                                </h2>
                            </div>
                            <p className="text-black text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Filter Buttons in One Line */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-nowrap gap-3 w-full overflow-x-auto pb-2 justify-start scrollbar-none [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border whitespace-nowrap ${
                                    activeFilter === cat.id 
                                    ? 'bg-[#1955A6] text-white border-[#1955A6] shadow-md shadow-[#1955A6]/10' 
                                    : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Product Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={product.id}
                                className="group bg-white rounded-none overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="h-52 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[#1955A6]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-none shadow-sm">
                                        {product.icon}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow text-left">
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase block mb-2 text-[#5C7625]">
                                        {categories.find(c => c.id === product.category)?.label}
                                    </span>
                                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                                        {product.title}
                                    </h4>
                                    <p className="text-black text-[14px] leading-relaxed font-medium line-clamp-3 mb-0">
                                        {product.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
