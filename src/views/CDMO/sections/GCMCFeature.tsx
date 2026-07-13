import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import GCMCSalientFeatures from './GCMCSalientFeatures';

const GCMCFeature = () => {
    return (
        <section className="pt-24 pb-12 bg-white relative overflow-hidden font-sans">
            <div className="max-w-[1300px] mx-auto px-6">
                                {/* 1. Paragraphs (Full Width) */}
                <div className="w-full mb-14">
                    <ScrollReveal direction="up">
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-6 font-medium">
                            TechInvention's Global Collaborative Centre for Medical Countermeasures (GCMC) is an Integrated Full-Cycle Vaccine Development & Manufacturing Facility designed to accelerate the journey from scientific discovery to global health impact.
                        </p>
                        
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed font-medium">
                            Developed in alignment with international GMP standards, GCMC brings together vaccine process development, manufacturing scale-up, technology transfer, analytical testing, quality systems, regulatory support, drug product manufacturing, digital innovation, and sustainable infrastructure within one integrated facility.
                        </p>
                    </ScrollReveal>
                </div>

                {/* 2. Interactive Salient Features Graphic */}
                <div className="mb-14">
                    <ScrollReveal direction="up" delay={0.1}>
                        <GCMCSalientFeatures />
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default GCMCFeature;
