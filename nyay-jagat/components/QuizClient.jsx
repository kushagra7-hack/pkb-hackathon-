'use client'
import { useState } from 'react'

const sample = [
  { q: 'Which body makes laws?', a: ['Parliament', 'Supreme Court', 'Police'], ans: 0 },
  { q: 'True or False: Ignorance of law is an excuse?', a: ['True', 'False'], ans: 1 }
]

export default function QuizClient() {
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const submit = (choice) => {
    if (choice === sample[i].ans) setScore(s => s + 1)
    if (i + 1 === sample.length) setDone(true)
    else setI(i + 1)
  }
  if (done) return <div className="quiz-result">You scored {score} / {sample.length}</div>
  return (
    <div className="quiz-section" style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
      <h4>Topic Quiz</h4>
      <p>{sample[i].q}</p>
      <div className="quiz-options">
        {sample[i].a.map((opt, idx) => (
          <button key={idx} onClick={() => submit(idx)} className="btn">{opt}</button>
        ))}
      </div>
    </div>
  )
}
