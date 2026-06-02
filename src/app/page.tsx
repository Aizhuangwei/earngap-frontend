// EarnGap — Wealth Intelligence Hub
'use client';
import { useEffect, useState } from 'react';
import { t, getLang, setLang, Lang } from '@/lib/i18n';
import { Header, TickerTape, Footer } from '@/components/layout';

export default function Home() {
  const [lang, setLangState] = useState<Lang>('en');
  useEffect(() => { setLangState(getLang()); }, []);

  const switchLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    setLangState(next);
  };

  return (
    <div style={{ background: '#f8f9fa', color: '#0f172a', minHeight: '100vh', fontFamily: 'Inter, -apple-system, sans-serif' }}>
      <Header lang={lang} switchLang={switchLang} />
      <TickerTape />
      <SignalFeed lang={lang} />
      <SourceGrid lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

function SignalFeed({ lang }: { lang: Lang }) {
  const [topOpps, setTopOpps] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        var r = await fetch('/api/v1/opportunities?limit=3&sortBy=score');
        var d = await r.json();
        if (d.success && d.data && d.data.opportunities) {
          setTopOpps(d.data.opportunities);
        }
      } catch(e) { console.error('home feed error', e); }
    }
    load();
    var iv = setInterval(load, 60000);
    return function() { clearInterval(iv); };
  }, []);

  var timeAgo = function(d: string) {
    var diff = Date.now() - new Date(d).getTime();
    var min = Math.floor(diff / 60000);
    if (min < 1) return t('time.just_now', lang);
    if (min < 60) return min + t('time.m', lang) + t('time.ago', lang);
    var hr = Math.floor(min / 60);
    if (hr < 24) return hr + t('time.h', lang) + t('time.ago', lang);
    return Math.floor(hr / 24) + t('time.d', lang) + t('time.ago', lang);
  };

  var gapLabel = function(g: string) {
    return t('gap.' + g, lang) || g;
  };

  var typeColors: Record<string, string> = {
    PRICE_GAP:'#059669', PLATFORM_GAP:'#2563eb', KNOWLEDGE_GAP:'#7c3aed',
    TIME_GAP:'#d97706', REGULATORY_GAP:'#db2777', RESOURCE_GAP:'#0891b2',
    TOOL_GAP:'#ea580c', TECHNOLOGY_GAP:'#6366f1', HARDWARE_GAP:'#84cc16'
  };

  return (
    <section id="signals" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 10px 48px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>{t('signals.title', lang)}</h2>
          <p style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>{t('signals.subtitle', lang)}</p>
        </div>
        <a href="/signals" style={{ fontSize: 13, color: '#059669', textDecoration: 'none', fontWeight: 500 }}>{t('signals.viewAll', lang)}</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 10 }}>
        {topOpps.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40, color: '#94a3b8', fontSize: 14 }}>Loading...</div>
        ) : (
          topOpps.map(function(s: any, idx: number) {
            return (
              <a key={s.id} href={'/signals/' + s.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', borderRadius: 10, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', height: 220 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <span style={{ fontSize: 18, fontWeight: 900, background: 'linear-gradient(135deg, #059669, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', minWidth: 20 }}>{idx + 1}</span>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: typeColors[s.gapType] || '#94a3b8' }} />
                    <span style={{ fontSize: 15, color: '#64748b', fontWeight: 500 }}>{gapLabel(s.gapType)}</span>
                    <span style={{ fontSize: 15, color: '#94a3b8' }}>·</span>
                    <span style={{ fontSize: 15, color: '#94a3b8' }}>{timeAgo(s.updatedAt)}</span>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, marginBottom: 'auto', color: '#0f172a' }}>{lang === 'zh' ? s.title : (s.title_en || s.title)}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 15, color: '#94a3b8' }}>{t('signals.score', lang)}</span>
                      <span style={{ fontSize: 22, fontWeight: 800, color: s.score >= 90 ? '#059669' : s.score >= 80 ? '#2563eb' : '#d97706' }}>{s.score}</span>
                    </div>
                    {s.growth && <span style={{ fontSize: 15, fontWeight: 700, color: '#059669' }}>+{s.growth}%</span>}
                  </div>
                </div>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
}

function SourceGrid({ lang }: { lang: Lang }) {
  const sources = ['CoinGecko', 'TradingView', 'Glassnode', 'Nansen', 'Uniswap', 'X/Twitter', 'Telegram', 'Benzinga', 'CoinDesk', 'Polymarket', 'CoinMarketCap', 'SEC Filings', 'Etherscan', 'DeFi Llama', 'Unusual Whales', 'Whale Alert', 'Google Trends', 'Reddit', 'Fear & Greed', 'Dune Analytics', 'SEC EDGAR', 'Bloomberg', 'Reuters', 'Discord'];
  return (
    <section id="sources" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 10px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>{t('sources.title', lang)} <span style={{ fontSize: 20, color: '#64748b', fontWeight: 400 }}>{t('sources.subtitle', lang)}</span></h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
        {sources.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, border: '1px solid #e2e8f0', background: '#fff', fontSize: 12 }}>
            <span style={{ color: '#475569', fontWeight: 500 }}>{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA({ lang }: { lang: Lang }) {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 10px 48px', textAlign: 'center' }}>
      <div style={{ padding: '36px 24px', borderRadius: 12, border: '1px solid #d1fae5', background: 'linear-gradient(135deg, #ecfdf5, #f0fdf4)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 10px', borderRadius: 12, background: '#059669', color: '#fff', fontSize: 10, fontWeight: 600, marginBottom: 12 }}>{t('cta.badge', lang)}</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{t('cta.title', lang)} <span style={{ fontSize: 22, color: '#64748b', fontWeight: 400 }}>{t('cta.subtitle', lang)}</span></h2>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <input type="email" placeholder={t('cta.placeholder', lang)} style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13, width: 220, outline: 'none' }} />
          <button style={{ padding: '10px 20px', borderRadius: 8, background: '#059669', color: '#fff', fontWeight: 600, fontSize: 13, border: 'none', cursor: 'pointer' }}>{t('cta.button', lang)}</button>
        </div>
      </div>
    </section>
  );
}
