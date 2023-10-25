'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import io from 'socket.io-client'
import Header from '@/components/Header'
import MessageCard from '@/components/MessageCard'

const Chat = () => {

  const router = useRouter()

  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([{ username: '', message: '' }])

  const SERVER_URL = 'http://localhost:5000'
  const socket = io(SERVER_URL)

  const connectToSocket = (username: String) => {
    socket.emit('join', username)
  }

  const getUsername = () => {
    const username = sessionStorage.getItem('username') ? JSON.parse(sessionStorage.getItem('username')!) : 'guest'

    if (username === 'guest') router.push('/')

    connectToSocket(username)

    setUsername(username)
  }

  useEffect(() => {
    getUsername()

    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  useEffect(() => {
    const messageContainer = document.querySelector('.message_container')
    const lastMessage = messageContainer?.lastElementChild

    if (lastMessage) {
      lastMessage.scrollIntoView()
    }
  }, [messages])

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const message = e.currentTarget.querySelector('textarea')!.value

    socket.emit('message', { username, message })

    e.currentTarget.querySelector('textarea')!.value = ''
  }

  return (
    <>
      <Header username={username} />

      <main>
        <div className='bg-white m-5 rounded md:p-10 p-5 h-[calc(100vh-200px)] overflow-auto'>
          <div className='message_container flex flex-col'>
            <MessageCard myUsername={username} messages={messages} />
          </div>
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