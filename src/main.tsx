import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// The production build prerenders the page into #root (scripts/prerender.mjs),
// so attach to that HTML. In `npm run dev` #root is empty, so render from scratch.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
