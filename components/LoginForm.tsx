"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {

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
        <form className='flex flex-col mt-10 gap-y-2' onSubmit={handleFormSubmit} action="#" method='post'>
            <label htmlFor="username">Username</label>
            <input type="text" className='border px-3 py-1 rounded' placeholder='johndoe' name="username" id="username" required />
            <button
                className='bg-slate-800 mt-2 hover:outline-3 hover:outline-slate-400 outline text-slate-50 rounded px-3 py-1'>
                Start Chat
            </button>
        </form>
    )
}

export default LoginForm