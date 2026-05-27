// Navbar
import { Search, Bell, Globe } from 'lucide-react';

export function Navbar() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent flex items-center justify-center">
              <span className="text-black text-xs font-bold">E</span>
            </div>
            <span className="text-text font-bold text-lg tracking-tight">
              <span className="text-accent">Earn</span>Gap
            </span>
            <span className="text-[10px] text-text-muted border border-border rounded px-1.5 py-0.5 ml-1">ALPHA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {['Home', 'Opportunities', 'Trends', 'Categories'].map(item => (
              <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-sm ${item === 'Home' ? 'text-text font-medium' : 'text-text-muted hover:text-text transition-colors'}`}>
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted" />
            <input type="text" placeholder="Search opportunities..." className="bg-bg border border-border rounded-md pl-9 pr-3 py-1.5 text-xs w-56 focus:outline-none focus:border-accent text-text placeholder:text-text-muted" />
          </div>
          <button className="relative p-2 text-text-muted hover:text-text transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-danger"></span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text transition-colors">
            <Globe className="w-3.5 h-3.5" />
            <span>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}
