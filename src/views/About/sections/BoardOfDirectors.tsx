"use client";
import React, { useState } from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { motion, AnimatePresence } from 'framer-motion';

import syedImg from '../../../assets/images/Syed-Sir.jpg';
import nazneenImg from '../../../assets/images/Nazneen-maam.jpg';
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
        role: "Director-Corporate Affairs",
        image: nazneenImg,
        linkedin: "https://www.linkedin.com/in/nazneen-hamid",
        bio: `Ms. Nazneen Hamid ${dummyBio}`
    },
    {
        name: "Mrs. Monika Thanvi",
        role: "Independent Director",
        image: monicaImg,
        linkedin: "#",
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
    return (
        <section className="py-12 md:py-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                
                <ScrollReveal direction="up">
                    <div className="mb-10 md:mb-12">
                        <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left text-brand-primary">
                            <SplitTitle title="Leadership Shaping TechInvention" />
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {boardMembers.map((member, index) => (
                        <ScrollReveal direction="up" delay={index * 0.1} key={index}>
                            <div className="relative overflow-hidden group bg-gray-100 shadow-sm hover:shadow-xl transition-shadow aspect-[3/4] max-h-[420px] lg:max-h-[480px]">
                                
                                {/* Image & Title Overlay Container */}
                                <div className="relative w-full h-full">
                                    {/* Image */}
                                    <img 
                                        src={(member.image as any).src ? (member.image as any).src : member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
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

            </div>
        </section>
    );
};

export default BoardOfDirectors;
