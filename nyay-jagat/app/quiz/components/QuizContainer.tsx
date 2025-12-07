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

    if (loading) return <div className="text-center p-8">Loading quiz data...</div>
    if (!quizData) return <div className="text-center p-8">Failed to load quiz data.</div>

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
            <div className="bg-white rounded-t-2xl shadow-lg p-6 quiz-gradient text-white">
                <h1 className="text-3xl font-bold text-center mb-2">
                    Legal Awareness Quiz
                </h1>
                <p className="text-center text-lg opacity-90">
                    Section: {currentSection.toUpperCase()} | Question {currentIndex + 1}
                </p>
            </div>

            {/* Quiz Body */}
            <div className="bg-white rounded-b-2xl shadow-lg p-8 mb-6">
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
                <div className="mt-8 flex justify-between items-center">
                    <div className="text-gray-600">
                        Score: {score} / 50
                    </div>
                    <button
                        onClick={handleNext}
                        className="px-8 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold rounded-lg hover:scale-105 transition-transform"
                    >
                        Next Question →
                    </button>
                </div>
            </div>
        </div>
    )
}