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
        <script src="https://cdn.socket.io/4.6.0/socket.io.min.js"
          integrity="sha384-c79GN5VsunZvi+Q/WObgk2in0CbZsHnjEqvFxC5DxHn9lTfNce2WW6h2pH6u/kF+"
        ></script>
      </head>
      <body className='bg-slate-100'>
        {children}
      </body>
    </html>
  )
}

export default RootLayout