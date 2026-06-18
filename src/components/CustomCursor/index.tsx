import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouchDevice(true);
            return;
        }

        const updateMousePosition = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') || 
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Inner Dot - Follows Instantly */}
            <motion.div
                className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full bg-brand-primary"
                style={{
                    width: '8px',
                    height: '8px',
                    opacity: (isVisible && !isHovering) ? 1 : 0
                }}
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1
                }}
                transition={{
                    type: "tween",
                    ease: "linear",
                    duration: 0
                }}
            />
            {/* Outer Ring - Follows Smoothly with Spring Physics */}
            <motion.div
                className="fixed top-0 left-0 z-[99998] pointer-events-none rounded-full border border-brand-primary/40"
                style={{
                    width: '36px',
                    height: '36px',
                    opacity: (isVisible && !isHovering) ? 1 : 0,
                    backgroundColor: 'transparent'
                }}
                animate={{
                    x: mousePosition.x - 18,
                    y: mousePosition.y - 18,
                    scale: isHovering ? 0 : 1,
                    borderColor: 'rgba(23,85,166,0.4)'
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 28,
                    mass: 0.5
                }}
            />
        </>
    );
};

export default CustomCursor;
