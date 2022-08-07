import { defineConfig } from 'vite';

const path = require('path');
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@scripts': path.resolve(__dirname, './src/js'),
      '@styles': path.resolve(__dirname, './src/scss'),
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './')
    }
  },
  css: {
    devSourcemap: true,
  },
});