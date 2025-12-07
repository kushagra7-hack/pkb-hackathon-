import ScenarioCard from '../../components/ScenarioCard';

export default function Learn() {
    return (
        <div className="container section-padding">
            <h1 style={{ marginBottom: '2rem' }}>Learning Modules</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                <div>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--color-rights)' }}>Fundamental Rights</h2>
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '0.5rem' }}>Article 19: Freedom of Speech</h3>
                        <p className="text-muted" style={{ marginBottom: '1rem' }}>Understanding your right to express opinions freely.</p>
                        <button className="btn btn-primary">Start Lesson</button>
                    </div>
                </div>

                <div>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--color-consumer)' }}>Consumer Protection</h2>
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '0.5rem' }}>Defective Goods</h3>
                        <p className="text-muted" style={{ marginBottom: '1rem' }}>What to do when you receive a damaged product.</p>
                        <button className="btn btn-primary">Start Lesson</button>
                    </div>
                </div>
            </div>

            <h2 style={{ margin: '3rem 0 1.5rem 0' }}>Practice Scenarios</h2>
            <ScenarioCard
                title="Denied Entry to Park"
                scenario="You are stopped from entering a public park because of your attire. Is this a violation of your rights?"
                options={["Yes, Article 15 prohibits discrimination.", "No, parks can have dress codes.", "Not sure, need to check laws."]}
            />
        </div>
    );
}
