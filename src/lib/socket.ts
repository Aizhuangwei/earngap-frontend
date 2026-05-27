// Socket Client - 轻量实时连接
'use client';
import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { useStore } from './store';

let socket: Socket | null = null;

export function useSocket() {
  const fetchDashboard = useStore(s => s.fetchDashboard);

  useEffect(() => {
    const WS_URL = process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:4000';

    if (!socket) {
      socket = io(WS_URL, {
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 3000,
      });

      socket.on('connect', () => console.log('[WS] Connected'));
      socket.on('data:refresh', () => fetchDashboard());
      socket.on('alert:new', () => fetchDashboard());
      socket.on('opportunity:new', () => fetchDashboard());
      socket.on('disconnect', () => console.log('[WS] Disconnected'));
    }

    return () => { /* keep alive */ };
  }, [fetchDashboard]);

  return socket;
}
