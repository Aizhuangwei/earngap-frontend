// Home Page - Top 3 高机会卡片（浅色主题）
'use client';
import { useEffect, useState } from 'react';
import { t, getLang, setLang, Lang } from '@/lib/i18n';
import { Header, TickerTape, Footer } from '@/components/layout';

export default function HomePage() {
  const [lang, setLangState] = useState<Lang>('en');
  useEffect(() => { setLangState(getLang()); }, []);
  const switchLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    setLangState(next);
  };

  const opportunities = [
    { rank:1, tag:'Rust重构 JS生态', title:'Bun Rewrite in Rust', desc:'Zig→Rust语言迁移 · 55k+ stars', score:88.5, phase:'EARLY', window:'30天窗口', growth:'338%' },
    { rank:2, tag:'WiFi空间智能', title:'LiFi Over Power Lines', desc:'电力线WiFi传输 · 12k+ stars', score:82.0, phase:'EARLY', window:'45天窗口', growth:'98%' },
    { rank:3, tag:'AI代码生成', title:'Cursor AI IDE', desc:'AI辅助编程 · 8.5k+ stars', score:79.0, phase:'EXPANDING', window:'60天窗口', growth:'156%' },
  ];

  const phaseColors: Record<string, string> = { EARLY:'#f59e0b', EXPANDING:'#8b5cf6', MATURE:'#3b82f6', DECLINING:'#ef4444' };
  const phaseBg: Record<string, string> = { EARLY:'#fffbeb', EXPANDING:'#f5f3ff', MATURE:'#eff6ff', DECLINING:'#fef2f2' };

  return (
    <div style={{ background:'#f8f9fa', color:'#0f172a', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif' }}>
      <Header lang={lang} switchLang={switchLang} />
      <TickerTape />
      <main style={{ maxWidth:900, margin:'0 auto', padding:'40px 24px' }}>
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <h1 style={{ fontSize:28, fontWeight:800, color:'#0f172a', marginBottom:8 }}>发现信息差 · 把握时间窗口</h1>
          <p style={{ fontSize:14, color:'#64748b' }}>Top 3 高评分机会 · 基于 AI 信息差扫描引擎</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:16, marginBottom:32 }}>
          {opportunities.map((opp, i) => (
            <div key={i} style={{ background:'#fff', borderRadius:12, padding:'16px 18px', border:'1px solid #e2e8f0', cursor:'pointer', transition:'box-shadow .2s' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow='none')}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <span style={{ width:22, height:22, borderRadius:'50%', background:i===0?'#059669':'#f1f5f9', color:i===0?'#fff':'#64748b', fontSize:11, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center' }}>{opp.rank}</span>
                  <span style={{ fontSize:11, color:'#64748b' }}>{opp.tag}</span>
                </div>
                <span style={{ color:i===0?'#059669':'#2563eb', fontSize:14, fontWeight:700 }}>{opp.score}<span style={{ fontSize:10, color:'#94a3b8' }}>/100</span></span>
              </div>
              <h3 style={{ fontSize:15, fontWeight:600, marginBottom:6, color:'#0f172a' }}>{opp.title}</h3>
              <p style={{ fontSize:12, color:'#64748b', marginBottom:12 }}>{opp.desc}</p>
              <div style={{ display:'flex', gap:8, marginBottom:12 }}>
                <span style={{ fontSize:10, padding:'2px 8px', borderRadius:4, background:phaseBg[opp.phase] || '#f1f5f9', color:phaseColors[opp.phase] || '#64748b', fontWeight:600 }}>{opp.phase}</span>
                <span style={{ fontSize:10, padding:'2px 8px', borderRadius:4, background:'#f1f5f9', color:'#64748b' }}>{opp.window}</span>
              </div>
              <div style={{ borderTop:'1px solid #f1f5f9', paddingTop:10 }}>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#94a3b8', marginBottom:4 }}>
                  <span>趋势强度</span>
                  <span style={{ color:'#0f172a', fontWeight:500 }}>{opp.growth}</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#94a3b8' }}>
                  <span>平台热度</span>
                  <span style={{ color:'#0f172a', fontWeight:500 }}>{i===0 ? 'GitHub Trending #1' : i===1 ? 'HN #3' : 'GitHub #5'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center' }}>
          <a href="/signals" style={{ display:'inline-flex', alignItems:'center', gap:4, padding:'10px 20px', borderRadius:8, background:'#059669', color:'#fff', fontWeight:600, fontSize:13, textDecoration:'none' }}>查看全部 8 个信号 →</a>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
