import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Microscope, FileSearch, Network, PenTool, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SplitTitle } from '../../../components/Common/SplitTitle';

// Import newly generated premium images
import img1 from '../../../../src/assets/images/advisory/advisory_feasibility.png';
import img2 from '../../../../src/assets/images/advisory/advisory_planning.png';
import img3 from '../../../../src/assets/images/advisory/advisory_tech_tieup.png';
import img4 from '../../../../src/assets/images/advisory/advisory_engineering.png';
import img5 from '../../../../src/assets/images/advisory/advisory_qms.png';

const PHASE_ICONS = [FileSearch, PenTool, Network, Microscope, ShieldCheck];
const PHASE_IMAGES = [img1, img2, img3, img4, img5];

const AdvisoryPhases = () => {
    const { t } = useLanguage();
    const sections: any[] = t('strategicAdvisory.sections') || [];

    if (!sections || sections.length === 0) return null;

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="mb-20">
                    
                    <h2 className="text-[24px] md:text-[42px] font-medium tracking-wide">
                        <SplitTitle title="A rigorous approach to excellence" />
                    </h2>
                </div>

                {/* The Phases List */}
                <div className="flex flex-col gap-24 md:gap-32">
                    {sections.map((phase, idx) => {
                        const SectionIcon = PHASE_ICONS[idx % PHASE_ICONS.length];
                        const image = PHASE_IMAGES[idx % PHASE_IMAGES.length];
                        const isEven = idx % 2 === 0;

                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-col"
                            >
                                {/* Section Title & Icon */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-brand-primary shadow-sm border border-slate-100">
                                        <SectionIcon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-semibold text-slate-900">
                                        {phase.title}
                                    </h4>
                                </div>

                                <div className="flex flex-col gap-10">
                                    
                                    {/* Text Content - Full Width */}
                                    <div className="flex flex-col gap-5 text-slate-600">
                                        {phase.content.split('\n\n').map((paragraph: string, pIdx: number) => (
                                            <p key={pIdx} className="text-base md:text-lg leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Pointers / Deliverables - Full Width */}
                                    {phase.deliverables && phase.deliverables.length > 0 && (
                                        <div className="pt-4">
                                            <h5 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">
                                                Key Deliverables
                                            </h5>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {phase.deliverables.map((item: string, dIdx: number) => (
                                                    <li key={dIdx} className="flex items-start gap-3">
                                                        <div className="mt-1 flex-shrink-0">
                                                            <CheckCircle2 className="w-5 h-5 text-brand-primary" strokeWidth={2} />
                                                        </div>
                                                        <span className="text-base text-slate-900 font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Related Image - Full Width */}
                                    <motion.div 
                                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                                        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                                        className="w-full mt-4 rounded-none overflow-hidden shadow-md border border-slate-100/50"
                                    >
                                        <motion.img 
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.4 }}
                                            src={image} 
                                            alt={phase.title} 
                                            className="w-full object-cover max-h-[400px] lg:max-h-[500px]"
                                        />
                                    </motion.div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AdvisoryPhases;
