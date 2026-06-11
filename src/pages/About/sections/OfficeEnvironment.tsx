import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import officeImg1 from '../../../assets/images/About-us-Offices-Demophorius-01.webp';
import officeImg2 from '../../../assets/images/About-us-Offices-Demophorius-02.webp';

const OfficeEnvironment = () => {
    return (
        <section className="py-6 md:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                            <img 
                                src={officeImg1} 
                                alt="TechInvention Office Workspace" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                            <img 
                                src={officeImg2} 
                                alt="TechInvention Corporate Office Environment" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default OfficeEnvironment;
