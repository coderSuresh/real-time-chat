'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'

const Chat = () => {

  const router = useRouter()

  const [username, setUsername] = React.useState('')

  const getUsername = () => {
    const username = localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')!) : 'guest'

    if(username === 'guest') router.push('/')

    setUsername(username.username)
  }

  React.useEffect(() => {
    getUsername()
  }, [])

  return (
    <>
      <Header username={username} />
    </>
  )
}

export default Chat