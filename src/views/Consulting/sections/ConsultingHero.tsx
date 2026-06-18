import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '../../../assets/images/indian_biotech_advisory.png';

const ConsultingHero = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.8]);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
    const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const words = ['Lorem', 'Ipsum', 'Dolor', 'Consectetur', 'Adipiscing'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 60, rotateX: -25 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.9, ease: [0.215, 0.61, 0.355, 1] as const },
        },
    } as const;

    const scrollIndicatorVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 1.8, duration: 0.8 },
        },
    } as const;

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: heroY, scale: heroScale }}
            >
                <img src={heroImage}
                    alt="Consulting Hero"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Neutral Dark Overlay (No color tint to show real image colors, but dark enough for text readability) */}
            <motion.div
                className="absolute inset-0 z-10"
                style={{ opacity: overlayOpacity }}
            >
                <div className="absolute inset-0 bg-black/45" />
            </motion.div>

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 z-10 opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-primary/20 blur-3xl z-10"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-secondary/15 blur-3xl z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* Content: Title Only */}
            <motion.div
                className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-24 pb-8 md:pt-32"
                style={{ y: textY, opacity: textOpacity }}
            >
                {/* Main Title */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.2] flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1.5 max-w-4xl mx-auto"
                    style={{ perspective: '1000px' }}
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={wordVariants}
                            className="inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                variants={scrollIndicatorVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white/50" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ConsultingHero;
