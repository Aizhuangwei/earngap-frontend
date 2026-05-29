// API Client - 所有数据请求统一入口
const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

async function fetchAPI<T>(path: string, options?: RequestInit): Promise<T> {
  const url = '/api/' + path;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    next: { revalidate: 60 },
    ...options,
  });
  if (!res.ok) throw new Error('API ' + res.status + ': ' + res.statusText);
  const json = await res.json();
  return json.data;
}

export interface Opportunity {
  id: string; title: string; summary: string; score: number;
  phase: string; gapType: string; riskLevel: string;
  conviction?: number; scarcity?: number; growth?: number;
  difficulty?: string; contentHash: string; isActive: boolean;
  windowDays?: number; updatedAt: string; createdAt: string; dimensions: Dimension[];
  sources?: Source[];
}

export interface Dimension { label: string; score: number; maxScore: number; weight: number; }
export interface Source { id: string; name: string; type: string; sourceUrl?: string; }
export interface Stats { total: number; highScore: number; newToday: number; avgScore: number; recentScans: ScanLog[]; }
export interface ScanLog { id: string; status: string; totalOpps: number; newOpps: number; createdAt: string; }
export interface Alert { id: string; type: string; message: string; opportunity: { id: string; title: string; score: number }; createdAt: string; }

export const api = {
  opportunities: {
    list: (params?: { page?: number; limit?: number; minScore?: number; sortBy?: string }) => {
      const q = new URLSearchParams();
      if (params?.page) q.set('page', String(params.page));
      if (params?.limit) q.set('limit', String(params.limit));
      if (params?.minScore) q.set('minScore', String(params.minScore));
      if (params?.sortBy) q.set('sortBy', params.sortBy);
      var qs = q.toString();
      return fetchAPI<{ opportunities: Opportunity[]; pagination: any }>('/opportunities' + (qs ? '?' + qs : ''));
    },
    get: (id: string) => fetchAPI<Opportunity>('/opportunities/' + id),
  },
  stats: () => fetchAPI<Stats>('/stats'),
  alerts: () => fetchAPI<Alert[]>('/alerts'),
  analytics: () => fetchAPI<any>('/analytics'),
};
