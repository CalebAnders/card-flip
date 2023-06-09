import type { MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import globalStylesUrl from "./styles/global.css";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: globalStylesUrl,
        },
    ];
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Card Flip",
    viewport: "width=device-width,initial-scale=1",
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
