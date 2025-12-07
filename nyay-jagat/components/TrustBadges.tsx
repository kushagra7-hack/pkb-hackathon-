"use client";
import React from 'react';

const badges = [
    { text: "Constitution Compliant", icon: "⚖️" },
    { text: "Expert Verified", icon: "✓" },
    { text: "Secure Platform", icon: "🔒" },
];

export default function TrustBadges() {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', padding: '2rem 0', opacity: 0.8 }}>
            {badges.map((badge, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{badge.icon}</span>
                    <span style={{ fontWeight: '500' }}>{badge.text}</span>
                </div>
            ))}
        </div>
    );
}
