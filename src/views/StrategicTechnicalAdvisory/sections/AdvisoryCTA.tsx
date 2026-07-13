import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AdvisoryCTA = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-brand-content text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-[24px] md:text-5xl font-medium tracking-tight mb-8 leading-tight">
                    {t('strategicAdvisory.callToAction')}
                </h2>
                <Link 
                    href="/contact-us"
                    className="inline-flex items-center justify-center bg-brand-primary text-white hover:bg-brand-primary/90 px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-colors shadow-lg"
                >
                    Partner With Us
                    <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
            </div>
        </section>
    );
};

export default AdvisoryCTA;
