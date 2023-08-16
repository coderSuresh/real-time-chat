import React from 'react'
import LoginForm from '@/components/LoginForm'
import Header from '@/components/Header'

const Home = () => {

  return (
    <>
      <Header />
      <main className='w-fit max-w-lg lg:max-w-full mx-auto my-10 text-center'>
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