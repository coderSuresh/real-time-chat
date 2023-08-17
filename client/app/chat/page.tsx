'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import MessageCard from '@/components/MessageCard'
import io from 'socket.io-client'

const Chat = () => {

  const router = useRouter()

  const [username, setUsername] = React.useState('')
  const [messages, setMessages] = React.useState([{username: '', message: ''}])

  const connectToSocket = (username: String) => {
    const socket = io('http://localhost:5000')

    socket.emit('join', username)

    socket.on('welcome', (data) => {
      // console.log(data)
    })
  }

  const getUsername = () => {
    const username = sessionStorage.getItem('username') ? JSON.parse(sessionStorage.getItem('username')!) : 'guest'

    if (username === 'guest') router.push('/')

    connectToSocket(username)

    setUsername(username)
  }

  io('http://localhost:5000').on('message', ({ username, message }) => {
    setMessages((prevMessage) => {
      return [...prevMessage, { username, message }]
    })
  })

  React.useEffect(() => {
    getUsername()
  }, [])

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const message = e.currentTarget.querySelector('textarea')!.value

    io('http://localhost:5000').emit('message', { username, message })

    e.currentTarget.querySelector('textarea')!.value = ''
  }

  return (
    <>
      <Header username={username} />

      <main>
        <div className='bg-white m-5 rounded md:p-10 p-5 h-[calc(100vh-200px)] overflow-auto'>
          <MessageCard myUsername={username} messages={messages} />
        </div>
        <form action="#" onSubmit={sendMessage} className='flex m-5 bg-white border rounded'>
          <textarea rows={2} placeholder='Type your message' className='border-none outline-none resize-none border-gray-300 p-2 w-full' />
          <button className='bg-slate-800 p-2 text-white font-medium'>Send</button>
        </form>
      </main>
    </>
  )
}

export default Chat