import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Beaker, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

gsap.registerPlugin(ScrollTrigger);

export default function DiagnosticProducts() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        const image = imageRef.current;

        if (!section || !content || !image) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(content, 
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(image, 
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.6"
        );

        return () => {
            tl.kill();
        };
    }, []);

    const features = [
        "Rapid Point-of-Care Testing",
        "High Sensitivity & Specificity",
        "Cost-Effective Solutions",
        "Regulatory Compliant"
    ];

    return (
        <section id="diagnostics-division" ref={sectionRef} className="py-24 bg-white overflow-hidden relative font-sans">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <div ref={contentRef} className="max-w-xl text-left">
                        <ScrollReveal direction="up">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                Diagnostics Division
                            </span>
                            <div className="mb-4">
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6 leading-tight">
                                    <SplitTitle title="Advanced Diagnostic Solutions" />
                                </h2>
                            </div>
                            
                            <p className="mb-8 text-black text-[16px] md:text-[18px] font-medium leading-relaxed text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200/60 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-[#5C7625] flex-shrink-0" />
                                    <span className="text-slate-800 font-bold text-sm">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div ref={imageRef} className="relative">
                        <div className="absolute inset-0 bg-[#5C7625]/10 transform rotate-3 rounded-[2rem] -z-10"></div>
                        <div className="absolute inset-0 bg-white transform -rotate-3 rounded-[2rem] -z-10 shadow-xl border border-slate-200/60"></div>
                        <div className="rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl relative">
                            <img 
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="Laboratory Diagnostics" 
                                className="w-full h-[550px] object-cover"
                            />
                            {/* Floating overlay card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 flex items-center justify-between border border-slate-200/60">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Precision Assays</h4>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider m-0">Gold standard performance</p>
                                </div>
                                <div className="w-12 h-12 bg-[#5C7625]/10 rounded-full flex items-center justify-center">
                                    <Beaker className="w-6 h-6 text-[#5C7625]" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
