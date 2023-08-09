import React from 'react'
import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'

const Home = () => {

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

        <LoginForm />

      </main>
    </>
  )
}

export default Home