// EarnGap Home Page - 信息差套利仪表盘（替换原来简版首页）
'use client';
import { useEffect, useState } from 'react';
import { Header, TickerTape, Footer } from '@/components/layout';
import { t, getLang, setLang, Lang } from '@/lib/i18n';

export default function EarnGapHomePage() {
  const [lang, setLangState] = useState<Lang>('en');
  useEffect(() => { setLangState(getLang()); }, []);
  const switchLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    setLangState(next);
  };

  return (
    <div style={{ background:'#0a0b0e', color:'#e5e7eb', minHeight:'100vh', fontFamily:'Inter, system-ui, sans-serif' }}>
      <Header lang={lang} switchLang={switchLang} />
      <TickerTape />

      <main style={{ maxWidth:1280, margin:'0 auto', padding:'24px' }}>
        {/* Title */}
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <h1 style={{ fontSize:24, fontWeight:700, marginBottom:8 }}>{t('hero.title.line1', lang)}</h1>
          <p style={{ fontSize:14, color:'#9ca3af' }}>基于 OpenClaw 信息差机会扫描引擎，每日 06:30 全量更新</p>
        </div>

        {/* Stats Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:16, marginBottom:32 }}>
          {[
            { label:'今日趋势总数', value:'15', change:'+5' },
            { label:'今日机会 (≥70)', value:'3', change:'+2' },
            { label:'GitHub爆款', value:'3', change:'+2' },
            { label:'HN热门分', value:'88', change:'+12' },
          ].map((s, i) => (
            <div key={i} style={{ background:'#1a1d26', borderRadius:8, padding:16, border:'1px solid rgba(75,85,99,0.3)' }}>
              <div style={{ display:'flex', justifyContent:'space-between' }}>
                <div>
                  <p style={{ fontSize:12, color:'#9ca3af' }}>{s.label}</p>
                  <p style={{ fontSize:32, fontWeight:700, color:'#fff', marginTop:4 }}>{s.value}</p>
                </div>
                <span style={{ fontSize:12, color:'#10b981', display:'flex', alignItems:'center' }}>↑ {s.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top 3 Opportunities */}
        <section style={{ marginBottom:32 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
            <h2 style={{ fontSize:18, fontWeight:600 }}>Top 3 高机会</h2>
            <a href="/signals" style={{ color:'#3b82f6', fontSize:14 }}>查看全部 →</a>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:16 }}>
            {[
              { rank:1, tag:'Rust重构 JS生态', title:'Bun Rewrite in Rust', desc:'Zig→Rust语言迁移 · 55k+ stars', score:'88.5', phase:'EARLY', window:'30天窗口' },
              { rank:2, tag:'WiFi空间智能', title:'LiFi Over Power Lines', desc:'电力线WiFi传输 · 12k+ stars', score:'82.0', phase:'EARLY', window:'45天窗口' },
              { rank:3, tag:'AI代码生成', title:'Cursor AI IDE', desc:'AI辅助编程 · 8.5k+ stars', score:'79.0', phase:'EXPANDING', window:'60天窗口' },
            ].map((opp, i) => (
              <div key={i} style={{ background:'#1a1d26', borderRadius:8, padding:20, border:'1px solid rgba(75,85,99,0.3)' }}>
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
                <div style={{ marginTop:12 }}>
                  {[
                    { label:'趋势强度', value:'3.381' },
                    { label:'平台热度', value:'GitHub #1' },
                  ].map(d => (
                    <div key={d.label} style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#9ca3af', marginBottom:4 }}>
                      <span>{d.label}</span>
                      <span style={{ color:'#e5e7eb' }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Pie Chart */}
        <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginBottom:32 }}>
          <div style={{ background:'#1a1d26', borderRadius:8, padding:16, border:'1px solid rgba(75,85,99,0.3)' }}>
            <h3 style={{ fontSize:14, fontWeight:600, marginBottom:12 }}>信息差类型分布</h3>
            <div style={{ display:'flex', justifyContent:'center', gap:32, alignItems:'center' }}>
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="42" fill="none" stroke="#ef4444" strokeWidth="16" strokeDasharray="88 176" strokeDashoffset="22"/>
                <circle cx="60" cy="60" r="42" fill="none" stroke="#f59e0b" strokeWidth="16" strokeDasharray="63 176" strokeDashoffset="-66"/>
                <circle cx="60" cy="60" r="42" fill="none" stroke="#4b5563" strokeWidth="16" strokeDasharray="38 176" strokeDashoffset="-129"/>
              </svg>
              <div>
                {[
                  { label:'HIGH', color:'#ef4444', value:7 },
                  { label:'WATCH', color:'#f59e0b', value:10 },
                  { label:'IGNORE', color:'#4b5563', value:6 },
                ].map(d => (
                  <div key={d.label} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                    <div style={{ width:8, height:8, borderRadius:2, background:d.color }} />
                    <span style={{ fontSize:12, color:'#9ca3af' }}>{d.label}</span>
                    <span style={{ fontSize:12, color:'#e5e7eb', fontWeight:500 }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Signals */}
          <div style={{ background:'#1a1d26', borderRadius:8, padding:16, border:'1px solid rgba(75,85,99,0.3)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
              <h3 style={{ fontSize:14, fontWeight:600 }}>最新提醒</h3>
              <span style={{ fontSize:11, color:'#3b82f6' }}>查看全部 →</span>
            </div>
            {[
              { icon:'🔥', text:'高分提醒: Bun Rewrite in Rust (88.5分)', time:'12m ago' },
              { icon:'🚀', text:'暴涨信号: LiFi Over Power Lines 涨幅98%', time:'25m ago' },
              { icon:'⏰', text:'截止提醒: AI代码生成工具 仅剩7天窗口', time:'38m ago' },
            ].map((alert, i) => (
              <div key={i} style={{ padding:'10px 0', borderBottom:i<2?'1px solid rgba(75,85,99,0.3)':'none' }}>
                <div style={{ fontSize:13 }}>{alert.icon} {alert.text}</div>
                <div style={{ fontSize:11, color:'#6b7280', marginTop:2 }}>{alert.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Collapsible Opportunity Detail */}
        <div style={{ background:'#1a1d26', borderRadius:8, padding:16, border:'1px solid rgba(75,85,99,0.3)', marginBottom:16 }}>
          <h3 style={{ fontSize:14, fontWeight:600, marginBottom:12 }}>机会效应分析</h3>
          {[
            { id:'opp-detail-1', title:'Rust重写Bun.js', content:'Bun项目已获55k+ GitHub stars。Switching from Zig to Rust at this stage suggests...' },
          ].map(opp => (
            <details key={opp.id} style={{ marginBottom:8 }}>
              <summary style={{ cursor:'pointer', fontSize:13, padding:8, background:'#222633', borderRadius:4, color:'#e5e7eb' }}>{opp.title}</summary>
              <p style={{ fontSize:12, color:'#9ca3af', padding:'8px 12px', lineHeight:1.6 }}>{opp.content}</p>
            </details>
          ))}
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
