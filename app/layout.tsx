import SmoothScroll from '@components/SmoothScroll'
import Background from '@ui/Background'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.scss'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700'],
  style: 'normal'
})

export const metadata: Metadata = {
  title: 'Portfolio WebSite',
  description: 'Polina Gushcha'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Background />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
