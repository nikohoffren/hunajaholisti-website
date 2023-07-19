import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-plugin-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), tsconfigPaths()],
    resolve: {
        alias: [],
    },
    build: {
        target: "esnext",
    },
});
