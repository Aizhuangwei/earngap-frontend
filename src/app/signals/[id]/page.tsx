// Signal Detail Page
'use client';
import { useEffect, useState } from 'react';
import { t, getLang, setLang, Lang } from '@/lib/i18n';
import { Header, TickerTape, Footer } from '@/components/layout';

export default async function SignalPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const [lang, setLangState] = useState<Lang>('en');
  useEffect(() => { setLangState(getLang()); }, []);

  const switchLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    setLangState(next);
  };

  const signals: Record<string,any> = {
    '1': { title:'BTC-ETH Cross-Chain Arbitrage Window', src:'DEX', score:94, est:'+1.2%', detail:'Price discrepancy detected between BTC-ETH trading pairs across major DEXes. Estimated arbitrage window: 15 minutes.', sourceUrl:'https://app.uniswap.org' },
    '2': { title:'NVDA Options Anomaly — Large Call Buys', src:'Options', score:91, est:'+3.4%', detail:'Unusual call option volume detected on NVDA. 3,000+ contracts with strike price $950 expiring this week.', sourceUrl:'https://www.tradingview.com' },
    '3': { title:'Whale Address Moved 15,000 ETH', src:'On-chain', score:88, est:'+0.8%', detail:'A dormant whale address transferred 15,000 ETH (~$58M) to a new wallet. Historically, similar moves preceded price action.', sourceUrl:'https://etherscan.io' },
    '4': { title:'AAPL Analyst Upgrade to Buy', src:'Analyst', score:85, est:null, detail:'Top Wall Street analyst upgraded AAPL from Hold to Buy with a price target of $280. Historical accuracy: 78%.', sourceUrl:'https://www.benzinga.com' },
    '5': { title:'USDC/DAI Depeg Spread 0.3%', src:'Stablecoin', score:83, est:'+0.3%', detail:'USDC/DAI trading spread widened to 0.3% on Curve Finance. Typical arb window: 5-10 minutes.', sourceUrl:'https://curve.fi' },
    '6': { title:'TSLA Social Sentiment Spike', src:'Social', score:80, est:null, detail:'Social media mentions of TSLA surged 340% in the last hour. Positive sentiment ratio: 72%.', sourceUrl:'https://x.com' },
    '7': { title:'SOL Active Addresses Hit 30-Day High', src:'On-chain', score:78, est:null, detail:'Solana daily active addresses reached 1.2M — a 30-day high.', sourceUrl:'https://glassnode.com' },
    '8': { title:'Gold/Silver Ratio Diverges from Mean', src:'Commodity', score:76, est:'+0.5%', detail:'Gold/Silver ratio currently at 88.5 vs 20-year mean of 75.', sourceUrl:'https://www.tradingview.com' },
  };

  const signal = signals[id];

  if (!signal) {
    return (
      <div style={{ background:'#f8f9fa', color:'#0f172a', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ textAlign:'center' }}>
          <div style={{ fontSize:48, marginBottom:16 }}>🔍</div>
          <h1 style={{ fontSize:24, fontWeight:700, marginBottom:8 }}>{t('404.title', lang)}</h1>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:20 }}>{t('404.desc', lang)}</p>
          <a href="/" style={{ padding:'10px 24px', borderRadius:8, background:'#059669', color:'#fff', fontWeight:600, fontSize:14, textDecoration:'none' }}>{t('404.button', lang)}</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background:'#f8f9fa', color:'#0f172a', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif' }}>
      <Header lang={lang} switchLang={switchLang} />
      <TickerTape />
      <main style={{ maxWidth:700, margin:'0 auto', padding:'48px 24px' }}>
        <a href="/signals" style={{ fontSize:13, color:'#059669', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:4, marginBottom:24 }}>{t('signals.detail.back', lang)}</a>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
          <div style={{ flex:1 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
              <span style={{ fontSize:11, color:'#059669', background:'#ecfdf5', padding:'2px 8px', borderRadius:4, fontWeight:500 }}>{signal.src}</span>
            </div>
            <h1 style={{ fontSize:24, fontWeight:700, lineHeight:1.3 }}>{signal.title}</h1>
          </div>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:28, fontWeight:800, color:signal.score>=90?'#059669':'#2563eb' }}>{signal.score}</div>
            <div style={{ fontSize:11, color:'#94a3b8' }}>{t('signals.score', lang)}</div>
          </div>
        </div>
        <div style={{ padding:16, borderRadius:10, border:'1px solid #e2e8f0', background:'#fff', marginBottom:24 }}>
          <div style={{ fontSize:13, fontWeight:600, color:'#64748b', marginBottom:8 }}>{t('signals.detail.detail', lang)}</div>
          <p style={{ fontSize:14, lineHeight:1.7, color:'#0f172a' }}>{signal.detail}</p>
        </div>
        {signal.est && (
          <div style={{ padding:16, borderRadius:10, border:'1px solid #d1fae5', background:'#ecfdf5', marginBottom:24 }}>
            <div style={{ fontSize:13, fontWeight:600, color:'#059669', marginBottom:4 }}>{t('signals.detail.return', lang)}</div>
            <div style={{ fontSize:20, fontWeight:800, color:'#059669' }}>{signal.est}</div>
          </div>
        )}
        <div style={{ padding:16, borderRadius:10, border:'1px solid #e2e8f0', background:'#fff', marginBottom:24 }}>
          <div style={{ fontSize:13, fontWeight:600, color:'#64748b', marginBottom:4 }}>{t('signals.detail.source', lang)}</div>
          <a href={signal.sourceUrl} target="_blank" style={{ fontSize:14, color:'#059669', textDecoration:'none' }}>{signal.sourceUrl} →</a>
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <button style={{ padding:'10px 20px', borderRadius:8, background:'#059669', color:'#fff', fontWeight:600, fontSize:13, border:'none', cursor:'pointer' }}>{t('signals.detail.track', lang)}</button>
          <button style={{ padding:'10px 20px', borderRadius:8, border:'1px solid #e2e8f0', background:'#fff', color:'#0f172a', fontWeight:500, fontSize:13, cursor:'pointer' }}>{t('signals.detail.share', lang)}</button>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
