import type { Metadata } from 'next'
import { Inter, Creepster } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const creepster = Creepster({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-creepster" 
})

export const metadata: Metadata = {
  title: 'Dark Archives - Investigation & Horror Games',
  description: 'Explore a collection of spine-chilling investigation and horror games. Solve mysteries, uncover secrets, and face your fears.',
  generator: 'Blackbox AI',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${creepster.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
