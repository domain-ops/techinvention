import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';

const AdvisoryHeader = () => {
    const { t } = useLanguage();
    
    return (
        <section className="pt-16 pb-8 md:pt-20 md:pb-12 max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="up">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-6 block uppercase">
                        Expert Consulting
                    </span>
                    <h2 className="text-[36px] font-medium tracking-tighter leading-tight mb-6">
                        <span className="text-brand-primary">Transforming Vision into</span>{' '}
                        <span className="text-brand-secondary">Reality</span>
                    </h2>
                    <p className="text-[18px] text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        {t('strategicAdvisory.intro')}
                    </p>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default AdvisoryHeader;
