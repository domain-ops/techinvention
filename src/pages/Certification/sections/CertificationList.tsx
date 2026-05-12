import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

// --- IMAGE REGISTRY ---
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

const CertificationCard = ({ cert }: { cert: typeof CERT_CONFIG[0] }) => (
    <div className="relative w-full rounded-[2rem] overflow-hidden group transition-all duration-700 hover:-translate-y-2 cursor-pointer aspect-[3/4] md:aspect-[4/5] lg:h-[500px]">
        {/* Image Container */}
        <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <img 
                src={cert.image} 
                alt={cert.name}
                className="max-w-full max-h-full object-contain drop-shadow-2xl mix-blend-multiply"
            />
        </div>

        {/* Hover Reveal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0">
            <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="h-[2px] w-8 bg-white/80"></div>
                <span className="text-white font-mono text-sm tracking-widest font-bold">
                    {cert.year}
                </span>
            </div>
            <h3 className="text-2xl font-light text-white mb-3 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                {cert.name}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-4 md:line-clamp-6">
                {cert.info}
            </p>
        </div>
    </div>
);

const CertificationList = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Transforms for the 3 columns
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-10%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

    // Split array into 3 columns
    const col1 = CERT_CONFIG.filter((_, i) => i % 3 === 0);
    const col2 = CERT_CONFIG.filter((_, i) => i % 3 === 1);
    const col3 = CERT_CONFIG.filter((_, i) => i % 3 === 2);

    return (
        <section ref={containerRef} className="bg-[#fafafa] py-32 relative selection:bg-brand-primary selection:text-white overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-32 max-w-4xl mx-auto">
                    <ScrollReveal direction="up">
                        <span className="text-brand-primary font-mono tracking-[0.2em] text-sm mb-4 block uppercase">
                            {t('certifications.tag')}
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight mb-8">
                            <SplitTitle title={t('certifications.title').replace('{certifications}', t('certifications.certifications'))} />
                        </h2>
                        <p className="text-gray-500 text-xl font-light leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Parallax Masonry Grid (Desktop) */}
                <div className="hidden lg:grid grid-cols-3 gap-8 group/grid relative pb-32">
                    <motion.div style={{ y: y1 }} className="flex flex-col gap-8 pt-12">
                        {col1.map((cert) => <CertificationCard key={cert.id} cert={cert} />)}
                    </motion.div>
                    
                    <motion.div style={{ y: y2 }} className="flex flex-col gap-8 -mt-24">
                        {col2.map((cert) => <CertificationCard key={cert.id} cert={cert} />)}
                    </motion.div>
                    
                    <motion.div style={{ y: y3 }} className="flex flex-col gap-8 pt-32">
                        {col3.map((cert) => <CertificationCard key={cert.id} cert={cert} />)}
                    </motion.div>
                </div>

                {/* Stacked Grid (Mobile/Tablet) */}
                <div className="lg:hidden flex flex-col gap-8">
                    {CERT_CONFIG.map((cert) => (
                        <ScrollReveal key={cert.id} direction="up" delay={0.1}>
                            <CertificationCard cert={cert} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationList;

