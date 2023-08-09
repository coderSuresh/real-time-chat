'use client'
import React from 'react'

const Chat = () => {

  const [username, setUsername] = React.useState('')

  const getUsername = () => {
    const username = localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')!) : 'guest'
    setUsername(username.username)
  }

  React.useEffect(() => {
    getUsername()
  }, [])

  return (
    <>
      <h1 className='text-3xl font-bold text-slate-800'>
        Welcome <span className='text-blue-600'>{username}!</span>
      </h1>
    </>
  )
}

export default Chat