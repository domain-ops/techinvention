import React, { useRef, useEffect } from 'react';
import techInventionVideo from '../../../assets/videos/TechInvention-Video.mp4';
import ScrollReveal from '../../../components/Common/ScrollReveal';

const AboutVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0; // Play at double speed
        }
    }, []);

    return (
        <section className="py-10 md:py-16 bg-white font-sans">
            <div className="max-w-5xl mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="relative aspect-video w-full overflow-hidden shadow-[0_20px_50px_rgba(23,85,166,0.12)] border border-slate-100 bg-slate-950">
                        <video
                            ref={videoRef}
                            src={techInventionVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover object-center [transform:translate3d(0,0,0)] [backface-visibility:hidden]"
                        />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AboutVideo;
