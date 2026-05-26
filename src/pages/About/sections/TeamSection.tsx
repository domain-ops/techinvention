import React, { useRef } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import member1 from '../../../assets/images/team/member_1.png';
import member2 from '../../../assets/images/team/member_2.png';
import member3 from '../../../assets/images/team/member_3.png';
import member4 from '../../../assets/images/team/member_4.png';

const TeamSection = () => {
    const { t } = useLanguage();
    const sliderRef = useRef<HTMLDivElement>(null);

    const teamMembersData = t('about.leadership.team.members') || [];
    const memberImages = [member1, member2, member3, member4];

    const slide = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 350 : 280;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 md:py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="text-left flex-1">
                    <ScrollReveal direction="up">
                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                            {t('about.leadership.team.title')}
                        </span>
                        <div className="mb-4">
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                <SplitTitle title={t('about.leadership.team.tagline')} />
                            </h2>
                        </div>
                        <p className="text-[#475569] text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed text-left">
                            {t('about.leadership.team.cta')}
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Slider Layout (Mobile) / Grid Layout (Desktop) */}
            <div className="w-full md:max-w-7xl md:mx-auto md:px-6">
                <div 
                    ref={sliderRef}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible gap-6 md:gap-x-8 md:gap-y-16 pb-12 md:pb-0 snap-x snap-mandatory md:snap-none px-[20vw] md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style>{`
                        .flex::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {teamMembersData.map((member: any, idx: number) => (
                        <div key={idx} className="min-w-[60vw] md:min-w-0 snap-center md:snap-align-none">
                            <ScrollReveal direction="up" delay={idx * 0.1}>
                                <MemberCard member={member} image={memberImages[idx % memberImages.length]} />
                            </ScrollReveal>
                        </div>
                    ))}
                    {/* Add an empty div for padding-right equivalent on mobile */}
                    <div className="min-w-[12px] md:hidden flex-shrink-0" aria-hidden="true" />
                </div>
            </div>

            {/* Slider Controls (CTAs) - Bottom (Mobile Only) */}
            <div className="max-w-7xl mx-auto px-6 mt-4 md:hidden">
                <ScrollReveal direction="up">
                    <div className="flex items-center justify-center gap-4">
                        <button 
                            onClick={() => slide('left')}
                            className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 group bg-white"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-slate-700 group-hover:text-white" />
                        </button>
                        <button 
                            onClick={() => slide('right')}
                            className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 group bg-white"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-slate-700 group-hover:text-white" />
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

const MemberCard = ({ member, image }: { member: any, image: string }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 bg-slate-200">
            <img
                src={image}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                loading="lazy"
            />
        </div>
        <h3 className="text-[17px] md:text-[19px] font-medium text-brand-content mb-2 tracking-tight">
            {member.name}
        </h3>
        <p className="text-[12px] md:text-[13px] font-bold text-black uppercase tracking-wider">
            {member.role}
        </p>
    </div>
);

export default TeamSection;
