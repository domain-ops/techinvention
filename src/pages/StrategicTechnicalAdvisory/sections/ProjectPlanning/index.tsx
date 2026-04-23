import React from 'react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';

export const ProjectPlanning = ({ data }: { data: any }) => {
    if (!data) return null;
    return (
        <section className="py-24 bg-brand-primary/5 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal direction="up">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-4 block uppercase">Phase 02</span>
                        <h3 className="text-[36px] font-medium mb-6 leading-tight">
                            <SplitTitle title={data.title} />
                        </h3>
                        <div className="space-y-6">
                            {data.content.split('\n\n').map((p: string, i: number) => <p key={i} className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{p}</p>)}
                        </div>
                    </div>

                    {data.deliverables && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.deliverables.map((item: string, idx: number) => (
                                <div key={idx} className="bg-white border border-brand-primary/10 shadow-sm p-6 rounded-2xl hover:border-brand-primary/30 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-brand-primary mb-4" />
                                    <span className="font-sans font-medium text-[20px] text-brand-content leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </ScrollReveal>
            </div>
        </section>
    );
};
export default ProjectPlanning;
