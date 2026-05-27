import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ background: '#f8f9fa', color: '#0f172a', minHeight: '100vh', fontFamily: 'Inter, -apple-system, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🔮</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>404 — Signal Lost</h1>
        <p style={{ fontSize: 14, color: '#64748b', marginBottom: 24, maxWidth: 400, lineHeight: 1.7 }}>
          The page you&apos;re looking for doesn&apos;t exist. Maybe it expired — just like most arbitrage windows.
        </p>
        <a href="/" style={{ padding: '10px 24px', borderRadius: 8, background: '#059669', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
          Back to Home
        </a>
      </div>
    </div>
  );
}
