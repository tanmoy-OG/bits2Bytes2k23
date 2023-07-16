import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      createProxyMiddleware('/api', {
        target: 'https://bits2bytes2k23-in.onrender.com',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/api': ''
        },
      }),
    ],
  },
});
