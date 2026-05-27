// Dashboard - 主仪表盘（Client Component，数据驱动）
'use client';
import { useEffect } from 'react';
import { useStore } from '@/lib/store';
import { useSocket } from '@/lib/socket';
import { Navbar } from '@/components/layout/Navbar';
import { HeroBanner } from '@/components/dashboard/HeroBanner';
import { StatsRow } from '@/components/dashboard/StatsRow';
import { TopOpportunities } from '@/components/dashboard/TopOpportunities';
import { IntelligenceFeed } from '@/components/dashboard/IntelligenceFeed';
import { RightPanel } from '@/components/dashboard/RightPanel';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';

export function Dashboard() {
  const { fetchDashboard, loading, error } = useStore();

  useSocket();

  useEffect(() => {
    fetchDashboard();
    const interval = setInterval(fetchDashboard, 30000);
    return () => clearInterval(interval);
  }, [fetchDashboard]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="text-6xl mb-4">📡</div>
          <h2 className="text-xl text-text font-medium mb-2">Connecting to Intelligence Feed...</h2>
          <p className="text-text-muted text-sm">{error}</p>
          <button onClick={fetchDashboard} className="mt-4 px-4 py-2 bg-accent text-black rounded-lg text-sm font-medium hover:bg-accent/80">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin">
          <div className="max-w-7xl mx-auto space-y-6">
            <HeroBanner />
            <StatsRow />
            <TopOpportunities />
            <IntelligenceFeed />
          </div>
        </main>
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}
