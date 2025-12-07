import { NextResponse } from 'next/server';
import { quizData } from '../../quiz/data/questions';

export async function GET() {
    return NextResponse.json(quizData);
}
