import { useEffect } from 'react';

export const useSEO = (title: string, description: string) => {
    useEffect(() => {
        // Set document title
        document.title = title;

        // Set or update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            metaDescription.setAttribute('content', description);
            document.head.appendChild(metaDescription);
        }
    }, [title, description]);
};
