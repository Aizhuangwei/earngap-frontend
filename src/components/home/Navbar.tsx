// Navbar
'use client';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Signals', href: '#signals' },
    { label: 'Sources', href: '#sources' },
    { label: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1e1e2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#4ade80] flex items-center justify-center">
              <span className="text-black text-xs font-bold">E</span>
            </div>
            <span className="text-[#e8e8ed] font-bold text-lg tracking-tight">
              <span className="text-[#4ade80]">Earn</span>Gap
            </span>
            <span className="hidden sm:inline text-[10px] text-[#7a7a8e] border border-[#1e1e2a] rounded px-1.5 py-0.5 ml-1">
              WEALTH INTELLIGENCE
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                className="text-sm text-[#7a7a8e] hover:text-[#e8e8ed] transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111118] border border-[#1e1e2a] text-xs text-[#7a7a8e]">
              <Search className="w-3.5 h-3.5" />
              <span>Search signals</span>
              <span className="text-[10px] text-[#3a3a4e]">⌘K</span>
            </button>
            <a href="#" className="hidden md:block text-sm text-[#7a7a8e] hover:text-[#e8e8ed] transition-colors">
              Sign In
            </a>
            <a href="#" className="px-4 py-1.5 rounded-lg bg-[#4ade80] text-black text-sm font-medium hover:bg-[#3bc86e] transition-colors">
              Get Started
            </a>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-[#7a7a8e]" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                className="block py-2 text-sm text-[#7a7a8e] hover:text-[#e8e8ed] transition-colors"
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#" className="block py-2 text-sm text-[#7a7a8e] hover:text-[#e8e8ed] transition-colors">Sign In</a>
          </div>
        )}
      </div>
    </nav>
  );
}
