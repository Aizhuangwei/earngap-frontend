// Value Props — Why us
'use client';
import { Zap, Brain, Bell, Sparkles } from 'lucide-react';

const props = [
  {
    icon: Zap,
    title: 'Multi-Market Coverage',
    desc: 'Stocks, crypto, on-chain data, options, and social sentiment — all in one place.',
    color: '#4ade80',
  },
  {
    icon: Brain,
    title: 'AI-Powered Scoring',
    desc: 'Every opportunity scored 0-100 based on urgency, potential impact, and signal strength.',
    color: '#60a5fa',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    desc: 'Get notified when high-confidence signals emerge. Never miss an arbitrage window.',
    color: '#f59e0b',
  },
  {
    icon: Sparkles,
    title: 'Built for Everyone',
    desc: 'No PhD in finance required. Clear signals, plain English explanations.',
    color: '#a78bfa',
  },
];

export function ValueProps() {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto px-4 md:px-6 mb-20">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#e8e8ed]">Why EarnGap?</h2>
        <p className="text-sm text-[#7a7a8e] mt-1">Built for retail investors who want to trade smarter</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.map((prop, i) => (
          <div key={prop.title}
            className="card-glass rounded-xl p-6 text-center hover:bg-[#1a1a24] transition-all animate-slide-up"
            style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${prop.color}15` }}>
              <prop.icon className="w-5 h-5" style={{ color: prop.color }} />
            </div>
            <h3 className="text-sm font-semibold text-[#e8e8ed] mb-2">{prop.title}</h3>
            <p className="text-xs text-[#7a7a8e] leading-relaxed">{prop.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
