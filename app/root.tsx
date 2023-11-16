import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare'
import { cssBundleHref } from '@remix-run/css-bundle'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import styles from './globals.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
]

export const meta: MetaFunction = () => {
  return [
    { title: 'Framer Motion Excersise' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="grid grid-rows-[auto_1fr_auto] h-screen">
        <header>
          <h1>Framer Motion Excersise</h1>
        </header>

        <main className="flex flex-col items-center justify-center">
          <Outlet />
        </main>

        <footer>Copyright &copy; coji</footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
