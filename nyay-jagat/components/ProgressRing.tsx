"use client";
import React from 'react';

export default function ProgressRing({ percentage = 0, label = "Progress" }) {
    const radius = 50;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', width: radius * 3, height: radius * 3, margin: '0 auto' }}>
                <svg
                    height={radius * 3}
                    width={radius * 3}
                    style={{ transform: 'rotate(-90deg)' }}
                >
                    <circle
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth={stroke}
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius * 1.5}
                        cy={radius * 1.5}
                    />
                    <circle
                        stroke="var(--color-accent)"
                        strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease' }}
                        strokeLinecap="round"
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius * 1.5}
                        cy={radius * 1.5}
                    />
                </svg>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                }}>
                    {percentage}%
                </div>
            </div>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>{label}</p>
        </div>
    );
}
