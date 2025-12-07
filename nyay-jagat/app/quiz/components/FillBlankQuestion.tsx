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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {question.question}
            </h2>

            <div className="mb-4">
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    disabled={showAnswer}
                    placeholder={type === 'oneword' ? "Type one word..." : "Type your answer..."}
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-[#667eea] focus:outline-none disabled:bg-gray-100"
                    onKeyPress={(e) => e.key === 'Enter' && !showAnswer && handleSubmit()}
                />

                {!showAnswer && (
                    <button
                        onClick={handleSubmit}
                        className="mt-3 px-6 py-2 bg-[#667eea] text-white rounded-lg hover:bg-[#764ba2] transition"
                    >
                        Submit Answer
                    </button>
                )}
            </div>

            {!showAnswer && (
                <p className="text-sm text-gray-500 italic">
                    Hint: {question.hint}
                </p>
            )}

            {showAnswer && (
                <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <p className="font-semibold text-green-800">
                        Correct Answer: {question.correctAnswer}
                    </p>
                    {answer.toLowerCase() === question.correctAnswer.toLowerCase() && (
                        <p className="text-green-600 mt-2">✓ You got it right!</p>
                    )}
                </div>
            )}
        </div>
    )
}