import React from 'react';
import { Quote, User } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const basePath = process.env.BASE_PATH || '';

const testimonials = [
    {
        name: "Shahnawaz Shaikh",
        designation: "Admin and HR",
        experience: "9+ Years",
        quote: "Having joined TechInvention in an Admin and HR role 10 years ago, I have had the privilege of growing alongside the organisation and taking on greater responsibility, ownership and purpose over the years. It has been an inspiring and deeply fulfilling journey, and I am proud to have witnessed and contributed to TechInvention's remarkable growth and evolution.",
        image: "/Shahnawaz.jpg"
    },
    {
        name: "Aziz Mandsaurwala",
        designation: "Senior Manager - Global BD",
        experience: "6+ Years",
        quote: "Working at TechInvention means being part of projects that connect science, strategy and real-world healthcare impact. Every assignment brings learning and growth.",
        image: "/Aziz.jpeg"
    },
    {
        name: "Sarang Pathak",
        designation: "General Manager",
        experience: "9+ Years",
        quote: "Working at TechInvention has given me the opportunity to continuously learn, take on diverse responsibilities and contribute to meaningful work. The trust, exposure and support I have received here have played an important role in my professional growth and confidence.",
        image: "/Sarang-Pathak.jpeg"
    },
    {
        name: "Priya Dhawale",
        designation: "Deputy Manager - GBD",
        experience: "5+ Years",
        quote: "Completing over six years at TechInvention has been an incredibly rewarding journey. It has been inspiring to witness the company's transformation from a startup into a growing MSME with a strong global presence. Throughout this journey, I have been given the opportunity to work on diverse international business development and strategic consulting projects, collaborate with global stakeholders, and continuously expand my knowledge in the life sciences sector. The trust, support, and learning opportunities provided by the leadership and my colleagues have played a significant role in my professional growth. I look forward to being part of TechInvention's continued success and innovation.",
        image: "/Priya-photo.jpg"
    },
    {
        name: "Kulsum",
        designation: "",
        experience: "5+ Years",
        quote: "I’m really grateful that I got the opportunity to start my career here as a fresher. In these five years, I’ve learned so much and grown both personally and professionally. The friendly and supportive work culture has made this journey really special. I got the opportunity to work across different R&D departments, learn new techniques and technologies, and be part of various certifications and audits. Looking back, it feels like I’ve come a long way from where I started. I’m thankful to everyone who has supported, guided, and helped me grow throughout this journey.",
        image: "/kulsum.jpeg"
    }
];

export default function EmployeeVoices() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1955A6]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#5C7625]/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[40px] font-medium tracking-wide mb-2 leading-tight text-slate-900">
                            <SplitTitle title="Employee Voices" />
                        </h2>
                        <h3 className="text-[16px] md:text-[18px] font-medium text-slate-500">
                            Stories from the people growing with TechInvention.
                        </h3>
                    </ScrollReveal>
                </div>
            </div>

            {/* Continuous Marquee Slider with Pause on Hover */}
            <div className="relative w-full overflow-hidden py-4 group">
                <style>{`
                    @keyframes marqueeScroll {
                        0% { transform: translate3d(0, 0, 0); }
                        100% { transform: translate3d(-50%, 0, 0); }
                    }
                    .marquee-track {
                        display: flex;
                        width: max-content;
                        animation: marqueeScroll 45s linear infinite;
                        will-change: transform;
                    }
                    .group:hover .marquee-track {
                        animation-play-state: paused;
                    }
                `}</style>

                <div className="marquee-track gap-6 md:gap-8">
                    {/* Duplicate the array for a seamless infinite loop */}
                    {[...testimonials, ...testimonials].map((testimonial, idx) => (
                        <div 
                            key={idx} 
                            className="w-[290px] sm:w-[340px] md:w-[380px] bg-[#1955A6] rounded-2xl p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] flex flex-col relative shrink-0 transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <Quote className="absolute top-5 right-5 w-8 h-8 text-white/20 z-0" />
                            
                            {/* Profile Info Header */}
                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden flex items-center justify-center flex-shrink-0">
                                    {testimonial.image ? (
                                        <img 
                                            src={`${basePath}${testimonial.image}`} 
                                            alt={testimonial.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <User className="w-6 h-6 text-white/30" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-white mb-0.5">
                                        {testimonial.name}
                                    </h4>
                                    {testimonial.designation && (
                                        <p className="text-[13px] font-medium text-white/80 mb-1">
                                            {testimonial.designation}
                                        </p>
                                    )}
                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider">
                                        {testimonial.experience}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Quote Content with smaller, sleek font */}
                            <div className="relative z-10 flex-1">
                                <p className="text-[13px] md:text-[14px] leading-relaxed text-white/95 font-medium">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
