"use client";
import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const advisoryMembers = [
    {
        name: "Dr. Jane Doe",
        role: "Chief Scientific Advisor",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
        linkedin: "#"
    },
    {
        name: "Dr. John Smith",
        role: "Head of Vaccine Research",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
        linkedin: "#"
    },
    {
        name: "Dr. Sarah Lee",
        role: "Clinical Development Lead",
        image: "https://images.unsplash.com/photo-1594824432258-2936270b3b4b?q=80&w=800&auto=format&fit=crop",
        linkedin: "#"
    },
    {
        name: "Dr. Michael Chen",
        role: "Bioprocessing Expert",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
        linkedin: "#"
    }
];

const ScientificAdvisoryBoard = () => {
    return (
        <section className="py-12 md:py-20 bg-slate-50 font-sans border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                
                <ScrollReveal direction="up">
                    <div className="mb-10 md:mb-12 max-w-4xl">
                        <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal text-left text-brand-primary mb-4">
                            <SplitTitle title="Scientific Advisory Board" />
                        </h2>
                        <p className="text-[#475569] text-[16px] md:text-[18px] font-medium leading-relaxed text-left">
                            Bringing together eminent scientific leaders whose expertise strengthens our vaccine research, development and innovation agenda.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advisoryMembers.map((member, index) => (
                        <ScrollReveal direction="up" delay={index * 0.1} key={index}>
                            <div className="relative overflow-hidden group bg-gray-100 shadow-sm hover:shadow-xl transition-shadow aspect-[3/4] max-h-[420px] lg:max-h-[480px]">
                                
                                {/* Image & Title Overlay Container */}
                                <div className="relative w-full h-full">
                                    {/* Image */}
                                    <img 
                                        src={member.image} 
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

export default ScientificAdvisoryBoard;
