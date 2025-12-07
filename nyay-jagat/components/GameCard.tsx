'use client';

import Link from 'next/link';

interface GameCardProps {
    title: string;
    description: string;
    icon: string;
    href: string;
    bgImage?: string;
}

export default function GameCard({ title, description, icon, href, bgImage }: GameCardProps) {
    return (
        <Link href={href} className="flex-1 min-w-[300px]">
            <div className="group relative h-48 rounded-2xl overflow-hidden border border-white/10">
                {/* Background Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bgImage || 'from-indigo-600 to-purple-700'} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                        <span className="text-4xl filter drop-shadow-md transform group-hover:rotate-12 transition-transform duration-300">{icon}</span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                            Play Now
                        </span>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-white mb-1">{title}</h3>
                        <p className="text-white/80 font-medium text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
