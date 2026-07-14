const fs = require('fs');

// Read the original TS file
const ts = fs.readFileSync('src/translations/languages/english.ts', 'utf8');

// Convert to CJS
fs.writeFileSync('temp_en.cjs', ts.replace('export const english', 'module.exports'));

// Require the object
const en = require('./temp_en.cjs');

// 1. One Health Slides (Four Verticals)
en.oneHealth.slides = [
    {
        title: "Strategic Advisory & Tech Consulting",
        desc: "Our Strategic Advisory & Technical Consulting services help organizations build sustainable vaccine and biopharmaceutical manufacturing capabilities. We provide end-to-end support across feasibility studies, portfolio planning, engineering design, project supervision, facility commissioning, and gap assessments.",
        tag: "Consulting"
    },
    {
        title: "Research and Development (R&D)",
        desc: "We focus on the research and development of next-generation vaccines against critical infectious diseases and AMR-associated pathogens. Powered by our pilot GMP (HORIZON) and strategic collaborations with leading research institutions, our R&D portfolio spans recombinant and glycoconjugate vaccine platforms.",
        tag: "R&D"
    },
    {
        title: "Licensing and Access",
        desc: "We enable strategic in-licensing and out-licensing of vaccines to accelerate access, innovation and commercialization. By connecting promising technologies with the right development, manufacturing and market pathways, we help transform scientific assets into scalable global health solutions.",
        tag: "Licensing"
    },
    {
        title: "Commercial-Scale Manufacturing",
        desc: "TechInvention’s integrated GMP manufacturing facility (GCMC) provides Drug Substance and Fill-finish manufacturing for vaccines and biologics within a quality-driven, scalable framework. It supports technology transfer, process scale-up, regulatory compliance, and commercial manufacturing.",
        tag: "Scale-up"
    }
];

// 2. Home Stats
en.homeStats.experts.label = "Projects";
en.homeStats.experts.value = "20+";

en.homeStats.awards.label = "Years";
en.homeStats.awards.value = "10+";

en.homeStats.patients.label = "Countries";
en.homeStats.patients.value = "15+";


// 3. Leadership
en.about.leadership.profiles = [
    {
        name: "Syed S. Ahmed",
        role: "Director, CEO and Founder",
        message: "As Director, CEO and Founder of TechInvention, Mr. Syed S. Ahmed represents a leadership vision shaped by scientific excellence, strategic foresight and an unwavering commitment to global health equity. With more than two decades of experience across strategy, business development, technology transfer and capacity building, he has been instrumental in building TechInvention as an integrated vaccine innovation and manufacturing platform. His leadership reflects the rare ability to connect scientific ambition with execution, partnerships and long-term public health impact, guided by the conviction that life-saving vaccines should not remain limited to those who can afford them.",
        viewProfile: "View Profile"
    },
    {
        name: "Nazneen Hamid",
        role: "Co-founder and Director – Corporate Affairs",
        message: "As Co-founder and Director – Corporate Affairs at TechInvention, Ms. Nazneen leads the organization's Corporate Governance, Human Resources, Finance, and Administration. She plays a key role in strengthening organizational excellence by driving strategic operations, people development, and effective governance. A certified POSH (Prevention of Sexual Harassment) Trainer, she is committed to fostering a safe, inclusive, and professional workplace. Passionate about the organization's mission, Ms. Nazneen supports TechInvention's vision of making essential vaccines affordable, accessible, and available to populations across the developing world while nurturing a purpose-driven, high-performing team.",
        viewProfile: "View Profile"
    }
];

// 4. Mission and Vision
en.about.mission.desc = "Access to Essential Vaccines and Novel Biologics Should Not Only be the Privilege of Just the Affording Few.";
en.about.vision.desc = "Enabling One Health through Bio-innovation: Affordable, Accessible, Acceptable.";

// 5. Values
en.about.values.items = [
    { title: "Integrity", desc: "We act with honesty, transparency, and accountability in everything we do." },
    { title: "Inclusivity", desc: "We believe in creating equitable opportunities and fostering diverse collaborations across borders." },
    { title: "Ingenuity", desc: "We drive innovation through bold thinking and practical problem-solving, always focused on impactful outcomes." }
];

// 6. About Text
en.about.story.commitment = "We are an innovative biotech company committed to bringing greater health equity to people and nations all over the world. We commenced our journey in 2016 with the focus of making essential vaccines and biopharmaceuticals acceptable, affordable, and accessible in the developing world.";

// 7. HORIZON / R&D
en.horizon.desc = "TechInvention's state-of-the-art R&D facility, the High-impact One Health Research & Innovation ZONe (HORIZON), is designed to accelerate vaccine innovation by supporting end-to-end research from proof-of-concept development through preclinical advancement for priority infectious diseases and antimicrobial resistance (AMR)-associated pathogens.";
en.horizon.stages = [
    { stage: "Ideate", desc: "Target identification, antigen discovery, AI/ML-enabled vaccine design, and platform selection." },
    { stage: "Develop", desc: "Process and formulation development, analytical assay development, characterization, and proof-of-concept studies." },
    { stage: "Evaluate", desc: "Preclinical efficacy, safety and toxicology studies, with regulatory documentation and compliance." },
    { stage: "Scale", desc: "Process scale-up, technology transfer, GMP manufacturing readiness, and commercial translation." }
];
en.horizon.collaborations = [
    "Institute of Life Sciences (ILS)",
    "Indian Institute of Technology Bhubaneswar",
    "ICMR- RMRC Bhubaneswar",
    "ICMR-NIRBI Kolkata"
];

// 8. CDMO / GCMC
en.cdmo = {
    title: "Global Collaborative Centre for Medical Countermeasures (GCMC)",
    subtitle: "Integrated Full-Cycle Vaccine Development & Manufacturing Facility",
    description: "From Innovation to Scalable Global Health Solutions. TechInvention's Global Collaborative Centre for Medical Countermeasures (GCMC) is an Integrated Full-Cycle Vaccine Development & Manufacturing Facility designed to accelerate the journey from scientific discovery to global health impact. Developed in alignment with international GMP standards, GCMC brings together vaccine process development, manufacturing scale-up, technology transfer, analytical testing, quality systems, regulatory support, drug product manufacturing, digital innovation, and sustainable infrastructure within one integrated facility.",
    bridge: {
        title: "GCMC as a Bridge",
        desc: "Scientific innovation begins in research laboratories, universities, and biotechnology companies, but transforming promising discoveries into commercially viable vaccines requires specialized expertise, advanced manufacturing infrastructure, regulatory compliance, and scalable production capabilities. GCMC bridges this critical gap by providing end-to-end support across vaccine development, process optimization, manufacturing scale-up, technology transfer, GMP manufacturing, quality assurance, and regulatory readiness."
    },
    whyPartner: {
        title: "Why Partner with Us ?",
        features: [
            { title: "End-to-End Capability", desc: "Integrated expertise supporting every stage of vaccine development—from process development and manufacturing scale-up to fill-finish, regulatory readiness, and technology transfer." },
            { title: "International Quality Standards", desc: "Manufacturing infrastructure designed in alignment with global GMP expectations, supported by robust quality systems, comprehensive documentation, and regulatory compliance." },
            { title: "Flexible Manufacturing", desc: "Advanced manufacturing technologies capable of supporting multiple vaccine and biologics platforms, enabling efficient development and scalable production." },
            { title: "Faster Development Pathways", desc: "Optimized scientific and manufacturing workflows designed to accelerate technology translation, reduce development risk, and shorten time to market." },
            { title: "Collaborative Innovation", desc: "A global ecosystem connecting biotechnology companies, pharmaceutical manufacturers, research institutions, governments, international organizations, and public health partners to advance vaccine innovation." },
            { title: "Sustainable Manufacturing", desc: "Energy-efficient infrastructure and intelligent facility management systems designed to reduce environmental impact while maintaining manufacturing excellence." }
        ]
    },
    integratedCapabilities: {
        title: "Integrated Manufacturing Capabilities",
        capabilities: [
            { title: "Upstream Manufacturing", desc: "Two flexible upstream manufacturing suites equipped with stainless-steel bioreactor systems (20 L and 100 L), enabling efficient process development, optimization, and manufacturing scale-up across diverse production platforms." },
            { title: "Downstream Processing", desc: "Integrated purification capabilities supporting recovery, concentration, purification, polishing, and process optimization to ensure consistent product quality and manufacturing robustness." },
            { title: "Drug Product Manufacturing", desc: "Flexible fill-finish capabilities through a multi-format manufacturing line supporting liquid vials and pre-filled syringes for clinical and commercial supply." },
            { title: "Quality, Regulatory & Technology Transfer", desc: "Comprehensive support for analytical development, quality management systems, regulatory documentation, validation, technology transfer, manufacturing readiness, and commercialization planning to enable successful product advancement." },
            { title: "Training & Workforce Development", desc: "Specialized hands-on training programs in vaccine manufacturing, GMP operations, quality assurance, biosafety, regulatory compliance, and advanced bioprocessing to strengthen global biomanufacturing capacity." }
        ]
    },
    digitalManufacturing: {
        title: "Digital Manufacturing Excellence",
        desc: "Digital technologies are integrated throughout GCMC to improve process efficiency, manufacturing visibility, operational performance, and product quality. By embedding digital intelligence across research, development, manufacturing, and facility operations, GCMC enables faster decision-making, improved process consistency, enhanced product quality, and operational resilience.",
        points: [
            "AI-assisted process monitoring and optimization",
            "Machine learning-driven manufacturing analytics",
            "Computational biology workflows",
            "NGS-enabled research and development support",
            "Real-time manufacturing and utility monitoring",
            "Predictive maintenance through intelligent facility management",
            "Data-driven process optimization",
            "Digital quality and operational management"
        ]
    },
    sustainability: {
        title: "Sustainability by Design",
        desc: "Sustainability is embedded into every aspect of GCMC's design and operations to support responsible and energy-efficient vaccine manufacturing. The facility integrates renewable energy solutions, intelligent building management systems, water conservation strategies, and energy-efficient utilities to reduce environmental impact while maintaining world-class manufacturing performance.",
        points: [
            "Renewable energy integration to improve energy efficiency",
            "AI-enabled building management and predictive maintenance",
            "Energy-efficient HVAC and utility systems",
            "Smart chilled water and compressed air management",
            "Heat pump-based energy optimization",
            "Water conservation and zero liquid discharge planning",
            "Rainwater harvesting and resource optimization",
            "IoT-enabled monitoring for sustainable facility operations"
        ]
    }
};

// 9. Consultancy (Strategic Advisory)
en.strategicAdvisory.intro = "Building resilient healthcare and biomanufacturing ecosystems through strategy, science and execution. TechInvention supports governments, funding agencies, manufacturers, investors and research institutions in shaping vaccine and biopharmaceutical manufacturing infrastructure.";
en.strategicAdvisory.callToAction = "Advancing healthcare ambitions into scalable global impact. Partner with TechInvention to design, build and strengthen future-ready vaccine, biologics and healthcare manufacturing ecosystems.";
en.strategicAdvisory.testimonials = [
    {
        client: "IAVI",
        feedback: "TechInvention demonstrated strong commitment and professionalism in successfully completing the assignment and delivering the final report."
    },
    {
        client: "UNOPS – Biosafety & Biosecurity Training",
        feedback: "The training delivered by TechInvention significantly strengthened participants’ theoretical understanding and practical competencies in biosafety and biosecurity."
    },
    {
        client: "UNOPS – Vaccine Analytics Training",
        feedback: "TechInvention successfully delivered a comprehensive vaccine analytics training programme, combining virtual learning with in-person practical and facility-based sessions."
    },
    {
        client: "World Health Organization (SEARO)",
        feedback: "We commend Techinvention for its professionalism, technical expertise and commitment throughout the successful delivery of the assignment."
    }
];

// 10. Careers Page Content
en.careers = {
    title: "Build With Purpose",
    intro: "Join a team where science, strategy and execution come together to create meaningful healthcare impact. At TechInvention, every role contributes to advancing vaccines, biologics and technologies that support access, affordability and resilience across global health ecosystems.",
    whyJoinUs: [
        { title: "Purpose-led work", desc: "Contribute to healthcare solutions that matter." },
        { title: "Global exposure", desc: "Work with partners, institutions and experts across diverse geographies." },
        { title: "Learning culture", desc: "Grow through hands-on projects, mentorship and cross-functional collaboration." },
        { title: "Ownership mindset", desc: "Take responsibility, lead ideas and make your contribution visible." },
        { title: "Innovation ecosystem", desc: "Be part of a growing biotech company working across vaccines, biologics and global health infrastructure." }
    ],
    whoWeLookFor: {
        title: "Talent with curiosity, discipline and drive",
        desc: "We welcome professionals who are ambitious, thoughtful and ready to take ownership. Whether you are a scientist, engineer, consultant, regulatory expert, finance professional or corporate leader, TechInvention offers the opportunity to grow with purpose."
    },
    testimonials: [
        { name: "Shahnawaz Shaikh", role: "", experience: "9+ Years", text: "Having joined TechInvention in an Admin and HR role 10 years ago, I have had the privilege of growing alongside the organisation and taking on greater responsibility, ownership and purpose over the years. It has been an inspiring and deeply fulfilling journey, and I am proud to have witnessed and contributed to TechInvention’s remarkable growth and evolution." },
        { name: "Aziz Mandsaurwala", role: "Senior Manager - Global BD", experience: "6+ Years", text: "Working at TechInvention means being part of projects that connect science, strategy and real-world healthcare impact. Every assignment brings learning and growth." },
        { name: "Sarang Pathak", role: "General Manager", experience: "9+ Years", text: "Working at TechInvention has given me the opportunity to continuously learn, take on diverse responsibilities and contribute to meaningful work. The trust, exposure and support I have received here have played an important role in my professional growth and confidence." },
        { name: "Bhakti Chavan", role: "Deputy Manager Clinical Trials", experience: "5+ Years", text: "I joined TechInvention in 2019 at the start of my career, and over the past 6+ years, I have grown professionally in Preclinical and Clinical vaccine research. The opportunities, exposure, and learning I've received have been invaluable. It has been rewarding to grow alongside the company as it evolved from a startup to establishing its own manufacturing facility." },
        { name: "Priya Dhawale", role: "Deputy Manager - GBD", experience: "5+ Years", text: "Completing over six years at TechInvention has been an incredibly rewarding journey. It has been inspiring to witness the company's transformation from a startup into a growing MSME with a strong global presence. Throughout this journey, I have been given the opportunity to work on diverse international business development and strategic consulting projects, collaborate with global stakeholders, and continuously expand my knowledge in the life sciences sector. The trust, support, and learning opportunities provided by the leadership and my colleagues have played a significant role in my professional growth. I look forward to being part of TechInvention's continued success and innovation." }
    ],
    openPositions: "Explore opportunities across functions. TechInvention offers roles across Business Consultancy, Licensing, Vaccine R&D, Production, Quality Control, Quality Assurance, Regulatory Affairs, Legal and IP, Finance, HR and corporate affairs."
};

// 11. Training Page Content
en.training = {
    title: "Developing the Next Generation of Professionals in Vaccine Development and GMP Manufacturing",
    desc: "Through industry-aligned, experiential learning, we prepare professionals to meet the evolving demands of vaccine development and GMP manufacturing. Our comprehensive curriculum covers biosafety and biosecurity, GMP production, analytical testing, quality assurance, global regulatory requirements, clinical trial management and pharmacovigilance.",
    modules: [
        {
            title: "GMP Compliance",
            desc: "Build a strong foundation in GMP principles, regulatory expectations, quality systems, and the culture of compliance required for manufacturing and testing operations.",
            focusAreas: ["WHO, US FDA & ICH Guidelines", "Good Documentation Practices (GDP)", "Personnel Hygiene & Safety", "Facility Design & Material/Personnel Flows", "Quality Culture & Compliance Mindset"]
        },
        {
            title: "Quality Management Systems (QMS)",
            desc: "Develop expertise in quality systems that ensure product consistency, regulatory compliance, and continuous improvement across the product lifecycle.",
            focusAreas: ["Deviation & Incident Management", "CAPA & Root Cause Investigations", "Change Control Systems", "Quality Risk Management (ICH Q9)", "OOS & OOT Investigations"]
        },
        {
            title: "Analytical & Quality Control Techniques",
            desc: "Gain exposure to analytical methodologies and quality control practices used in pharmaceutical, biotechnology, and vaccine testing laboratories.",
            focusAreas: ["HPLC & Chromatographic Techniques", "ELISA & Protein Quantification", "Endotoxin Testing (LAL)", "Molecular Characterization Methods", "Data Analysis & Result Interpretation"]
        },
        {
            title: "Molecular Biology & Advanced Testing",
            desc: "Understand modern molecular biology techniques used for product characterization, contamination monitoring, and quality assessment.",
            focusAreas: ["DNA Extraction & Purification", "PCR & Real-Time PCR", "Host Cell DNA Analysis", "Agarose Gel Electrophoresis", "Molecular Data Interpretation"]
        },
        {
            title: "Microbiology & Sterility Assurance",
            desc: "Learn critical microbiological practices that support contamination control and product safety in regulated manufacturing environments.",
            focusAreas: ["Sterility Testing", "Environmental Monitoring", "Bioburden Assessment", "Mycoplasma Detection", "Aseptic Techniques & Contamination Control"]
        },
        {
            title: "Aseptic Processing & Cleanroom Operations",
            desc: "Comprehensive understanding of cleanroom behavior, sterile manufacturing practices, and environmental control strategies.",
            focusAreas: ["Cleanroom Classifications", "Gowning Qualification & Validation", "Media Fill Simulations", "Environmental Monitoring Programs", "Microbial Control Strategies"]
        },
        {
            title: "Validation, Qualification & Lifecycle Management",
            desc: "Master the principles of qualification and validation required to demonstrate process consistency and regulatory compliance.",
            focusAreas: ["DQ, IQ, OQ & PQ Execution", "Process Validation Principles", "Cleaning Validation", "Computer System Validation (CSV)", "Equipment Lifecycle Management"]
        },
        {
            title: "Data Integrity & Digital Compliance",
            desc: "Ensure data reliability, traceability, and compliance through robust documentation and electronic record management practices.",
            focusAreas: ["ALCOA+ Principles", "Audit Trail Review", "Electronic Data Management", "BMR/BPR Documentation", "Data Governance & Compliance"]
        },
        {
            title: "Technology Transfer & Scale-Up Strategies",
            desc: "Understand the critical elements involved in successful transfer of processes from development to commercial manufacturing.",
            focusAreas: ["Technology Transfer Lifecycle", "Scale-Up Risk Assessment", "Process Capability Studies", "Analytical Method Transfer", "Cross-Functional Coordination"]
        },
        {
            title: "Regulatory Intelligence & Inspection Readiness",
            desc: "Prepare for audits and inspections through an understanding of global regulations and regulatory expectations.",
            focusAreas: ["WHO, EMA & US FDA Expectations", "Audit & Inspection Preparedness", "Regulatory Documentation", "Quality Metrics & Trending", "Regulatory Compliance Strategies"]
        },
        {
            title: "Industry Readiness & Professional Development",
            desc: "Bridge the gap between academic learning and industrial practice through real-world applications and quality-driven problem solving.",
            focusAreas: ["GMP Simulations & Case Studies", "Scientific Literature Review", "Technical Presentations", "Laboratory Investigation Exercises", "Career & Workforce Readiness"]
        },
        {
            title: "Laboratory Excellence & Scientific Problem Solving",
            desc: "Develop a systematic approach to laboratory operations, troubleshooting, and scientific decision-making to improve analytical reliability and operational efficiency.",
            focusAreas: ["Laboratory Best Practices", "Scientific Problem Solving", "Troubleshooting Analytical Methods", "Investigation of Laboratory Errors", "Critical Thinking & Decision Making."]
        },
        {
            title: "Vaccine Manufacturing & Process Understanding",
            desc: "Gain insights into pharmaceutical and vaccine manufacturing processes, critical quality attributes, and process controls that ensure product safety, efficacy, and consistency.",
            focusAreas: ["Drug Product & Vaccine Manufacturing Overview", "Critical Process Parameters (CPPs)", "Critical Quality Attributes (CQAs)", "Process Monitoring & Control", "Manufacturing Deviations & Investigations"]
        },
        {
            title: "Scientific Communication & Documentation Excellence",
            desc: "Strengthen technical communication and documentation skills essential for regulated environments and cross-functional collaboration.",
            focusAreas: ["Technical Report Writing", "SOP Preparation & Review", "Scientific Presentation Skills", "Documentation Review Practices", "Regulatory Writing Fundamentals"]
        },
        {
            title: "Emerging Technologies in Biopharmaceutical Quality Control",
            desc: "Explore modern technologies and analytical advancements shaping the future of pharmaceutical and vaccine quality assessment.",
            focusAreas: ["Advanced Analytical Techniques", "Automation in QC Laboratories", "Digital Quality Systems", "Laboratory Informatics (LIMS)", "Trends in Biopharmaceutical Testing"]
        }
    ],
    unopsBiosafety: "Advancing safer laboratory ecosystems through structured training in biosafety, biosecurity and containment practices. The program blends technical understanding with practical risk-management approaches for modern biomedical laboratories. It helps build institutional capability for safe, compliant and responsible scientific operations.",
    unopsVaccineAnalytics: "Enhancing vaccine development capability through focused training in analytical science and product evaluation. The program supports understanding of critical quality attributes, analytical methods, assay relevance and data interpretation. It strengthens the technical foundation required for vaccine quality, regulatory readiness and development success.",
    rcbBioprocessing: "TechInvention conducted focused training programs at the Regional Centre for Biotechnology, Faridabad, covering the fundamentals of upstream and downstream processing, Quality Control, Quality Assurance and Good Manufacturing Practices. The sessions also included hands-on exposure to streaking and shake-flask techniques, fermentation operations, vaccine production workflows, QC laboratory practices and BSL-2 fermentation facilities, helping participants connect core bioprocessing concepts with real-world industry applications.",
    testimonials: [
        {
            author: "Dr. Meseret Habtamu",
            role: "Researcher – Vaccine Analytics",
            org: "Armauer Hansen Research Institute",
            feedback: "The training bridged my research background with practical applications, highlighting the importance of quality systems and regulatory compliance in real-world settings."
        },
        {
            author: "Mr. Hailu Ashenafi",
            role: "Senior Special Advisor for Quality Assurance",
            org: "Ministry of Health/ShieldVax Project",
            feedback: "I received end-to-end, hands-on exposure to vaccine quality control testing across upstream, downstream, and fill-finish processes aligned with global regulatory expectations."
        },
        {
            author: "Mr. Kebede Fufa",
            role: "QMS Lead – Executive Office Desk Head",
            org: "Ethiopian Food and Drug Authority (EFDA)",
            feedback: "I learned to apply data integrity (ALCOA+ principles) and Statistical Process Control to ensure the analytical pipeline remains a non-negotiable foundation for vaccine safety."
        },
        {
            author: "Dr. Jaleta Shuka",
            role: "Vaccine Quality Assurance Team Leader",
            org: "National Veterinary Institute, Ethiopia",
            feedback: "The training provided an excellent combination of theoretical foundation and practical application that significantly enhanced my understanding of vaccine quality, safety, and effectiveness."
        },
        {
            author: "Mr. Lami Bikila Kelbessa",
            role: "Quality Control Chemist",
            org: "Africure Pharmaceuticals Manufacturing Ethiopia PLC.",
            feedback: "This program significantly improved my analytical competence in vaccine manufacturing, particularly regarding Quality Control and GMP-based testing."
        }
    ]
};

// 12. Products
en.productsDocs = {
    title: "Vaccines Built to Protect",
    desc: "A targeted portfolio of proven, globally approved and widely supplied essential vaccines, available for commercialization by partner companies, supporting prevention, immunization readiness, and equitable access partnerships across healthcare markets worldwide.",
    vaccines: [
        {
            name: "TdaPgen",
            subtitle: "Combined Tetanus Toxoid, Reduced Diphtheria Toxoid and Reduced Recombinant Pertussis Vaccine",
            composition: [
                "Each single dose of 0.5 mL contains:",
                "• Tetanus Toxoid — 7.5 Lf",
                "• Diphtheria Toxoid — 2.0 Lf",
                "• Bordetella pertussis antigens:",
                "• Recombinant Pertussis Toxin (rPT) — 2 µg",
                "• Filamentous Haemagglutinin (FHA) — 5 µg"
            ],
            pack: "0.5 mL Prefilled Syringe",
            use: "Active booster immunization against diphtheria, tetanus and pertussis in individuals aged 4 to 65 years."
        },
        {
            name: "Varicella Vaccine, Live Attenuated",
            subtitle: "",
            composition: [
                "Each single dose of 0.5 mL contains:",
                "• Live Attenuated Varicella-Herpes Zoster Virus (Oka strain) — 3.3 to 4.5 lg PFU/0.5 mL per dose",
                "• Produced in human diploid (SV-1) cells",
                "• International standard virus strain purchased from ATCC",
                "• Virus titer tested using an in-house reference"
            ],
            pack: "Vial and WFI",
            use: "Active immunization against infection caused by varicella in individuals aged 1 year (12 months) to 12 years."
        },
        {
            name: "Inactivated Hepatitis A Vaccine (Adsorbed) I.P.",
            subtitle: "",
            composition: [
                "Each single dose of 0.5 mL contains:",
                "• Inactivated HAV antigen (TZ84 strain)¹ — 250 U",
                "• Aluminium, as Aluminium Hydroxide — 0.175 to 0.31 mg",
                "• Disodium Hydrogen Phosphate — q.s.",
                "• Sodium Chloride — 4.5 mg",
                "• Sodium Dihydrogen Phosphate — q.s.",
                "• Water for Injection — q.s. to 0.5 mL",
                "• ¹ Produced in Human Diploid Cells"
            ],
            pack: "Vial / Prefilled Syringe",
            use: "Active immunization against infection caused by Hepatitis A virus."
        },
        {
            name: "Trivalent Influenza Vaccine",
            subtitle: "",
            composition: [
                "Each single dose of 0.5 mL contains:",
                "• Each 0.5 mL dose contains 15 µg haemagglutinin (HA) of each influenza virus strain selected in accordance with the annual recommendations of the World Health Organization (WHO) for the applicable Northern or Southern Hemisphere influenza season."
            ],
            pack: "Prefilled Syringe",
            use: "Active immunization of adults aged 18 years and older for prevention of influenza disease."
        }
    ],
    badges: [
        { title: "Access-Oriented", desc: "Built to support availability of essential vaccines across priority markets." },
        { title: "Market-Ready", desc: "Focused on regulated, market-authorized vaccine candidates." },
        { title: "Partnership-Led", desc: "Designed for institutional, commercial and public health collaborations." }
    ],
    adverseReporting: {
        title: "Adverse Event Reporting",
        desc: "For any questions or to report an Adverse Event, please contact our AE Reporting team:",
        phone: "18008902590",
        email: "feedback@techinvention.biz",
        privacyNote: "Your privacy is important to us. All AE reports shall be handled with strict confidentiality. Personal information is protected and used solely for safety monitoring purposes."
    }
};

// 13. Contact
en.contactDocs = {
    connectDesc: "Whether you are exploring partnerships, product enquiries, R&D collaborations, scale-up and manufacturing opportunities or consultancy support for capacity building, our team would be pleased to hear from you. TechInvention works with partners across global health systems to move science closer to meaningful public health impact.",
    address1Title: "Corporate Office and Manufacturing Site",
    address1: "Plot No. EL-40, Mahape MIDC Electric Zone, MIDC Industrial Area, Mahape Village, Navi Mumbai, Thane, Maharashtra, 400710",
    address2Title: "Bio-Innovation Centre (HORIZON)",
    address2: "EL-125, Mahape MIDC Electric Zone, MIDC Industrial Area, Mahape Village, Navi Mumbai, Thane, Maharashtra, 400710",
    phone: "+91 22 4005 2123",
    email: "connect@techinvention.biz"
};


const newTsContent = `export const english = ${JSON.stringify(en, null, 4)};`;
fs.writeFileSync('src/translations/languages/english.ts', newTsContent);

console.log("Translation file updated successfully.");
