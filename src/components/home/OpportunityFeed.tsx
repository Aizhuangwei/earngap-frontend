// Opportunity Feed — Signal cards
'use client';
import { Zap, TrendingUp, Activity, MessageCircle, BarChart3, DollarSign, Globe } from 'lucide-react';

interface Opportunity {
  id: number;
  title: string;
  source: string;
  score: number;
  type: string;
  time: string;
  estimate: string | null;
}

interface OpportunityFeedProps {
  opportunities: Opportunity[];
}

const typeConfig: Record<string, { icon: any; color: string; bg: string }> = {
  arbitrage: { icon: Zap, color: '#4ade80', bg: 'rgba(74,222,128,0.1)' },
  options: { icon: TrendingUp, color: '#60a5fa', bg: 'rgba(96,165,250,0.1)' },
  whale: { icon: DollarSign, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  rating: { icon: BarChart3, color: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
  sentiment: { icon: MessageCircle, color: '#f472b6', bg: 'rgba(244,114,182,0.1)' },
  onchain: { icon: Activity, color: '#22d3ee', bg: 'rgba(34,211,238,0.1)' },
  stablecoin: { icon: DollarSign, color: '#4ade80', bg: 'rgba(74,222,128,0.1)' },
  ratio: { icon: Globe, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
};

function getScoreColor(score: number): string {
  if (score >= 90) return '#4ade80';
  if (score >= 80) return '#60a5fa';
  if (score >= 70) return '#f59e0b';
  return '#f472b6';
}

export function OpportunityFeed({ opportunities }: OpportunityFeedProps) {
  const top3 = opportunities.slice(0, 3);

  return (
    <section id="signals" className="max-w-6xl mx-auto px-4 md:px-6 mb-20">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#e8e8ed]">Live Signals</h2>
          <p className="text-sm text-[#7a7a8e] mt-1">AI-scored opportunities detected in real-time</p>
        </div>
        <a href="#" className="text-xs text-[#4ade80] hover:text-[#3bc86e] transition-colors">
          View All &rarr;
        </a>
      </div>

      {/* Top 3 featured cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {top3.map((opp, i) => {
          const cfg = typeConfig[opp.type] || typeConfig.arbitrage;
          const Icon = cfg.icon;
          return (
            <div key={opp.id}
              className="card-glass rounded-xl p-5 hover:bg-[#1a1a24] transition-all cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
              {/* Badge row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full" style={{ background: cfg.bg }}>
                  <Icon className="w-3 h-3" style={{ color: cfg.color }} />
                  <span className="text-[10px] font-medium" style={{ color: cfg.color }}>{opp.source}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse-glow" />
                  <span className="text-[10px] text-[#7a7a8e]">{opp.time}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-[#e8e8ed] mb-2 group-hover:text-[#4ade80] transition-colors line-clamp-2">
                {opp.title}
              </h3>

              {/* Score + estimate */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#7a7a8e]">Score</span>
                  <span className="text-lg font-bold" style={{ color: getScoreColor(opp.score) }}>
                    {opp.score}
                  </span>
                </div>
                {opp.estimate && (
                  <span className="text-sm font-semibold text-[#4ade80]">{opp.estimate}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Remaining signal list */}
      <div className="card-glass rounded-xl overflow-hidden">
        {opportunities.slice(3).map((opp, i) => {
          const cfg = typeConfig[opp.type] || typeConfig.arbitrage;
          const Icon = cfg.icon;
          return (
            <div key={opp.id}
              className="flex items-center justify-between px-5 py-3.5 border-b border-[#1e1e2a] last:border-0 hover:bg-[#1a1a24] transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: cfg.bg }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: cfg.color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-[#e8e8ed] group-hover:text-[#4ade80] transition-colors truncate">
                    {opp.title}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-[#7a7a8e]">{opp.source}</span>
                    <span className="text-[10px] text-[#3a3a4e]">&middot;</span>
                    <span className="text-[10px] text-[#7a7a8e]">{opp.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                {opp.estimate && (
                  <span className="text-sm font-semibold text-[#4ade80]">{opp.estimate}</span>
                )}
                <div className="text-right">
                  <span className="text-sm font-bold" style={{ color: getScoreColor(opp.score) }}>{opp.score}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
