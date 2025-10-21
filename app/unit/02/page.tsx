import Link from "next/link";
import UnitSpec from "@/components/UnitSpec";
import { UNITS } from "@/lib/units";

export default function Unit02() {
  const unit = UNITS["02"];

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
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="system-text text-white text-2xl sm:text-3xl">
              {unit.title}
            </h1>
            <p className="system-text text-steel text-sm sm:text-base">
              FUNCTION : {unit.function}
            </p>
          </div>

          {/* Specs */}
          <UnitSpec 
            specs={unit.specs} 
            status={unit.status}
          />

          {/* CTA */}
          <div className="pt-8">
            <button 
              disabled
              className="system-text text-steel/40 text-sm border border-graphite px-6 py-3 cursor-not-allowed"
            >
              EXECUTE PURCHASE [ COMING SOON ]
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
