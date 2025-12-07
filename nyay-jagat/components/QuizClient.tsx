'use client'
import { useState } from 'react'

interface Question {
  q: string;
  a: string[];
  ans: number;
}

interface QuizClientProps {
  lessonId?: string;
  questions?: Question[];
}

export default function QuizClient({ lessonId, questions = [] }: QuizClientProps) {
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const currentQuestions = questions.length > 0 ? questions : [
    { q: 'No questions available for this lesson yet.', a: ['Ok'], ans: 0 }
  ];

  const submit = (choice: number) => {
    if (choice === currentQuestions[i].ans) setScore(s => s + 1)
    if (i + 1 === currentQuestions.length) setDone(true)
    else setI(i + 1)
  }

  if (done) return <div className="p-4 bg-green-500/20 text-green-300 rounded-lg text-center font-bold">You scored {score} / {currentQuestions.length}</div>

  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <h4 className="text-xl font-bold text-white mb-4">Topic Quiz {lessonId ? <span className="text-sm font-normal text-slate-400 ml-2">(Lesson: {lessonId})</span> : ''}</h4>
      <p className="text-lg text-slate-300 mb-6">{currentQuestions[i].q}</p>
      <div className="flex flex-col gap-3">
        {currentQuestions[i].a.map((opt, idx) => (
          <button key={idx} onClick={() => submit(idx)} className="btn-primary w-full text-left justify-start">{opt}</button>
        ))}
      </div>
    </div>
  )
}
