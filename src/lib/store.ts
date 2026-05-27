// Zustand Store - 轻量全局状态
import { create } from 'zustand';
import { api, Opportunity, Stats, Alert } from './api';

interface AppState {
  opportunities: Opportunity[];
  stats: Stats | null;
  alerts: Alert[];
  loading: boolean;
  error: string | null;

  fetchDashboard: () => Promise<void>;
  setLocale: (locale: 'en' | 'zh') => void;
  locale: 'en' | 'zh';
}

export const useStore = create<AppState>((set, get) => ({
  opportunities: [],
  stats: null,
  alerts: [],
  loading: true,
  error: null,
  locale: 'en',

  setLocale: (locale) => set({ locale }),

  fetchDashboard: async () => {
    try {
      set({ loading: true, error: null });
      const [opps, stats, alerts] = await Promise.all([
        api.opportunities.list({ limit: 10, sortBy: 'score' }),
        api.stats(),
        api.alerts(),
      ]);
      set({
        opportunities: opps.opportunities,
        stats,
        alerts,
        loading: false,
      });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
