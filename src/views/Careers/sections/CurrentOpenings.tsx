import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clipboard, ChevronRight, Briefcase, ChevronDown } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

interface Job {
    id: string;
    title: string;
    category: string;
    location: string;
    experience: string;
    type: string;
    desc: string;
    requirements: string[];
    formulaCode: string;
}

const jobs: Job[] = [
    {
        id: 'job-1',
        title: 'Senior Research Scientist (Vaccines)',
        category: 'rnd',
        location: 'Mumbai, India',
        experience: '5 - 8 Years',
        type: 'Full-Time',
        desc: 'Lead the research and development of recombinant protein-based vaccines. Experience in bioreactor operations and purification is highly preferred.',
        requirements: [
            'PhD or Masters in Biotechnology / Biochemistry / Virology',
            'Strong background in cell culture and downstream processing',
            'Proven track record of scientific publication is a plus'
        ],
        formulaCode: 'VAC-902'
    },
    {
        id: 'job-2',
        title: 'Diagnostic Assay Developer',
        category: 'rnd',
        location: 'Mumbai, India',
        experience: '3 - 6 Years',
        type: 'Full-Time',
        desc: 'Responsible for designing, developing, and validating rapid lateral flow assays and ELISA-based diagnostic kits.',
        requirements: [
            'M.Sc. or PhD in Biotechnology / Molecular Biology / Microbiology',
            'Minimum 3 years hands-on experience in diagnostic kit manufacturing and design',
            'Familiarity with ISO 13485 regulations'
        ],
        formulaCode: 'DIA-404'
    },
    {
        id: 'job-3',
        title: 'Bioprocess Engineer (Upstream / Downstream)',
        category: 'rnd',
        location: 'Mumbai, India',
        experience: '3 - 6 Years',
        type: 'Full-Time',
        desc: 'Scale up upstream cell culture and downstream purification processes for vaccine and recombinant protein production.',
        requirements: [
            'B.Tech/M.Tech or M.Sc in Biotechnology / Biochemical Engineering',
            'Hands-on experience with bioreactors, chromatography systems (AKTA), and filtration units',
            'Understanding of GMP and tech transfer principles'
        ],
        formulaCode: 'BPR-505'
    },
    {
        id: 'job-4',
        title: 'Executive - Quality Assurance (QMS)',
        category: 'qa',
        location: 'Mumbai, India',
        experience: '2 - 4 Years',
        type: 'Full-Time',
        desc: 'Maintain and update Quality Management Systems. Conduct regular internal audits and handle documentation as per GMP guidelines.',
        requirements: [
            'B.Pharm / M.Sc. in Life Sciences',
            'Knowledge of QMS software, change control, and deviation management',
            'Experience in biopharmaceutical or vaccine manufacturing plants'
        ],
        formulaCode: 'QMS-707'
    },
    {
        id: 'job-5',
        title: 'Validation & Qualification Specialist',
        category: 'qa',
        location: 'Mumbai, India',
        experience: '4 - 8 Years',
        type: 'Full-Time',
        desc: 'Design and execute validation protocols for cleanrooms, process equipment, and bioprocess software systems to meet regulatory standards.',
        requirements: [
            'B.Pharm / B.Tech in Biotechnology or M.Sc in Chemistry/Biochemistry',
            'Strong understanding of cleanroom classifications, HVAC validation, and IQ/OQ/PQ protocols',
            'Familiarity with WHO and USFDA regulatory standards'
        ],
        formulaCode: 'VAL-303'
    },
    {
        id: 'job-6',
        title: 'Regulatory Affairs Specialist',
        category: 'regulatory',
        location: 'Mumbai, India / Hybrid',
        experience: '4 - 7 Years',
        type: 'Full-Time',
        desc: 'Prepare and submit dossiers to national and international regulatory bodies (WHO, CDSCO, USFDA) for vaccine registration.',
        requirements: [
            'M.Pharm / M.Sc. in Regulatory Affairs or relevant field',
            'Strong knowledge of CTD/eCTD submissions and guidelines',
            'Excellent technical writing and communication skills'
        ],
        formulaCode: 'REG-101'
    },
    {
        id: 'job-7',
        title: 'Clinical Research Associate (CRA)',
        category: 'regulatory',
        location: 'Mumbai, India / Hybrid',
        experience: '2 - 5 Years',
        type: 'Full-Time',
        desc: 'Monitor clinical trials, ensure compliance with GCP and protocol guidelines, and coordinate with trial sites and regulatory teams.',
        requirements: [
            'M.Sc in Life Sciences / Clinical Research or B.Pharm/M.Pharm',
            'Knowledge of ICH-GCP guidelines and clinical trial regulations in India',
            'Willingness to travel to clinical sites'
        ],
        formulaCode: 'CRA-202'
    },
    {
        id: 'job-8',
        title: 'Technical Project Lead (Tech Transfer)',
        category: 'business',
        location: 'Mumbai, India',
        experience: '6 - 10 Years',
        type: 'Full-Time',
        desc: 'Manage bioprocess technology transfer activities from lab/pilot scale to manufacturing facilities worldwide.',
        requirements: [
            'B.Tech / M.Tech in Chemical / Biochemical Engineering or M.Sc. Biotechnology',
            'Experience in tech transfer documentation, scale-up protocols, and validation',
            'Ability to travel internationally for client site setup'
        ],
        formulaCode: 'CDMO-888'
    }
];


const categories = [
    { id: 'rnd', label: 'Research & Development' },
    { id: 'qa', label: 'Quality Assurance' },
    { id: 'regulatory', label: 'Regulatory Compliance' },
    { id: 'business', label: 'Tech Transfer & CDMO' }
];

export default function CurrentOpenings({ onSelectJob }: { onSelectJob: (jobTitle: string) => void }) {
    const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

    return (
        <section id="current-openings" className="py-24 bg-brand-surface relative overflow-hidden font-sans border-b border-brand-border">
            {/* Elegant Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-secondary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-left">
                {/* Header Section */}
                <div className="mb-16">
                    <ScrollReveal direction="up">
                        {/* Open Positions Section */}
                        <div className="mb-12">
                            <h2 className="text-[32px] md:text-[40px] font-medium tracking-wide mb-4 text-slate-900">
                                Open Positions
                            </h2>
                            <h3 className="text-xl md:text-2xl text-slate-700 font-medium mb-4">
                                Explore opportunities across functions
                            </h3>
                            <p className="text-slate-600 font-medium text-[16px] md:text-[18px] leading-relaxed max-w-4xl">
                                TechInvention offers roles across Business Consultancy, Licensing, Vaccine R&D, Production, Quality Control, Quality Assurance, Regulatory Affairs, Legal and IP, Finance, HR and corporate affairs.
                            </p>
                        </div>

                        {/* Join Our Team Section */}
                        <div className="mb-10">
                            <h2 className="text-[28px] md:text-[32px] font-medium tracking-wide mb-4 text-slate-900">
                                Join Our Team
                            </h2>
                            <h3 className="text-lg md:text-xl text-slate-700 font-medium mb-4">
                                Begin your next chapter with impact
                            </h3>
                            <p className="text-slate-600 font-medium text-[16px] md:text-[18px] leading-relaxed max-w-4xl">
                                If you are looking for a career that challenges you, develops you and connects your work to a larger purpose, TechInvention is the place to grow.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Grouped Jobs Table */}
                <div className="space-y-12">
                    {categories.map(cat => {
                        const catJobs = jobs.filter(job => job.category === cat.id);
                        if (catJobs.length === 0) return null;

                        return (
                            <div key={cat.id} className="text-left">
                                <h3 className="text-base md:text-lg font-bold text-brand-primary tracking-wider mb-4">
                                    {cat.label}
                                </h3>

                                <div className="border-t border-brand-border" />

                                <div className="divide-y divide-brand-border">
                                    {catJobs.map(job => {
                                        const isExpanded = expandedJobId === job.id;
                                        return (
                                            <div key={job.id} className="w-full">
                                                <button
                                                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                                                    className="w-full text-left py-5 flex justify-between items-center group transition-all duration-300"
                                                >
                                                    <span className="font-semibold text-slate-900 group-hover:text-[#1955A6] transition-colors text-[14px] md:text-[16px] tracking-wide underline decoration-slate-900/20 group-hover:decoration-[#1955A6] underline-offset-4">
                                                        {job.title}
                                                    </span>
                                                    <span className="text-xs md:text-sm text-slate-600 font-bold whitespace-nowrap ml-6 transition-all duration-300 group-hover:translate-x-1">
                                                        {job.location}
                                                    </span>
                                                </button>

                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pb-6 pt-2 px-5 md:px-7 bg-white/60 backdrop-blur-md rounded-none border border-brand-border my-3 shadow-sm text-left">
                                                                <div className="flex flex-wrap gap-2.5 mb-4 text-[10px] uppercase tracking-wider text-slate-700 font-bold">
                                                                    <span className="bg-[#1955A6]/8 px-2.5 py-1 rounded-full text-[#1955A6]">
                                                                        Code: {job.formulaCode}
                                                                    </span>
                                                                    <span className="bg-[#5C7625]/8 px-2.5 py-1 rounded-full text-[#5C7625]">
                                                                        Exp: {job.experience}
                                                                    </span>
                                                                    <span className="bg-slate-900/5 px-2.5 py-1 rounded-full text-slate-800">
                                                                        {job.type}
                                                                    </span>
                                                                </div>

                                                                <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold mb-6 max-w-2xl">
                                                                    {job.desc}
                                                                </p>

                                                                <div className="mb-6">
                                                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                                                                        Requirements
                                                                    </span>
                                                                    <ul className="space-y-2">
                                                                        {job.requirements.map((req, idx) => (
                                                                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                                                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1955A6] mt-2 flex-shrink-0" />
                                                                                <span>{req}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>

                                                                <button
                                                                    onClick={() => onSelectJob(job.title)}
                                                                    className="px-5 py-3 bg-slate-900 hover:bg-[#1955A6] text-white font-bold rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 hover:shadow-md"
                                                                >
                                                                    Apply for this Role
                                                                    <ChevronRight className="w-3.5 h-3.5" />
                                                                </button>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}



