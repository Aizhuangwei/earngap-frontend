// Top Opportunities - Top 3 高机会卡片
'use client';
import { useStore } from '@/lib/store';
import { TrendingUp, Clock, Shield } from 'lucide-react';

const phaseColors: Record<string, string> = {
  EARLY: 'bg-warning/10 text-warning border-warning/20',
  EXPANDING: 'bg-purple/10 text-purple border-purple/20',
  MATURE: 'bg-blue/10 text-blue border-blue/20',
  DECLINING: 'bg-danger/10 text-danger border-danger/20',
};

const phaseLabels: Record<string, string> = {
  EARLY: 'EARLY', EXPANDING: 'GROWING', MATURE: 'MATURE', DECLINING: 'WANING',
};

export function TopOpportunities() {
  const { opportunities } = useStore();
  const top = opportunities.slice(0, 3);

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-text flex items-center gap-2">
          <span className="w-1 h-4 bg-accent rounded-full" />
          Top Opportunities
        </h2>
        <a href="#" className="text-[11px] text-accent hover:underline">View all →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {top.map((opp, i) => (
          <div key={opp.id}
            className="bg-card border border-border rounded-lg p-4 hover:border-accent/30 transition-all cursor-pointer group">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-accent text-black' : 'bg-border text-text-muted'}`}>
                  {i + 1}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${phaseColors[opp.phase] || 'bg-border text-text-muted'}`}>
                  {phaseLabels[opp.phase] || opp.phase}
                </span>
              </div>
              <span className="text-sm font-bold font-mono text-accent group-hover:brightness-110 transition-all">
                {opp.score}<span className="text-[10px] text-text-muted">/100</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm text-text font-medium mb-2 line-clamp-2 leading-snug">{opp.title}</h3>

            {/* Meta */}
            <div className="flex items-center gap-3 text-[10px] text-text-muted mt-auto">
              {opp.growth != null && (
                <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3 text-accent" /> +{Math.round(opp.growth)}%</span>
              )}
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> {opp.riskLevel}</span>
            </div>

            {/* Dimension bars preview */}
            <div className="mt-3 space-y-1">
              {opp.dimensions?.slice(0, 3).map((d, j) => (
                <div key={j} className="flex items-center gap-2">
                  <span className="text-[9px] text-text-muted w-16 truncate">{d.label}</span>
                  <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent/60 rounded-full" style={{ width: `${(d.score / d.maxScore) * 100}%` }} />
                  </div>
                  <span className="text-[9px] text-text-muted font-mono w-8 text-right">{d.score}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
