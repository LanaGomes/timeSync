import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    base: "./",
    define: {
      "process.env": env,
      RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
    },
    server: {
      host: "127.0.0.1",
      port: 5173,
    },
  };
});
