import React from 'react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import img4 from '../../../../assets/images/one_health_infrastructure.png';

export const DesignEngineering = ({ data }: { data: any }) => {
    if (!data) return null;
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <ScrollReveal direction="left">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-4 block uppercase">Phase 04</span>
                            <h3 className="text-[36px] font-medium mb-6 leading-tight">
                                <SplitTitle title={data.title} />
                            </h3>
                            <div className="space-y-6 mb-10">
                                {data.content.split('\n\n').map((p: string, i: number) => <p key={i} className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{p}</p>)}
                            </div>
                            {data.deliverables && (
                                <div className="mt-8 pt-8 border-t border-slate-200">
                                    <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-6 block uppercase">{data.deliverablesTitle}</span>
                                    <ul className="space-y-4">
                                        {data.deliverables.map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-primary flex-shrink-0" />
                                                <span className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </ScrollReveal>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <ScrollReveal direction="right">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] relative">
                                <img src={img4} alt={data.title} className="w-full h-full object-cover" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DesignEngineering;
