import logoImg from '../../../assets/images/brand_logo.png';
import companyImg from '../../../assets/images/about/company_story_bg.png';

export default function GCMCSalientFeatures() {
    return (
        <div className="w-full bg-white py-8 px-6 font-sans select-none">
            {/* Main Outer Slide Container (matches the slide ratio) */}
            <div className="max-w-[1200px] mx-auto bg-white border border-slate-100 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[680px]">
                
                {/* Header Row (Slide Top) */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16">
                    {/* Left: Project Salient Features Banner */}
                    <div className="bg-[#1A3B8B] text-white px-6 py-2.5 text-[16px] md:text-[18px] font-bold tracking-wider uppercase">
                        Project Salient Features
                    </div>

                    {/* Right: TechInvention Real Logo */}
                    <div className="flex-shrink-0">
                        <img 
                            src={logoImg} 
                            alt="TechInvention Logo" 
                            className="h-12 md:h-16 w-auto object-contain" 
                        />
                    </div>
                </div>

                {/* DESKTOP VIEW: Absolute Node Layout (matching the slide) */}
                <div className="hidden xl:block relative w-full h-[550px] mt-8">
                    
                    {/* CENTER PHOTO */}
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[520px] h-[280px] rounded-3xl overflow-hidden border-4 border-white">
                        <img 
                            src={(companyImg as any).src ? (companyImg as any).src : companyImg} 
                            alt="GCMC Company" 
                            className="w-full h-full object-cover" 
                        />
                    </div>

                    {/* Node 1: COST (Top Left-Center) */}
                    <div className="absolute left-[20%] top-[40px] flex flex-col items-center w-[180px]">
                        <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 min-w-[100px] uppercase">
                            Cost
                        </div>
                        <div className="w-[1.5px] h-8 bg-[#1A3B8B]" />
                        <div className="border border-dashed border-[#1A3B8B] rounded-lg p-3 bg-white w-full text-center">
                            <p className="text-[13px] font-bold text-[#1A3B8B] leading-normal">
                                Compact Utilities<br />Transmission loss
                            </p>
                        </div>
                    </div>

                    {/* Node 2: COMPLIANCE (Top Center) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[40px] flex flex-col items-center w-[180px]">
                        <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 min-w-[120px] uppercase">
                            Compliance
                        </div>
                        <div className="w-[1.5px] h-8 bg-[#1A3B8B]" />
                        <div className="border border-dashed border-[#1A3B8B] rounded-lg p-3 bg-white w-full text-center">
                            <p className="text-[13px] font-bold text-[#1A3B8B] leading-normal">
                                21 CFR<br />EU-GMP & WHO PQ
                            </p>
                        </div>
                    </div>

                    {/* Node 3: CONTINUANCE (Top Right-Center) */}
                    <div className="absolute right-[20%] top-[40px] flex flex-col items-center w-[180px]">
                        <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 min-w-[120px] uppercase">
                            Continuance
                        </div>
                        <div className="w-[1.5px] h-8 bg-[#1A3B8B]" />
                        <div className="border border-dashed border-[#1A3B8B] rounded-lg p-3 bg-white w-full text-left">
                            <p className="text-[13px] font-bold text-[#1A3B8B] leading-relaxed">
                                Solar-Chiller<br />Dual DG Chillers<br />ZLD
                            </p>
                        </div>
                    </div>

                    {/* Node 4: CONVENIENCE (Bottom Left) */}
                    <div className="absolute left-0 bottom-[40px] flex flex-col items-center w-[200px]">
                        <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 min-w-[120px] uppercase">
                            Convenience
                        </div>
                        <div className="w-[1.5px] h-8 bg-[#1A3B8B]" />
                        <div className="border border-dashed border-[#1A3B8B] rounded-lg p-4 bg-white w-full text-left">
                            <p className="text-[13px] font-bold text-[#1A3B8B] leading-relaxed">
                                Location<br />All under 1 roof<br />DP : 3 in 1<br />DS : 2 DD suites
                            </p>
                        </div>
                    </div>

                    {/* Node 5: CONTEMPORARY (Bottom Right) */}
                    <div className="absolute right-0 bottom-[40px] flex flex-col items-center w-[200px]">
                        <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 min-w-[120px] uppercase">
                            Contemporary
                        </div>
                        <div className="w-[1.5px] h-8 bg-[#1A3B8B]" />
                        <div className="border border-dashed border-[#1A3B8B] rounded-lg p-4 bg-white w-full text-left">
                            <p className="text-[13px] font-bold text-[#1A3B8B] leading-relaxed">
                                DP-Isolator<br />Express Feeder Power<br />BMS - AI Integ
                            </p>
                        </div>
                    </div>

                </div>

                {/* MOBILE / TABLET VIEW: Responsive Stacking Layout */}
                <div className="block xl:hidden mt-8 space-y-12">
                    {/* Centered Image */}
                    <div className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden">
                        <img 
                            src={(companyImg as any).src ? (companyImg as any).src : companyImg} 
                            alt="GCMC Company" 
                            className="w-full h-auto object-cover" 
                        />
                    </div>

                    {/* Cards List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Convenience */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 w-full uppercase">
                                Convenience
                            </div>
                            <div className="w-[1.5px] h-4 bg-[#1A3B8B]" />
                            <div className="border border-dashed border-[#1A3B8B] rounded-lg p-4 bg-white w-full text-left">
                                <p className="text-[13px] font-bold text-[#1A3B8B] leading-relaxed">
                                    Location<br />All under 1 roof<br />DP : 3 in 1<br />DS : 2 DD suites
                                </p>
                            </div>
                        </div>

                        {/* Cost */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 w-full uppercase">
                                Cost
                            </div>
                            <div className="w-[1.5px] h-4 bg-[#1A3B8B]" />
                            <div className="border border-dashed border-[#1A3B8B] rounded-lg p-4 bg-white w-full text-center">
                                <p className="text-[13px] font-bold text-[#1A3B8B] leading-normal">
                                    Compact Utilities<br />Transmission loss
                                </p>
                            </div>
                        </div>

                        {/* Compliance */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 w-full uppercase">
                                Compliance
                            </div>
                            <div className="w-[1.5px] h-4 bg-[#1A3B8B]" />
                            <div className="border border-dashed border-[#1A3B8B] rounded-lg p-4 bg-white w-full text-center">
                                <p className="text-[13px] font-bold text-[#1A3B8B] leading-normal">
                                    21 CFR<br />EU-GMP & WHO PQ
                                </p>
                            </div>
                        </div>

                        {/* Continuance */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 w-full uppercase">
                                Continuance
                            </div>
                            <div className="w-[1.5px] h-4 bg-[#1A3B8B]" />
                            <div className="border border-dashed border-[#1A3B8B] rounded-lg p-4 bg-white w-full text-left">
                                <p className="text-[13px] font-bold text-[#1A3B8B] leading-relaxed">
                                    Solar-Chiller<br />Dual DG Chillers<br />ZLD
                                </p>
                            </div>
                        </div>

                        {/* Contemporary */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#1A3B8B] text-white text-center font-bold text-[14px] px-6 py-1.5 w-full uppercase">
                                Contemporary
                            </div>
                            <div className="w-[1.5px] h-4 bg-[#1A3B8B]" />
                            <div className="border border-dashed border-[#1A3B8B] rounded-lg p-4 bg-white w-full text-left">
                                <p className="text-[13px] font-bold text-[#1A3B8B] leading-relaxed">
                                    DP-Isolator<br />Express Feeder Power<br />BMS - AI Integ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
