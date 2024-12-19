// src/store/configStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConfigStore {
  githubToken: string | null;
  setGithubToken: (token: string | null) => void;
}

// Access the environment variable injected by Vite during build
export const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      githubToken: import.meta.env.VITE_GITHUB_TOKEN,  // Access VITE_ prefixed env variable
      setGithubToken: (token) => set({ githubToken: token }),
    }),
    {
      name: 'github-config',  // The name for the persisted store
    }
  )
);
