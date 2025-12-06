import Link from 'next/link'

export default function QuizCard({ title, description, link, count, icon }) {
    return (
        <article className="card" role="listitem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <h3 className="card-title">{title}</h3>
                <span style={{ fontSize: '1.5rem' }}>{icon}</span>
            </div>

            <p className="card-summary">{description}</p>

            <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {count} Questions
                </span>
                <Link href={link} className="read-more">
                    Start Quiz <span>→</span>
                </Link>
            </div>
        </article>
    )
}
