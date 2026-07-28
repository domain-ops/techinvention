import React, { useEffect, useRef, useState } from 'react';
import dnaLogo from '../../assets/images/TechInvention Logo (DNA).png';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouchDevice(true);
            return;
        }

        const updateMousePosition = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 28}px, 0)`;
                // ensure it is visible
                if (cursorRef.current.style.opacity === '0' || cursorRef.current.style.opacity === '') {
                    cursorRef.current.style.opacity = '1';
                }
            }
        };
        
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target) {
                const shouldHide = (
                    target.tagName.toLowerCase() === 'a' || 
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') || 
                    target.closest('button') ||
                    window.getComputedStyle(target).cursor === 'pointer'
                );
                if (cursorRef.current) {
                    cursorRef.current.style.display = shouldHide ? 'none' : 'block';
                }
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '0';
            }
        };

        const handleMouseEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '1';
            }
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
    }, []);

    if (isTouchDevice) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-[99999] pointer-events-none select-none w-10 h-14 transition-opacity duration-300"
            style={{
                opacity: 0,
                willChange: 'transform',
                transform: 'translate3d(-100px, -100px, 0)'
            }}
        >
            <img 
                src={(dnaLogo as any).src || dnaLogo} 
                alt="Cursor" 
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default CustomCursor;
