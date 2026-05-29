// Signal Detail Page - ??PI?????????
'use client';
import { useEffect, useState } from 'react';
import { t, getLang, setLang, Lang } from '@/lib/i18n';
import { Header, TickerTape, Footer } from '@/components/layout';
import { api, Opportunity } from '@/lib/api';

export default function SignalPage(props: { params: Promise<{ id: string }> }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [signal, setSignal] = useState<Opportunity | null>(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    setLangState(getLang());
    props.params.then(p => {
      setId(p.id);
      loadSignal(p.id);
    });
  }, []);

  async function loadSignal(signalId: string) {
    try {
      const data = await api.opportunities.list({ limit: 100, sortBy: 'score' });
      const found = data.opportunities.find(o => o.id === signalId || o.id.startsWith(signalId));
      setSignal(found || null);
    } catch (e) {
      console.error('Failed to load signal', e);
    } finally {
      setLoading(false);
    }
  }

  const switchLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    setLangState(next);
  };

  if (loading) {
    return (
      <div style={{ background:'#f8f9fa', color:'#0f172a', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ fontSize:14, color:'#64748b' }}>Loading...</div>
      </div>
    );
  }

  if (!signal) {
    return (
      <div style={{ background:'#f8f9fa', color:'#0f172a', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ textAlign:'center' }}>
          <div style={{ fontSize:48, marginBottom:16 }}>??</div>
          <h1 style={{ fontSize:24, fontWeight:700, marginBottom:8 }}>{t('404.title', lang)}</h1>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:20 }}>{t('404.desc', lang)}</p>
          <a href="/signals" style={{ padding:'10px 24px', borderRadius:8, background:'#059669', color:'#fff', fontWeight:600, fontSize:14, textDecoration:'none' }}>{t('404.button', lang)}</a>
        </div>
      </div>
    );
  }

  const gapLabel = (g: string) => {
    const m: Record<string, string> = {
      PRICE_GAP: 'Price Gap', PLATFORM_GAP: 'Platform', KNOWLEDGE_GAP: 'Knowledge',
      TIME_GAP: 'Time Adv.', REGULATORY_GAP: 'Regulatory', RESOURCE_GAP: 'Resource',
      TOOL_GAP: 'Tool Gap', TECHNOLOGY_GAP: 'Tech Gap', HARDWARE_GAP: 'Hardware'
    };
    return m[g] || g;
  };

  return (
    <div style={{ background:'#f8f9fa', color:'#0f172a', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif' }}>
      <Header lang={lang} switchLang={switchLang} />
      <TickerTape />
      <main style={{ maxWidth:700, margin:'0 auto', padding:'48px 24px' }}>
        <a href="/signals" style={{ fontSize:13, color:'#059669', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:4, marginBottom:24 }}>{t('signals.detail.back', lang)}</a>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
          <div style={{ flex:1 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
              <span style={{ fontSize:11, color:'#059669', background:'#ecfdf5', padding:'2px 8px', borderRadius:4, fontWeight:500 }}>{gapLabel(signal.gapType)}</span>
              <span style={{ fontSize:11, color:'#7c3aed', background:'#f5f3ff', padding:'2px 8px', borderRadius:4, fontWeight:500 }}>{t('phase.'+signal.phase, lang)}</span>
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
          <p style={{ fontSize:14, lineHeight:1.7, color:'#0f172a' }}>{signal.summary}</p>
        </div>
        {signal.growth && (
          <div style={{ padding:16, borderRadius:10, border:'1px solid #d1fae5', background:'#ecfdf5', marginBottom:24 }}>
            <div style={{ fontSize:13, fontWeight:600, color:'#059669', marginBottom:4 }}>{t('hot.growth', lang)}</div>
            <div style={{ fontSize:20, fontWeight:800, color:'#059669' }}>+{signal.growth}%</div>
          </div>
        )}
        <div style={{ padding:16, borderRadius:10, border:'1px solid #e2e8f0', background:'#fff', marginBottom:24 }}>
          <div style={{ fontSize:13, fontWeight:600, color:'#64748b', marginBottom:4 }}>{t('detail.source', lang)}</div>
          <div style={{ fontSize:14, color:'#059669', textDecoration:'none' }}>
            {signal.sources && signal.sources.length > 0
              ? signal.sources[0].sourceUrl || signal.sources[0].name
              : t('detail.source_default', lang)}
          </div>
        </div>
        <div style={{ padding:16, borderRadius:10, border:'1px solid #e2e8f0', background:'#fff', marginBottom:24 }}>
          <div style={{ fontSize:13, fontWeight:600, color:'#64748b', marginBottom:4 }}>{t('signals.detail.detail', lang)}</div>
          <div style={{ fontSize:13, lineHeight:1.8, color:'#0f172a' }}>
            <div style={{ display:'flex', justifyContent:'space-between', padding:'4px 0' }}><span style={{ color:'#64748b' }}>{t('detail.risk_level', lang)}</span><span style={{ fontWeight:500 }}>{t('risk.'+signal.riskLevel, lang)}</span></div>
            <div style={{ display:'flex', justifyContent:'space-between', padding:'4px 0' }}><span style={{ color:'#64748b' }}>{t('detail.difficulty', lang)}</span><span style={{ fontWeight:500 }}>{signal.difficulty || t('detail.na', lang)}</span></div>
            {signal.windowDays && <div style={{ display:'flex', justifyContent:'space-between', padding:'4px 0' }}><span style={{ color:'#64748b' }}>{t('detail.window', lang)}</span><span style={{ fontWeight:500 }}>{signal.windowDays}{t('detail.days', lang)}</span></div>}
          </div>
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

