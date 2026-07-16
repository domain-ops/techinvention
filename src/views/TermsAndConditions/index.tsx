"use client";
import React, { useEffect } from 'react';
import ScrollReveal from '../../components/Common/ScrollReveal';
import { SplitTitle } from '../../components/Common/SplitTitle';

export default function TermsAndConditionsView() {
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
                            <SplitTitle title="Terms &amp; Conditions" />
                        </h1>
                    </ScrollReveal>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-16 md:py-24 text-slate-700">
                <ScrollReveal direction="up" delay={0.1}>
                    <article className="prose prose-slate max-w-none prose-headings:text-[#13325B] prose-headings:font-bold prose-p:leading-relaxed prose-p:text-[16px] md:prose-p:text-[18px]">
                        <p className="font-medium text-[#13325B] mb-8 text-[18px] md:text-[20px] leading-relaxed">
                            This Website is owned and operated by Techinvention Lifecare Limited (“Techinvention,” “we,” “us,” or “our”), having its office located in Mumbai, Maharashtra, India.
                        </p>
                        
                        <p className="mb-12 text-[16px] md:text-[18px] leading-relaxed">
                            By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions (“Terms”). If you do not agree with any part of these Terms, you must discontinue your use of the Website immediately.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            TERMS &amp; CONDITIONS OF USE
                        </h2>
                        <p className="mb-6">
                            This Website is intended for the User’s personal and non-commercial use. Techinvention has made a conscious effort to accurately present information about Techinvention, its products, and services on the Website. All content is provided for the User’s general knowledge and educational purposes only and should not be considered medical advice. Users are advised to consult their healthcare professionals for diagnosis and treatment.
                        </p>
                        <p className="mb-8">
                            The User is not permitted to duplicate, modify, display, alter, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, products, or services available on this Website without prior written consent from Techinvention.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            INTELLECTUAL PROPERTY RIGHTS
                        </h2>
                        <h3 className="text-[18px] md:text-[20px] text-[#13325B] font-semibold mt-6 mb-3">
                            Ownership
                        </h3>
                        <p className="mb-6">
                            All content on this Website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Techinvention or its content suppliers and is protected by Indian and international copyright laws.
                        </p>
                        <p className="mb-6">
                            The compilation (meaning the collection, arrangement, and assembly) of all content on this Website is also the exclusive property of Techinvention and/or its affiliates and is protected by applicable intellectual property laws and international treaties.
                        </p>
                        <p className="mb-8">
                            No content from this Website may be reproduced, modified, distributed, transmitted, republished, displayed, or performed without the prior written consent of Techinvention.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            TRADEMARKS
                        </h2>
                        <p className="mb-8">
                            “Techinvention,” “Techinvention Lifecare,” and other marks indicated on our Website are trademarks or registered trademarks of Techinvention. They may not be used in connection with any product or service that is not ours in any manner that is likely to cause confusion among customers or in any manner that disparages or discredits Techinvention.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            THIRD-PARTY LINKS
                        </h2>
                        <p className="mb-6">
                            This Website may contain links to third-party websites, industry resources, partner sites, or other external platforms. These links are provided for convenience only. Techinvention has no control over the content of such external websites and accepts no responsibility for them or for any loss or damage that may arise from their use.
                        </p>
                        <p className="mb-8">
                            Access to any third-party website is entirely at the User’s own risk.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            DISCLAIMER OF WARRANTIES
                        </h2>
                        <p className="mb-6">
                            The Website and all information, content, materials, and services included on or otherwise made available through this Website are provided on an “AS IS” and “AS AVAILABLE” basis. Techinvention makes no representations or warranties of any kind, express or implied, regarding the operation of this Website or the accuracy, completeness, or reliability of the information contained herein.
                        </p>
                        <p className="mb-8">
                            To the fullest extent permissible under applicable law, Techinvention, its affiliates, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, punitive, or exemplary damages arising out of or in connection with the use of, or inability to use, this Website.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            INDEMNITY
                        </h2>
                        <p className="mb-6">
                            The User agrees to indemnify, defend, and hold harmless Techinvention, its subsidiaries, affiliates, directors, officers, employees, agents, and licensors from and against any and all claims, demands, liabilities, losses, costs, expenses (including reasonable attorneys’ fees), judgments, or other losses arising out of or related to:
                        </p>
                        <ul className="pl-0 mb-8 flex flex-col gap-3">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">The User’s use of or access to this Website;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Any violation of these Terms by the User;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Any infringement by the User of any third-party intellectual property or other rights; or</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Any unlawful, prohibited, or unauthorized use of this Website by the User.</span>
                            </li>
                        </ul>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            DATA PRIVACY AND COMPLIANCE
                        </h2>
                        <p className="mb-6">
                            Techinvention is committed to protecting the privacy and security of User data. Any Personal Data collected through this Website shall be processed in accordance with:
                        </p>
                        <ul className="pl-0 mb-8 flex flex-col gap-3">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">The Digital Personal Data Protection Act, 2023 (DPDPA) and rules framed thereunder;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">The Information Technology Act, 2000 and the IT (Reasonable Security Practices and SPDI) Rules, 2011; and</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Where applicable, the General Data Protection Regulation (EU) 2016/679 (GDPR) and other applicable international data protection frameworks.</span>
                            </li>
                        </ul>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            PROHIBITED CONDUCT
                        </h2>
                        <p className="mb-6">
                            Users shall not:
                        </p>
                        <ul className="pl-0 mb-8 flex flex-col gap-3">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Use this Website for any unlawful purpose;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Transmit defamatory, obscene, offensive, or harmful material;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Introduce viruses, malware, ransomware, or other harmful code;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Attempt unauthorized access to the Website or connected systems;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Use automated bots, scrapers, or data-mining tools without prior written consent;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Frame or mirror any portion of the Website without authorization; or</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Interfere with the operation of the Website or another User’s use thereof.</span>
                            </li>
                        </ul>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            REGULATORY AND MEDICAL DISCLAIMER
                        </h2>
                        <ul className="pl-0 mb-8 flex flex-col gap-3">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">The content on this Website, including information relating to vaccines, biologics, recombinant products, conjugate vaccines, biosimilars, clinical data, and manufacturing processes, is intended solely for general informational and educational purposes.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">It does not constitute medical, clinical, or regulatory advice. Techinvention’s products are regulated under the Drugs and Cosmetics Act, 1940 and applicable rules and are subject to approval by the Central Drugs Standard Control Organisation (CDSCO) and other relevant regulatory authorities.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">Product information published on this Website is not a substitute for applicable regulatory filings, prescribing information, or professional medical advice.</span>
                            </li>
                        </ul>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            FORWARD-LOOKING STATEMENTS
                        </h2>
                        <p className="mb-8">
                            This Website may contain forward-looking statements regarding Techinvention’s pipeline products, clinical development programs, manufacturing capabilities, and business outlook. Such statements are subject to risks, uncertainties, and assumptions and are not guarantees of future performance.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            MODIFICATIONS TO TERMS
                        </h2>
                        <p className="mb-8">
                            Techinvention reserves the right to amend, modify, or update these Terms at any time. Continued use of the Website following any modification shall constitute acceptance of the revised Terms.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            APPLICABLE LAW AND JURISDICTION
                        </h2>
                        <p className="mb-6">
                            This Website is made and controlled by Techinvention in India. These Terms shall be governed by and construed in accordance with the laws of India.
                        </p>
                        <p className="mb-6">
                            Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.
                        </p>
                        <p className="mb-8">
                            Users are responsible for compliance with all applicable export control and trade regulations, including the Foreign Trade (Development and Regulation) Act, 1992 and SCOMET regulations issued by the Directorate General of Foreign Trade (DGFT).
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            SEVERABILITY
                        </h2>
                        <p className="mb-8">
                            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            ENTIRE AGREEMENT
                        </h2>
                        <p className="mb-12">
                            These Terms constitute the entire agreement between Techinvention and the User with respect to the use of this Website and supersede all prior understandings, representations, or agreements relating thereto.
                        </p>

                        <div className="border-t border-slate-100 pt-6 mt-12 text-[14px] text-slate-500 font-medium">
                            Date: July 16, 2026
                        </div>
                    </article>
                </ScrollReveal>
            </div>
        </div>
    );
}
