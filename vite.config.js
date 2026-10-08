import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Paper Snapshot captures DOM from the running site and pastes it into the
// Paper canvas, which requires the server to accept requests from Paper's origin.
const paperSnapshotCors = { cors: { origin: "https://app.paper.design" } };

// https://vite.dev/config/
export default defineConfig(() => {
    const config = {
        plugins: [react(), tailwindcss()],
        server: paperSnapshotCors,
        preview: paperSnapshotCors,
    };

    // Since you're using a custom domain (taiyotuition.com), always use root path
    // Custom domains don't need repository-specific base paths
    config.base = "/";

    return config;
});
