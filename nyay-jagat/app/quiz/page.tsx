import QuizContainer from './components/QuizContainer'

interface QuizPageProps {
    searchParams: Promise<{ section?: string }>;
}

export default async function QuizPage({ searchParams }: QuizPageProps) {
    const { section = 'mcq' } = await searchParams;
    return (
        <main className="min-h-screen p-4 md:p-8 bg-gray-50">
            <QuizContainer initialSection={section} />
        </main>
    )
}
