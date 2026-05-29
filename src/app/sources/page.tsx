// Sources Page
'use client';
import { useEffect, useState } from 'react';
import { t, getLang, setLang, Lang } from '@/lib/i18n';
import { Header, TickerTape, Footer } from '@/components/layout';

export default function SourcesPage() {
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
      <main style={{ maxWidth: 700, margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>{t('sources.page.title', lang)}</h1>
        <p style={{ fontSize: 15, color: '#64748b', marginBottom: 32, lineHeight: 1.7 }}>{t('sources.page.subtitle', lang)}</p>
        <Categories lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

function Categories({ lang }: { lang: Lang }) {
  const cats = [
    { key: 'source.crypto', items: ['CoinGecko', 'CoinMarketCap', 'Uniswap', 'DeFi Llama', 'Etherscan'] },
    { key: 'source.onchain', items: ['Glassnode', 'Nansen', 'Dune Analytics', 'Whale Alert'] },
    { key: 'source.options', items: ['Unusual Whales', 'TradingView'] },
    { key: 'source.news', items: ['Benzinga', 'CoinDesk', 'Reuters', 'Bloomberg'] },
    { key: 'source.social', items: ['X/Twitter', 'Telegram', 'Discord', 'Reddit', 'Fear & Greed', 'Google Trends'] },
    { key: 'source.regulatory', items: ['SEC Filings', 'SEC EDGAR'] },
    { key: 'source.prediction', items: ['Polymarket'] },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {cats.map(cat => (
        <div key={t(cat.key, lang)}>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#0f172a' }}>{t(cat.key, lang)}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {cat.items.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 8, border: '1px solid #e2e8f0', background: '#fff', fontSize: 13, fontWeight: 500 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669' }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
