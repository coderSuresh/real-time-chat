"use client"
import React from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'

const Home = () => {

  const router = useRouter()

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = e.currentTarget.username.value
    if (username) {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      })
      const data = await res.json()
      localStorage.setItem('username', data.username)

      router.push('/chat')
    }
  }

  return (
    <>
      <Header />
      <main className='flex mt-10 flex-col items-center justify-center flex-1 px-20 text-center'>
        <h1 className='text-3xl font-bold text-slate-800'>
          Welcome to <span className='text-blue-600'>ChatApp!</span>
        </h1>
        <p className='mt-2 text-slate-600'>
          A simple chat app built with Next.js, Tailwind CSS and SocketIO
        </p>

        <form className='flex flex-col mt-10 gap-y-2' onSubmit={handleFormSubmit} action="#" method='post'>
          <label htmlFor="username">Username</label>
          <input type="text" className='border px-3 py-1 rounded' placeholder='johndoe' name="username" id="username" required />
          <button
            className='bg-slate-800 mt-2 hover:outline-3 hover:outline-slate-400 outline text-slate-50 rounded px-3 py-1'>
            Start Chat
          </button>
        </form>

      </main>
    </>
  )
}

export default Home