import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import {
  legacySubjectRedirects,
  subjectSlugs,
} from "../src/data/subjects.js";

/**
 * GitHub Pages returns HTTP 404 for SPA client routes unless a real file exists.
 * Copy the built index.html into each route folder so Google Ads crawlers get 200.
 */
const staticRoutes = [
  "enroll",
  "enroll/thank-you",
  "contact",
  "subjects",
  "tutors",
  "results",
  "about",
  "reviews",
  "location",
  "faq",
  "privacy",
  "legal",
];

const routes = [
  ...staticRoutes,
  ...subjectSlugs.map((slug) => `subjects/${slug}`),
  ...Object.keys(legacySubjectRedirects).map((slug) => `subjects/${slug}`),
];

const distDir = path.resolve("dist");
const indexFile = path.join(distDir, "index.html");

for (const route of routes) {
  const targetDir = path.join(distDir, route);
  await mkdir(targetDir, { recursive: true });
  await copyFile(indexFile, path.join(targetDir, "index.html"));
  console.log(`Created SPA entrypoint: /${route}/`);
}
