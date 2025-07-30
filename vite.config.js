import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(() => {
    const config = {
        plugins: [react(), tailwindcss()],
    };

    // Since you're using a custom domain (taiyotuition.com), always use root path
    // Custom domains don't need repository-specific base paths
    config.base = "/";

    return config;
});
