import { create } from 'zustand';
import { FileNode } from '../types';
import { createGitHubClient } from '../services/github';  // Import the function to create GitHub client

interface FileStore {
  files: FileNode[];
  selectedFile: FileNode | null;
  isLoading: boolean;
  error: string | null;
  repoOwner: string;  // Store the repository owner
  repoName: string;    // Store the repository name
  setFiles: (files: FileNode[]) => void;
  setSelectedFile: (file: FileNode | null) => void;
  setRepo: (repoOwner: string, repoName: string) => void;  // Set repo dynamically
  fetchContents: (path?: string) => Promise<void>;
  fetchFileContents: (file: FileNode) => Promise<void>;
}

export const useFileStore = create<FileStore>((set, get) => ({
  files: [],
  selectedFile: null,
  isLoading: false,
  error: null,
  repoOwner: '',  // Default repo owner
  repoName: '',          // Default repo name
  setFiles: (files) => set({ files }),
  setSelectedFile: (file) => set({ selectedFile: file }),
  
  // Function to set dynamic repository owner and name
  setRepo: (repoOwner, repoName) => set({ repoOwner, repoName }),

  fetchContents: async (path?: string) => {
    set({ isLoading: true, error: null });
    const { repoOwner, repoName } = get();  // Get current repository info
    const githubClient = createGitHubClient(repoOwner, repoName);  // Create the client with the dynamic repo

    try {
      const contents = await githubClient.fetchRepositoryContents(path);
      set({ files: contents, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  fetchFileContents: async (file: FileNode) => {
    set({ isLoading: true, error: null });
    const { repoOwner, repoName } = get();  // Get current repository info
    const githubClient = createGitHubClient(repoOwner, repoName);  // Create the client with the dynamic repo

    if (file.type === 'directory') {
      try {
        const contents = await githubClient.fetchRepositoryContents(file.path);
        const updatedFile = { ...file, children: contents };
        const updateFiles = (files: FileNode[]): FileNode[] => {
          return files.map((f) => {
            if (f.path === file.path) {
              return updatedFile;
            }
            if (f.children) {
              return { ...f, children: updateFiles(f.children) };
            }
            return f;
          });
        };
        set((state) => ({ files: updateFiles(state.files) }));
      } catch (error) {
        set({ error: (error as Error).message, isLoading: false });
      }
    } else {
      try {
        const content = await githubClient.fetchFileContent(file.path);
        set({
          selectedFile: { ...file, content },
          isLoading: false,
        });
      } catch (error) {
        set({ error: (error as Error).message, isLoading: false });
      }
    }
  },
}));
