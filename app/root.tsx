import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script type="text/javascript" src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-63f1aea55894601a"></script>

      </head>
      <body> 
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        
        <div className="addthis_inline_share_toolbox_1ru1"></div>
            
      </body>
    </html>
  );
}
