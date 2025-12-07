'use client'

import { useState } from 'react'



export default function FillBlankQuestion({
    question,
    showAnswer,
    onSubmit,
    type
}) {
    const [answer, setAnswer] = useState('')

    const handleSubmit = () => {
        if (answer.trim()) {
            onSubmit(answer)
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                {question.question}
            </h2>

            <div className="mb-8">
                <div className="relative">
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        disabled={showAnswer}
                        placeholder={type === 'oneword' ? "Type one word..." : "Type your answer..."}
                        className="w-full bg-slate-900/50 border border-slate-600 text-white p-5 rounded-xl text-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all disabled:opacity-50 disabled:bg-slate-800"
                        onKeyPress={(e) => e.key === 'Enter' && !showAnswer && handleSubmit()}
                    />
                    {!showAnswer && (
                        <div className="absolute right-2 top-2">
                            <button
                                onClick={handleSubmit}
                                disabled={!answer.trim()}
                                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {!showAnswer && (
                <div className="mt-4 flex items-center gap-2 text-slate-400 bg-slate-800/50 p-3 rounded-lg w-fit">
                    <span className="font-bold text-primary text-sm uppercase tracking-wide">Hint</span>
                    <span className="text-sm italic">{question.hint}</span>
                </div>
            )}

            {showAnswer && (
                <div className="mt-6 p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <p className="font-bold text-green-400 mb-1 uppercase text-xs tracking-wider">Correct Answer</p>
                    <p className="font-bold text-2xl text-white">
                        {question.correctAnswer}
                    </p>
                    {answer.toLowerCase() === question.correctAnswer.toLowerCase() && (
                        <div className="flex items-center gap-2 mt-4 text-green-400 font-medium">
                            <span className="p-1 bg-green-500/20 rounded-full">✓</span>
                            You got it right!
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}