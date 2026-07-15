"use client";
import React, { useState, useEffect, useRef } from 'react';

interface LazyViewportSectionProps {
    children: React.ReactNode;
    minHeight?: string;
    rootMargin?: string;
}

export default function LazyViewportSection({
    children,
    minHeight = "200px",
    rootMargin = "250px"
}: LazyViewportSectionProps) {
    const [hasRendered, setHasRendered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hasRendered) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasRendered(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin,
                threshold: 0.01
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [hasRendered, rootMargin]);

    return (
        <div 
            ref={containerRef} 
            style={{ 
                minHeight: hasRendered ? 'auto' : minHeight,
                width: '100%'
            }}
        >
            {hasRendered ? children : null}
        </div>
    );
}
