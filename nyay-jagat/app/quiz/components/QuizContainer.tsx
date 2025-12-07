'use client'

import { useState, useEffect } from 'react'
import MCQQuestion from './MCQQuestion'
import FillBlankQuestion from './FillBlankQuestion'
import TrueFalseQuestion from './TrueFalseQuestion'



export default function QuizContainer({ initialSection = 'mcq' }) {
    const [quizData, setQuizData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentSection, setCurrentSection] = useState(initialSection)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/quiz')
                const data = await res.json()
                setQuizData(data)
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch quiz data:', error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return (
        <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    )
    if (!quizData) return <div className="text-center p-8 text-red-400">Failed to load quiz data.</div>

    const getCurrentQuestion = () => {
        switch (currentSection) {
            case 'mcq':
                return quizData.mcqs[currentIndex]
            case 'fill':
                return quizData.fillBlanks[currentIndex]
            case 'oneword':
                return quizData.oneWord[currentIndex]
            case 'tf':
                return quizData.trueFalse[currentIndex]
        }
    }

    const handleNext = () => {
        setShowAnswer(false)
        setSelectedAnswer(null)

        if (currentSection === 'mcq' && currentIndex < quizData.mcqs.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else if (currentSection === 'mcq') {
            setCurrentSection('fill')
            setCurrentIndex(0)
        } else if (currentSection === 'fill' && currentIndex < quizData.fillBlanks.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else if (currentSection === 'fill') {
            setCurrentSection('oneword')
            setCurrentIndex(0)
        } else if (currentSection === 'oneword' && currentIndex < quizData.oneWord.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else if (currentSection === 'oneword') {
            setCurrentSection('tf')
            setCurrentIndex(0)
        } else if (currentIndex < quizData.trueFalse.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const currentQuestion = getCurrentQuestion()

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="glass-card rounded-2xl p-8 mb-8 relative overflow-hidden border border-white/10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600"></div>
                <h1 className="text-4xl font-black text-center mb-2 text-white tracking-tight">
                    Legal Awareness Quiz
                </h1>
                <div className="flex justify-center items-center gap-4 mt-4 text-slate-400">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium uppercase tracking-wider">
                        {currentSection.toUpperCase()}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span className="text-sm font-medium">Question {currentIndex + 1}</span>
                </div>
            </div>

            {/* Quiz Body */}
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 relative">
                {currentSection === 'mcq' && (
                    <MCQQuestion
                        question={currentQuestion}
                        showAnswer={showAnswer}
                        selectedAnswer={selectedAnswer}
                        onSelect={(answer) => {
                            setSelectedAnswer(answer)
                            setShowAnswer(true)
                        }}
                    />
                )}

                {(currentSection === 'fill' || currentSection === 'oneword') && (
                    <FillBlankQuestion
                        question={currentQuestion}
                        showAnswer={showAnswer}
                        onSubmit={(answer) => {
                            setSelectedAnswer(answer)
                            setShowAnswer(true)
                        }}
                        type={currentSection}
                    />
                )}

                {currentSection === 'tf' && (
                    <TrueFalseQuestion
                        question={currentQuestion}
                        showAnswer={showAnswer}
                        onSelect={(answer) => {
                            setSelectedAnswer(answer)
                            setShowAnswer(true)
                        }}
                    />
                )}

                {/* Navigation */}
                <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div className="text-slate-400 font-medium">
                        Score: <span className="text-primary font-bold">{score}</span> / 50
                    </div>
                    <button
                        onClick={handleNext}
                        className="group relative px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
                    >
                        Next Question
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </div>
    )
}