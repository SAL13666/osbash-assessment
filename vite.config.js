import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/Components'),
      '@Pages': path.resolve(__dirname, './src/Pages'),
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Store': path.resolve(__dirname, './src/Store'),
      '@Utilities': path.resolve(__dirname, './src/Utilities'),
      '@Router': path.resolve(__dirname, './src/Router'),
    },
  }
})
