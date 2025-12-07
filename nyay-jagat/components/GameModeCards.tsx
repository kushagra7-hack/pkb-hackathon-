"use client";
import React from 'react';

const modes = [
    {
        title: "LEARN",
        description: "Fundamental Rights & Consumer Protection",
        color: "var(--color-rights)",
        items: ["Fundamental Rights", "Consumer Protection"],
        path: "/learn"
    },
    {
        title: "PLAY",
        description: "Simulation Games & Quizzes",
        color: "var(--color-primary)",
        items: ["Quiz Arena", "Gaming Mode"],
        path: "/dashboard"
    },
    {
        title: "ACT",
        description: "AI Tools & Assistance",
        color: "var(--color-accent)",
        items: ["Personalized AI", "Voice Assistant"],
        path: "/community"
    }
];

export default function GameModeCards() {
    return (
        <div className="container section-padding">
            <div className="grid-3">
                {modes.map((mode, index) => (
                    <div key={index} className="glass-card" style={{
                        borderTop: `4px solid ${mode.color}`,
                        transition: 'transform 0.3s'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: mode.color }}>{mode.title}</h3>
                        <p style={{ marginBottom: '1.5rem', minHeight: '3rem' }}>{mode.description}</p>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            {mode.items.map((item, i) => (
                                <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    ► {item}
                                </li>
                            ))}
                        </ul>
                        <a className="btn" style={{ background: `rgba(255,255,255,0.1)`, width: '100%', textAlign: 'center' }} href={mode.path}>
                            Explore {mode.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
