import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-plugin-tsconfig-paths";
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), tsconfigPaths(), WindiCSS()],
    resolve: {
        alias: [
            // Add any custom aliases you need for your project
        ],
    },
    build: {
        // This is optional, but you can specify the target for the transpiled code
        target: "esnext",
    },
});
