import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// PageDoc renders the live head tags. Drop the build-time copies so each page
// ends up with one title, description and canonical.
document
    .querySelectorAll("[data-prerender]")
    .forEach((node) => node.remove());

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
