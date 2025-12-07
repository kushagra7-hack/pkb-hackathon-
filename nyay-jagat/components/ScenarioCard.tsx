"use client";
import React from 'react';

export default function ScenarioCard({ title, scenario, options }) {
    return (
        <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{title}</h4>
            <p style={{ marginBottom: '1.5rem' }}>{scenario}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {options.map((opt, i) => (
                    <button key={i} className="btn" style={{
                        textAlign: 'left',
                        background: 'rgba(255,255,255,0.05)',
                        fontSize: '0.9rem'
                    }}>
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}
