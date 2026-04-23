import React from 'react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { useLanguage } from '../../../../context/LanguageContext';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import img5 from '../../../../assets/images/about_manufacturing.png';

export const QMSSupport = ({ data }: { data: any }) => {
    if (!data) return null;
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-4 block uppercase">Phase 05</span>
                        <h3 className="text-[36px] font-medium mb-6 leading-tight">
                            <SplitTitle title={data.title} />
                        </h3>
                        <div className="space-y-6">
                            {data.content.split('\n\n').map((p: string, i: number) => <p key={i} className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{p}</p>)}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="rounded-[2rem] overflow-hidden shadow-lg h-[350px]">
                            <img src={img5} alt={data.title} className="w-full h-full object-cover" />
                        </div>
                        
                        {data.deliverables && (
                            <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100">
                                <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-8 block uppercase">{data.deliverablesTitle}</span>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                    {data.deliverables.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-primary flex-shrink-0" />
                                            <span className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
export default QMSSupport;
