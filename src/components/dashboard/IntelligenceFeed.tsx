// Intelligence Feed - 可折叠机会列表
'use client';
import { useState } from 'react';
import { useStore } from '@/lib/store';
import { ChevronDown, TrendingUp, Shield, Clock, ExternalLink, Sparkles } from 'lucide-react';

export function IntelligenceFeed() {
  const { opportunities } = useStore();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'high'>('all');
  const [search, setSearch] = useState('');

  const filtered = opportunities
    .filter(o => filter === 'all' || o.score >= 70)
    .filter(o => !search || o.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <section>
      {/* Feed header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <h2 className="text-sm font-semibold text-text flex items-center gap-2">
          <span className="w-1 h-4 bg-blue rounded-full" />
          Intelligence Feed
          <span className="text-[10px] text-text-muted font-normal">({filtered.length} signals)</span>
        </h2>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Filter signals..." value={search} onChange={e => setSearch(e.target.value)}
            className="bg-bg border border-border rounded px-2.5 py-1 text-xs w-40 focus:outline-none focus:border-accent text-text placeholder:text-text-muted" />
          <div className="flex bg-bg rounded-lg border border-border p-0.5">
            <button onClick={() => setFilter('all')}
              className={`px-2.5 py-1 text-[10px] rounded-md transition-colors ${filter === 'all' ? 'bg-accent text-black font-medium' : 'text-text-muted hover:text-text'}`}>
              All
            </button>
            <button onClick={() => setFilter('high')}
              className={`px-2.5 py-1 text-[10px] rounded-md transition-colors ${filter === 'high' ? 'bg-accent text-black font-medium' : 'text-text-muted hover:text-text'}`}>
              High Score
            </button>
          </div>
        </div>
      </div>

      {/* Feed list */}
      <div className="space-y-1.5">
        {filtered.map(opp => {
          const isExpanded = expanded === opp.id;
          return (
            <div key={opp.id} className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Clickable header */}
              <button onClick={() => setExpanded(isExpanded ? null : opp.id)}
                className="w-full flex items-center justify-between p-3 hover:bg-card-hover transition-colors text-left">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <ChevronDown className={`w-3.5 h-3.5 text-text-muted flex-shrink-0 transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-wider text-text-muted border border-border rounded px-1">{opp.gapType.replace(/_/g, ' ')}</span>
                      <span className="text-xs text-text font-medium truncate">{opp.title}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                    {opp.growth != null && <span className="text-accent">+{Math.round(opp.growth)}%</span>}
                  </div>
                  <span className={`text-xs font-bold font-mono ${opp.score >= 70 ? 'text-accent' : opp.score >= 50 ? 'text-warning' : 'text-text-muted'}`}>
                    {opp.score}
                  </span>
                </div>
              </button>

              {/* Expanded detail */}
              {isExpanded && (
                <div className="px-3 pb-3 pt-1 border-t border-border">
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">{opp.summary?.slice(0, 300)}</p>

                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-text-muted">
                    {opp.conviction != null && <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-accent" /> Conviction {opp.conviction}%</span>}
                    {opp.scarcity != null && <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-warning" /> Scarcity {opp.scarcity}%</span>}
                    {opp.difficulty && <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {opp.difficulty}</span>}
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(opp.createdAt).toLocaleDateString()}</span>
                    <a href={`/opportunity/${opp.id}`} className="flex items-center gap-1 text-accent hover:underline ml-auto">
                      Analyze <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
