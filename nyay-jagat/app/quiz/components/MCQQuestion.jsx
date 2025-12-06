'use client'



export default function MCQQuestion({
    question,
    showAnswer,
    selectedAnswer,
    onSelect
}) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {question.question}
            </h2>

            <div className="space-y-3">
                {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === question.correctAnswer

                    let bgColor = 'bg-gray-50 border-gray-300'
                    if (showAnswer) {
                        if (isCorrect) bgColor = 'bg-green-100 border-green-500'
                        else if (isSelected) bgColor = 'bg-red-100 border-red-500'
                    } else if (isSelected) {
                        bgColor = 'bg-blue-50 border-blue-400'
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => !showAnswer && onSelect(index)}
                            disabled={showAnswer}
                            className={`w-full p-4 text-left border-2 rounded-lg option-hover ${bgColor} ${!showAnswer ? 'cursor-pointer' : 'cursor-default'
                                }`}
                        >
                            <span className="font-semibold mr-3">{String.fromCharCode(97 + index)})</span>
                            {option}
                            {showAnswer && isCorrect && <span className="ml-3 text-green-600">✓</span>}
                        </button>
                    )
                })}
            </div>

            {showAnswer && (
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p className="font-semibold text-yellow-800">
                        Explanation: {question.explanation}
                    </p>
                </div>
            )}
        </div>
    )
}