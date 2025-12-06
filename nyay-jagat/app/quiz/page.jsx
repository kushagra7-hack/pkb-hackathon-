import QuizContainer from './components/QuizContainer'
import { quizData } from './data/questions'

export default function QuizPage({ searchParams }) {
    const section = searchParams?.section || 'mcq'
    return (
        <main className="min-h-screen p-4 md:p-8 bg-gray-50">
            <QuizContainer quizData={quizData} initialSection={section} />
        </main>
    )
}
