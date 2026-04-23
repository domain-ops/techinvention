import React from 'react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import img1 from '../../../../assets/images/about_corporate.png';

export const ProjectFeasibility = ({ data }: { data: any }) => {
    if (!data) return null;
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <ScrollReveal direction="right">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-4 block uppercase">Phase 01</span>
                            <h3 className="text-[36px] font-medium mb-6 leading-tight">
                                <SplitTitle title={data.title} />
                            </h3>
                            <div className="space-y-6 mb-10">
                                {data.content.split('\n\n').map((p: string, i: number) => <p key={i} className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{p}</p>)}
                            </div>
                            {data.deliverables && (
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-6 block uppercase">{data.deliverablesTitle}</span>
                                    <ul className="grid grid-cols-1 gap-4">
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
                        <ScrollReveal direction="left">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] relative">
                                <div className="absolute inset-0 bg-brand-primary/10 hover:bg-transparent transition-colors duration-500 z-10" />
                                <img src={img1} alt={data.title} className="w-full h-full object-cover" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProjectFeasibility;
