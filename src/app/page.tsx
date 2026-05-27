// Home Page - Top 3 高机会卡片
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

  return (
    <div style={{ background:'#0a0b0e', color:'#e5e7eb', minHeight:'100vh', fontFamily:'Inter, system-ui, sans-serif' }}>
      <Header lang={lang} switchLang={switchLang} />
      <TickerTape />
      
      <main style={{ maxWidth:1280, margin:'0 auto', padding:'24px' }}>
        {/* Title */}
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <h1 style={{ fontSize:24, fontWeight:700, marginBottom:8 }}>发现信息差 · 把握时间窗口 · 赢在认知之前</h1>
          <p style={{ fontSize:14, color:'#9ca3af' }}>基于 OpenClaw 信息差机会扫描引擎，每日 06:30 全量更新</p>
        </div>

        {/* Top 3 Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:16, marginBottom:32 }}>
          {opportunities.map((opp, i) => (
            <div key={i} style={{ background:'#1a1d26', borderRadius:8, padding:20, border:'1px solid rgba(75,85,99,0.3)', cursor:'pointer' }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <span style={{ width:20, height:20, borderRadius:'50%', background:i===0?'#10b981':'#374151', color:'#fff', fontSize:10, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center' }}>{opp.rank}</span>
                  <span style={{ fontSize:11, color:'#9ca3af' }}>{opp.tag}</span>
                </div>
                <span style={{ color:i===0?'#10b981':'#3b82f6', fontSize:14, fontWeight:600 }}>{opp.score}分</span>
              </div>
              <h3 style={{ fontSize:15, fontWeight:500, marginBottom:8, color:'#fff' }}>{opp.title}</h3>
              <p style={{ fontSize:12, color:'#9ca3af', marginBottom:12 }}>{opp.desc}</p>
              <div style={{ display:'flex', gap:8 }}>
                <span style={{ fontSize:11, padding:'2px 8px', borderRadius:4, background:'rgba(245,158,11,0.1)', color:'#f59e0b' }}>{opp.phase}</span>
                <span style={{ fontSize:11, padding:'2px 8px', borderRadius:4, background:'#222633', color:'#d1d5db' }}>{opp.window}</span>
              </div>
              <div style={{ marginTop:12, fontSize:11, color:'#9ca3af' }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
                  <span>趋势强度</span>
                  <span style={{ color:'#e5e7eb' }}>{opp.growth}</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between' }}>
                  <span>平台热度</span>
                  <span style={{ color:'#e5e7eb' }}>{i===0 ? 'GitHub #1' : i===1 ? 'HN #3' : 'GitHub #5'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 查看全部信号 */}
        <div style={{ textAlign:'center' }}>
          <a href="/signals" style={{ color:'#3b82f6', fontSize:14, textDecoration:'none' }}>查看全部 8 个信号 →</a>
        </div>
      </main>
      
      <Footer lang={lang} />
    </div>
  );
}
