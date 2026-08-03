import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'RiseWeb | Sites, Lojas Virtuais e Automações',
  description:
    'Soluções digitais com design premium, performance e estratégia. Criação de sites, lojas virtuais, landing pages e automações para empresas.',
  keywords: [
    'criação de sites',
    'lojas virtuais',
    'automações',
    'landing pages',
    'desenvolvimento web',
    'RiseWeb',
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#040b16',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} bg-background`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/riseweb-hero-background-mobile.webp"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
