'use client'
import { useState, useMemo } from 'react'
import lessons from '../data/lessons.json'
import LessonCard from './LessonCard'
import SearchLawsClient from './SearchLawsClient'
import Fuse from 'fuse.js'

export default function HomeClient() {
  const [query, setQuery] = useState('')
  const fuse = useMemo(() => new Fuse(lessons, { keys: ['title', 'summary', 'content'], threshold: 0.3 }), [])
  const filtered = query.trim() ? fuse.search(query).map(r => r.item) : lessons

  return (
    <section>
      <SearchLawsClient query={query} setQuery={setQuery} />
      <div className="container">
        <div className="grid" role="list">
          {filtered.map(l => <LessonCard key={l.id} lesson={l} />)}
        </div>
      </div>
    </section>
  )
}
