import QuizContainer from './components/QuizContainer'

interface QuizPageProps {
    searchParams: Promise<{ section?: string }>;
}

export default async function QuizPage({ searchParams }: QuizPageProps) {
    const { section = 'mcq' } = await searchParams;
    return (
        <main className="min-h-screen p-4 md:p-8 bg-[#0f172a] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
            <QuizContainer initialSection={section} />
        </main>
    )
}
