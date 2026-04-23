import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import img3 from '../../../../assets/images/partnerships_hero.png';

export const TechnologyTieUp = ({ data }: { data: any }) => {
    if (!data) return null;
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-brand-primary/5 rounded-[3rem] p-8 md:p-16 border border-brand-primary/10 relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
                    
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                        <div className="w-full lg:w-5/12">
                            <ScrollReveal direction="up">
                                <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-4 block uppercase">Phase 03</span>
                                <h3 className="text-[36px] font-medium mb-6 leading-tight">
                                    <SplitTitle title={data.title} />
                                </h3>
                                <img src={img3} alt={data.title} className="w-full h-48 object-cover rounded-2xl shadow-lg mt-8" />
                            </ScrollReveal>
                        </div>
                        <div className="w-full lg:w-7/12">
                            <ScrollReveal direction="up" delay={0.2}>
                                <div className="space-y-6 mb-10">
                                    {data.content.split('\n\n').map((p: string, i: number) => <p key={i} className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{p}</p>)}
                                </div>
                                {data.deliverables && (
                                    <div>
                                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-6 block uppercase">{data.deliverablesTitle}</span>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {data.deliverables.map((item: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-4">
                                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-primary flex-shrink-0" />
                                                    <span className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TechnologyTieUp;
