import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { SITE_URL, pageMeta, subjectMeta } from "../src/data/pageMeta.js";
import {
  getSubjectBySlug,
  legacySubjectRedirects,
  subjects,
} from "../src/data/subjects.js";

/**
 * GitHub Pages returns HTTP 404 for SPA client routes unless a real file exists,
 * so every route gets its own copy of the built index.html (Google Ads checks
 * need a 200).
 *
 * Each copy carries that route's title, description and canonical from
 * src/data/pageMeta.js, for crawlers and link previews that don't run
 * JavaScript. Tags marked data-prerender are removed by src/main.jsx on load,
 * and PageDoc renders the live ones.
 */

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const escapeText = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;");

const setMetaContent = (html, attr, name, value) => {
  const pattern = new RegExp(
    `(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`,
  );
  if (!pattern.test(html)) {
    throw new Error(`index.html is missing <meta ${attr}="${name}">`);
  }
  return html.replace(pattern, `$1${escapeAttr(value)}$2`);
};

const renderHead = (template, { path: routePath, title, description, noindex }) => {
  const url = `${SITE_URL}${routePath}`;
  const titlePattern = /<title data-prerender>[\s\S]*?<\/title>/;
  if (!titlePattern.test(template)) {
    throw new Error("index.html is missing <title data-prerender>");
  }

  const tags = [
    `<meta data-prerender name="description" content="${escapeAttr(description)}" />`,
    noindex
      ? `<meta data-prerender name="robots" content="noindex" />`
      : `<link data-prerender rel="canonical" href="${escapeAttr(url)}" />`,
  ].join("\n    ");

  let html = template
    .replace(titlePattern, `<title data-prerender>${escapeText(title)}</title>`)
    .replace("</head>", `    ${tags}\n</head>`);

  html = setMetaContent(html, "property", "og:title", title);
  html = setMetaContent(html, "property", "og:description", description);
  html = setMetaContent(html, "property", "og:url", url);
  html = setMetaContent(html, "name", "twitter:title", title);
  html = setMetaContent(html, "name", "twitter:description", description);
  return html;
};

const routes = [
  ...Object.entries(pageMeta).map(([routePath, meta]) => ({
    dir: routePath.slice(1),
    meta: { ...meta, path: routePath },
  })),
  ...subjects.map((subject) => ({
    dir: `subjects/${subject.slug}`,
    meta: subjectMeta(subject),
  })),
  // Old slugs redirect in the app. Their static copy points at the new page.
  ...Object.entries(legacySubjectRedirects).map(([slug, target]) => ({
    dir: `subjects/${slug}`,
    meta: subjectMeta(getSubjectBySlug(target)),
  })),
];

const distDir = path.resolve("dist");
const template = await readFile(path.join(distDir, "index.html"), "utf8");

for (const { dir, meta } of routes) {
  const targetDir = path.join(distDir, dir);
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, "index.html"), renderHead(template, meta));
  console.log(`Created SPA entrypoint: /${dir}${dir ? "/" : ""}`);
}
