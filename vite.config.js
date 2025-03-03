import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/transaction_page/', // Replace 'transaction_page' with your repository name
});
