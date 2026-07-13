import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import GCMCSalientFeatures from './GCMCSalientFeatures';

const GCMCFeature = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            <div className="max-w-[1300px] mx-auto px-6">
                
                {/* 1. Main Heading & 2. 2nd Heading (Full Width) */}
                <div className="text-left mb-12">
                    <ScrollReveal direction="up">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-4 leading-[1.2]">
                            <SplitTitle title="Global Collaborative Centre for Medical Countermeasures (GCMC)" />
                        </h2>
                        <h3 className="text-xl md:text-2xl font-medium text-brand-primary">
                            Integrated Full-Cycle Vaccine Development & Manufacturing Facility
                        </h3>
                    </ScrollReveal>
                </div>

                {/* 3. Interactive Salient Features Graphic */}
                <div className="mb-14">
                    <ScrollReveal direction="up" delay={0.1}>
                        <GCMCSalientFeatures />
                    </ScrollReveal>
                </div>

                {/* 4. Paragraphs (Full Width) */}
                <div className="w-full">
                    <ScrollReveal direction="up" delay={0.2}>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                            From Innovation to Scalable Global Health Solutions
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed mb-6">
                            TechInvention's Global Collaborative Centre for Medical Countermeasures (GCMC) is an Integrated Full-Cycle Vaccine Development & Manufacturing Facility designed to accelerate the journey from scientific discovery to global health impact.
                        </p>
                        
                        <p className="text-base text-gray-600 leading-relaxed">
                            Developed in alignment with international GMP standards, GCMC brings together vaccine process development, manufacturing scale-up, technology transfer, analytical testing, quality systems, regulatory support, drug product manufacturing, digital innovation, and sustainable infrastructure within one integrated facility.
                        </p>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default GCMCFeature;
