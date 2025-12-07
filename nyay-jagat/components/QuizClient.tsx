'use client'
import { useState } from 'react'

const sample = [
  { q: 'Which body makes laws?', a: ['Parliament', 'Supreme Court', 'Police'], ans: 0 },
  { q: 'True or False: Ignorance of law is an excuse?', a: ['True', 'False'], ans: 1 }
]

interface QuizClientProps {
  lessonId?: string;
}

export default function QuizClient({ lessonId }: QuizClientProps) {
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const submit = (choice: number) => {
    if (choice === sample[i].ans) setScore(s => s + 1)
    if (i + 1 === sample.length) setDone(true)
    else setI(i + 1)
  }
  if (done) return <div className="p-4 bg-green-500/20 text-green-300 rounded-lg text-center font-bold">You scored {score} / {sample.length}</div>
  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <h4 className="text-xl font-bold text-white mb-4">Topic Quiz {lessonId ? <span className="text-sm font-normal text-slate-400 ml-2">(Lesson: {lessonId})</span> : ''}</h4>
      <p className="text-lg text-slate-300 mb-6">{sample[i].q}</p>
      <div className="flex flex-col gap-3">
        {sample[i].a.map((opt, idx) => (
          <button key={idx} onClick={() => submit(idx)} className="btn-primary w-full text-left justify-start">{opt}</button>
        ))}
      </div>
    </div>
  )
}
