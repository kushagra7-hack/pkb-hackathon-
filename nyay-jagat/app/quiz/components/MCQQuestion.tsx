'use client'



export default function MCQQuestion({
    question,
    showAnswer,
    selectedAnswer,
    onSelect
}) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                {question.question}
            </h2>

            <div className="space-y-4">
                {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === question.correctAnswer

                    let bgColor = 'bg-slate-800/50 border-white/10 hover:bg-slate-700/50'
                    let textColor = 'text-slate-300'

                    if (showAnswer) {
                        if (isCorrect) {
                            bgColor = 'bg-green-500/20 border-green-500/50'
                            textColor = 'text-green-300'
                        }
                        else if (isSelected) {
                            bgColor = 'bg-red-500/20 border-red-500/50'
                            textColor = 'text-red-300'
                        }
                    } else if (isSelected) {
                        bgColor = 'bg-primary/20 border-primary'
                        textColor = 'text-white'
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => !showAnswer && onSelect(index)}
                            disabled={showAnswer}
                            className={`w-full p-5 text-left border rounded-xl transition-all duration-200 group ${bgColor} ${!showAnswer ? 'cursor-pointer hover:border-primary/50' : 'cursor-default'}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`flex items-center justify-center w-8 h-8 rounded-full border text-sm font-bold transition-colors ${isSelected || (showAnswer && isCorrect) ? 'border-transparent bg-white/10' : 'border-white/20 text-slate-400 group-hover:border-primary/50 group-hover:text-primary'
                                    }`}>
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className={`font-medium text-lg flex-1 ${textColor}`}>
                                    {option}
                                </span>
                                {showAnswer && isCorrect && (
                                    <span className="text-green-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </span>
                                )}
                            </div>
                        </button>
                    )
                })}
            </div>

            {showAnswer && (
                <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                    <p className="font-bold text-amber-500 mb-2 uppercase text-xs tracking-wider">Explanation</p>
                    <p className="text-amber-200/90 leading-relaxed">
                        {question.explanation}
                    </p>
                </div>
            )}
        </div>
    )
}