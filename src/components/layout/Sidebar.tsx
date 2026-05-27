// Sidebar - 左侧固定菜单
import { BarChart3, Sparkles, Filter, List, Settings } from 'lucide-react';

const items = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: Sparkles, label: 'Top', active: false },
  { icon: Filter, label: 'Filter', active: false },
  { icon: List, label: 'List', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar() {
  return (
    <aside className="w-14 bg-card border-r border-border flex flex-col items-center py-4 gap-5 flex-shrink-0">
      {items.map((item, i) => (
        <button key={i}
          className={`p-2.5 rounded-lg transition-all ${item.active ? 'text-accent bg-accent-dim border border-accent/20' : 'text-text-muted hover:text-text hover:bg-bg'}`}
          title={item.label}>
          <item.icon className="w-4 h-4" />
        </button>
      ))}
    </aside>
  );
}
