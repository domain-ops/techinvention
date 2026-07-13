import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Search,
    Lightbulb,
    Settings,
    Rocket,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react';

import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const STEPS = [
    {
        number: '01',
        icon: Search,
        title: 'Lorem Ipsum Dolor Sit',
        shortTitle: 'Lorem',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        deliverables: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Sed do eiusmod tempor',
            'Incididunt ut labore et dolore',
        ],
        color: '#1955A6',
    },
    {
        number: '02',
        icon: Lightbulb,
        title: 'Consectetur Adipiscing Elit',
        shortTitle: 'Adipiscing',
        desc: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
        deliverables: [
            'Quis nostrud exercitation',
            'Ullamco laboris nisi ut aliquip',
            'Duis aute irure dolor',
            'Reprehenderit in voluptate',
        ],
        color: '#5C7625',
    },
    {
        number: '03',
        icon: Settings,
        title: 'Sed Do Eiusmod Tempor',
        shortTitle: 'Eiusmod',
        desc: 'Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
        deliverables: [
            'Velit esse cillum dolore',
            'Fugiat nulla pariatur',
            'Excepteur sint occaecat',
            'Cupidatat non proident',
        ],
        color: '#1955A6',
    },
    {
        number: '04',
        icon: Rocket,
        title: 'Incididunt Ut Labore Et',
        shortTitle: 'Labore',
        desc: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
        deliverables: [
            'Sunt in culpa qui officia',
            'Deserunt mollit anim id est',
            'Perspiciatis unde omnis',
            'Natus error sit voluptatem',
        ],
        color: '#5C7625',
    },
];

const MethodologySection = () => {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, { once: true, margin: '-100px' });

    const activeData = STEPS[activeStep];
    const Icon = activeData.icon;

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden relative font-sans" ref={sectionRef}>
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #1955A6 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <ScrollReveal direction="up">
                        
                        <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6">
                            <SplitTitle title="A Rigorous Step-Wise Approach" />
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Step Navigator */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-3"
                    >
                        {STEPS.map((step, index) => {
                            const StepIcon = step.icon;
                            const isActive = activeStep === index;
                            return (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`relative w-full text-left rounded-[2rem] border-2 overflow-hidden transition-all duration-400 ${
                                        isActive
                                            ? 'border-transparent shadow-xl'
                                            : 'border-slate-100 hover:border-slate-200 bg-white hover:shadow-md'
                                    }`}
                                    whileHover={{ x: isActive ? 0 : 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isActive && (
                                        <div
                                            className="absolute inset-0"
                                            style={{ background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)` }}
                                        />
                                    )}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                                        style={{
                                            backgroundColor: isActive ? step.color : 'transparent',
                                        }}
                                    />
                                    <div className="relative flex items-center gap-5 p-5 pl-6">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                            style={{
                                                backgroundColor: isActive ? `${step.color}20` : '#F8F9FA',
                                                color: isActive ? step.color : '#94A3B8',
                                            }}
                                        >
                                            <StepIcon className="w-5 h-5" strokeWidth={1.75} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-1">
                                                <span
                                                    className="text-[10px] font-bold tracking-[0.3em]"
                                                    style={{ color: isActive ? step.color : '#CBD5E1' }}
                                                >
                                                    PHASE {step.number}
                                                </span>
                                            </div>
                                            <h3
                                                className="font-bold text-[16px] leading-snug transition-colors duration-300"
                                                style={{ color: isActive ? '#0F172A' : '#64748B' }}
                                            >
                                                {step.title}
                                            </h3>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isActive ? 90 : 0, opacity: isActive ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowRight
                                                className="w-4 h-4 flex-shrink-0"
                                                style={{ color: step.color }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.button>
                            );
                         })}
 
                         {/* Progress Indicator */}
                         <div className="flex items-center gap-2 mt-4 px-2">
                             {STEPS.map((step, i) => (
                                 <div
                                     key={i}
                                     className="flex-1 h-1 rounded-full transition-all duration-500"
                                     style={{
                                         backgroundColor: i <= activeStep ? STEPS[activeStep].color : '#E2E8F0',
                                     }}
                                 />
                             ))}
                         </div>
                         <p className="text-slate-400 text-[12px] font-medium px-2">
                             Phase {activeStep + 1} of {STEPS.length}
                         </p>
                     </motion.div>
 
                     {/* Right: Detail Panel */}
                     <motion.div
                         initial={{ opacity: 0, x: 40 }}
                         animate={inView ? { opacity: 1, x: 0 } : {}}
                         transition={{ duration: 0.8, delay: 0.3 }}
                         className="lg:sticky lg:top-32"
                     >
                         <AnimatePresence mode="wait">
                             <motion.div
                                 key={activeStep}
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 exit={{ opacity: 0, y: -20 }}
                                 transition={{ duration: 0.4, ease: 'easeOut' }}
                                 className="rounded-[2rem] border border-slate-200/60 bg-white overflow-hidden shadow-xl"
                             >
                                 {/* Card Header */}
                                 <div
                                     className="p-8 pb-6 relative overflow-hidden"
                                     style={{
                                         background: `linear-gradient(135deg, ${activeData.color}12, ${activeData.color}04)`,
                                     }}
                                 >
                                     <div
                                         className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl"
                                         style={{ backgroundColor: `${activeData.color}15` }}
                                     />
                                     <div className="relative flex items-start gap-5">
                                         <div
                                             className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                             style={{ backgroundColor: `${activeData.color}20` }}
                                         >
                                             <Icon
                                                 className="w-7 h-7"
                                                 strokeWidth={1.75}
                                                 style={{ color: activeData.color }}
                                             />
                                         </div>
                                         <div>
                                             <span
                                                 className="text-[10px] font-bold tracking-[0.3em] uppercase block mb-1"
                                                 style={{ color: activeData.color }}
                                             >
                                                 Phase {activeData.number}
                                             </span>
                                             <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                                                 {activeData.title}
                                             </h3>
                                         </div>
                                     </div>
                                 </div>
 
                                 <div className="p-8 pt-6">
                                     <p className="text-black text-[16px] leading-relaxed font-medium mb-8">
                                         {activeData.desc}
                                     </p>
 
                                     {/* Deliverables */}
                                     <div>
                                         <h4
                                             className="text-[11px] font-bold tracking-[0.3em] uppercase mb-5"
                                             style={{ color: activeData.color }}
                                         >
                                             Key Deliverables
                                         </h4>
                                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                             {activeData.deliverables.map((item, i) => (
                                                 <motion.li
                                                     key={i}
                                                     initial={{ opacity: 0, x: -10 }}
                                                     animate={{ opacity: 1, x: 0 }}
                                                     transition={{ delay: i * 0.07, duration: 0.4 }}
                                                     className="flex items-start gap-3 p-3 rounded-xl"
                                                     style={{ backgroundColor: `${activeData.color}06` }}
                                                 >
                                                     <CheckCircle2
                                                         className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                         style={{ color: activeData.color }}
                                                     />
                                                     <span className="text-slate-700 text-[14px] font-semibold leading-snug">
                                                         {item}
                                                     </span>
                                                 </motion.li>
                                             ))}
                                         </ul>
                                     </div>
                                 </div>
                             </motion.div>
                         </AnimatePresence>
                     </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;
