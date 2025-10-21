import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-graphite py-6 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="system-text text-steel/60 hover:text-steel text-xs transition-colors"
          >
            ← RETURN TO SYSTEM
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="system-text text-white text-2xl sm:text-3xl">
            TERMS OF SERVICE
          </h1>
          
          <div className="space-y-6 text-steel/80 font-mono text-sm leading-relaxed">
            <p>Last updated: {new Date().toISOString().split('T')[0]}</p>
            
            <p>
              These terms of service are a placeholder. The full terms will be added before the site goes live.
            </p>
            
            <p>
              For questions, contact: ops@zero9.co
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
