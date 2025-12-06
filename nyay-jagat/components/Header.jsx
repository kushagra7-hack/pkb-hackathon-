import Link from 'next/link'

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-inner container">
        <h1 className="site-title"><Link href="/">Legal Literacy</Link></h1>
        <nav aria-label="Main navigation">
          <Link href="/" className="nav-link">Home</Link>
        </nav>
      </div>
    </header>
  )
}
