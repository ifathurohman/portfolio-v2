import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Specifies the directory where the build files will be output
    rollupOptions: {
      input: './index.html', // Ensure the entry point is your HTML file
    },
  },
});
