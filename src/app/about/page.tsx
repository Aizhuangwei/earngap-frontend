// About Page
'use client';
import { useEffect, useState } from 'react';
import { t, getLang, setLang, Lang } from '@/lib/i18n';
import { Header, TickerTape, Footer } from '@/components/layout';

export default function AboutPage() {
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
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>{t('about.title', lang)}</h1>
        <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.8, marginBottom: 32 }}>{t('about.subtitle', lang)}</p>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{t('about.how.title', lang)}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
          {[{ step: '01', title: t('about.step1.title', lang), desc: t('about.step1.desc', lang) },
            { step: '02', title: t('about.step2.title', lang), desc: t('about.step2.desc', lang) },
            { step: '03', title: t('about.step3.title', lang), desc: t('about.step3.desc', lang) },
          ].map(item => (
            <div key={item.step} style={{ display: 'flex', gap: 16, padding: 16, borderRadius: 10, border: '1px solid #e2e8f0', background: '#fff' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#059669', minWidth: 40 }}>{item.step}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <a href="/" style={{ padding: '10px 24px', borderRadius: 8, background: '#059669', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>{t('hero.cta.signals', lang)}</a>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
