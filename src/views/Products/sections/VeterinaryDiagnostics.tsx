import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Microscope, ArrowRight } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import livestockVaccinesImg from '../../../assets/images/products/livestock_vaccines.png';

export default function VeterinaryDiagnostics() {
    return (
        <section id="veterinary-diagnostics" className="py-24 bg-[#1955A6] relative overflow-hidden font-sans border-b border-slate-200/20">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#87A840]/30 blur-[120px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[120px]" />
            </div>

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Image side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-none overflow-hidden border border-white/20 shadow-2xl relative group">
                            <img loading="lazy" 
                                src={livestockVaccinesImg} 
                                alt="Veterinary Diagnostics" 
                                className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1955A6]/90 via-[#1955A6]/20 to-transparent" />
                            
                            {/* Overlay Card */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-none flex items-center justify-between shadow-xl">
                                    <div className="text-left">
                                        <div className="text-white font-bold text-xl mb-1">Animal Health</div>
                                        <div className="text-white/80 font-bold uppercase tracking-wider text-xs">Comprehensive testing solutions</div>
                                    </div>
                                    <div className="w-12 h-12 bg-[#87A840] rounded-full flex items-center justify-center shadow-lg">
                                        <Microscope className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content side */}
                    <div className="text-left">
                        <ScrollReveal direction="up">
                            
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide text-white mb-6 leading-tight text-left">
                                <span className="text-white">Advanced Diagnostics for </span>
                                <span className="text-[#87A840]">Animal Care</span>
                            </h2>
                            
                            <p className="text-white/85 mb-10 text-[16px] md:text-[18px] leading-relaxed text-left font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-4 mb-12">
                            {[
                                { title: "Companion Animal Testing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." },
                                { title: "Livestock Health Monitoring", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." },
                                { title: "Zoonotic Disease Surveillance", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 p-5 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm text-left">
                                    <div className="w-12 h-12 rounded-none bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HeartPulse className="w-5 h-5 text-[#87A840]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-white/70 font-medium text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-4 bg-white text-[#1955A6] rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 w-fit">
                            <span className="flex items-center gap-2">
                                View Veterinary Products
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
