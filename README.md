
# Nyay Jagat - Legal Literacy Platform

Nyay Jagat is a gamified legal literacy platform designed to make learning about rights, laws, and the constitution engaging and accessible.

## 🚀 Features

-   *Interactive Lessons*: Learn about Fundamental Rights, Consumer Protection, and Online Safety.
-   *Quiz Arena*: Test your knowledge with dynamic quizzes (MCQ, Fill in the blanks, True/False) and earn points.
-   *AI Legal Assistant*: Analyze your legal situations using our AI-powered tool (/api/analyze).
-   *Gamification*:
    -   *Points System*: Earn 10 points for every correct answer.
    -   *Leveling*: Level up as you gain XP.
    -   *Daily Streak*: Track your learning consistency.
-   *Premium UI*: Dark mode, glassmorphism design, and smooth animations.

## 🛠️ Tech Stack

-   *Frontend*: Next.js 15 (React), Tailwind CSS, Framer Motion, Lucide React.
-   *Backend*: Express.js (Node.js).
-   *AI*: Groq SDK (Llama 3 70b).
-   *State Management*: React Hooks + LocalStorage.

## 🏁 Getting Started

### Prerequisites

-   Node.js installed.
-   Groq API Key (in .env.local).

### 📦 Installation

bash
npm install
cd backend
npm install
cd ..


### ▶️ Running the App

We have added a convenient command to run both the Frontend and Backend simultaneously:

bash
npm run dev:all


-   *Frontend*: http://localhost:3000
-   *Backend*: http://localhost:5000

## 📁 Project Structure

-   app/: Frontend pages (Next.js).
-   backend/: Express server and API routes.
-   components/: Reusable UI components.
-   hooks/: Custom React hooks (e.g., useUserProgress).
-   data/: Static data (lessons, quizzes).

## 📝 Assignments

-   [x] Separate Frontend & Backend.
-   [x] Implement Dynamic Quizzes.
-   [x] Create Dashboard (Level, Streak).

---
*Created by ayush and kushagra *
and ui degsined by rajkumar and sujal# pkb-hackathon-
this is pkb hackathon repo for my team
author:kushagra
player 1 : [Rajkumar]
player 2 : [Ayush] 
player 3 : [sujal]


# Legal Literacy (Next.js 15) - Upgraded

This is an upgraded Next.js 15 starter site for **Legal Awareness for Citizens**.
It includes a polished UI, client/server component separation, search, quizzes,
VS Code settings, and a Vercel deployment config.

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```
2. Run dev server
   ```bash
   npm run dev
   ```
3. Build
   ```bash
   npm run build
   npm start
   ```

## Notes
- Uses App Router (`app/`) and `app/layout.jsx` which is required for Next.js 13+ App Router.
- Client components are marked with `'use client'`.
- Seed data lives in `data/lessons.json`.

