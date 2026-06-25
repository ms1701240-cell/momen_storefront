import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),      // يجب أن تكون هكذا مباشرة
    tailwindcss() // وليس داخل أقواس مربعة إضافية
  ],
  base: "/momen_storefront/",
})