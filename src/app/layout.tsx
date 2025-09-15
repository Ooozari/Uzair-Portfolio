import './globals.css'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/layout'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uzair Asif | Frontend Developer',
  description: 'Portfolio of Uzair Asif, Frontend Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} bg-light-bg text-light-text`}
    >
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
