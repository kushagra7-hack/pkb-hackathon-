import '../styles/globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Legal Literacy',
  description: 'Legal awareness for citizens — lessons, search, and quizzes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="site-footer">© {new Date().getFullYear()} Legal Literacy</footer>
      </body>
    </html>
  );
}
