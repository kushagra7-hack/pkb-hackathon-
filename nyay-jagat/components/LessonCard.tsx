import Link from 'next/link'

export default function LessonCard({ lesson }) {
  return (
    <article className="card" role="listitem">
      <h3 className="card-title">{lesson.title}</h3>
      <p className="card-summary">{lesson.summary}</p>
      <div className="card-footer">
        <Link href={`/lesson/${lesson.id}`} className="read-more">
          Read Lesson <span>→</span>
        </Link>
      </div>
    </article>
  )
}
