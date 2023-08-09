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
      <body>
        <Header />
        <main className='flex mt-10 flex-col items-center justify-center flex-1 px-20 text-center'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout