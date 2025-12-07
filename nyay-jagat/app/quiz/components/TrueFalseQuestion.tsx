'use client'

export default function TrueFalseQuestion({
    question,
    showAnswer,
    onSelect
}) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {question.statement}
            </h2>

            <div className="flex gap-4 justify-center">
                <button
                    onClick={() => !showAnswer && onSelect(true)}
                    disabled={showAnswer}
                    className={`flex-1 max-w-xs p-6 text-xl font-bold rounded-xl border-3 transition-all ${showAnswer && question.correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-700'
                        : 'bg-green-50 border-green-200 text-green-600 hover:bg-green-100'
                        }`}
                >
                    ✓ TRUE
                </button>

                <button
                    onClick={() => !showAnswer && onSelect(false)}
                    disabled={showAnswer}
                    className={`flex-1 max-w-xs p-6 text-xl font-bold rounded-xl border-3 transition-all ${showAnswer && !question.correctAnswer
                        ? 'bg-red-100 border-red-500 text-red-700'
                        : 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100'
                        }`}
                >
                    ✗ FALSE
                </button>
            </div>

            {showAnswer && (
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                    <p className="font-semibold text-blue-800">
                        {question.explanation}
                    </p>
                </div>
            )}
        </div>
    )
}