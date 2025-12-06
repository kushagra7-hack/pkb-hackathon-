'use client'

export default function SearchLawsClient({ query, setQuery }) {
  return (
    <section className="hero-search">
      <div className="container">
        <h2 className="hero-title">Find Legal Knowledge</h2>
        <p className="hero-subtitle">Search through our comprehensive database of legal lessons, laws, and quizzes to empower yourself.</p>

        <div className="search-container">
          <svg className="search-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            className="search-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search topics, laws, or keywords..."
            aria-label="Search lessons and laws"
          />
        </div>
      </div>
    </section>
  )
}
