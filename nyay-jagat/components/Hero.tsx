'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="text-center py-10 md:py-16 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider mb-6">
                    DEMOCRATIZING JUSTICE
                </span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                    <span className="text-white">Know Your Rights.</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary">
                        Own Your Future.
                    </span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Simplifying laws for every citizen through AI, gamification, and interactive learning.
                </p>
            </motion.div>
        </div>
    );
}
