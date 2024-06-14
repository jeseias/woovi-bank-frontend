import { defineConfig } from 'vite'
import babel from "vite-plugin-babel";
import react from "@vitejs/plugin-react";
import path from "path";
import relay from "babel-plugin-relay";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: [relay],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
