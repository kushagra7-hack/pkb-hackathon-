import { notFound } from 'next/navigation'
import lessons from '../../../data/lessons.json'
import QuizClient from '../../../components/QuizClient'

export default function LessonPage({ params }) {
  const { id } = params
  const lesson = lessons.find(l => l.id === id)
  if (!lesson) return notFound()
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <article className="card">
        <h2>{lesson.title}</h2>
        <p>{lesson.content}</p>
        <QuizClient lessonId={lesson.id} />
      </article>
    </div>
  )
}
