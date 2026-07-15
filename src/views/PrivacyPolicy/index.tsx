"use client";
import React, { useEffect } from 'react';
import ScrollReveal from '../../components/Common/ScrollReveal';
import { SplitTitle } from '../../components/Common/SplitTitle';

export default function PrivacyPolicyView() {
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
                            <SplitTitle title="Privacy Policy" />
                        </h1>
                    </ScrollReveal>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-16 md:py-24 text-slate-700">
                <ScrollReveal direction="up" delay={0.1}>
                    <article className="prose prose-slate max-w-none prose-headings:text-[#13325B] prose-headings:font-bold prose-p:leading-relaxed prose-p:text-[16px] md:prose-p:text-[18px]">
                        <p className="font-medium text-[#13325B] mb-8 text-[18px] md:text-[20px] leading-relaxed">
                            TECHINVENTION LIFECARE PVT. LTD. (“TECHINVENTION”) operates this website. 
                            TECHINVENTION wishes to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information while using this website.
                        </p>
                        
                        <p className="mb-12">
                            If you visit this website, then you agree to the collection and use of information in relation to this policy. 
                            The Personal Information that we collect is used for providing and improving the Services provided by TECHINVENTION. 
                            We will not use or share your information with anyone except as described in this Privacy Policy.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Information Collection and Use
                        </h2>
                        <p className="mb-8">
                            For a better experience while using our website, we may require you to provide us with certain personally identifiable information, 
                            including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Log Data
                        </h2>
                        <p className="mb-8">
                            We want to inform you that whenever you visit our website, we collect information that your browser sends to us that is called Log Data. 
                            This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser version, pages of our website that you visit, 
                            the time and date of your visit, the time spent on those pages, and other statistics.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Cookies
                        </h2>
                        <p className="mb-6">
                            Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.
                        </p>
                        <p className="mb-8">
                            Our website uses these “cookies” to collect information and to improve our Service. You have the option to either accept or refuse these cookies, 
                            and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Service Providers
                        </h2>
                        <p className="mb-4">
                            We may employ third-party companies and individuals due to the following reasons:
                        </p>
                        <ul className="pl-0 mb-6 flex flex-col gap-3">
                            <li className="flex items-start gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">To facilitate our website;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">To provide the website on our behalf;</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">To perform website-related services; or</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1955A6] mt-2.5 shrink-0" />
                                <span className="text-[16px] md:text-[18px] text-slate-700">To assist us in analyzing how our website is used.</span>
                            </li>
                        </ul>
                        <p className="mb-8">
                            We want to inform our website users that these third parties have access to your Personal Information. 
                            The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Security
                        </h2>
                        <p className="mb-8">
                            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. 
                            But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Links to Other Sites
                        </h2>
                        <p className="mb-8">
                            Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. 
                            Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. 
                            We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Children's Privacy
                        </h2>
                        <p className="mb-8">
                            Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. 
                            In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. 
                            If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Changes to This Privacy Policy
                        </h2>
                        <p className="mb-8">
                            We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. 
                            We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                        </p>

                        <h2 className="text-[20px] md:text-[24px] text-[#13325B] font-bold mt-12 mb-4 border-b border-slate-100 pb-2">
                            Contact Us
                        </h2>
                        <p className="mb-8">
                            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                        </p>
                    </article>
                </ScrollReveal>
            </div>
        </div>
    );
}
