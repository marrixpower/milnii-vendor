import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/app/",
      assets: "/src/assets/",
      entities: "/src/entities/",
      features: "/src/features/",
      pages: "/src/pages/",
      shared: "/src/shared/",
      widgets: "/src/widgets/",
    },
  },
});
