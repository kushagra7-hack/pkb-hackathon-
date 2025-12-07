'use client';

import { User } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex items-center gap-2 group cursor-pointer">
                <div className="relative">
                    <span className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300 block">⚖️</span>
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-black heading-gradient leading-none tracking-tight">NYAY JAGAT</span>
                    <span className="text-[0.65rem] font-bold text-slate-400 tracking-[0.2em] uppercase pl-0.5">Justice for All</span>
                </div>
            </div>

            <div className="relative group cursor-pointer">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-slate-400 font-medium">Welcome back</p>
                        <p className="text-sm font-bold text-white leading-none">Citizen</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-full shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                        <User className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
