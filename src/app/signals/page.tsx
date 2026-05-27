// All Signals Page
'use client';
import { useEffect, useState } from 'react';
import { t, getLang, setLang, Lang } from '@/lib/i18n';
import { Header, TickerTape, Footer } from '@/components/layout';

export default function AllSignalsPage() {
  const [lang, setLangState] = useState<Lang>('en');
  useEffect(() => { setLangState(getLang()); }, []);

  const switchLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    setLangState(next);
  };

  const signals = [
    { id: 1, title: 'BTC-ETH Cross-Chain Arbitrage Window', src: 'DEX', score: 94, type: 'arbitrage', time: '2m ago', est: '+1.2%' },
    { id: 2, title: 'NVDA Options Anomaly — Large Call Buys', src: 'Options', score: 91, type: 'options', time: '5m ago', est: '+3.4%' },
    { id: 3, title: 'Whale Address Moved 15,000 ETH', src: 'On-chain', score: 88, type: 'whale', time: '8m ago', est: '+0.8%' },
    { id: 4, title: 'AAPL Analyst Upgrade to Buy', src: 'Analyst', score: 85, type: 'rating', time: '12m ago', est: null },
    { id: 5, title: 'USDC/DAI Depeg Spread 0.3%', src: 'Stablecoin', score: 83, type: 'arbitrage', time: '15m ago', est: '+0.3%' },
    { id: 6, title: 'TSLA Social Sentiment Spike', src: 'Social', score: 80, type: 'sentiment', time: '18m ago', est: null },
    { id: 7, title: 'SOL Active Addresses Hit 30-Day High', src: 'On-chain', score: 78, type: 'onchain', time: '22m ago', est: null },
    { id: 8, title: 'Gold/Silver Ratio Diverges from Mean', src: 'Commodity', score: 76, type: 'ratio', time: '25m ago', est: '+0.5%' },
  ];
  const typeColors: Record<string, string> = { arbitrage:'#059669', options:'#2563eb', whale:'#d97706', rating:'#7c3aed', sentiment:'#db2777', onchain:'#0891b2', ratio:'#d97706' };

  return (
    <div style={{ background:'#f8f9fa', color:'#0f172a', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif' }}>
      <Header lang={lang} switchLang={switchLang} />
      <TickerTape />
      <main style={{ maxWidth:800, margin:'0 auto', padding:'40px 24px 64px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
          <div>
            <h1 style={{ fontSize:28, fontWeight:800, marginBottom:4 }}>{t('signals.all.title', lang)}</h1>
            <p style={{ fontSize:14, color:'#64748b' }}>8 {t('signals.all.subtitle', lang)}</p>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {signals.map(s => (
            <a key={s.id} href={`/signals/${s.id}`} style={{ textDecoration:'none', color:'inherit', display:'block' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', borderRadius:10, border:'1px solid #e2e8f0', background:'#fff', cursor:'pointer' }}>
                <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:0, flex:1 }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', flexShrink:0, background:typeColors[s.type]||'#94a3b8' }} />
                  <div style={{ minWidth:0 }}>
                    <div style={{ fontSize:14, fontWeight:500, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{s.title}</div>
                    <div style={{ display:'flex', gap:8, marginTop:2, fontSize:11, color:'#94a3b8' }}><span>{s.src}</span><span>·</span><span>{s.time}</span></div>
                  </div>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:12, flexShrink:0 }}>
                  {s.est && <span style={{ fontSize:13, fontWeight:600, color:'#059669' }}>{s.est}</span>}
                  <div style={{ background:'#f1f5f9', borderRadius:6, padding:'2px 8px', fontSize:14, fontWeight:700, color:s.score>=90?'#059669':s.score>=80?'#2563eb':'#d97706' }}>{s.score}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
