import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const logoDNA = "/techinvention/TechInvention-gif.gif";

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
        <motion.div
            className="fixed top-0 left-0 z-[99999] pointer-events-none flex items-center justify-center bg-white rounded-full shadow-md"
            style={{
                width: '50px',
                height: '50px',
                opacity: isVisible ? 1 : 0
            }}
            animate={{
                x: mousePosition.x - 25, // center the 50px box
                y: mousePosition.y - 25,
                scale: isHovering ? 1.3 : 1
            }}
            transition={{
                type: "tween",
                ease: "linear",
                duration: 0.05
            }}
        >
            <img 
                src={logoDNA} 
                alt="cursor" 
                className="w-[85%] h-[85%] object-contain mix-blend-multiply" 
            />
        </motion.div>
    );
};

export default CustomCursor;
