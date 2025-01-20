import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    root: "src",
    envDir: '../',
    define: {
      'process.env.VITE_APP_API_TOKEN': JSON.stringify(env.VITE_APP_API_TOKEN)
    }
  };
});