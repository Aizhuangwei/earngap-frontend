// Stats Row - 4个统计卡片
'use client';
import { useStore } from '@/lib/store';
import { TrendingUp, Target, Zap, Rocket } from 'lucide-react';

const statConfig = [
  { key: 'total', label: 'Total Opportunities', icon: Target, color: 'text-blue' },
  { key: 'early', label: 'Early Stage', icon: Rocket, color: 'text-accent' },
  { key: 'highscore', label: 'High Score (≥70)', icon: Zap, color: 'text-warning' },
  { key: 'fastest', label: 'Fastest Growing', icon: TrendingUp, color: 'text-purple' },
];

export function StatsRow() {
  const { opportunities, stats } = useStore();

  const cards = [
    { value: stats?.total ?? 0, change: `+${stats?.newToday ?? 0} today` },
    { value: opportunities.filter(o => o.phase === 'EARLY').length, change: `${Math.round((opportunities.filter(o => o.phase === 'EARLY').length / Math.max(opportunities.length, 1)) * 100)}% of total` },
    { value: opportunities.filter(o => o.score >= 70).length, change: 'auto-alerted' },
    { value: opportunities[0]?.growth ? `${Math.round(opportunities[0].growth)}%` : '--', change: opportunities[0]?.title?.slice(0, 20) ?? 'N/A' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {cards.map((card, i) => {
        const config = statConfig[i];
        const Icon = config.icon;
        return (
          <div key={i} className="bg-card border border-border rounded-lg p-4 hover:border-accent/30 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-text-muted">{config.label}</span>
              <Icon className={`w-3.5 h-3.5 ${config.color}`} />
            </div>
            <div className="text-xl font-bold text-text font-mono">{card.value}</div>
            <div className="text-[10px] text-text-muted mt-0.5">{card.change}</div>
          </div>
        );
      })}
    </div>
  );
}
