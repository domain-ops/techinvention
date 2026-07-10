import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const modules = [
    {
        title: "GMP Compliance",
        description: "Build a strong foundation in GMP principles, regulatory expectations, quality systems, and the culture of compliance required for manufacturing and testing operations.",
        keyFocus: [
            "WHO, US FDA & ICH Guidelines",
            "Good Documentation Practices (GDP)",
            "Personnel Hygiene & Safety",
            "Facility Design & Material/Personnel Flows",
            "Quality Culture & Compliance Mindset"
        ]
    },
    {
        title: "Quality Management Systems (QMS)",
        description: "Develop expertise in quality systems that ensure product consistency, regulatory compliance, and continuous improvement across the product lifecycle.",
        keyFocus: [
            "Deviation & Incident Management",
            "CAPA & Root Cause Investigations",
            "Change Control Systems",
            "Quality Risk Management (ICH Q9)",
            "OOS & OOT Investigations"
        ]
    },
    {
        title: "Analytical & Quality Control Techniques",
        description: "Gain exposure to analytical methodologies and quality control practices used in pharmaceutical, biotechnology, and vaccine testing laboratories.",
        keyFocus: [
            "HPLC & Chromatographic Techniques",
            "ELISA & Protein Quantification",
            "Endotoxin Testing (LAL)",
            "Molecular Characterization Methods",
            "Data Analysis & Result Interpretation"
        ]
    },
    {
        title: "Molecular Biology & Advanced Testing",
        description: "Understand modern molecular biology techniques used for product characterization, contamination monitoring, and quality assessment.",
        keyFocus: [
            "DNA Extraction & Purification",
            "PCR & Real-Time PCR",
            "Host Cell DNA Analysis",
            "Agarose Gel Electrophoresis",
            "Molecular Data Interpretation"
        ]
    },
    {
        title: "Microbiology & Sterility Assurance",
        description: "Learn critical microbiological practices that support contamination control and product safety in regulated manufacturing environments.",
        keyFocus: [
            "Sterility Testing",
            "Environmental Monitoring",
            "Bioburden Assessment",
            "Mycoplasma Detection",
            "Aseptic Techniques & Contamination Control"
        ]
    },
    {
        title: "Aseptic Processing & Cleanroom Operations",
        description: "Comprehensive understanding of cleanroom behavior, sterile manufacturing practices, and environmental control strategies.",
        keyFocus: [
            "Cleanroom Classifications",
            "Gowning Qualification & Validation",
            "Media Fill Simulations",
            "Environmental Monitoring Programs",
            "Microbial Control Strategies"
        ]
    },
    {
        title: "Validation, Qualification & Lifecycle Management",
        description: "Master the principles of qualification and validation required to demonstrate process consistency and regulatory compliance.",
        keyFocus: [
            "DQ, IQ, OQ & PQ Execution",
            "Process Validation Principles",
            "Cleaning Validation",
            "Computer System Validation (CSV)",
            "Equipment Lifecycle Management"
        ]
    },
    {
        title: "Data Integrity & Digital Compliance",
        description: "Ensure data reliability, traceability, and compliance through robust documentation and electronic record management practices.",
        keyFocus: [
            "ALCOA+ Principles",
            "Audit Trail Review",
            "Electronic Data Management",
            "BMR/BPR Documentation",
            "Data Governance & Compliance"
        ]
    },
    {
        title: "Technology Transfer & Scale-Up Strategies",
        description: "Understand the critical elements involved in successful transfer of processes from development to commercial manufacturing.",
        keyFocus: [
            "Technology Transfer Lifecycle",
            "Scale-Up Risk Assessment",
            "Process Capability Studies",
            "Analytical Method Transfer",
            "Cross-Functional Coordination"
        ]
    },
    {
        title: "Regulatory Intelligence & Inspection Readiness",
        description: "Prepare for audits and inspections through an understanding of global regulations and regulatory expectations.",
        keyFocus: [
            "WHO, EMA & US FDA Expectations",
            "Audit & Inspection Preparedness",
            "Regulatory Documentation",
            "Quality Metrics & Trending",
            "Regulatory Compliance Strategies"
        ]
    },
    {
        title: "Industry Readiness & Professional Development",
        description: "Bridge the gap between academic learning and industrial practice through real-world applications and quality-driven problem solving.",
        keyFocus: [
            "GMP Simulations & Case Studies",
            "Scientific Literature Review",
            "Technical Presentations",
            "Laboratory Investigation Exercises",
            "Career & Workforce Readiness"
        ]
    },
    {
        title: "Laboratory Excellence & Scientific Problem Solving",
        description: "Develop a systematic approach to laboratory operations, troubleshooting, and scientific decision-making to improve analytical reliability and operational efficiency.",
        keyFocus: [
            "Laboratory Best Practices",
            "Scientific Problem Solving",
            "Troubleshooting Analytical Methods",
            "Investigation of Laboratory Errors",
            "Critical Thinking & Decision Making"
        ]
    },
    {
        title: "Vaccine Manufacturing & Process Understanding",
        description: "Gain insights into pharmaceutical and vaccine manufacturing processes, critical quality attributes, and process controls that ensure product safety, efficacy, and consistency.",
        keyFocus: [
            "Drug Product & Vaccine Manufacturing Overview",
            "Critical Process Parameters (CPPs)",
            "Critical Quality Attributes (CQAs)",
            "Process Monitoring & Control",
            "Manufacturing Deviations & Investigations"
        ]
    },
    {
        title: "Scientific Communication & Documentation Excellence",
        description: "Strengthen technical communication and documentation skills essential for regulated environments and cross-functional collaboration.",
        keyFocus: [
            "Technical Report Writing",
            "SOP Preparation & Review",
            "Scientific Presentation Skills",
            "Documentation Review Practices",
            "Regulatory Writing Fundamentals"
        ]
    },
    {
        title: "Emerging Technologies in Biopharmaceutical Quality Control",
        description: "Explore modern technologies and analytical advancements shaping the future of pharmaceutical and vaccine quality assessment.",
        keyFocus: [
            "Advanced Analytical Techniques",
            "Automation in QC Laboratories",
            "Digital Quality Systems",
            "Laboratory Informatics (LIMS)",
            "Trends in Biopharmaceutical Testing"
        ]
    }
];

export default function TrainingModules() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="training-modules" className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            {/* Background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-left">
                {/* Header */}
                <div className="mb-16">
                    <ScrollReveal direction="up">
                        <span className="text-[#1955A6] font-bold tracking-[0.4em] text-[11px] mb-2 block uppercase">
                            Curriculum
                        </span>
                        <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-slate-900 mb-4 leading-tight">
                            <SplitTitle title="Training Modules" />
                        </h2>
                        <p className="text-slate-600 font-medium text-[16px] md:text-[18px] tracking-wide max-w-2xl">
                            Explore our comprehensive training curriculum designed for industry readiness.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Accordions */}
                <div className="space-y-4">
                    {modules.map((module, index) => (
                        <div 
                            key={index} 
                            className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                                openIndex === index 
                                    ? "border-brand-primary/20 bg-brand-primary/5 shadow-md" 
                                    : "border-slate-200 bg-white hover:border-brand-primary/30"
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-[17px] md:text-[19px] font-bold transition-colors pr-4 ${
                                    openIndex === index ? "text-brand-primary" : "text-slate-900"
                                }`}>
                                    {module.title}
                                </span>
                                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 ${
                                    openIndex === index ? "bg-brand-primary text-white rotate-180" : "bg-slate-50 text-slate-400"
                                }`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-left">
                                            <p className="text-slate-600 text-[15px] md:text-[16px] font-medium leading-relaxed mb-6">
                                                {module.description}
                                            </p>

                                            <div>
                                                <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-3">
                                                    Key Focus Areas
                                                </h4>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {module.keyFocus.map((focus, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                                                            <span className="text-slate-600 font-medium text-sm">
                                                                {focus}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
