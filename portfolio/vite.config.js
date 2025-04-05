import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/suraj-portfolio',
  server: {
    host: '0.0.0.0', // 👈 binds to all local network interfaces
    port: 5173,       // optional, set a fixed port
  },
})
