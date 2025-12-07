'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface TopicCardProps {
    title: string;
    icon: string;
    href: string;
    color: 'rights' | 'consumer' | 'online' | 'support';
}

export default function TopicCard({ title, icon, href, color }: TopicCardProps) {
    const colorMap = {
        rights: 'from-red-500/20 to-orange-500/20 border-red-500/30 text-red-500',
        consumer: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-500',
        online: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
        support: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400'
    };

    const hoverBorderMap = {
        rights: 'group-hover:border-red-500/50',
        consumer: 'group-hover:border-emerald-500/50',
        online: 'group-hover:border-blue-500/50',
        support: 'group-hover:border-purple-500/50'
    };

    return (
        <Link href={href} className="flex-1 min-w-[280px]">
            <div className={clsx(
                "group h-full relative p-6 rounded-2xl border bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:-translate-y-2",
                colorMap[color],
                hoverBorderMap[color]
            )}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>

                <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 w-fit">{icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{title}</h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold opacity-60 group-hover:opacity-100 group-hover:gap-3 transition-all mt-4">
                        Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
