import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.'
  // icons: {
  //   icon: 'https://drive.google.com/file/d/1CNac2MMYGfnBGpxGYbQ657lmTkWEXLjv/view?usp=sharing'
  // }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
