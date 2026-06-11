import React from 'react';
import { motion } from 'framer-motion';
import officeImg1 from '../../../assets/images/About-us-Offices-Demophorius-01.webp';
import officeImg2 from '../../../assets/images/About-us-Offices-Demophorius-02.webp';

const OfficeEnvironment = () => {
    return (
        <section className="py-6 md:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Image Card with Curtain Reveal */}
                    <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                        <motion.div
                            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="w-full h-full"
                        >
                            <motion.img 
                                initial={{ y: -60, scale: 1.1 }}
                                whileInView={{ y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                src={officeImg1} 
                                alt="TechInvention Office Workspace" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </motion.div>
                    </div>
                    
                    {/* Right Image Card with Curtain Reveal */}
                    <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                        <motion.div
                            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                            className="w-full h-full"
                        >
                            <motion.img 
                                initial={{ y: -60, scale: 1.1 }}
                                whileInView={{ y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                                src={officeImg2} 
                                alt="TechInvention Corporate Office Environment" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeEnvironment;
