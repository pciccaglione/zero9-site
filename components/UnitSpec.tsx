interface UnitSpecProps {
  specs: string[];
  status: string;
  lastUpdate?: string;
}

export default function UnitSpec({ specs, status, lastUpdate }: UnitSpecProps) {
  const updateDate = lastUpdate || new Date().toISOString().split('T')[0];
  
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="system-text text-steel/60 text-xs">
          STATUS : {status}
        </p>
        <p className="system-text text-steel/60 text-xs">
          LAST_UPDATE : {updateDate}
        </p>
      </div>
      
      <div className="space-y-4">
        {specs.map((spec, i) => (
          <div key={i} className="border-l-2 border-graphite pl-4">
            <p className="font-mono text-steel text-sm leading-relaxed">
              {spec}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
