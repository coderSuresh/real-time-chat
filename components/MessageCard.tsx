import React from 'react'

type Props = {
    username?: String
}

const MessageCard = ({ username }: Props) => {

    // create circular avatar from first letter of the username
    const firstLetter = username?.charAt(0)

    const createCircularAvatar = (letter?: String) => {
        return (
            <div
                className='rounded-full w-8 h-8 flex items-center justify-center font-semibold text-xl bg-slate-800 text-slate-50'>
                {letter?.toUpperCase()}
            </div>
        )
    }

    const avatar = createCircularAvatar('P')

    return (

        <div className='flex flex-col'>
            <div className="left_message self-start max-w-[60%]">
                <div className='flex gap-3 items-end'>
                    <div>
                        {avatar}
                    </div>
                    <div>
                        <p className='text-slate-500 px-3 text-sm'>Prabin</p>
                        <p className="bg-slate-800 text-slate-50 font-medium max-w-full break-all rounded-3xl px-3 py-2 mt-1">Hi there,</p>
                    </div>
                </div>
            </div>

            <div className="right_message self-end max-w-[60%]">
                <div className='flex flex-row-reverse gap-3 items-end'>
                    <div>
                        {avatar}
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-slate-500 px-3 text-sm self-end'>Prabin</p>
                        <p className="bg-slate-100 text-slate-800 font-medium rounded-3xl break-all px-3 py-2 mt-1">Hello there,</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MessageCard