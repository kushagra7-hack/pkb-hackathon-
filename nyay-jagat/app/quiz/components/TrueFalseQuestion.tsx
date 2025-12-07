'use client'

export default function TrueFalseQuestion({
    question,
    showAnswer,
    onSelect
}) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                {question.statement}
            </h2>

            <div className="flex gap-6 justify-center">
                <button
                    onClick={() => !showAnswer && onSelect(true)}
                    disabled={showAnswer}
                    className={`flex-1 max-w-xs p-8 text-xl font-bold rounded-2xl border transition-all duration-300 transform hover:scale-105 ${showAnswer && question.correctAnswer
                            ? 'bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                            : 'bg-green-900/10 border-green-500/30 text-green-500 hover:bg-green-500/20 hover:border-green-500'
                        }`}
                >
                    ✓ TRUE
                </button>

                <button
                    onClick={() => !showAnswer && onSelect(false)}
                    disabled={showAnswer}
                    className={`flex-1 max-w-xs p-8 text-xl font-bold rounded-2xl border transition-all duration-300 transform hover:scale-105 ${showAnswer && !question.correctAnswer
                            ? 'bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.3)]'
                            : 'bg-red-900/10 border-red-500/30 text-red-500 hover:bg-red-500/20 hover:border-red-500'
                        }`}
                >
                    ✗ FALSE
                </button>
            </div>

            {showAnswer && (
                <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <p className="font-bold text-blue-500 mb-2 uppercase text-xs tracking-wider">Fact Check</p>
                    <p className="text-blue-200/90 leading-relaxed">
                        {question.explanation}
                    </p>
                </div>
            )}
        </div>
    )
}