import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-plugin-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), tsconfigPaths()],
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
