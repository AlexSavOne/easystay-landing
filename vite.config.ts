// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1890ff",
          "link-color": "#13c2c2",
          "border-radius-base": "8px",
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [react()],
});
