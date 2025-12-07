import { notFound } from 'next/navigation'
import lessons from '../../../data/lessons.json'
import QuizClient from '../../../components/QuizClient'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { id } = await params;
  const lesson = lessons.find(l => l.id === id)
  if (!lesson) return notFound()

  return (
    <div className="min-h-screen bg-[#0f172a] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <article className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>

          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">Fundamental Lesson</span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{lesson.title}</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8"></div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p className="leading-relaxed">{lesson.content}</p>
          </div>

          <div className="mt-12">
            <QuizClient lessonId={lesson.id} questions={lesson.quiz || []} />
          </div>
        </article>
      </div>
    </div>
  )
}
