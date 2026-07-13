"use client";

import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const Dithering = lazy(() =>
    import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export default function GmpCTA() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24 w-full flex justify-center items-center px-4 md:px-6 bg-white overflow-hidden font-sans border-b border-slate-100">
            <div
                className="w-full max-w-[1300px] relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Dither Shader Card Layout matching partnership style */}
                <div className="relative overflow-hidden rounded-[48px] border border-slate-200 bg-white shadow-sm min-h-[420px] md:min-h-[500px] flex flex-col items-center justify-center duration-500">
                    <Suspense fallback={<div className="absolute inset-0 bg-slate-50" />}>
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply transition-opacity duration-500">
                            <Dithering
                                colorBack="#00000000"
                                colorFront="#1955A6" // brand-primary blue
                                shape="warp"
                                type="4x4"
                                speed={isHovered ? 0.6 : 0.2}
                                className="w-full h-full absolute inset-0"
                                minPixelRatio={1}
                            />
                        </div>
                    </Suspense>

                    <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
                        
                        {/* Headline with Brand Colors */}
                        <h2 className="text-3xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-[#1955A6] mb-6 leading-tight">
                            Explore Training Opportunities <br />
                            <span className="text-[#5C7625]">with TechInvention.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-slate-700 text-[16px] md:text-[18px] max-w-2xl mb-10 leading-relaxed font-medium">
                            Write to <a href="mailto:connect@techinvention.biz" className="underline hover:text-[#1955A6] transition-colors font-bold">connect@techinvention.biz</a> to learn more about our training programs and upcoming initiatives.
                        </p>

                        {/* Premium Button with SVG slide effect */}
                        <motion.a
                            href="mailto:connect@techinvention.biz"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center gap-3 bg-[#1955A6] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#1955A6]/90 hover:shadow-lg overflow-hidden"
                        >
                            <span className="relative z-10">
                                Email Us Now
                            </span>
                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center z-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
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
                                    width="16"
                                    height="16"
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
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
