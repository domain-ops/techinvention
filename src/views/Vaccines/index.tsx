import React, { useEffect } from 'react';
import CTASection from '../../components/CTASection';
import { useSEO } from '../../lib/useSEO';

const VaccinesPage = () => {
    useSEO(
        'Vaccine R&D & Pipelines | TechInvention',
        'Read about TechInvention\'s vaccine development pipeline, including viral vector and mRNA platforms targeting critical global infectious diseases.'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-32">
            <div className="max-w-[1400px] mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-brand-content mb-8">
                    Vaccines Research
                </h1>
                <p className="text-xl text-black font-medium max-w-3xl mx-auto leading-relaxed">
                    Dedicated section detailing vaccine research areas and platform capabilities. Content coming soon.
                </p>
            </div>
            <CTASection />
        </div>
    );
};

export default VaccinesPage;
