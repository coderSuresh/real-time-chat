'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'

const Chat = () => {

  const router = useRouter()

  const [username, setUsername] = React.useState('')

  const getUsername = () => {
    const username = sessionStorage.getItem('username') ? JSON.parse(sessionStorage.getItem('username')!) : 'guest'

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