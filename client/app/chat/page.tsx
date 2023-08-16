'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import MessageCard from '@/components/MessageCard'

const Chat = () => {

  const router = useRouter()

  const [username, setUsername] = React.useState('')

  const getUsername = () => {
    const username = sessionStorage.getItem('username') ? JSON.parse(sessionStorage.getItem('username')!) : 'guest'

    if(username === 'guest') router.push('/')

    setUsername(username)
  }

  const socketTest = () => {
    fetch('http://localhost:5000/chat')
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  React.useEffect(() => {
    socketTest();
    getUsername()
  }, [])

  return (
    <>
      <Header username={username} />

      <main>
        <div className='bg-white m-5 rounded md:p-10 p-5 h-[calc(100vh-200px)]'>
          <MessageCard username={username} />
        </div>
        <div className='flex m-5 bg-white border rounded'>
          <textarea rows={2} placeholder='Type your message' className='border-none outline-none resize-none border-gray-300 p-2 w-full' />
          <button type='submit' className='bg-slate-800 p-2 text-white font-medium'>Send</button>
        </div>
     </main>
    </>
  )
}

export default Chat