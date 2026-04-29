import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'michellenicolephillips.github.io/',
  // This helps Vite find files in your src folder properly
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Ensure the build looks for the correct directory
  build: {
    outDir: 'build', 
  },
  server: {
    port: 3000, // Matches the default port you are used to
  },
});