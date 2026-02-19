import { resolve } from "path";
import { Input } from "postcss";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions {
            Input {
                main: resolve(__dirname, "index.html"),
                news: resolve(__dirname, "news.html"),

            },
        },
    },
});