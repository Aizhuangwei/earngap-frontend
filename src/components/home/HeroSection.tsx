// Hero Section
'use client';
import { useEffect, useState } from 'react';
import { TrendingUp, Zap, Globe } from 'lucide-react';

interface HeroSectionProps {
  stats: { opportunitiesToday: number; topScore: number };
}

export function HeroSection({ stats }: HeroSectionProps) {




  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-animate pointer-events-none opacity-50" />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4ade80]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#60a5fa]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse-glow" />
          <span className="text-[11px] text-[#4ade80] font-medium tracking-wider">LIVE · 24 SOURCES</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#e8e8ed] tracking-tight leading-[1.1] mb-4 animate-slide-up">
          Turn Information Gaps<br />
          <span className="text-[#4ade80]">Into Opportunities</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#7a7a8e] max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Real-time cross-market arbitrage signals. AI-scored opportunities. One dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="#signals" className="px-8 py-3 rounded-xl bg-[#4ade80] text-black font-semibold text-base hover:bg-[#3bc86e] transition-all hover:scale-105 shadow-lg shadow-[#4ade80]/20">
            View Live Signals
          </a>
          <a href="#sources" className="px-8 py-3 rounded-xl border border-[#1e1e2a] text-[#e8e8ed] font-medium text-base hover:bg-[#111118] transition-all">
            Explore Sources
          </a>
        </div>

        {/* Stats highlight */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#e8e8ed]">
              {stats.opportunitiesToday}
              <span className="text-[#4ade80]">+</span>
            </div>
            <div className="text-xs text-[#7a7a8e] mt-1">Opportunities Today</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#1e1e2a]" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#e8e8ed]">
              <span className="text-[#f59e0b]">{stats.topScore}</span>
            </div>
            <div className="text-xs text-[#7a7a8e] mt-1">Top Signal Score</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#1e1e2a]" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#e8e8ed]">
              24
              <span className="text-[#60a5fa]">+</span>
            </div>
            <div className="text-xs text-[#7a7a8e] mt-1">Data Sources</div>
          </div>
        </div>
      </div>
    </section>
  );
}
