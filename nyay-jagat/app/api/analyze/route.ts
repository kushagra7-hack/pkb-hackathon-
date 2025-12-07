import { Groq } from 'groq-sdk';
import { NextResponse } from 'next/server';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function POST(req: Request) {
    try {
        const { situation } = await req.json();

        if (!situation) {
            return NextResponse.json({ error: 'Situation is required' }, { status: 400 });
        }

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are a legal advisor AI assistant for Indian citizens. 
                    Analyze the user's situation and provide:
                    1. Potential Legal Issues (What laws might be involved?)
                    2. Immediate Actions (What should they do right now?)
                    3. Relevant Rights (Which fundamental rights protect them?)
                    Keep the language simple, empathetic, and actionable. 
                    Format the response in Markdown.`
                },
                {
                    role: 'user',
                    content: situation
                }
            ],
            model: 'llama-3.3-70b-versatile',
        });

        const analysis = completion.choices[0]?.message?.content || "Could not analyze the situation.";

        return NextResponse.json({ analysis });

    } catch (error: any) {
        console.error('Groq API Error:', error);
        const errorMessage = error?.error?.message || error.message || 'Unknown error';
        return NextResponse.json({ error: 'Failed to analyze situation', details: errorMessage }, { status: 500 });
    }
}
