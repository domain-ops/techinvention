import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Dna, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { useRouter } from 'next/navigation';

const SubPagePreview = () => {
    const [activeTab, setActiveTab] = useState<'vaccines' | 'diagnostics'>('vaccines');
    const router = useRouter();

    const tabs = [
        { id: 'vaccines', label: 'Vaccines', icon: Microscope },
        { id: 'diagnostics', label: 'Diagnostics', icon: Dna }
    ] as const;

    const content = {
        vaccines: {
            title: 'Vaccine Innovation & Research',
            subtitle: 'Developing prophylactic solutions targeting critical global infectious diseases.',
            desc: 'Our vaccine R&D is dedicated to developing robust, accessible, and highly effective vaccines. We leverage advanced platforms such as viral vectors and mRNA technologies to ensure rapid response to emerging health threats.',
            features: [
                'Prophylactic Solutions for Emerging Markets',
                'Viral Vector & mRNA Platforms',
                'Accelerated Phase I/II Clinical Pipelines',
                'Global Regulatory Compliance'
            ],
            color: 'bg-brand-primary',
            lightColor: 'bg-blue-50/50',
            textColor: 'text-brand-primary',
            link: '/rnd/vaccines'
        },
        diagnostics: {
            title: 'Advanced Diagnostics',
            subtitle: 'Cutting-edge molecular and lateral flow diagnostic development programs.',
            desc: 'Our diagnostics division focuses on designing rapid and accurate disease detection systems at the point of care. From molecular diagnostics to lateral flow assays, we enable timely medical interventions globally.',
            features: [
                'Molecular Diagnostics & PCR',
                'Lateral Flow Assays (LFA)',
                'Point-of-Care Rapid Testing Kits',
                'High Sensitivity & Specificity'
            ],
            color: 'bg-brand-secondary',
            lightColor: 'bg-teal-50/50',
            textColor: 'text-brand-secondary',
            link: '/rnd/diagnostics'
        }
    };

    const activeData = content[activeTab];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 transition-colors duration-1000 ${activeData.lightColor}`} style={{ transform: 'translate(30%, -30%)' }} />
                <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-40 transition-colors duration-1000 ${activeData.lightColor}`} style={{ transform: 'translate(-20%, 20%)' }} />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <span className="text-brand-primary font-bold tracking-[0.3em] text-[11px] md:text-[13px] uppercase block mb-4">
                            Departments
                        </span>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-content">
                            Explore Our Specialized Hubs
                        </h2>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" delay={0.1}>
                    {/* Tabs Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-white rounded-full p-2 shadow-sm border border-gray-100">
                            {tabs.map(tab => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`relative flex items-center gap-3 px-8 py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-500 hover:text-black'}`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTabIndicator"
                                                className={`absolute inset-0 rounded-full ${content[tab.id].color}`}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Icon size={18} className={isActive ? 'text-white' : ''} />
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-primary/5 border border-gray-100 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-6">
                                        {activeTab === 'vaccines' ? <Microscope className={`w-4 h-4 ${activeData.textColor}`} /> : <Dna className={`w-4 h-4 ${activeData.textColor}`} />}
                                        <span className={`text-xs font-bold uppercase tracking-widest ${activeData.textColor}`}>
                                            {activeTab === 'vaccines' ? 'Vaccines Sub-tab' : 'Diagnostics Sub-tab'}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-3xl md:text-4xl font-medium text-brand-content mb-4 leading-tight">
                                        {activeData.title}
                                    </h3>
                                    
                                    <p className="text-xl text-gray-800 font-medium mb-6">
                                        {activeData.subtitle}
                                    </p>
                                    
                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        {activeData.desc}
                                    </p>

                                    <button 
                                        onClick={() => router.push(activeData.link)}
                                        className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:shadow-lg ${activeData.color}`}
                                    >
                                        Learn More 
                                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                    <h4 className="text-lg font-bold text-brand-content mb-6 border-b border-gray-200 pb-4">
                                        Platform Capabilities
                                    </h4>
                                    <ul className="space-y-4">
                                        {activeData.features.map((feature, idx) => (
                                            <motion.li 
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className={`w-5 h-5 shrink-0 ${activeData.textColor}`} />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default SubPagePreview;

