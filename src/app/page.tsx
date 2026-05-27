// Home Page - 正确的Dashboard版本
'use client';
import { Navbar } from '@/components/home/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsBar } from '@/components/home/StatsBar';
import { OpportunityFeed } from '@/components/home/OpportunityFeed';
import { SourceGrid } from '@/components/home/SourceGrid';
import { ValueProps } from '@/components/home/ValueProps';
import { CTABanner } from '@/components/home/CTABanner';
import { Footer } from '@/components/home/Footer';

const signalsData = [
  { id: 1, title: 'BTC-ETH Cross-Chain Arbitrage Window', source: 'DEX', score: 94, type: 'arbitrage', time: '2m ago', estimate: '+1.2%' },
  { id: 2, title: 'NVDA Options Anomaly — Large Call Buys', source: 'Options', score: 91, type: 'options', time: '5m ago', estimate: '+3.4%' },
  { id: 3, title: 'Whale Address Moved 15,000 ETH', source: 'On-chain', score: 88, type: 'whale', time: '8m ago', estimate: '+0.8%' },
  { id: 4, title: 'AAPL Analyst Upgrade to Buy', source: 'Analyst', score: 85, type: 'rating', time: '12m ago', estimate: null },
  { id: 5, title: 'USDC/DAI Depeg Spread 0.3%', source: 'Stablecoin', score: 83, type: 'stablecoin', time: '15m ago', estimate: '+0.3%' },
  { id: 6, title: 'TSLA Social Sentiment Spike', source: 'Social', score: 80, type: 'sentiment', time: '18m ago', estimate: null },
  { id: 7, title: 'SOL Active Addresses Hit 30-Day High', source: 'On-chain', score: 78, type: 'onchain', time: '22m ago', estimate: null },
  { id: 8, title: 'Gold/Silver Ratio Diverges from Mean', source: 'Commodity', score: 76, type: 'ratio', time: '25m ago', estimate: '+0.5%' },
];

const stats = { opportunitiesToday: 8, sourcesCovered: 24, topScore: 94, activeUsers: 1283 };

const dataSources = [
  { name: 'CoinGecko', icon: '🦎', category: 'Crypto' },
  { name: 'TradingView', icon: '📊', category: 'Charts' },
  { name: 'Glassnode', icon: '🔮', category: 'On-chain' },
  { name: 'Nansen', icon: '🧭', category: 'On-chain' },
  { name: 'Uniswap', icon: '🦄', category: 'DEX' },
  { name: 'X/Twitter', icon: '🐦', category: 'Social' },
  { name: 'Telegram', icon: '✈️', category: 'Social' },
  { name: 'Benzinga', icon: '📰', category: 'News' },
  { name: 'CoinDesk', icon: '📡', category: 'News' },
  { name: 'Polymarket', icon: '🎲', category: 'Prediction' },
  { name: 'CoinMarketCap', icon: '📈', category: 'Crypto' },
  { name: 'SEC Filings', icon: '📋', category: 'Regulatory' },
  { name: 'Etherscan', icon: '🔍', category: 'On-chain' },
  { name: 'DeFi Llama', icon: '🦙', category: 'DeFi' },
  { name: 'Unusual Whales', icon: '🐋', category: 'Options' },
  { name: 'Whale Alert', icon: '🐳', category: 'On-chain' },
  { name: 'Google Trends', icon: '🔎', category: 'Trends' },
  { name: 'Reddit', icon: '🤖', category: 'Social' },
  { name: 'Fear & Greed', icon: '😨', category: 'Sentiment' },
  { name: 'Dune Analytics', icon: '🏜️', category: 'Analytics' },
  { name: 'SEC EDGAR', icon: '📁', category: 'Regulatory' },
  { name: 'Bloomberg', icon: '💼', category: 'News' },
  { name: 'Reuters', icon: '📰', category: 'News' },
  { name: 'Discord', icon: '💬', category: 'Social' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <HeroSection stats={{ opportunitiesToday: 8, topScore: 94 }} />
      <StatsBar stats={stats} />
      <OpportunityFeed opportunities={signalsData} />
      <SourceGrid sources={dataSources} />
      <ValueProps />
      <CTABanner />
      <Footer />
    </div>
  );
}
