import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // explicitly set root to current directory
  publicDir: 'public', // explicitly set public directory
  plugins: [react()],
}); 
