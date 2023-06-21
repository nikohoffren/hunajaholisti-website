import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-plugin-tsconfig-paths";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), tsconfigPaths(), WindiCSS()],
    resolve: {
        alias: [],
    },
    build: {
        target: "esnext",
    },
});
