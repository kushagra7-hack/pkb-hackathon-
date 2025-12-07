'use client';

import { Mic, ArrowRight, Sparkles, X, Loader2 } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function SituationInput() {
    const [situation, setSituation] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleAnalyze = async () => {
        if (!situation.trim()) return;

        setLoading(true);
        setResult(null);

        try {
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ situation })
            });
            const data = await res.json();
            if (data.analysis) {
                setResult(data.analysis);
            } else {
                setResult("Sorry, I couldn't analyze that. Please check if your API key is configured correctly.");
            }
        } catch (error) {
            setResult("Error connecting to the legal AI. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 relative z-10">
            <div className="glass-card p-1">
                <div className="bg-[#0f172a]/80 rounded-xl p-6 md:p-8 backdrop-blur-xl">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-accent" />
                        Describe Your Legal Situation
                    </label>

                    <div className="relative group">
                        <textarea
                            value={situation}
                            onChange={(e) => setSituation(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 md:p-6 text-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none transition-all resize-none min-h-[140px]"
                            placeholder="Example: Police stopped me without a warrant, my landlord is refusing to return deposit, or I faced online harassment..."
                        />
                        <button className="absolute right-4 bottom-4 p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700 group-hover:border-slate-600">
                            <Mic className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleAnalyze}
                            disabled={loading || !situation.trim()}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="relative z-10">{loading ? 'Analyzing...' : 'AI Analyze My Situation'}</span>
                            {loading ? (
                                <Loader2 className="w-5 h-5 relative z-10 animate-spin" />
                            ) : (
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Result Modal Overlay */}
            {result && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-[#0f172a] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setResult(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Sparkles className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Legal Analysis</h3>
                            </div>

                            <div className="prose prose-invert prose-blue max-w-none">
                                <ReactMarkdown>{result}</ReactMarkdown>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                                <button
                                    onClick={() => setResult(null)}
                                    className="px-6 py-2 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
