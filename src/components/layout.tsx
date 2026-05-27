// Shared Layout Components — Header, TickerTape, Footer
'use client';
import { t, Lang } from '@/lib/i18n';

// ========================
// Header
// ========================
export function Header({ lang, switchLang }: { lang: Lang; switchLang?: () => void }) {
  return (
    <header style={{ borderBottom: '1px solid #e2e8f0', padding: '0 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700 }}>E</div>
            <span style={{ fontSize: 16, fontWeight: 700 }}>EarnGap</span>
          </a>
          <span style={{ fontSize: 16, color: '#94a3b8', marginLeft: 24 }}>/</span>
          <span style={{ fontSize: 18, color: '#0f172a', fontWeight: 600 }}>{t('hero.title.line1', lang)}</span>
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/" style={{ color: '#059669', fontWeight: 600, textDecoration: 'none', fontSize: 16 }}>{t('nav.signals', lang)}</a>
          <a href="/sources" style={{ color: '#64748b', textDecoration: 'none', fontSize: 16 }}>{t('nav.sources', lang)}</a>
          <a href="/about" style={{ color: '#64748b', textDecoration: 'none', fontSize: 16 }}>{t('nav.about', lang)}</a>
          {switchLang && (
            <button onClick={switchLang} style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: 6, padding: '4px 10px', fontSize: 15, color: '#64748b', cursor: 'pointer', fontWeight: 500 }}>
              {t('lang.switch', lang)}
            </button>
          )}
          <a href="/" style={{ padding: '7px 16px', borderRadius: 6, background: '#059669', color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{t('nav.signIn', lang)}</a>
        </div>
      </div>
    </header>
  );
}

// ========================
// Ticker Tape
// ========================
export function TickerTape() {
  const items = [
    { s: 'BTC', p: '74,841', c: '+1.29%', u: true }, { s: 'ETH', p: '3,892', c: '+0.87%', u: true },
    { s: 'SPY', p: '749.69', c: '+0.12%', u: true }, { s: 'NVDA', p: '892.41', c: '-0.34%', u: false },
    { s: 'QQQ', p: '727.97', c: '+0.32%', u: true }, { s: 'GLD', p: '408.52', c: '+1.32%', u: true },
    { s: 'DOGE', p: '0.1017', c: '-2.14%', u: false }, { s: 'SOL', p: '189.43', c: '+3.21%', u: true },
  ];
  return (
    <div style={{ height: 60, background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', animation: 'scroll 30s linear infinite', gap: 64, paddingLeft: 40, whiteSpace: 'nowrap' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 18, fontFamily: 'SF Mono, monospace' }}>
            <span style={{ fontWeight: 700, color: '#0f172a' }}>{item.s}</span>
            <span style={{ color: '#475569', fontWeight: 500 }}>${item.p}</span>
            <span style={{ color: item.u ? '#059669' : '#dc2626', fontWeight: 700 }}>{item.c}</span>
            <span style={{ width: 1, height: 24, background: '#e2e8f0', marginLeft: 16 }} />
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

// ========================
// Footer
// ========================
export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer style={{ borderTop: '1px solid #e2e8f0', padding: '20px 10px', textAlign: 'center', fontSize: 11, color: '#94a3b8' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 8 }}>
        <a href="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>{t('footer.terms', lang)}</a>
        <a href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>{t('footer.privacy', lang)}</a>
        <a href="/disclaimer" style={{ color: '#94a3b8', textDecoration: 'none' }}>{t('footer.disclaimer', lang)}</a>
      </div>
      <div>© 2026 EarnGap. {t('footer.notice', lang)}</div>
    </footer>
  );
}
