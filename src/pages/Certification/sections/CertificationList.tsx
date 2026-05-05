import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import TextReveal from '../../../components/Common/TextReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

// --- IMAGE REGISTRY ---
// Change image paths here to update them throughout the component
import bradstreet from '../../../assets/images/certifications/Bradstreet.png';
import cert2 from '../../../assets/images/certifications/Cert_2-702x1024.jpeg';
import cert3 from '../../../assets/images/certifications/Cert_3-713x1024.jpeg';
import cert4 from '../../../assets/images/certifications/Cert_4.png';
import cert5 from '../../../assets/images/certifications/Cert_5.jpg';
import cert6 from '../../../assets/images/certifications/Cert_6.jpg';
import cert7 from '../../../assets/images/certifications/Cert_7.jpg';
import cert8 from '../../../assets/images/certifications/Cert_8.png';
import cert9 from '../../../assets/images/certifications/Cert_9.png';
import iso from '../../../assets/images/certifications/ISO-655x1024.jpg';

/**
 * Configuration for certifications.
 * Each 'id' corresponds exactly to the key in our translation files.
 * This makes it extremely easy to reorder or swap images.
 */
const CERT_CONFIG = [
    {
        id: 'dnb',
        image: bradstreet,
        name: 'Rated as a Lowest Risk SME by Dun & Bradstreet',
        year: '2025',
        info: 'TechInvention Lifecare Ltd. has achieved a score of 81, placing us in the Lowest Risk category as per Dun & Bradstreet’s SME Risk Score reflecting our strong financial health, governance, and operational performance.'
    },
    {
        id: 'iso13485',
        image: cert2,
        name: 'ISO 13485:2016 Certificate',
        year: '2025',
        info: 'We are certified to ISO 13485:2016 the international standard for quality management systems specific to the medical device industry. This certification reflects our commitment to delivering safe, high-quality, and compliant medical products, reinforcing our dedication to excellence and adherence to global standards.'
    },
    {
        id: 'esg',
        image: cert3,
        name: 'ESG Certificate',
        year: '2024',
        info: 'We have received the Environmental, Social, and Governance (ESG) Certification from Dun & Bradstreet, as a recognition of our commitment to sustainability, social responsibility, and ethical governance. This milestone highlights our efforts to promote health equity through affordable healthcare solutions, adopt sustainable practices, and uphold transparency and compliance.'
    },
    {
        id: 'duns',
        image: cert4,
        name: 'DUNS Certificate',
        year: '2024',
        info: 'We have attained the D-U-N-S® Certification from Dun & Bradstreet. This certification enhances our credibility, fosters trust, and streamlines global partnerships, reinforcing our commitment to transparency and excellence in delivering innovative healthcare solutions.'
    },
    {
        id: 'dsir',
        image: cert5,
        name: 'DSIR Certificate of Recognition',
        year: '2024',
        info: 'Our in-house R&D Unit has been recognized by the Department of Scientific and Industrial Research (DSIR), Government of India. This certification is crucial for fostering innovation, enabling access to government incentives, and strengthening our research capabilities to develop affordable vaccines, biotherapeutics, and diagnostics.'
    },
    {
        id: 'iso9001',
        image: iso,
        name: 'ISO 9001:2015 Certificate',
        year: '2023',
        info: 'We have attained the ISO 9001:2015 certification, the international standard for quality management systems. The certification is a testament to an organization’s dedication to quality, efficiency, and customer satisfaction, providing a competitive edge in the marketplace.'
    },
    {
        id: 'gptw',
        image: cert6,
        name: 'GPTW Certificates 2022-2024',
        year: '2022 - 2024',
        info: 'We have been recognised as a Great Place to Work® for two consecutive years, 2021-2022 and 2022-2023. The certification is a globally recognized benchmark for identifying and recognizing outstanding employee experiences. Achieving this distinction for two consecutive years testifies to our positive, and healthy environment where employees feel valued and empowered in our inclusive workplace culture.'
    },
    {
        id: 'tax80iac',
        image: cert7,
        name: '80-IAC Certificate',
        year: '2022',
        info: 'We have been granted the 80-IAC Tax Exemption Certificate from the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India. This certification is given to startups meeting a number of criterias of which one of focus is innovative business models. This exemption enables us to reinvest savings into research and development.'
    },
    {
        id: 'helloTomorrow',
        image: cert8,
        name: 'DeepTech Pioneer',
        year: '2022',
        info: 'Recognised as a Deep Tech Pioneer by Hello Tomorrow, a leading global organization dedicated to advancing deep technology solutions underscores our work in leveraging cutting-edge science and technology to create impactful healthcare solutions.'
    },
    {
        id: 'innovative100',
        image: cert9,
        name: 'Innovation Council Innovative SME',
        year: '2021',
        info: 'We were featured among the Innovative 100 SMEs by the Innovation Council, Geneva during the World Intellectual Property (IP) Day celebrations in April 2021 for our work on novel products and services.'
    }
];

const CertificationList = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-left mb-12 md:mb-16">
                    <ScrollReveal direction="up">
                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                            {t('certifications.tag')}
                        </span>
                        <div className="mb-4">
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                <SplitTitle title={t('certifications.title').replace('{certifications}', t('certifications.certifications'))} />
                            </h2>
                        </div>
                        <p className="text-[#475569] text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {CERT_CONFIG.map((cert, index) => {
                        return (
                            <ScrollReveal
                                key={cert.id}
                                direction="up"
                                delay={0.05 * index}
                            >
                                <div className="group relative w-full h-[360px] [perspective:1000px] cursor-pointer">
                                    <div className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                        
                                        {/* Front of Card (Image) */}
                                        <div className="absolute inset-0 w-full h-full bg-white border border-slate-200 shadow-sm p-8 flex items-center justify-center [backface-visibility:hidden]">
                                            <img
                                                src={cert.image}
                                                alt={cert.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Back of Card (Text) */}
                                        <div className="absolute inset-0 w-full h-full bg-brand-primary text-white p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto">
                                            <span className="bg-white/10 text-white px-4 py-1 rounded-full font-medium tracking-widest text-[10px] mb-4">
                                                {cert.year}
                                            </span>
                                            <h3 className="text-[18px] md:text-[20px] font-medium mb-4 leading-tight text-white">
                                                {cert.name}
                                            </h3>
                                            <p className="text-[13px] md:text-[14px] text-white/90 leading-relaxed font-medium">
                                                {cert.info}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CertificationList;
