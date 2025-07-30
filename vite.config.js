import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
    const config = {
        plugins: [react(), tailwindcss()],
    };

    // Set base path for GitHub Pages deployment
    // Replace 'your-repo-name' with your actual repository name
    if (process.env.GITHUB_PAGES === "true" || mode === "github-pages") {
        config.base = "/taiyo-tuition-website/"; // Fixed to match actual repo name
    } else {
        config.base = "/";
    }

    return config;
});
