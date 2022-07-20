import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "https://localhost:4545",
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
