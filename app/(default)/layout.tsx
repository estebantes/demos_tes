// app/(default)/layout.tsx
import { Inter } from 'next/font/google'
import './style.css'
import DOMCleaner from '@/components/DOMCleaner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Prevenir FOUC */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root { --font-inter: ${inter.style.fontFamily} }
            body { opacity: 0; transition: opacity 0.3s; }
            body.ready { opacity: 1; }
          `
        }} />
      </head>
      <body className={`${inter.variable} bg-gray-900 text-gray-100`} suppressHydrationWarning>
        <DOMCleaner />
        <script dangerouslySetInnerHTML={{
          __html: `document.body.classList.add('ready')`
        }} />
        {children}
      </body>
    </html>
  )
}