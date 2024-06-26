import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.PUBLIC_URL,
  define: {
    __RAPIDAPI_KEY__: process.env.VITE_RAPIDAPI_KEY,
  },
});
