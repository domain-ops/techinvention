"use client";
import React, { useEffect } from 'react';
import ScrollReveal from '../../components/Common/ScrollReveal';
import { SplitTitle } from '../../components/Common/SplitTitle';

export default function DisclaimerView() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Header Hero Section */}
            <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 text-center md:text-left">
                    <ScrollReveal direction="up">
                        <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-medium tracking-wide leading-[1.15] text-[#13325B]">
                            <SplitTitle title="Disclaimer" />
                        </h1>
                    </ScrollReveal>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-16 md:py-24 text-slate-700">
                <ScrollReveal direction="up" delay={0.1}>
                    <article className="prose prose-slate max-w-none prose-headings:text-[#13325B] prose-headings:font-bold prose-p:leading-relaxed prose-p:text-[16px] md:prose-p:text-[18px]">
                        <p className="font-medium text-[#13325B] mb-8 text-[18px] md:text-[20px] leading-relaxed">
                            TECHINVENTION LIFECARE PVT. LTD. (“TECHINVENTION”) operates the Site and all rights thereto are owned and reserved by TECHINVENTION.
                        </p>
                        
                        <p className="mb-8">
                            Any product/company information or other information published via this site is based on database and information sources that are believed to be reliable by TECHINVENTION. While TECHINVENTION has used the best resources for the evaluation of each information, TECHINVENTION disclaims all warranties as to the accuracy, completeness or adequacy of such information.
                        </p>

                        <p className="mb-8">
                            Neither TECHINVENTION nor its affiliates nor any of its proprietors, employees (together, “personnel”) are intending to provide legal advice in this matter.
                        </p>
                    </article>
                </ScrollReveal>
            </div>
        </div>
    );
}
