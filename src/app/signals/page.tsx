// All Signals Page - 实时从API拉取数据
'use client';
import { useEffect, useState } from 'react';
import { t, getLang, setLang, Lang } from '@/lib/i18n';
import { Header, TickerTape, Footer } from '@/components/layout';
import { api, Opportunity } from '@/lib/api';

export default function AllSignalsPage() {
  const [lang, setLangState] = useState<Lang>('en');
  const [opps, setOpps] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    setLangState(getLang()); 
    loadSignals(); 
  }, []);

  async function loadSignals() {
    try {
      const data = await api.opportunities.list({ limit: 100, sortBy: 'score' });
      setOpps(data.opportunities);
    } catch (e) {
      console.error('Failed to load signals', e);
    } finally {
      setLoading(false);
    }
  }

  const switchLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    setLangState(next);
  };

  const typeColor = (gap: string) => {
    const m: Record<string, string> = {
      PRICE_GAP: '#059669', PLATFORM_GAP: '#2563eb', KNOWLEDGE_GAP: '#7c3aed',
      TIME_GAP: '#d97706', REGULATORY_GAP: '#db2777', RESOURCE_GAP: '#0891b2',
      TOOL_GAP: '#ea580c', TECHNOLOGY_GAP: '#6366f1', HARDWARE_GAP: '#84cc16'
    };
    return m[gap] || '#94a3b8';
  };

  const gapLabel = (g: string) => {
    const m: Record<string, string> = {
      PRICE_GAP: 'Price Gap', PLATFORM_GAP: 'Platform', KNOWLEDGE_GAP: 'Knowledge',
      TIME_GAP: 'Time Adv.', REGULATORY_GAP: 'Regulatory', RESOURCE_GAP: 'Resource',
      TOOL_GAP: 'Tool Gap', TECHNOLOGY_GAP: 'Tech Gap', HARDWARE_GAP: 'Hardware'
    };
    return m[g] || g;
  };

  const timeAgo = (d: string) => {
    const diff = Date.now() - new Date(d).getTime();
    const min = Math.floor(diff / 60000);
    if (min < 1) return 'just now';
    if (min < 60) return min + 'm ago';
    const hr = Math.floor(min / 60);
    if (hr < 24) return hr + 'h ago';
    return Math.floor(hr / 24) + 'd ago';
  };

  return (
    <div style={{ background:'#f8f9fa', color:'#0f172a', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif' }}>
      <Header lang={lang} switchLang={switchLang} />
      <TickerTape />
      <main style={{ maxWidth:800, margin:'0 auto', padding:'40px 24px 64px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
          <div>
            <h1 style={{ fontSize:28, fontWeight:800, marginBottom:4 }}>{t('signals.all.title', lang)}</h1>
            <p style={{ fontSize:14, color:'#64748b' }}>
              {loading ? 'Loading...' : opps.length + ' opportunities detected'}
            </p>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {loading ? (
            <div style={{ textAlign:'center', padding:40, color:'#94a3b8' }}>Loading signals...</div>
          ) : opps.length === 0 ? (
            <div style={{ textAlign:'center', padding:40, color:'#94a3b8' }}>No signals found</div>
          ) : (
            opps.map(s => (
              <a key={s.id} href={'/signals/' + s.id} style={{ textDecoration:'none', color:'inherit', display:'block' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', borderRadius:10, border:'1px solid #e2e8f0', background:'#fff', cursor:'pointer' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:0, flex:1 }}>
                    <div style={{ width:8, height:8, borderRadius:'50%', flexShrink:0, background: typeColor(s.gapType) }} />
                    <div style={{ minWidth:0 }}>
                      <div style={{ fontSize:14, fontWeight:500, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{s.title}</div>
                      <div style={{ display:'flex', gap:8, marginTop:2, fontSize:11, color:'#94a3b8' }}>
                        <span>{gapLabel(s.gapType)}</span><span>·</span><span>{timeAgo(s.updatedAt)}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:12, flexShrink:0 }}>
                    {s.growth && <span style={{ fontSize:13, fontWeight:600, color:'#059669' }}>+{s.growth}%</span>}
                    <div style={{ background:'#f1f5f9', borderRadius:6, padding:'2px 8px', fontSize:14, fontWeight:700, color: s.score>=90 ? '#059669' : s.score>=80 ? '#2563eb' : '#d97706' }}>{s.score}</div>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
