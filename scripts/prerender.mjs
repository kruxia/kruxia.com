// Writes the server-rendered home page into dist/index.html.
// Run by `npm run build`, after the client build and the SSR build.
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "dist", "index.html");
const ssrDir = path.join(root, "dist-ssr");
const placeholder = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const template = await readFile(htmlPath, "utf8");
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}

const body = render("/");
if (!body.includes("<h1")) {
  throw new Error("prerender: the rendered page has no <h1>; refusing to write it");
}

await writeFile(htmlPath, template.replace(placeholder, `<div id="root">${body}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: wrote ${body.length.toLocaleString("en-US")} characters of HTML into dist/index.html`);
