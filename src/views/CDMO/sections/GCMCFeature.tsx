import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import GCMCSalientFeatures from './GCMCSalientFeatures';

import { useLanguage } from '../../../context/LanguageContext';

const GCMCFeature = () => {
    const { t } = useLanguage();
    return (
        <section className="pt-24 pb-12 bg-white relative overflow-hidden font-sans">
            <div className="max-w-[1300px] mx-auto px-6">
                {/* 1. Paragraphs (Full Width) */}
                <div className="w-full mb-14">
                    <ScrollReveal direction="up">
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-6 font-medium whitespace-pre-line">
                            {t('cdmo.description')}
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
