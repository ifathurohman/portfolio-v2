import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void; // Add a method to manually set the theme
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      // Initially set the theme based on user preference or a specific condition
      isDark: window.matchMedia('(prefers-color-scheme: dark)').matches, // Default based on system preference

      // Toggle the theme between light and dark
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),

      // Manually set the theme to true (dark) or false (light)
      setTheme: (isDark) => set({ isDark }), // Directly set the value of isDark
    }),
    {
      name: 'theme-storage', // Name for persistence storage
    }
  )
);

