import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';

const basePath = process.env.BASE_PATH || '';

import { useLanguage } from '../../../context/LanguageContext';

export default function AdverseEventReporting() {
    const { t } = useLanguage();
    return (
        <section className="py-20 bg-white relative font-sans">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <ScrollReveal direction="up">
                    <h2 className="text-[22px] md:text-[32px] font-medium text-[#13325B] mb-6">
                        {t('productsDocs.adverseEvents.title') || "Adverse Event Reporting"}
                    </h2>
                    
                    <p className="text-slate-800 text-[16px] md:text-[18px] mb-8 leading-relaxed">
                        {t('productsDocs.adverseEvents.contactText') || "For any questions or to report an Adverse Event, please contact our AE Reporting team:"}
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="text-slate-800 text-[16px] md:text-[18px]">
                            <span className="font-bold">{t('productsDocs.adverseEvents.phoneLabel') || "Phone:"}</span> 18008902590
                        </div>
                        
                        <div className="text-slate-800 text-[16px] md:text-[18px]">
                            <span className="font-bold">{t('productsDocs.adverseEvents.emailLabel') || "Email:"}</span>{' '}
                            <a href="mailto:feedback@techinvention.biz" className="hover:text-[#1955A6] hover:underline transition-colors break-all">
                                feedback@techinvention.biz
                            </a>
                        </div>
                        
                        <div className="text-slate-800 text-[16px] md:text-[18px] leading-relaxed">
                            <span className="font-bold">{t('productsDocs.adverseEvents.downloadLabel') || "Download Reporting Form:"}</span>{' '}
                            <a 
                                href={`${basePath}/Adverse-Event-AE-Report-Form.docx`} 
                                download="Adverse-Event-AE-Report-Form.docx" 
                                className="font-bold text-[#d83b6f] hover:underline"
                            >
                                {t('productsDocs.adverseEvents.downloadLink') || "AE Reporting form"}
                            </a>{' '}
                            {t('productsDocs.adverseEvents.downloadFollowUp') || "and send your response to the aforementioned email."}
                        </div>
                    </div>

                    <div className="text-slate-700 text-[15px] md:text-[16px] leading-relaxed space-y-1">
                        <p>{t('productsDocs.adverseEvents.privacy1') || "Your privacy is important to us."}</p>
                        <p>{t('productsDocs.adverseEvents.privacy2') || "All AE reports shall be handled with strict confidentiality."}</p>
                        <p>{t('productsDocs.adverseEvents.privacy3') || "Personal information is protected and used solely for safety monitoring purposes."}</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
