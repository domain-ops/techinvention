import React from 'react';

interface SplitTitleProps {
    title?: any;
    className?: string; // Optional class applied to the whole title if needed, or we just rely on parent
    splitIndex?: number; // Optional custom word index at which to split the title
}

export const SplitTitle: React.FC<SplitTitleProps> = ({ title, splitIndex, className = '' }) => {
    if (!title) return null;

    let text: string = '';
    if (typeof title === 'string') {
        text = title;
    } else if (typeof title === 'object' && title !== null) {
        if ('title' in title && typeof title.title === 'string') {
            text = title.title;
        } else if ('text' in title && typeof title.text === 'string') {
            text = title.text;
        } else if ('label' in title && typeof title.label === 'string') {
            text = title.label;
        } else {
            text = String(title || '');
        }
    } else {
        text = String(title || '');
    }

    if (!text || typeof text.split !== 'function') return null;

    const words = text.trim().split(' ');
    
    if (words.length <= 1) {
        return <span className={`text-brand-primary ${className}`}>{text}</span>;
    }
    
    const mid = splitIndex !== undefined ? splitIndex : Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, mid).join(' ');
    const secondHalf = words.slice(mid).join(' ');
    
    return (
        <span className={className}>
            <span className="text-brand-primary">{firstHalf}</span>{' '}
            <span className="text-brand-secondary">{secondHalf}</span>
        </span>
    );
};

