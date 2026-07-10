import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Microscope, FlaskConical, Box, Droplets, Atom, Sun, Check } from 'lucide-react';

const features = [
    {
        icon: Sprout,
        color: 'bg-[#1955A6]',
        points: ['Compact', 'Low Carbon Footprint', 'Cost-Optimized']
    },
    {
        icon: Microscope,
        color: 'bg-[#7EAB43]', 
        points: ['BSL-2 Unit', 'Class C Cleanroom']
    },
    {
        icon: FlaskConical,
        color: 'bg-[#1955A6]',
        points: ['5L & 20L Fermentors', 'Advanced Equipment']
    },
    {
        icon: Box,
        color: 'bg-[#7EAB43]',
        points: ['Unidirectional Material Flow', 'GMP-Compliant']
    },
    {
        icon: Droplets,
        color: 'bg-[#1955A6]',
        points: ['Zero-Liquid Discharge', 'Sustainability-Focused']
    },
    {
        icon: Atom,
        color: 'bg-[#7EAB43]',
        points: ['HVAC-70% Energy Recovery', 'Double HEPA Exhaust Filtration']
    },
    {
        icon: Sun,
        color: 'bg-[#1955A6]',
        points: ['IoT-Based Predictive Maintenance', 'Smart Energy']
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function FacilityFeatures() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1300px] mx-auto px-6">
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16"
                >
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div 
                                key={idx} 
                                variants={itemVariants as any}
                                className="flex flex-col items-start"
                            >
                                {/* Circular Icon Container */}
                                <div className={`w-28 h-28 rounded-full ${feature.color} flex items-center justify-center shadow-lg mb-8 text-white relative group`}>
                                    {/* subtle pulsing effect */}
                                    <div className={`absolute inset-0 rounded-full ${feature.color} opacity-30 group-hover:animate-ping`} />
                                    <Icon className="w-12 h-12 relative z-10 stroke-[1.5]" />
                                </div>
                                
                                {/* Bullet Points */}
                                <ul className="space-y-3 w-full">
                                    {feature.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-3 text-slate-700 font-medium">
                                            <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5 stroke-[3]" />
                                            <span className="text-[15px] leading-snug">{point}</span>
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
