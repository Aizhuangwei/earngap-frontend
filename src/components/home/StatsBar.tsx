// Stats Bar — Quick snapshot
'use client';
import { Activity, TrendingUp, Target, Users } from 'lucide-react';

interface StatsBarProps {
  stats: { opportunitiesToday: number; sourcesCovered: number; topScore: number; activeUsers: number };
}

export function StatsBar({ stats }: StatsBarProps) {
  const items = [
    { label: 'Opportunities Today', value: stats.opportunitiesToday, icon: Target, color: '#4ade80' },
    { label: 'Data Sources', value: stats.sourcesCovered, icon: Activity, color: '#60a5fa' },
    { label: 'Top Score', value: stats.topScore, icon: TrendingUp, color: '#f59e0b', suffix: '/100' },
    { label: 'Active Users', value: stats.activeUsers.toLocaleString(), icon: Users, color: '#a78bfa' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 -mt-8 mb-16 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <div key={item.label}
            className="card-glass rounded-xl p-4 animate-slide-up"
            style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
            <div className="flex items-center gap-2 mb-2">
              <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
              <span className="text-[10px] text-[#7a7a8e] uppercase tracking-wider">{item.label}</span>
            </div>
            <div className="text-2xl font-bold text-[#e8e8ed]">
              {item.value}{item.suffix || ''}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
