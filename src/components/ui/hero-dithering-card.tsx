"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import { cn } from "@/lib/utils";

const Dithering = lazy(() =>
    import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export function CTASection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24 w-full flex justify-center items-center px-4 md:px-6 bg-white overflow-hidden">
            <div
                className="w-full max-w-7xl relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden rounded-none border border-brand-border bg-white shadow-sm min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center duration-500">
                    <Suspense fallback={<div className="absolute inset-0 bg-slate-50" />}>
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply transition-opacity duration-500">
                            <Dithering
                                colorBack="#00000000"
                                colorFront="#1955A6"  // brand-primary
                                shape="warp"
                                type="4x4"
                                speed={isHovered ? 0.6 : 0.2}
                                className="w-full h-full absolute inset-0"
                                minPixelRatio={1}
                            />
                        </div>
                    </Suspense>

                    <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">

                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-primary/5 px-4 py-1.5 text-lg font-medium tracking-tight text-brand-primary backdrop-blur-sm  tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                            </span>
                            Bio-Innovation Hub
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight tracking-tighter text-brand-content mb-8 leading-[1.05] ">
                            Advancing Health <br />
                            <span className="text-brand-primary/80">Delivered Globally.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-black text-[18px] max-w-2xl mb-12 leading-relaxed font-medium tracking-tight">
                            Join the global network of health innovators. We bridge the gap between scientific excellence and equitable access to life-critical vaccines.
                        </p>

                        {/* Premium Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center gap-3 md:gap-4 bg-brand-primary text-white px-6 py-3.5 md:px-10 md:py-5 rounded-full text-base md:text-lg font-medium tracking-tight transition-all duration-300 hover:bg-brand-primary/90 hover:shadow-2xl overflow-hidden"
                        >
                            <span className="relative z-10 tracking-[0.2em] text-[10px] md:text-[11px] uppercase font-bold">
                                Start Partnership
                            </span>
                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform duration-300 group-hover:translate-x-full"
                                >
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="absolute -left-full transition-transform duration-300 group-hover:translate-x-full"
                                >
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
