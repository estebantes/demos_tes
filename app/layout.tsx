import '@/app/css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import TextoCompartido from '@/components/texto-compartido'
import AOSInit from '@/components/AOSInit' // ✅ Este es el único cliente

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
})

export const metadata = {
  title: 'Transportes Esteban',
  description: 'Sitio oficial de TES',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <AOSInit />

        <header className="fixed w-full top-0 z-50 bg-gray-900 shadow-lg">
          <Header />
        </header>

        <main className="pt-20 min-h-screen grow">
          <PageIllustration />
          {children}
        </main>

        <TextoCompartido />
        <Footer />
        <Banner />
      </body>
    </html>
  )
}
