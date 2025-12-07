'use client'
import { useState, useMemo } from 'react'
import lessons from '../data/lessons.json'
import LessonCard from './LessonCard'
import SearchLawsClient from './SearchLawsClient'
import Fuse from 'fuse.js'

import { quizData } from '../app/quiz/data/questions'
import QuizCard from './QuizCard'

export default function HomeClient() {
  const [query, setQuery] = useState('')
  const fuse = useMemo(() => new Fuse(lessons, { keys: ['title', 'summary', 'content'], threshold: 0.3 }), [])
  const filtered = query.trim() ? fuse.search(query).map(r => r.item) : lessons

  return (
    <section>
      <SearchLawsClient query={query} setQuery={setQuery} />

      <div className="container space-y-12">
        {/* Quizzes Section */}
        {!query && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4 md:px-0">Practice Quizzes</h2>
            <div className="grid" role="list">
              <QuizCard
                title="Multiple Choice"
                description="Test your knowledge with multiple choice questions"
                link="/quiz?section=mcq"
                count={quizData.mcqs.length}
                icon="📝"
              />
              <QuizCard
                title="Fill in Blanks"
                description="Complete the sentences with correct legal terms"
                link="/quiz?section=fill"
                count={quizData.fillBlanks.length}
                icon="✍️"
              />
              <QuizCard
                title="One Word"
                description="Answer legal questions in a single word"
                link="/quiz?section=oneword"
                count={quizData.oneWord.length}
                icon="🎯"
              />
              <QuizCard
                title="True / False"
                description="Identify correct legal statements"
                link="/quiz?section=tf"
                count={quizData.trueFalse.length}
                icon="⚖️"
              />
            </div>
          </div>
        )}

        {/* Lessons Section */}
        <div>
          {!query && <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4 md:px-0">Learn Laws</h2>}
          <div className="grid" role="list">
            {filtered.map(l => <LessonCard key={l.id} lesson={l} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
