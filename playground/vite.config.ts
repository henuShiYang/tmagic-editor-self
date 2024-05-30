import { defineConfig } from "vite";
import plugnvue from "@vitejs/plugin-vue";
// import vue from "vue";
import cdn from "vite-plugin-cdn-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugnvue()],
});
