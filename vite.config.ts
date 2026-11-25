import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, "./src/components/index.tsx"),
      name: "Components Library",
      fileName: "components-library",
    },
    rolldownOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({ bundleTypes: true, tsconfigPath: "./tsconfig.app.json" }),
  ],
});
