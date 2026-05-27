// Right Panel - 右侧信息面板
'use client';
import { useStore } from '@/lib/store';
import { Bell, Clock, PieChart, AlertTriangle, Sparkles } from 'lucide-react';

export function RightPanel() {
  const { alerts, stats, opportunities } = useStore();

  const highScore = opportunities.filter(o => o.score >= 70);
  const lifeCycleCount: Record<string, number> = {};
  opportunities.forEach(o => { lifeCycleCount[o.phase] = (lifeCycleCount[o.phase] || 0) + 1; });

  return (
    <aside className="w-72 bg-card border-l border-border p-4 hidden lg:block overflow-y-auto flex-shrink-0 scrollbar-thin">
      {/* High Score Alerts */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-text flex items-center gap-1.5 mb-3">
          <Bell className="w-3.5 h-3.5 text-danger" /> Alerts
          {alerts.length > 0 && <span className="text-[9px] bg-danger text-white rounded-full px-1.5 py-0.5">{alerts.length}</span>}
        </h3>
        <div className="space-y-1.5">
          {highScore.slice(0, 3).map(opp => (
            <div key={opp.id} className="flex items-center justify-between py-1.5 px-2 rounded bg-danger/5 border border-danger/10">
              <span className="text-[10px] text-text-secondary truncate max-w-[140px]">{opp.title}</span>
              <span className="text-[10px] text-accent font-bold font-mono">{opp.score}</span>
            </div>
          ))}
          {highScore.length === 0 && <p className="text-[10px] text-text-muted">No high-score alerts</p>}
        </div>
      </div>

      {/* Lifecycle Distribution */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-text flex items-center gap-1.5 mb-3">
          <PieChart className="w-3.5 h-3.5 text-accent" /> Lifecycle
        </h3>
        <div className="space-y-2">
          {Object.entries(lifeCycleCount).map(([phase, count]) => {
            const pct = Math.round((count / Math.max(opportunities.length, 1)) * 100);
            return (
              <div key={phase}>
                <div className="flex items-center justify-between text-[10px] mb-0.5">
                  <span className="text-text-muted">{phase}</span>
                  <span className="text-text font-mono">{count}</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${phase === 'EARLY' ? 'bg-warning' : phase === 'EXPANDING' ? 'bg-accent' : phase === 'PEAK' ? 'bg-purple' : 'bg-text-muted'}`}
                    style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Scans */}
      <div>
        <h3 className="text-xs font-semibold text-text flex items-center gap-1.5 mb-3">
          <Clock className="w-3.5 h-3.5 text-blue" /> Scans
        </h3>
        <div className="space-y-1.5">
          {stats?.recentScans?.slice(0, 5).map(scan => (
            <div key={scan.id} className="flex items-start gap-2">
              <span className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${scan.status === 'COMPLETED' ? 'bg-accent' : scan.status === 'RUNNING' ? 'bg-warning animate-pulse' : 'bg-danger'}`} />
              <div>
                <p className="text-[10px] text-text-secondary">{new Date(scan.createdAt).toLocaleDateString()} — {scan.status}</p>
                <p className="text-[9px] text-text-muted">{scan.totalOpps} opportunities</p>
              </div>
            </div>
          ))}
          {(!stats?.recentScans || stats.recentScans.length === 0) && (
            <p className="text-[10px] text-text-muted italic">Scanner idle</p>
          )}
        </div>
      </div>
    </aside>
  );
}
