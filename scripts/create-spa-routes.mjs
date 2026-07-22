import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

/**
 * GitHub Pages returns HTTP 404 for SPA client routes unless a real file exists.
 * Copy the built index.html into each route folder so Google Ads crawlers get 200.
 */
const routes = [
  "enroll",
  "enroll/thank-you",
  "contact",
  "subjects",
  "tutors",
  "privacy",
  "legal",
];

const distDir = path.resolve("dist");
const indexFile = path.join(distDir, "index.html");

for (const route of routes) {
  const targetDir = path.join(distDir, route);
  await mkdir(targetDir, { recursive: true });
  await copyFile(indexFile, path.join(targetDir, "index.html"));
  console.log(`Created SPA entrypoint: /${route}/`);
}
