import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SituationInput from '../components/SituationInput';
import TopicCard from '../components/TopicCard';
import GameCard from '../components/GameCard';
import ProgressStats from '../components/ProgressStats';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] pb-32">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1e1b4b] to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="space-y-12 mb-20">
          <Hero />
          <SituationInput />
        </div>

        <div className="max-w-6xl mx-auto px-4 space-y-20">
          {/* Explore by Topic Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <h2 className="text-slate-400 font-bold tracking-widest text-sm uppercase">Or Explore By Topic</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TopicCard
                title="Fundamental Rights"
                icon="🛡️"
                href="/lesson/rights-101"
                color="rights"
              />
              <TopicCard
                title="Consumer Protection"
                icon="🛒"
                href="/lesson/consumer-rights"
                color="consumer"
              />
              <TopicCard
                title="Online Safety & Privacy"
                icon="🔐"
                href="/lesson/safety-online"
                color="online"
              />
            </div>
          </section>

          {/* Learn While Playing Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <h2 className="text-slate-400 font-bold tracking-widest text-sm uppercase">Learn While Playing</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GameCard
                title="Quiz Arena"
                description="5 min quick challenge to test your legal IQ"
                icon="🎯"
                href="/quiz"
                bgImage="from-violet-600 to-fuchsia-600"
              />
              <GameCard
                title="Legal Gaming"
                description="Chase & learn adventure in a virtual world"
                icon="🏃"
                href="/games"
                bgImage="from-blue-600 to-cyan-600"
              />
            </div>
          </section>
        </div>

        <ProgressStats />
      </div>
    </main>
  );
}
