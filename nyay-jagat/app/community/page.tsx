export default function Community() {
    return (
        <div className="container section-padding">
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <h1>Community & Act</h1>
                <p className="text-muted" style={{ fontSize: '1.2rem', margin: '1rem 0 3rem 0' }}>Connect with legal experts and other citizens.</p>

                <div className="glass-card" style={{ marginBottom: '2rem' }}>
                    <h3>📢 Community Forum</h3>
                    <p style={{ margin: '1rem 0' }}>Coming Soon: Discuss legal issues and share awareness.</p>
                    <button className="btn btn-primary">Join Waitlist</button>
                </div>

                <div className="grid-3">
                    <div className="glass-card">
                        <h4>🤖 Personalized AI</h4>
                        <p className="text-muted">Get legal answers instantly.</p>
                    </div>
                    <div className="glass-card">
                        <h4>🎙️ Voice Assistant</h4>
                        <p className="text-muted">Accessible legal help.</p>
                    </div>
                    <div className="glass-card">
                        <h4>📂 Document Library</h4>
                        <p className="text-muted">Templates for legal docs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
