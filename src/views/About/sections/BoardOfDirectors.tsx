import React, { useState, useRef } from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const syedImg = "/techinvention/Syed-Sir.png";
const nazneenImg = "/techinvention/mam-new-img.jpeg";
import monicaImg from '../../../assets/images/Monica-Thanvi.png';
import gopalImg from '../../../assets/images/Gopal-Damisetti.jpg';

const dummyBio = "is a seasoned executive experienced in developing patient-focused commercial strategies encompassing sales, marketing and market access. They drive and execute global commercialization strategies to leverage full potential as a vertically integrated organization. With more than 20 years of experience in the healthcare industry, including 15 years of commercial experience ranging from early-stage biotechnology to full-scale pharmaceutical operations, they have a proven track record of leadership.";

const boardMembers = [
    {
        name: "Mr. Syed Ahmed",
        role: "Director & CEO",
        image: syedImg,
        linkedin: "https://www.linkedin.com/in/ssyedahmed",
        bio: `Mr. Syed Ahmed ${dummyBio}`
    },
    {
        name: "Ms. Nazneen Hamid",
        role: "Co-Founder & Director",
        image: nazneenImg,
        linkedin: "https://www.linkedin.com/in/nazneen-hamid",
        bio: `Ms. Nazneen Hamid ${dummyBio}`,
        objectPosition: "center 60%",
        imageClassName: "scale-[1.3] origin-top translate-y-[-6%] group-hover:scale-[1.35]"
    },
    {
        name: "Mrs. Monika Thanvi",
        role: "Independent Director",
        image: monicaImg,
        linkedin: "https://www.linkedin.com/in/cs-monika-thanvi-a28aa4140?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        bio: `Mrs. Monika Thanvi ${dummyBio}`
    },
    {
        name: "Mr. Gopal Damisetti",
        role: "Independent Director",
        image: gopalImg,
        linkedin: "https://www.linkedin.com/in/gopal-damisetti-2bb8367",
        bio: `Mr. Gopal Damisetti ${dummyBio}`
    }
];

const BoardOfDirectors = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.82;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="pt-12 pb-8 md:pt-20 md:pb-12 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                
                <ScrollReveal direction="up">
                    <div className="mb-10 md:mb-12">
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left text-brand-primary">
                            <SplitTitle title="Leadership Shaping TechInvention" />
                        </h2>
                    </div>
                </ScrollReveal>

                <div 
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-6 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {boardMembers.map((member, index) => (
                        <ScrollReveal direction="up" delay={index * 0.1} key={index} className="min-w-[80vw] sm:min-w-[320px] md:min-w-0 snap-center">
                            <div className="relative overflow-hidden group bg-gray-100 shadow-sm hover:shadow-xl transition-shadow aspect-[3/4] w-full max-h-[420px] lg:max-h-[480px]">
                                
                                {/* Image & Title Overlay Container */}
                                <div className="relative w-full h-full">
                                    {/* Image */}
                                    <img 
                                        src={(member.image as any).src ? (member.image as any).src : member.image} 
                                        alt={member.name}
                                        style={{ objectPosition: (member as any).objectPosition || 'center top' }}
                                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                                            (member as any).imageClassName || "object-top group-hover:scale-105"
                                        }`}
                                    />

                                    {/* Dark Gradient Overlay at the bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-100" />

                                    {/* Text Content */}
                                    <div className="absolute bottom-6 left-6 right-6 flex flex-col z-10 text-white">
                                        <h3 className="text-[18px] lg:text-[20px] font-bold mb-1 tracking-wide text-white whitespace-nowrap truncate">{member.name}</h3>
                                        <p className="text-[13px] font-medium mb-4 tracking-wide text-gray-200">{member.role}</p>
                                        
                                        {/* LinkedIn Icon */}
                                        {member.linkedin !== "#" && (
                                            <a 
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-1 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
                                                aria-label={`${member.name} LinkedIn`}
                                            >
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Mobile Slider Controls */}
                <div className="flex md:hidden justify-center items-center gap-4 mt-6">
                    <button 
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-slate-600 active:scale-95 transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-slate-600 active:scale-95 transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BoardOfDirectors;
