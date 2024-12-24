import { create } from 'zustand';
import { nanoid } from 'nanoid';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (title: string, message: string) => void;
  markAsRead: (id: string) => void;
  clearAll: () => void;
}

export const useNotifications = create<NotificationStore>((set) => ({
  notifications: [],
  
  addNotification: (title, message) => set((state) => ({
    notifications: [
      {
        id: nanoid(),
        title,
        message,
        timestamp: new Date(),
        read: false,
      },
      ...state.notifications,
    ],
  })),
  
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    ),
  })),
  
  clearAll: () => set({ notifications: [] }),
}));