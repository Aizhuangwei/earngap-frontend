// Hero Banner - AI情报终端头部
'use client';
import { useStore } from '@/lib/store';
import { Zap, TrendingUp, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroBanner() {
  const { opportunities, stats } = useStore();
  const [time, setTime] = useState('');
  const best = opportunities[0];

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card via-card to-accent-dim/5 p-6">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent-dim border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-accent font-medium">LIVE</span>
            </div>
            <span className="text-[11px] text-text-muted font-mono">{time} UTC+8</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-text-muted">
            <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> 20 sources</span>
            <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Updated daily</span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-text tracking-tight leading-tight">
              Global AI Intelligence Terminal
            </h1>
            <p className="text-sm text-text-muted mt-1">
              Real-time scanning • Multi-source aggregation • Automated scoring
            </p>
          </div>

          {/* Top opportunity */}
          {best && (
            <div className="flex items-center gap-4 px-4 py-3 rounded-lg bg-bg/50 border border-border/50">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-warning" />
                <span className="text-[11px] text-text-muted">Top Signal</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-text font-medium truncate max-w-[200px]">{best.title}</div>
                <div className="text-xs text-accent font-bold">{best.score} pts</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
