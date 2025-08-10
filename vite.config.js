import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tested/',
  plugins: [react()],
  // tidak perlu proxy backend karena pengiriman melalui WhatsApp langsung
})