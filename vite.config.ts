import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Une seule copie de React, même pour les dépendances (lenis/react, three…)
  resolve: { dedupe: ["react", "react-dom"] },
  optimizeDeps: { include: ["lenis/react", "framer-motion"] },
})
