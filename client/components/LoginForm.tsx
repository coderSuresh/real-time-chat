"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {

    const [loading, setLoading] = React.useState(false)

    const router = useRouter()

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        const username = e.currentTarget.username.value
        if (username) {
            sessionStorage.setItem('username', JSON.stringify(username))
            router.push('/chat')
            setLoading(false)
        }
    }

    return (
        <form className='flex flex-col mt-10 gap-y-2' onSubmit={handleFormSubmit} action="#" method='post'>
            <label htmlFor="username">Username</label>
            <input type="text" className='border px-3 py-1 rounded' placeholder='johndoe' name="username" id="username" required />
            <button
                className='bg-slate-800 mt-2 hover:outline-3 hover:outline-slate-400 outline text-slate-50 rounded px-3 py-1'>
                {loading ? 'Starting...' : 'Start Chat'}
            </button>
        </form>
    )
}

export default LoginForm