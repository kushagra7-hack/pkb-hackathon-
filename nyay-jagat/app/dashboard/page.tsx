import ProgressRing from '../../components/ProgressRing';
import BadgeWall from '../../components/BadgeWall';

export default function Dashboard() {
    return (
        <div className="container section-padding">
            <h1 style={{ marginBottom: '2rem' }}>User Dashboard</h1>

            <div className="grid-3" style={{ marginBottom: '3rem' }}>
                <div className="glass-card">
                    <h3>Profile Overview</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ccc' }}></div>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Citizen User</p>
                            <p className="text-muted">Level 5 • Apprentice</p>
                        </div>
                    </div>
                </div>

                <BadgeWall />

                <div className="glass-card">
                    <h3>Daily Streak</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>5 Days</p>
                </div>
            </div>

            <h2 style={{ marginBottom: '1.5rem' }}>Current Progress</h2>
            <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
                <ProgressRing percentage={75} label="Constitution Basics" />
                <ProgressRing percentage={40} label="Consumer Rights" />
                <ProgressRing percentage={90} label="Cyber Safety" />
            </div>
        </div>
    );
}
