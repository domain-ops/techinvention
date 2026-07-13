import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Microscope, FlaskConical, Box, Droplets, Atom, Sun, Check } from 'lucide-react';

const features = [
    {
        title: "Eco Footprint",
        icon: Sprout,
        cardBg: 'bg-[#1955A6]', // Brand Blue
        iconColor: 'text-[#1955A6]',
        shadowColor: 'hover:shadow-blue-900/20',
        points: ['Compact Design', 'Low Carbon Footprint', 'Cost-Optimized Operations']
    },
    {
        title: "Containment & Safety",
        icon: Microscope,
        cardBg: 'bg-[#7EAB43]', // Brand Green
        iconColor: 'text-[#7EAB43]',
        shadowColor: 'hover:shadow-green-950/20',
        points: ['BSL-2 Unit Compliance', 'Class C Cleanroom Standards']
    },
    {
        title: "Advanced Bioprocessing",
        icon: FlaskConical,
        cardBg: 'bg-[#1955A6]', // Brand Blue
        iconColor: 'text-[#1955A6]',
        shadowColor: 'hover:shadow-blue-900/20',
        points: ['5L & 20L Fermentors', 'State-of-the-Art Equipment']
    },
    {
        title: "Operational Integrity",
        icon: Box,
        cardBg: 'bg-[#7EAB43]', // Brand Green
        iconColor: 'text-[#7EAB43]',
        shadowColor: 'hover:shadow-green-950/20',
        points: ['Unidirectional Material Flow', 'GMP-Compliant Workflows']
    },
    {
        title: "Sustainable Utilities",
        icon: Droplets,
        cardBg: 'bg-[#1955A6]', // Brand Blue
        iconColor: 'text-[#1955A6]',
        shadowColor: 'hover:shadow-blue-900/20',
        points: ['Zero-Liquid Discharge', 'Sustainability-Focused Utilities']
    },
    {
        title: "Air Management",
        icon: Atom,
        cardBg: 'bg-[#7EAB43]', // Brand Green
        iconColor: 'text-[#7EAB43]',
        shadowColor: 'hover:shadow-green-950/20',
        points: ['HVAC 70% Energy Recovery', 'Double HEPA Exhaust Filtration']
    },
    {
        title: "Smart Infrastructure",
        icon: Sun,
        cardBg: 'bg-[#1955A6]', // Brand Blue
        iconColor: 'text-[#1955A6]',
        shadowColor: 'hover:shadow-blue-900/20',
        points: ['IoT Predictive Maintenance', 'Smart Energy Management']
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15
        }
    }
};

export default function FacilityFeatures() {
    return (
        <section className="py-20 bg-slate-50/50 border-y border-slate-100">
            <div className="max-w-[1300px] mx-auto px-6">
                
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 className="text-[30px] md:text-[36px] font-medium tracking-wide">
                        <span className="text-[#1955A6]">Features</span>
                    </h2>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div 
                                key={idx} 
                                variants={itemVariants as any}
                                className={`group flex flex-col items-start ${feature.cardBg} p-8 rounded-2xl shadow-md ${feature.shadowColor} hover:-translate-y-1.5 transition-all duration-500 ease-out relative overflow-hidden`}
                            >
                                {/* Soft glow overlay on hover */}
                                <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Icon container: Solid White circle, colored icon */}
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                                    <Icon className={`w-6 h-6 stroke-[2] ${feature.iconColor}`} />
                                </div>
                                
                                {/* Title (White) */}
                                <h3 className="text-[18px] font-bold text-white mb-4 relative z-10">
                                    {feature.title}
                                </h3>

                                {/* Bullet Points (White / Semi-transparent white checkmarks) */}
                                <ul className="space-y-3.5 w-full relative z-10">
                                    {feature.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-2.5 text-white/90 font-medium">
                                            <Check className="w-4 h-4 text-white shrink-0 mt-1 stroke-[3]" />
                                            <span className="text-[14px] leading-snug">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
