import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

interface ScrollToTopProps {
    lenisRef: React.MutableRefObject<Lenis | null>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ lenisRef }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let cachedScrollHeight = typeof document !== 'undefined' ? document.documentElement.scrollHeight : 0;

        const handleResize = () => {
            cachedScrollHeight = document.documentElement.scrollHeight;
        };

        const handleScroll = () => {
            // Check visibility
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate percentage
            const totalHeight = cachedScrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(Math.min(100, Math.max(0, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
        handleScroll(); // Initial run

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToTop = () => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { duration: 1.4 });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    // Circular progress configurations
    const radius = 22;
    const circumference = 2 * Math.PI * radius; // 2 * pi * 22 ≈ 138.23
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.6, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 30 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[9999] w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-gray-100 hover:border-brand-primary/20 transition-all duration-300 group"
                    style={{
                        boxShadow: isHovered 
                            ? '0 10px 25px -5px rgba(23, 85, 166, 0.25), 0 8px 10px -6px rgba(23, 85, 166, 0.2)' 
                            : '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)'
                    }}
                    aria-label="Scroll to top"
                >
                    {/* SVG Progress Ring */}
                    <svg className="absolute w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 56 56">
                        <defs>
                            <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1755a6" />
                                <stop offset="100%" stopColor="#5c7625" />
                            </linearGradient>
                        </defs>
                        {/* Background track circle */}
                        <circle
                            cx="28"
                            cy="28"
                            r={radius}
                            className="stroke-gray-100/80"
                            strokeWidth="3.5"
                            fill="transparent"
                        />
                        {/* Active progress circle */}
                        <motion.circle
                            cx="28"
                            cy="28"
                            r={radius}
                            stroke="url(#scrollProgressGradient)"
                            strokeWidth="3.5"
                            fill="transparent"
                            strokeDasharray={circumference}
                            animate={{ strokeDashoffset }}
                            transition={{ duration: 0.1, ease: 'easeOut' }}
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Content inside the ring - always show ChevronUp */}
                    <div className="relative w-full h-full flex items-center justify-center text-brand-primary">
                        <motion.div
                            animate={{ y: isHovered ? -3 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronUp size={20} className="stroke-[2.5]" />
                        </motion.div>
                    </div>

                    {/* Outer pulse indicator when page is fully read (100% scrolled) */}
                    {scrollProgress >= 99 && (
                        <span className="absolute -inset-1 rounded-full bg-brand-primary/10 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                    )}
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
