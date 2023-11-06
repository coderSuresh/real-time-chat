'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    username?: string
}

const Header = ({ username }: Props) => {

    const router = useRouter()

    const logout = () => {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('messages')
        router.push('/')
    }

    return (
        <header className='md:px-10 px-5 py-5 bg-white shadow flex items-center justify-between'>
            <h1
                className='font-bold text-xl text-slate-800'>
                CHAT<span className='text-blue-600'>APP</span>
            </h1>
            {
                username && (
                    <div className='flex items-center gap-3'>
                        <p className='text-slate-600'>
                            Welcome, <span className='font-bold'>{username}</span>
                        </p>

                        <button onClick={logout} className='text-blue-800'>
                            Logout
                        </button>
                    </div>
                )
            }
        </header>
    )
}

export default Header