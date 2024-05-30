import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: [path.resolve(__dirname, "./packages/src/button/index.ts")],
      // name: "tmagic-ui",
      name: "button",
      fileName: "button",
    },
    rollupOptions: {
      external: ["vue", "vant"],
      output: {
        globals: { vue: "Vue" },
      },
    },
  },
});
