// Build-time only. `npm run build` renders the page to HTML with this entry and
// scripts/prerender.mjs writes it into dist/index.html, so the page's text is
// in the HTML that crawlers, link previews and AI tools fetch.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell, AppRoutes } from "./App";

export const render = (url: string) =>
  renderToString(
    <AppShell>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppShell>,
  );
