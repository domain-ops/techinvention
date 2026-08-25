import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import { useLanguage } from '../../../context/LanguageContext';

const GCMCBridge = () => {
    const { t } = useLanguage();
    return (
        <section className="pt-0 pb-8 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="border-t-2 border-brand-primary/20 pt-12">
                        <h2 className="text-[22px] md:text-4xl font-medium tracking-tight mb-4">
                            <SplitTitle title={t('cdmo.bridge.title') || "GCMC as a Bridge"} />
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed w-full mb-6">
                            {t('cdmo.bridge.desc')}
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default GCMCBridge;
