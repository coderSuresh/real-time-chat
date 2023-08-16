import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'ChatApp',
  description: 'A simple chat app built with Next.js, Tailwind CSS and SocketIO',
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body className='bg-slate-100'>
        {children}
      </body>
    </html>
  )
}

export default RootLayout