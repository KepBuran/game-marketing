import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'

const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{minHeight: '100vh'}}>
        <Navbar />
        <main style={{minHeight: 'calc(100vh)', paddingTop: '68px'}} className='max-w-8xl m-auto flex h-full flex-col content-center gap-6 pt-20 px-10 border-box bg-slate-200'>{children}</main> 
      </body>
    </html>
  )
}
