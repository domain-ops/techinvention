import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const GCMCBridge = () => {
    return (
        <section className="pt-16 pb-8 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="border-t-2 border-brand-primary/20 pt-8 mt-8">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                            <SplitTitle title="GCMC as a Bridge" />
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-5xl">
                            GCMC bridges this critical gap by providing end-to-end support across vaccine development, process optimization, manufacturing scale-up, technology transfer, GMP manufacturing, quality assurance, and regulatory readiness.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default GCMCBridge;
