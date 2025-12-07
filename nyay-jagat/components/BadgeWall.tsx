"use client";
import React from 'react';

const earnedBadges = [
    { id: 1, name: "Rights Defender", icon: "🛡️", unlocked: true },
    { id: 2, name: "Quiz Master", icon: "🎓", unlocked: true },
    { id: 3, name: "Consumer Hero", icon: "🛒", unlocked: false },
    { id: 4, name: "Cyber Guardian", icon: "💻", unlocked: false },
];

export default function BadgeWall() {
    return (
        <div className="glass-card">
            <h3 style={{ marginBottom: '1.5rem' }}>Your Badges</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
                {earnedBadges.map((badge) => (
                    <div key={badge.id} style={{ opacity: badge.unlocked ? 1 : 0.4 }}>
                        <div style={{
                            fontSize: '2.5rem',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 0.5rem auto',
                            border: badge.unlocked ? '2px solid var(--color-accent)' : '2px dashed #444'
                        }}>
                            {badge.icon}
                        </div>
                        <span style={{ fontSize: '0.8rem' }}>{badge.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
