import Link from "next/link";

interface UnitCardProps {
  code: string;
  functionLine: string;
  status: string;
  href: string;
  cta: string;
}

export default function UnitCard({ code, functionLine, status, href, cta }: UnitCardProps) {
  return (
    <Link 
      href={href}
      className="block border border-graphite bg-obsidian p-6 sm:p-8 hover:border-steel/30 transition-all duration-100 group"
    >
      <div className="space-y-3">
        <p className="system-text text-white text-sm sm:text-base">
          {code}
        </p>
        <p className="system-text text-steel text-xs sm:text-sm">
          {functionLine}
        </p>
        <p className="system-text text-steel/60 text-xs">
          {status}
        </p>
        <div className="pt-4">
          <span className="system-text text-white/80 text-xs group-hover:text-white transition-colors border-b border-steel/30 group-hover:border-white/50 pb-1">
            {cta}
          </span>
        </div>
      </div>
    </Link>
  );
}
