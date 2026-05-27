// Source Grid — Data sources wall
interface SourceGridProps {
  sources: { name: string; icon: string; category: string }[];
}

export function SourceGrid({ sources }: SourceGridProps) {
  const categories = [...new Set(sources.map(s => s.category))];

  return (
    <section id="sources" className="max-w-6xl mx-auto px-4 md:px-6 mb-20">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#e8e8ed]">24+ Data Sources</h2>
        <p className="text-sm text-[#7a7a8e] mt-1">Aggregating intelligence across markets and channels</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {sources.map((source, i) => (
          <div key={`${source.name}-${i}`}
            className="card-glass rounded-lg p-3 text-center hover:bg-[#1a1a24] transition-all cursor-default animate-fade-in"
            style={{ animationDelay: `${0.7 + i * 0.03}s` }}>
            <div className="text-lg mb-1">{source.icon}</div>
            <div className="text-[11px] text-[#e8e8ed] font-medium truncate">{source.name}</div>
            <div className="text-[9px] text-[#5a5a6e] mt-0.5">{source.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
