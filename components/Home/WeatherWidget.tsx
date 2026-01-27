import React from 'react';
import { Sun, CloudSun, CloudRain, Wind, Droplets, MapPin } from 'lucide-react';
import ScrollReveal from '../Shared/ScrollReveal';

const WeatherWidget: React.FC = () => {
    return (
        <ScrollReveal delay={100} className="w-full">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-blue-50 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                
                {/* Subtle Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none translate-y-5 -translate-x-5"></div>
                
                <div className="relative z-10">
                    {/* Header: Location & Status */}
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                                <MapPin size={14} className="text-red-500" /> General Santos City
                            </div>
                            <div className="flex items-baseline gap-2">
                                <div className="text-5xl font-black text-slate-800 tracking-tighter">32°</div>
                                <div className="text-2xl font-medium text-slate-400">C</div>
                            </div>
                            <div className="text-slate-500 font-medium mt-1">Mostly Sunny</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-2xl shadow-sm border border-orange-100">
                            <Sun size={36} className="text-orange-500 animate-[spin_12s_linear_infinite]" />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                            <div className="p-2 bg-white rounded-xl shadow-sm md:shadow-none text-blue-500">
                                <Wind size={18} />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Wind</div>
                                <div className="text-sm font-bold text-slate-700">12 km/h</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                             <div className="p-2 bg-white rounded-xl shadow-sm md:shadow-none text-blue-500">
                                <Droplets size={18} />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Humidity</div>
                                <div className="text-sm font-bold text-slate-700">64%</div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-100 w-full mb-6"></div>

                    {/* Forecast */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm group/day hover:bg-slate-50 p-2 rounded-xl transition-colors -mx-2">
                            <span className="font-bold text-slate-700 w-20">Tomorrow</span>
                            <div className="flex-1 flex justify-center">
                                <CloudSun size={18} className="text-yellow-500" />
                            </div>
                            <span className="font-bold text-slate-800">31°C</span>
                        </div>
                        <div className="flex items-center justify-between text-sm group/day hover:bg-slate-50 p-2 rounded-xl transition-colors -mx-2">
                            <span className="font-bold text-slate-700 w-20">Sunday</span>
                            <div className="flex-1 flex justify-center">
                                <CloudRain size={18} className="text-blue-500" />
                            </div>
                            <span className="font-bold text-slate-800">29°C</span>
                        </div>
                        <div className="flex items-center justify-between text-sm group/day hover:bg-slate-50 p-2 rounded-xl transition-colors -mx-2">
                            <span className="font-bold text-slate-700 w-20">Monday</span>
                            <div className="flex-1 flex justify-center">
                                <Sun size={18} className="text-orange-500" />
                            </div>
                            <span className="font-bold text-slate-800">33°C</span>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default WeatherWidget;
