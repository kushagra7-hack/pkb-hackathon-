'use client';

import { Trophy, Flame, Star } from 'lucide-react';

export default function ProgressStats() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 p-1.5 bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50">

                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-white/5">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-white">Lvl 5</span>
                </div>

                <div className="w-px h-8 bg-white/10 mx-1"></div>

                <div className="flex items-center gap-2 px-4 py-2">
                    <Trophy className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-bold text-slate-200">2,340 pts</span>
                </div>

                <div className="w-px h-8 bg-white/10 mx-1"></div>

                <div className="flex items-center gap-2 px-4 py-2 pr-5">
                    <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
                    <span className="text-sm font-bold text-orange-400">12 Day Streak</span>
                </div>

            </div>
        </div>
    );
}
