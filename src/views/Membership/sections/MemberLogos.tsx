import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import TextReveal from '../../../components/Common/TextReveal';

// Import member logos
import member1 from '../../../assets/images/members/member1.png';
import member2 from '../../../assets/images/members/member2.png';
import member3 from '../../../assets/images/members/member3.png';

const MemberLogos = () => {
    const { t } = useLanguage();

    const members = [
        { name: "BioPharma Alpha", logo: member1 },
        { name: "Genomic Nexus", logo: member2 },
        { name: "Global Health Initiative", logo: member3 },
        { name: "Nexus Therapeutics", logo: member1 },
        { name: "Biotech Synergy", logo: member2 },
        { name: "Health Equity Hub", logo: member3 },
        { name: "Innovation Labs", logo: member1 },
        { name: "Science First", logo: member2 },
        { name: "Global Med", logo: member3 },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="mb-4">
                        
                    </div>
                    <div className="mb-6">
                        <TextReveal
                            text={t('membership.membersTitle')}
                            className="text-[36px] lg:text-6xl font-medium tracking-tight text-brand-content leading-tight tracking-tighter  justify-center text-center"
                        />
                    </div>
                    <div className="mx-auto max-w-3xl">
                        <TextReveal
                            text={t('membership.desc')}
                            className="text-black text-lg leading-relaxed justify-center text-center"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    {members.map((member, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={0.1 * (index % 5)}
                            className="w-full"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-md p-4 flex items-center justify-center border border-gray-200 hover:border-brand-primary/20 aspect-square"
                            >
                                <img loading="lazy"
                                    src={member.logo}
                                    alt={member.name}
                                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                                />
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MemberLogos;
